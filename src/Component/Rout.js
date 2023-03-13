import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AllApplications from "./Applications/AllApplications";
import Apply from "./Applications/Apply";
import ReportedApplicants from "./Applications/ReportedApplicants";
import Agencies from "./Configurstion/Agencies";
import Clearance from "./Configurstion/Clearance";
import Districts from "./Configurstion/Districts";
import Facilities from "./Configurstion/Facilities";
import Regions from "./Configurstion/Regions";
import Batch from "./Dashboard/Batch";
import Cadre from "./Dashboard/cadre";
import Dash from "./Dashboard/Dash";
import Reported from "./Dashboard/Reported";
import Designation from "./User/Designation";
import Role from "./User/Role";
import Users from "./User/Users";
import Calender from "./Calender";
import Faq from "./Faq";
import { Home } from "@mui/icons-material";

const Rout = () => {
  return (
    //changed components to elements in routes
    //wrapped Components in </> in routes
    <BrowserRouter>
      <Home />
      <Routes>
        <Route path="/" element={<Dash />}></Route>
        <Route path="/Cadre" element={<Cadre />}></Route>
        <Route path="/Batch" element={<Batch />}></Route>
        <Route path="/Reported" element={<Reported />}></Route>
        <Route path="/Agencies" element={<Agencies />}></Route>
        <Route path="/Facilities" element={<Facilities />}></Route>
        <Route path="/Regions" element={<Regions />}></Route>
        <Route path="/District" element={<Districts />}></Route>
        <Route path="/Clearance" element={<Clearance />}></Route>
        <Route path="/AllApplications" element={<AllApplications />}></Route>
        <Route
          path="/ReportedApplicants"
          element={<ReportedApplicants />}
        ></Route>
        <Route path="/Apply" element={<Apply />}></Route>
        <Route path="/Users" element={<Users />}></Route>
        <Route path="/Role" element={<Role />}></Route>
        <Route path="/Designation" element={<Designation />}></Route>
        <Route path="/Calendar" element={<Calender />}></Route>
        <Route path="/Faq" element={<Faq />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rout;
