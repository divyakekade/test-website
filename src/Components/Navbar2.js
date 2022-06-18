import "./Navbar2.css";
import {ReactComponent as SettingIcon} from "../Icons/menu-icon.svg";
import {ReactComponent as LogoutIcon} from "../Icons/logout-icon.svg";
import {ReactComponent as ProfileIcon} from "../Icons/profile-icon.svg";
// import {ReactComponent as DropdownIcon} from "../Icons/dropdown-icon.svg";
export default function Navbar2(){
    return(
        <nav className="navbar2">
            <SettingIcon className="menu-icon"/>
            <div className="right-part">
            <ProfileIcon className="profile-icon"/>
            {/* <h4>Welcome</h4> */}
            <h4>user_name</h4>
            <LogoutIcon className="logout-icon"/>
            {/* <DropdownIcon className="dropdown-icon"/> */}
            </div>
        </nav>
    )
}