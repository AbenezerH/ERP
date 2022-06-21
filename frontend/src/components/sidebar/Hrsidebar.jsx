import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useState  } from "react";
import Popup from '../popup/Popup';
import { signOut } from 'firebase/auth'; 
import { auth } from '../../firebase';
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">ERP</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">HUMAN RESOURCE</p>
          <Link to="/addemployee" style={{ textDecoration: "none" }}>
            <li>
              <PeopleOutlineIcon className="icon" />
              <span>Employee</span>
            </li>
          </Link>
          <Link to="/grade" style={{ textDecoration: "none" }}>
            <li>
              <span>Add Grade</span>
            </li>
          </Link>
          <Link to="/org" style={{ textDecoration: "none" }}>
            <li>
              <span>organization information</span>
            </li>
          </Link>
          <Link to="/department" style={{ textDecoration: "none" }}>
            <li>
              <span>Department</span>
            </li>
          </Link>
          <Link to="/payrol" style={{ textDecoration: "none" }}>
          <li>
            <AccountBalanceWalletIcon className="icon" />
            <span>Payroll</span>
          </li>
          </Link>
          <p className="title">USEFUL & SERVICE</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <Link to="/notifications" style={{ textDecoration: "none" }}>
            <li>
              <NotificationsNoneIcon className="icon" />
              <span>Notifications</span>
            </li>            
          </Link>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/profile" style={{ textDecoration: "none" }}>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          </Link>
          <li onClick={togglePopup}>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
      {
        isOpen && <Popup
        content={<>
          <b>Your about to log out</b>
          <p>Are you shure you want to log out,   doing so will log you out.</p>
          <button onClick={()=>{ togglePopup(); signOut(auth);}}>Logout</button>
        </>}
        handleClose={togglePopup}
      /> 
      }
    </div>
  );
};

export default Sidebar;
