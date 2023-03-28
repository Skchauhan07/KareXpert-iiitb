import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DoctorDashboard from './DoctorDashboard'
import Prescription from './Prescription'
import Profile from './Profile'
import History from './History'
import "../../Css_files/Testpage.css";
function Testpage() {
  return (
    <div>
      <DoctorDashboard>
        <div id="sidebottom">
            
        </div>
        </DoctorDashboard>
    </div>
  )
}

export default Testpage
