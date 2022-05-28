import React, { useState, useEffect } from "react";
import "../StyleSheets/Welcome.css";
import "../StyleSheets/AdminOptions.css";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const history = useNavigate();
  const [open, setOpen] = useState(false);
  const [msg, setMessage] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    history();
  };
  const [data, setData] = React.useState({
    name: "",
    dob: "",
    city: "",
    state: "",
    pincode: "",
    address: "",
    dept_id: "",
    grade_id: "",
    org_name: "SGSITS",
    doj: "",
    ep_email: "",
  });
  React.useEffect(() => {
    fetch("http://localhost:3000/erpdatabase/hr/2")
        .then(res => res.json())
            .then(data => console.log(data))
        .catch(error => console.log(error))
}, [])


function fieldChangeHandler(event){
    const target = event.target
    const {name, value, type} = target


    setData(prevData => {
        return {
            ...prevData,
            [name]: value
        } 
    })

}

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
        <form className="form">
          <div className="grouping">
            <h3>Basic Details</h3>
            <hr className="Underline" />
            <div className="form-control">
              <label htmlFor="name">Name : </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={fieldChangeHandler}
                value={data.name}
              />
            </div>

            <div className="form-control">
              <label htmlFor="dob">Dob : </label>
              <input
                type="date"
                id="dob"
                name="dob"
                onChange={fieldChangeHandler}
                value={data.dob}
              />
            </div>
            <div className="form-control">
              <label htmlFor="address">Address : </label>
              <input
                type="text"
                id="address"
                name="address"
                onChange={fieldChangeHandler}
                value={data.address}
              />
            </div>
            <div className="form-control">
              <label htmlFor="city">City : </label>
              <input
                type="text"
                id="city"
                name="city"
                onChange={fieldChangeHandler}
                value={data.city}
              />
            </div>
            <div className="form-control">
              <label htmlFor="state">State : </label>
              <input
                type="text"
                id="state"
                name="state"
                onChange={fieldChangeHandler}
                value={data.state}
              />
            </div>
            <div className="form-control">
              <label htmlFor="pincode" className="pincode">
                Pin-Code :{" "}
              </label>
              <input
                type="number"
                id="pincode"
                name="pincode"
                onChange={fieldChangeHandler}
                value={data.pincode}
                size="6"
                maxLength="6"
              />
            </div>
          </div>

          <div className="grouping">
            <h3>Company Details</h3>
            <hr className="Underline" />
            <div className="form-control">
              <label htmlFor="org_name">Email : </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                onChange={fieldChangeHandler}
                value={data.ep_email}
              />
            </div>
            <div className="form-control">
              <label htmlFor="Dept">Department: </label>
              <input
                type="text"
                placeholder="department"
                name="department"
                onChange={fieldChangeHandler}
                value={data.dept_id}
              />
            </div>
            <div className="form-control">
              <label htmlFor="grade_id">Grade-ID : </label>
              <input
                type="text"
                placeholder="grade"
                name="grade"
                onChange={fieldChangeHandler}
                value={data.grade_id}
              />
            </div>
            <div className="form-control">
              <label htmlFor="org_name">Org Name: </label>
              <input
                type="text"
                placeholder="org_name"
                name="org_name"
                onChange={fieldChangeHandler}
                value={data.org_name}
              />
            </div>
            <div className="form-control">
              <label htmlFor="doj">doj : </label>
              <input
                // style={styles.input}
                type="date"
                placeholder="date"
                name="doj"
                onChange={fieldChangeHandler}
                value={data.doj}
              />
            </div>
          </div>
          <button type="submit">
            Add
          </button>
        </form>
      </div>
    </>
  );
};

const styles = {
  input: {
    width: window.innerWidth / 4.5,
    height: "70%",
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "black",
    marginTop: "1%",
  },
  dropDown: {
    width: window.innerWidth / 4.4,
    height: window.innerHeight / 25,
    backgroundColor: "hsl(212deg 33% 89%)",
    borderWidth: 0,
    borderColor: "black",
    borderRadius: 5,
    marginTop: "1%",
  },
};
export default AddEmployee;
