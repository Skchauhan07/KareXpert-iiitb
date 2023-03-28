import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import NavHead from "./components/Nav";
import Dashboard from './pages/Common/Dashboard';
import Login from './pages/Patient/login'
import DoctorPrescription from './pages/Doctor/DoctorPrescription';
import DownloadPressciption from './pages/Patient/DownloadPressciption';
import PatientDashboard from './pages/Patient/PatientDashboard'
import PatientPage from './pages/Patient/PatientPage';
import PatientMenu from './pages/Patient/PatientMenu';
import VideoCall from './pages/Common/VidoeCall'
import RoomPage from './pages/Common/room';
import RoomPageDoctor from './pages/Doctor/roomDoctor'
import Test from './pages/Patient/Test';
import DoctorDashboard from './pages/Doctor/DoctorDashboard';
// import DoctorDashboard from './pages/Doctor/Testpage';
import Profile from './pages/Doctor/Profile';
import History from './pages/Doctor/History';
import Prescription from './pages/Doctor/Prescription';

function App() {
  return (
    <div>
      <Routes>
      <Route path="/doctorDashboard" element={<DoctorDashboard/>}></Route>
                <Route path ="/doctor-profile" element={<Profile/>}></Route>
                <Route path ="/doctor-history" element={<History/>}></Route>
                <Route path ="/doctor-prescription" element={<Prescription/>}></Route>
      </Routes>
        {/* <NavHead/> */}
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/patient_login" element={<Login></Login>}></Route>
          <Route path="/patientLogin"/>
          <Route path="/add-prescription" element={<DoctorPrescription/>}/>
          <Route path="/showPrescription" element={<DownloadPressciption/>}/>
          <Route path="/PatientPage" element={<PatientPage/>}/>
          <Route path="/PatientDashboard" element={<PatientMenu/>}/>
          {/* <Route path="/PatientDashboard" element={<Test/>}/> */}
          <Route path="/VideoCall" element={<VideoCall/>}/>
          <Route path="/room/:roomId" element={<RoomPage/>}></Route>
          {/* <Route path="/room" element={<RoomPage/>}></Route> */}
          <Route path="/roomDoctor" element={<RoomPageDoctor/>}></Route>
          
        </Routes>
    </div>
  );
}

export default App;
