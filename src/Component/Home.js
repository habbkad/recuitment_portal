import React from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import {
  BarChartRounded,
  DashboardCustomize,
  DashboardCustomizeOutlined,
  ListAltOutlined,
  PieChartOutlineOutlined,
  PieChartTwoTone,
  RoomPreferences,
} from "@mui/icons-material";
import Cadre from "./Dashboard/cadre";
import Dash from "./Dashboard/Dash";
import Agencies from "./Configurstion/Agencies";
import Rout from "./Rout";

const Home = (props) => {
  const { collapseSidebar } = useProSidebar();
  return (
    // removed router tag
    <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
      <Sidebar style={{ height: "100vh" }}>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            {" "}
            <h2>Admin</h2>
          </MenuItem>
          <SubMenu
            icon={<DashboardCustomizeOutlined />}
            component={<Link to="/" />}
            label="Dashboard"
          >
            <MenuItem
              icon={<BarChartRounded />}
              component={<Link to="/Dash" />}
            >
              Dash
            </MenuItem>
            <MenuItem
              icon={<PieChartOutlineOutlined />}
              component={<Link to="/Cadre" />}
            >
              Cadre
            </MenuItem>
            <MenuItem
              icon={<PieChartTwoTone />}
              component={<Link to="/Batch" />}
            >
              Batch
            </MenuItem>
            <MenuItem
              icon={<DashboardCustomize />}
              component={<Link to="/Reported" />}
            >
              Reported
            </MenuItem>
          </SubMenu>
          <SubMenu icon={<RoomPreferences />} label="Configuration">
            <MenuItem
              icon={<RoomPreferences />}
              component={
                <Link to="/Agencies" Route path="/" component={Agencies} />
              }
            >
              Agencies
            </MenuItem>
            <MenuItem
              icon={<HomeOutlinedIcon />}
              component={<Link to="/Facilities" />}
            >
              Facilities
            </MenuItem>
            <MenuItem
              icon={<RoomPreferences />}
              component={<Link to="/Regions" />}
            >
              Regions
            </MenuItem>
            <MenuItem
              icon={<RoomPreferences />}
              component={<Link to="/Districts" />}
            >
              District
            </MenuItem>
            <MenuItem
              icon={<RoomPreferences />}
              component={<Link to="/Clearance" />}
            >
              Clearance
            </MenuItem>
          </SubMenu>
          <SubMenu icon={<ListAltOutlined />} label="Applications">
            <MenuItem
              icon={<ListAltOutlined />}
              component={<Link to="/AllApplications" />}
            >
              All Apllications
            </MenuItem>
            <MenuItem
              icon={<ListAltOutlined />}
              component={<Link to="/ReportedApplicants" />}
            >
              Reported Applicants
            </MenuItem>
            <MenuItem
              icon={<ListAltOutlined />}
              component={<Link to="/Apply" />}
            >
              Apply
            </MenuItem>
          </SubMenu>
          <SubMenu icon={<PeopleOutlinedIcon />} label="Users">
            <MenuItem
              icon={<PeopleOutlinedIcon />}
              component={<Link to="/Users" />}
            >
              Users
            </MenuItem>
            <MenuItem
              icon={<ContactsOutlinedIcon />}
              component={<Link to="/Role" />}
            >
              Role
            </MenuItem>
            <MenuItem
              icon={<ContactsOutlinedIcon />}
              component={<Link to="/Designation" />}
            >
              Designation
            </MenuItem>
          </SubMenu>
          <MenuItem
            icon={<CalendarTodayOutlinedIcon />}
            component={<Link to="/Calendar" />}
          >
            Calendar
          </MenuItem>
          <MenuItem
            icon={<HelpOutlineOutlinedIcon />}
            component={<Link to="/Faq" />}
          >
            FAQ
          </MenuItem>
        </Menu>
      </Sidebar>

      <main>
        <div>
          <h1 style={{ color: "blue", marginLeft: "5rem" }}>
            <CalendarTodayOutlinedIcon /> Dashboard
          </h1>
        </div>
        <div>
          <Rout />
        </div>
      </main>
    </div>
  );
};

export default Home;
