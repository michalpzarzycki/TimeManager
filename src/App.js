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
import MyExcuses from './components/sidebarRoutes/MyExcuses';
import Inspiration from './components/sidebarRoutes/Inspiration';
import Notes from './components/sidebarRoutes/Notes';
import Community from './components/sidebarRoutes/Community';
import Inbox from './components/sidebarRoutes/Inbox';
import Settings from './components/sidebarRoutes/Settings';
import Contact from './components/sidebarRoutes/Contact';



function App(props) {
  const [toggle, setToggle] = useState(false)
  const [user, setUser] = useState({email:"", password:""})
  let [userId, setUserId] = useState('')
  let [userEmail, setUserEmail] = useState('')


  function toggleSidebar() {
    setToggle(!toggle)
}
function userIdSetter(uid) {
setUserId(uid)
}
function userEmailSetter(email) {
  setUserEmail(email)
  }

const isLoggedIn = useAuth().isLoggedIn;
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
        <Route exact path='/' render={() => <Route1 user={firebase.auth().currentUser}/>} />
        <Route strict path='/profile' component={() => <Profile />}   />
        <Route strict path='/route2' component={Route2} />
        <Route strict path='/route3' component={Route3}  />
        <Route strict path='/settings' component={Settings}/>
  ``````<Route strict path='/myexcuses' render={() => <MyExcuses user={firebase.auth().currentUser} />}/>
        <Route strict path='/notes' render={() => <Notes user={firebase.auth().currentUser}/>}/>
        <Route strict path='/inspiration' component={Inspiration}/>
        <Route strict path='/contact' component={Contact} />
        <Route strict path='/community' render={() => <Community userId={userId} userEmail={userEmail}/>}/>
        <Route strict path='/inbox' render={() => <Inbox />}/>
        <Route strict path='/login' render={() => <Redirect to="/"/>} />
      </Switch>
      </div>
    </BrowserRouter>
  </div> :   <BrowserRouter>
    <div className="routerDiv">
      <Switch>
        <Route exact path="/" render={()=><Redirect to="/login" />}/>
        <Route path="/login" render={() => <Login userIdSetter={userIdSetter} userEmailSetter={userEmailSetter}/>} />
        <Route component={Register} exact path='/register'/>
        <Route component={Profile}  path='/profile'/>
      </Switch>
      </div>
    </BrowserRouter>
  
}

export default withRouter(App)
