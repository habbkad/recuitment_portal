
import React from 'react';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllApplications from './Applications/AllApplications';
import Apply from './Applications/Apply';
import ReportedApplicants from './Applications/ReportedApplicants';
import Agencies from './Configurstion/Agencies';
import Clearance from './Configurstion/Clearance';
import Districts from './Configurstion/Districts';
import Facilities from './Configurstion/Facilities';
import Regions from './Configurstion/Regions';
import Batch from './Dashboard/Batch';
import Cadre from './Dashboard/cadre';
import Dash from './Dashboard/Dash';
import Reported from './Dashboard/Reported';
import Designation from './User/Designation';
import Role from './User/Role';
import Users from './User/Users';
import Calender from './Calender';
import Faq from './Faq';


const Rout = () => {
    return (
        <Router>
        <Routes>  
        <Route path='/' component={Dash}></Route>
        <Route path='/Cadre' component={Cadre}></Route>
        <Route path='/Batch' component={Batch}></Route>
        <Route path='/Reported' component={Reported}></Route>
        <Route path='/Agencies' component={Agencies}></Route>
        <Route path='/Facilities' component={Facilities}></Route>
        <Route path='/Regions' component={Regions}></Route>
        <Route path='/District' component={Districts}></Route>
        <Route path='/Clearance' component={Clearance}></Route>
        <Route path='/AllApplications' component={AllApplications}></Route>
        <Route path='/ReportedApplicants' component={ReportedApplicants}></Route>
        <Route path='/Apply' component={Apply}></Route>
        <Route path='/Users' component={Users}></Route>
        <Route path='/Role' component={Role}></Route>
        <Route path='/Designation' component={Designation}></Route>
        <Route path='/Calendar' component={Calender}></Route>
        <Route path='/Faq' component={Faq}></Route>
        </Routes>
        </Router>

        
    );
}

export default Rout;
