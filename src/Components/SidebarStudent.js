import React from "react";
import {Link} from "react-router-dom";
import "./Sidebar.css";
import { ReactComponent as HomeIcon } from "../Icons/home-icon.svg";
import { ReactComponent as ProfileIcon } from "../Icons/profile-d-icon.svg";
import { ReactComponent as NotesIcon } from "../Icons/note-icon.svg";
import { ReactComponent as ExamIcon } from "../Icons/exam-icon.svg";
import { ReactComponent as ResultIcon } from "../Icons/result-icon.svg";
import { ReactComponent as SettingsIcon } from "../Icons/setting-icon.svg";
import { ReactComponent as MenuIcon } from "../Icons/menu-icon-white.svg";
function SidebarStudent({role}) {
  const [sidebar,setSidebar]=React.useState(true)
  function showSidebar(){
    setSidebar((prevState)=>!prevState)
  }
  if(sidebar)
  return (
    <div>
      <ul className="list-item">
        <div className="menu-option">
          <MenuIcon onClick={showSidebar}/>
        </div>
        <li>
          <Link to="/studentdashboard">
          <span className="options">
            <HomeIcon />
            <p>Dashboard</p>
          </span>
          </Link>
        </li>
        <li>
          {/* <Link > */}
          <span className="options">
            <ProfileIcon />
            <p>Profile</p>
          </span>
          {/* </Link> */}
        </li>
        <li>
          <Link to="/notes">
          <span className="options">
            <NotesIcon />
            <p>Notes</p>
          </span>
          </Link>
        </li>
        <li>
          {/* <Link> */}
          <span className="options">
            <ExamIcon />
            <p>Exam</p>
          </span>
          {/* </Link> */}
        </li>
        <li>
          <Link to="/results" state={{role:{role}}}>
          <span className="options">
            <ResultIcon />
            <p>Result</p>
          </span>
          </Link>
        </li>
        <li>
          <Link to="/settings" state={{role:{role}}}>
          <span className="options">
            <SettingsIcon />
            <p>Settings</p>
          </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default SidebarStudent;
