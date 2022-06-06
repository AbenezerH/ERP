import React, { useState } from "react";
import logo from "../Assets/Logo.png";
import "../StyleSheets/Welcome.css";
import "../StyleSheets/AdminOptions.css";
import { useNavigate } from "react-router-dom";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
const EmployeeDrawer = (props) => {
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const history = useNavigate();

  const initialValues = {
    present: 0,
    paid_leave_taken: 0,
    encashed_leave_this_month: 0,
    email: props.location.state.email,
  };

  return (
    <div className="App">
      <header>
        <h1>Payroll Management System</h1>
        <hr className="Underline" />
        <img src={logo} alt="logo"></img>
      </header>
      <div>
        <Dialog
          onClose={handleClose}
          aria-labelledby="simple-dialog-title"
          open={open}
        >
          <DialogTitle id="simple-dialog-title">Mark Attendance</DialogTitle>
          <List>
            <ListItem>
              <ListItemText>Present</ListItemText>
            </ListItem>
            <ListItem
              button>
              <ListItemText>Paid Leave Taken</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Encashed Leave Taken</ListItemText>
            </ListItem>
          </List>
        </Dialog>
      </div>
      <div
        className="Login"
        style={{
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          alignSelf: "center",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          className="Login-button"
          onClick={() =>
            history("/reports", { email: props.location.state.email })
          }
        >
          <h4>Generate Report</h4>
        </div>
        <div
          className="Login-button"
          onClick={() =>
            history("/profile", { email: props.location.state.email })
          }
        >
          <h4>My Profile</h4>
        </div>
        <div className="Login-button" onClick={handleOpen}>
          <h4>Mark Attendance</h4>
        </div>
      </div>
    </div>
  );
};
const styles = {
  content: {
    // align:"center",
    // width: "20%",
  },
};
export default EmployeeDrawer;
