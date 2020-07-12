import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, BrowserRouter, Redirect, withRouter} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Route1 from './components/Route1';
import Route2 from './components/Route2';
import Route3 from './components/Route3';
import Register from './components/login/register/Register';
import Login from './components/login/register/Login';
import firebase, { db } from './firebase/firebase'
import Profile from './components/Profile';
import {useAuth} from './hooks/useAuth'


function App(props) {
  const [toggle, setToggle] = useState(false)
  const [user, setUser] = useState({email:"", password:""})


  function toggleSidebar() {
    setToggle(!toggle)
}


const isLoggedIn = useAuth();
// function getData() {
//   db.collection('users').get().then(snapshot=>{
//     console.log(snapshot.docs())
//     setUserData({})
//   })
// }
// isLoggedIn && getData()

  return  isLoggedIn ? <div>
    <BrowserRouter>
    <Navbar toggleSidebar={toggleSidebar} toggle={toggle} user={firebase.auth().currentUser}/>
    <div className="routerDiv">
    <Sidebar toggle={toggle}/>
      <Switch>
        <Route exact path='/' component={Route1} />
        <Route strict path='/profile' component={() => <Profile />}   />
        <Route strict path='/route2' component={Route2} />
        <Route strict path='/route3' component={Route3}  />
        <Route strict path='/login' render={() => <Redirect to="/"/>} />
      </Switch>
      </div>
    </BrowserRouter>
  </div> :   <BrowserRouter>
    <div className="routerDiv">
      <Switch>
        <Route exact path="/" render={()=><Redirect to="/login" />}/>
        <Route path="/login" component={Login} />
        <Route component={Register} exact path='/register'/>
        <Route component={Profile}  path='/profile'/>
      </Switch>
      </div>
    </BrowserRouter>
  
}

export default withRouter(App)
