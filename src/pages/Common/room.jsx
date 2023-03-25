import React from 'react'
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import axios from 'axios';
import { useEffect,useState } from 'react';

const curr=0;
const RoomPage=()=>{
    //const {roomId} =useParams(); 
    //const [curr,setCurr]=useState(0);
    let roomId=123;
    console.log(typeof(roomId));
    const func=()=>{
        console.log('sudhanshu kumar chauhan');
    }
    const myMeeting =async (element) =>{
        const appID =2066795294
        const serverSecret ="dd1496412c994d3e0f2b99f6717683e1";
        const kitToken =ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomId,Date.now().toString(),'sudhanshu');
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        
        zp.joinRoom(
            {
            container:element,
            scenario:{
                mode:ZegoUIKitPrebuilt.VideoConference
            },
        });
    }
    useEffect(()=>{
        axios.post(`http://localhost:8081/patient/join-queue/${2}?roomId=${roomId}`,).then((response)=>{
            console.log('queue success');
        })
        .catch((error)=>{
          console.error('error on adding to queue',error);
        });
        return ()=>{ console.log('return')}
    },[])
    return (
        <div ref={myMeeting(func())}></div>
    )
}

export default RoomPage;