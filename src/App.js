import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, BrowserRouter} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Route1 from './components/Route1';
import Route2 from './components/Route2';
import Route3 from './components/Route3';
import Register from './components/login/register/Register';
import Login from './components/login/register/Login';
import firebase from './firebase/firebase'
import Profile from './components/Profile';

function App() {
  const [toggle, setToggle] = useState(false)
  const [user, setUser] = useState(false)
  const [userData, setUserData] = useState({})

  function toggleSidebar() {
    setToggle(!toggle)
}
function isLoggedIn(user) {
    setUser(true)
    setUserData({...user})
}
  return  user ? <div>
    <Navbar toggleSidebar={toggleSidebar} toggle={toggle} userData={userData}/>
    <BrowserRouter>
    <div className="routerDiv">
    <Sidebar toggle={toggle}/>
      <Switch>
        <Route component={Route1} exact path='/'/>
        <Route component={Route2} path='/route2'/>
        <Route component={Route3} path='/route3'/>
        <Route component={Register} path='/register'/>
      </Switch>
      </div>
    </BrowserRouter>
  </div> :   <BrowserRouter>
    <div className="routerDiv">
      <Switch>
        <Route component={Register} exact path='/register'/>
        <Route component={Login} path='/login'/>
        <Route component={Profile} path='/profile'/>
      </Switch>
      </div>
    </BrowserRouter>
  
}

export default App;
