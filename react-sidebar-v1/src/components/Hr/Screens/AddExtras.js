import React, { useState } from "react";
import logo from "../Assets/Logo.png";
import "../StyleSheets/Welcome.css";
import "../StyleSheets/AdminOptions.css";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import {useNavigate} from "react-router-dom"
const AddExtras = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [msg] = useState("");


  const handleClose = () => {
    setOpen(false);
    navigate.goBack();
  };
  return (
    <>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Message"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {msg}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div className="App">
        <header>
          <h1>Payroll Management System</h1>
          <hr className="Underline" />
          <img src={logo} alt="logo"></img>
        </header>
        <form className="form" >
    
          <div className="form-control">
            <label htmlFor="dep_Name">Extras Type : </label>
            <input
              type="text"
              id="ex_Type"
              name="ex_Type"
              
            />
          </div>

          <button type="submit">add extras</button>
        </form>
      </div>
    </>
  );
};

export default AddExtras;
