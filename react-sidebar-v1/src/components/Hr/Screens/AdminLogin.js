import React, { useState } from "react";
import logo from "../Assets/Logo.png";
import "../StyleSheets/Welcome.css";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import { useNavigate } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#707070",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const AdminLogin = () => {
  // console.log(base_url)
  const classes = useStyles();
  const [email, setEmail] = useState("email");
  const [password, setPassword] = useState("password");
  const [open, setOpen] = useState(false);
  const [msg, setMessage] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  const history = useNavigate();
const handleSubmit = async (e) => {
    e.preventDefault();
    history("/adminDashboard");

}
  
  return (
    <div className="App">
      <div>
        {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Open alert dialog
        </Button> */}
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Authentification Error"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {msg}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {/* <Button onClick={handleClose} color="primary">
              Disagree
            </Button> */}
            <Button onClick={handleClose} color="primary" autoFocus>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <header>
        <h1>Payroll Management System</h1>
        <hr className="Underline" />
        <img src={logo} alt="logo"></img>
      </header>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <SupervisorAccountIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Admin Login
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  variant="body2"
                  onClick={() => {
                    history("/resetPassword",{
                      text:"admin"
                    });
                  }}
                >
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>{/* <Copyright /> */}</Box>
      </Container>
    </div>
  );
};

export default AdminLogin;
