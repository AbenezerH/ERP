import React, { useState } from "react";
import logo from "../../Hr/Assets/Logo.png";
import "../../Hr/StyleSheets/Welcome.css";
import "../../Hr/StyleSheets/AdminOptions.css";
import { useNavigate } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

const AddWarranty = () => {
  const [open, setOpen] = useState(false);
  const [msg] = useState("");
  const navigate = useNavigate();
  
  const handleClose = () => {
    setOpen(false);
    navigate.goBack();
  };
   
  return (
    <>
      <div className="App">
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
        <header>
          <h1>Add Warranty</h1>
          <hr className="Underline" />
          <img src={logo} alt="logo"></img>
        </header>
        <form className="form" >
       
          <div className="form-control">
            <label htmlFor="dep_Name">Full Name : </label>
            <input
              type="text"
              id="full_name"
              name="full_name"
             
            />
          </div>

          <div className="form-control">
            <label htmlFor="org_Name">Phone Number : </label>
            <input
              type="text"
              id="phone_number"
              name="phone_number"
            />
          </div>

          <div className="form-control">
            <label htmlFor="org_Name">Serial Number : </label>
            <input
              type="text"
              id="serial_number"
              name="serial_number"
            />
          </div>

          <div className="form-control">
            <label htmlFor="org_Name">Valid Until : </label>
            <input
              type="text"
              id="valid_until"
              name="valid_until"
            />
          </div>
          <button type="submit">Add Warranty</button>
        </form>
      </div>
    </>
  );
};

export default AddWarranty;
