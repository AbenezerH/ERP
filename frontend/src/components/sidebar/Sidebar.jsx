import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PaymentsIcon from '@mui/icons-material/Payments';
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useState, useEffect  } from "react";
import Popup from '../popup/Popup';
import { signOut } from 'firebase/auth'; 
import { auth } from '../../firebase';
import {useAuthValue} from '../../AuthContext'


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {currentUser} = useAuthValue()

  const [role, setRole]= useState(0)

  // useeffect
  useEffect(() => {
    fetch(`http://localhost:5000/erpdatabase/admin/${currentUser.email}`)
      .then(res => res.json())
        .then(data => {
          console.log(data)
          setRole(data[0].role)
        })
        .catch(error => {
          console.log(error)
        })
  }, [])

  let inventory = <>
    <p className="title">INVENTORY</p>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <Link to="/brandCategory" style={{ textDecoration: "none" }}>
            <li>
              <SettingsSystemDaydreamOutlinedIcon className="icon" />
              <span>Brand Category</span>
            </li>
          </Link>
          <Link to="/damagedgood" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Damaged Good</span>
            </li>
          </Link>
          <Link to="/warranty" style={{ textDecoration: "none" }}>
            <li>
              <ColorLensIcon className="icon" />
              <span>Warranty</span>
            </li>
          </Link>
  </>

  let finance = <>
    <p className="title">FINANCE</p>
          <Link to="/financereport" style={{ textDecoration: "none" }}>
              <li>
                <AccountBalanceIcon className="icon" />
                <span>Finance report</span>
              </li>
          </Link>
          
          <Link to="/sales" style={{ textDecoration: "none" }}>
              <li>
                <CreditCardIcon className="icon" />
                <span>Sales</span>
              </li>
          </Link>
          <Link to="/expense" style={{ textDecoration: "none" }}>
              <li>
                <PaymentsIcon className="icon" />
                <span>Expense</span>
              </li>
          </Link>
          <Link to="/liability" style={{ textDecoration: "none" }}>
              <li>
                <PriceChangeIcon className="icon" />
                <span>Liability</span>
              </li>
            </Link>
          <Link to="/income" style={{ textDecoration: "none" }}>
            <li>
              <AttachMoneyIcon className="icon" />
              <span>Income</span>
            </li>
            </Link>
          <Link to="/asset" style={{ textDecoration: "none" }}>
              <li>
                <CurrencyExchangeIcon className="icon" />
                <span>Asset</span>
              </li>
          </Link>
  </>

  let hr = <>
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
  </>

  let sales = <>
    <Link to="/sales" style={{ textDecoration: "none" }}>
        <li>
          <CreditCardIcon className="icon" />
          <span>Sales</span>
        </li>
    </Link>
    <Link to="/warranty" style={{ textDecoration: "none" }}>
            <li>
              <ColorLensIcon className="icon" />
              <span>Warranty</span>
            </li>
          </Link>
  </>

  let invSales = <>
    {inventory}
    <Link to="/sales" style={{ textDecoration: "none" }}>
        <li>
          <CreditCardIcon className="icon" />
          <span>Sales</span>
        </li>
    </Link>
  </>

  let invHr = <>
    {inventory}
    {hr}
  </>

  let invFinance = <>
    {inventory}
    {finance}
  </>

  let hrFinance = <>
    {hr}
    {finance}
  </>

  let all = <>
    <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          
          </Link>
    {inventory}
    {finance}
    {hr}
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
  </>
 
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
          
          {(role == 1) && inventory}
          {(role == 2) && sales}
          {(role == 3) && hr}
          {(role == 4) && finance}
          {(role == 5) && invSales}
          {(role == 6) && invHr}
          {(role == 7) && invFinance}
          {(role == 8) && hrFinance}
          {(role == 9) && all}
          
          <p className="title">USER</p>
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
