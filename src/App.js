import "./App.css";
import { Sidebar } from "react-pro-sidebar";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

import Index from "./Component/Index";
import Home from "./Component/Home";
import Rout from "./Component/Rout";

function App(props) {
  return (
    <div>
      {/* changed the Home component to router component */}
      <Rout />
    </div>
  );
}

export default App;
