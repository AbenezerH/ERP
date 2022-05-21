import React from 'react'
import { NavLink } from "react-router-dom";
function Signup() {
  return (
    <div className="Sign">
    <form>
    
              <label>
                Full Name:
                <br></br>
                <input type = "text" name='name'></input>
                </label><br></br>
                <br></br>
                <label>
                Email:
                <br></br>
                <input type = "text" name='email'></input>
                </label><br></br>
                <br></br>
                <label>
               Phone Number:
               <br></br>
                <input type = "text" name='phoneno'></input>
                </label>
                <label>
                    <br></br>
                    <br></br>
                Password:
                <br></br>
                <input type = "password" name='pass'></input>
                </label>
            
            <br></br>
            <br></br>
            

            <button className="btn2" onClick={() => {
            }}>Signup</button>
            <br></br>
             
              <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/Login"
            >
              LOGIN
            </NavLink>
        
        
    </form>
    
 
</div>

  )
}

export default Signup;
