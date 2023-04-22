import React from 'react'
import { useParams , useNavigate} from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import axios from 'axios';
import { useEffect,useState } from 'react';
import "../../Css_files/VideoCall.css"
import PatientSideNav from '../../components/PatientSideNav';


const RoomPage=()=>{

    // const min = 100000;
    // const max = 999999;
    // const roomId = Math.floor(Math.random() * (max - min + 1)) + min;
    // const roomnum = roomId.toString();
    // console.log(roomnum)
    const jwtToken=localStorage.getItem('token');
    const patient_obj=JSON.parse(localStorage.getItem('patient'));
    const name = patient_obj['patientName'];
    const navigate = useNavigate();
    const patientId = patient_obj['patientId'];
    const roomId = patientId;
    const roomnum = roomId.toString();
    const patientNumber = patient_obj['phoneNumber'];
    const specialization = localStorage.getItem('specialization');

    const myMeeting =(element) =>{

        const appID =121940273
        const serverSecret ="c774162ad11624d4246a0aee5fb875f3";
        const kitToken =ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomnum,roomnum,name);
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom(
            {
            container:element,
            scenario:{
               mode:ZegoUIKitPrebuilt.VideoConference
            },
            maxUsers: 2,
            turnOnCameraWhenJoining: false,
            turnOnMicrophoneWhenJoining: false,
            showRoomTimer: true,
            showLeavingView: false,
            onLeaveRoom: (()=>{
              axios.defaults.headers.common['Authorization']=`Bearer ${jwtToken}`;
              axios.post(`${process.env.REACT_APP_BACKEND_URL}/patient/left-queue/${patientId}`)
              .then((response)=>{
                console.log(response);
              })
              .catch((error)=>{
                console.error('error on setting patient queue status',error);
              })
              navigate('/PatientDashboard',{
                 state:{patient_id:patientId}
              })
              window.location.reload('false');
            })
        }
        )
    }
    
    useEffect(()=>{
        axios.defaults.headers.common['Authorization']=`Bearer ${jwtToken}`;
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/patient/join-queue/${patientId}/${specialization}?roomId=${roomId}`,)
        .then((response)=>{
            console.log('queue success');
        })
        .catch((error)=>{
          console.error('error on adding to queue',error);
        });
        return ()=>{ console.log('return')}
    },[])

    return (
       <> 
      <div className='RoomCss'>
        <div ref={myMeeting}></div>
      </div>
      </>
    )
}

export default RoomPage;