// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from "./components/Login";
import Signup from './components/Signup';
import Info from './components/Info';
import NewInfo from './components/NewInfo';
import Update from './components/Update';
import TrusteeLogin from './components/TrusteeLogin';
import { Switch, Redirect, Route, NavLink, useHistory, BrowserRouter } from "react-router-dom";
import { useEffect, useState } from 'react';


function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [currentUserStatuses, setCurrentUserStatuses] = useState([]);

  const currentUserInfo = () =>
  {
      fetch('http://localhost:3001/info',
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.token}`
          }
        })
        .then(res => res.json())
        .then(info => {
          localStorage.setItem( 'userInfo', JSON.stringify(info))
          localStorage.id = info.id
          //setCurrentUserStatuses(info.statuses)
          //setCurrentUserStatuses(info.statuses)
        })
  }

  return (
    <div>
      <div class="image-container">
        <h1 className="title">Track Me</h1>
      </div>
      <BrowserRouter>
       <NavBar /> 
        <Switch>
          <Route  path="/login">
            <Login currentUserInfo={currentUserInfo}/>
          </Route>

          <Route  path="/trustee">
            <TrusteeLogin currentUserInfo={currentUserInfo}/>
          </Route>

          <Route  path="/signup">
            <Signup />
          </Route>

          <Route  path="/newinfo">
            <NewInfo currentUserInfo={currentUserInfo}/>
          </Route>

           <Route  path="/info">
            <Info  />
          </Route>

          <Route  path="/update">
            <Update currentUserInfo={currentUserInfo}/>
          </Route>

          <Route  path="/">
            <Home />
          </Route>

          

        </Switch>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
