import React from "react";

import { NavLink, useHistory } from "react-router-dom";
// import { Switch, Redirect, Route, NavLink, useHistory, BrowserRouter } from "react-router-dom";

function NavBar() {
const history = useHistory()
    // const linkStyles = {
    //     width: "100px",
    //     padding: "12px",
    //     margin: "0 6px 6px",
    //     background: "black",
    //     textDecoration: "none",
    //     color: "white",
    //     border: "4px"
    // };
    
    const handleClick = () => {
        localStorage.clear()
        history.push('/home')
        window.location.reload()

  }

    return(
    <div className="navbar">
        
             
        <NavLink to="/" exact
            // style={linkStyles}
            activeStyle={{ background: "gray" }}
        >
        Home
        </NavLink>{"  "}
  
            {localStorage.token ?
                <NavLink to="/info" exact
                    // style={linkStyles}
                    activeStyle={{ background: "gray" }}
                >
                    Info
                </NavLink> : ""}

            {localStorage.token ?
                <NavLink to="/update" exact
                    // style={linkStyles}
                    activeStyle={{ background: "gray" }}
                >
                    Updates
                </NavLink> : ""}
            
         {localStorage.token? <NavLink to="/login" exact
            // style={linkStyles}
                onClick={handleClick}
            activeStyle={{ background: "gray" }}
            >
            Logout
        </NavLink>:<NavLink to="/login" exact
            // style={linkStyles}
            activeStyle={{ background: "gray" }}
            >
            Login
        </NavLink>}
        
        {/* <NavLink to="/signup" exact
            style={linkStyles}
            activeStyle={{background: "gray"}}
            >
            Signup
        </NavLink>{"  "} */}
            

      
        
                
    </div>
)}

export default NavBar;