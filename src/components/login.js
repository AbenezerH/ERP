
import React from "react";
import { NavLink } from "react-router-dom";
import './login.css';
function Login() {
 // let navigate = useNavigate();

  // const {email,
  //    setEmail ,
  //     password , 
  //     setPassword ,
  //      handleLogin ,
  //       handleSignup, 
  //       hasAccount,
  //       setHasAccont,
  //       emailError,
  //       passwordError
  //     } =props;
  
    function handleLogin(e) {
      e.preventDefault();
 //to authorize and authenticate 
//if successful redirect to /home if not show error text
console.log('youve logged in',e);
}

  return (
    <div className="Login-box">
       <h1>Login</h1>
        <form onSubmit={handleLogin}>
           <div className="text-box">
                Email:
               <br></br>
               <label>
                <input type = "text" name='email'></input>
                </label>
                </div>
               
                

                <br></br>
                

                <div className="text-box"> 
                <label>
                 Password:
                <br></br>
                <input type = "password" name='pass'></input>
                </label>
                <br></br>
                </div>
                <div>
                  <button className="btn-log" type="submit">Login</button>
                </div>

                
                

                

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/Signup"
            >
              SIGNUP
            </NavLink>
            
            
        </form>

     
    </div>
  );
}


export default Login;
