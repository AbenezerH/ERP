import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Inventory from './components/inventory/Inventory';
import Hrnavbar from './components/Hr/Hrnavbar'
import AddEmployee from './components/Hr/Screens/AddEmployee';
import AddDep from './components/Hr/Screens/AddDep';
import AddExtras from './components/Hr/Screens/AddExtras';
import AddGrade from './components/Hr/Screens/AddGrade';
import AdminAddInfo from './components/Hr/Screens/AdminAddInfo';
import AdminDashboard from './components/Hr/Screens/AdminDashboard';
import AdminLogin from './components/Hr/Screens/AdminLogin';
import AdminUpdateInfo from './components/Hr/Screens/AdminUpdateInfo';
import Attendance from './components/Hr/Screens/Attendance'
import AttendanceLog from './components/Hr/Screens/AttendanceLog';
import EmployeeDrawer from './components/Hr/Screens/EmployeeDrawer';
import EmployeeLogin from './components/Hr/Screens/EmployeeLogin';
import Welcome from './components/Hr/Screens/Welcome';
import Reports from './components/Hr/Screens/Reports';
import Header from './components/Header';
import Employee from './components/Hr/Employee';
import AddOrg from './components/Hr/Screens/AddOrg';
import SignUp from './components/Hr/Screens/SignUp';
import Add from './components/Hr/Screens/Add'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    {/* <Route path="/" element= {<Header />}>
      <Route path="" element= {<App />}>
        <Route path="inventory" element={<Inventory />} />
        <Route path="addemployee" element= {<Addemployee />} />
      </Route>
    </Route> */}
     <Route path="/add" element= {<Add />} />
     <Route path="/reports" element= {<Reports />} />
    <Route path="human-Resource" element= {<Hrnavbar />} />
    <Route path="/header" element= {<Header />} />
    <Route path="/home" element= {<App />}/>
    <Route path="/home/inventory" element={<Inventory />} />
    <Route path="/home/human-Resource" element= {<Hrnavbar />} />
    <Route path="/addemployee" element= {<AddEmployee />} />
    <Route path="/home/human-Resource/employee" element= {<Employee />} />
    <Route path="/addDepartment" element= {<AddDep />} />
    <Route path="/addextras" element= {<AddExtras />} />
    <Route path="/addgrade" element= {<AddGrade />} />
    <Route path="/adminaddinfo" element= {<AdminAddInfo />} />
    <Route path="/admindashboard" element= {<AdminDashboard />} />
    <Route path="/" element= {<AdminLogin />} />
    <Route path="/adminupdateinfo" element= {<AdminUpdateInfo />} />
    <Route path="/attendance" element= {<Attendance />} />
    <Route path="/attendancelog" element= {<AttendanceLog />} />
    <Route path="/employedrawer" element= {<EmployeeDrawer />} />
    <Route path="/employelogin" element= {<EmployeeLogin />} />
    <Route path="/welcome" element= {<Welcome />} />
    <Route path="/addorg" element= {<AddOrg />} />
    <Route path="/signup" element= {<SignUp />} />
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitalszz

