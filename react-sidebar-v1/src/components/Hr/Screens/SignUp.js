import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { useNavigate } from "react-router";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 929,
    height: "100vh",
  },
  paper: {
    margin: theme.spacing(8, 4),
    marginLeft: "5",
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
  },
  form: {
    width: "50%", // Fix IE 11 issue.
    marginTop: theme.spacing(-3),
  },
  register: {
    margin: theme.spacing(3, 7, 2),
    width: "100px",
    height: "30px",
    fontWeight: "bold",
  },
  cancel: {
    margin: theme.spacing(3, 10, 2),
    width: "100px",
    height: "30px",
    fontWeight: "bold",
  },
}));

const SignUp = () => {
  const classes = useStyles();
  const [success, setSuccess] = useState(false);
  const history = useNavigate();
  const [companyName, setcompanyName] = useState("");
  const [username, setusername] = useState("");
  const [TIN_number, setTIN_number] = useState("");
  const [ad_email, setad_email] = useState("");
  const [password, setPassword] = useState("");
  const Clickhandle = () => {
    history("/");
  };
  const changeCompanyName = (event) => {
    setcompanyName(event.target.value);
  };
  const changeusername = (event) => {
    setusername(event.target.value);
  };

  const changeTIN_Number = (event) => {
    setTIN_number(event.target.value);
  };

  const changeEmail = (event) => {
    setad_email(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const registered = {
      companyName: companyName,
      username: username,
      TIN_number: TIN_number,
      ad_email: ad_email,
      password: password,
    };

    axios
      .post("http://localhost:3000/erpdatabase/hr/addAdmin", registered)
      .then((response) => console.log(response.data));
    setSuccess(true);
    history.push("/AdminLogin");
  };

  return (
    <div>
            <div className={classes.paper}>
              <Typography component="h1" variant="h5">
                <h3>Registration Form</h3>
              </Typography>
              <form className={classes.form} noValidate onSubmit={onSubmit}>
                <TextField
                  variant="standard"
                  //margin="normal"
                  required
                  fullWidth
                  id="companyName"
                  label="company Name"
                  type="text"
                  name="companyName"
                  autoComplete="companyName"
                  autoFocus
                  value={companyName}
                  onChange={changeCompanyName}
                />
                <TextField
                  variant="standard"
                  //margin="normal"
                  required
                  fullWidth
                  id="TIN_number"
                  type="number"
                  label="company TIN Number"
                  name="TIN_number"
                  autoComplete="TIN_number"
                  autoFocus
                  value={TIN_number}
                  onChange={changeTIN_Number}
                />
                <TextField
                  variant="standard"
                  //margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  type="text"
                  autoComplete="current-username"
                  autoFocus
                  value={username}
                  onChange={changeusername}
                />
                <TextField
                  variant="standard"
                  //margin="normal"
                  required
                  fullWidth
                  id="ad_email"
                  type="email"
                  label="Email"
                  name="ad_email"
                  autoComplete="ad_email"
                  autoFocus
                  value={ad_email}
                  onChange={changeEmail}
                />
                <TextField
                  variant="standard"
                  //margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={changePassword}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.register}
                >
                  Register
                </Button>
                {success && (
                  <span
                    style={{
                      color: "green",
                      textAlign: "center",
                      marginTop: "20px",
                    }}
                  >
                    <br />
                    <br /> Registered successfully{" "}
                  </span>
                )}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.cancel}
                  onClick={Clickhandle}
                >
                  Cancel
                </Button>
              </form>
            </div>
      </div>
  );
};
export default SignUp;