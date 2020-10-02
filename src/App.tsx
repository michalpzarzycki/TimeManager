import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, MemoryRouter, Switch, Route, BrowserRouter, Redirect, withRouter, RouteComponentProps} from 'react-router-dom'
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
import Hexagon from './components/Hexagon';
import Loader from './components/Loader'
import CategoryTopics from './components/sidebarRoutes/community/CategoryTopics';
import TopicDiscuss from './components/sidebarRoutes/community/TopicDiscuss';
import CreateTopic from './components/sidebarRoutes/community/CreateTopic';
import {connect} from 'react-redux'
import { getUserRequest, getUserSuccess, getUserFailure } from './redux/action';

function App() : any  {
  const [isLogged, setIsLogged] = useState(useAuth().isLoggedIn)
  const [toggle, setToggle] = useState(false)
  let [userId, setUserId] = useState('')
  let [userEmail, setUserEmail] = useState('')
  let [allowToDownloadUserImgAfterRegister, setAllowToDownloadUserImgAfterRegister] = useState<boolean>(false)
useEffect(()=>{
  toggleSidebar()


}, [])
function changeCssVariables() {

}
  const setAllow = (bool: boolean): void => setAllowToDownloadUserImgAfterRegister(bool) 
  function toggleSidebar() {
    setToggle(!toggle)
    if(toggle===true) {
      if(window.innerWidth<1000) {
        let elem1 = document.getElementsByClassName('routerDiv')[0] as HTMLElement
        elem1.style.width="100%";
        let elem2 = document.getElementsByClassName('routerDiv')[0] as HTMLElement      
        elem2.style.left="0"

      } else {
        let elem1 = document.getElementsByClassName('routerDiv')[0] as HTMLElement
        elem1.style.width="85%";
        let elem2 = document.getElementsByClassName('routerDiv')[0] as HTMLElement
        elem2.style.left="15%"
      }
    } else {
      let elem1 = document.getElementsByClassName('routerDiv')[0] as HTMLElement
      elem1.style.width="85%";
      let elem2 = document.getElementsByClassName('routerDiv')[0] as HTMLElement
      elem2.style.left="15%"
    } 
  
    
}
const userIdSetter = (uid : any) => setUserId(uid)

const userEmailSetter = (email : any) => setUserEmail(email)
  

const isLoggedIn = useAuth().isLoggedIn;
// function getData() {
//   db.collection('users').get().then(snapshot=>{
//     console.log(snapshot.docs())
//     setUserData({})
//   })
// }
// isLoggedIn && getData()

  if(isLoggedIn===null) {
    return <div>
    <BrowserRouter>
    <div className="routerDiv">
      <Switch>
        <Route path='/' component={Loader}/>
        <Route strict path='/hexagon' component={Hexagon} />
        <Route strict path='/loader' component={Loader} />
        <Route strict path='/login' render={() => <Redirect to="/"/>} />
      </Switch>
      </div>
    </BrowserRouter>
  </div> 
  } 
  else if(isLoggedIn===true) {
   return  <div>
    <BrowserRouter>
    <Navbar toggleSidebar={toggleSidebar} toggle={toggle} user={firebase.auth().currentUser} allowToDownloadUserImgAfterRegister={allowToDownloadUserImgAfterRegister}/>
    <div className="routerDiv">
    <Sidebar toggle={toggle}/>
      <Switch>
        <Route exact path='/' render={() => <Route1 user={firebase.auth().currentUser}/>} />
        <Route strict path='/profile' render={() => <Profile user={firebase.auth().currentUser} />} />
        <Route strict path='/settings' component={Settings}/>
        <Route strict path='/myexcuses' render={() => <MyExcuses user={firebase.auth().currentUser} />}/>
        <Route strict path='/notes' render={() => <Notes user={firebase.auth().currentUser}/>}/>
        <Route strict path='/inspiration' component={Inspiration}/>
        <Route strict path='/contact' component={Contact} />
        <Route strict exact path='/community' render={() => <Community userId={userId} userEmail={userEmail}/>}/>
        <Route strict exact path='/community/:category' render={() => <CategoryTopics />} />
        <Route strict exact path='/community/:category/createtopic' render={() => <CreateTopic />}/>
        <Route strict exact path='/community/:category/:topic' render={() => <TopicDiscuss />}/>
        <Route strict path='/inbox' render={() => <Inbox />}/>
        <Route strict path='/hexagon' component={Hexagon} />
        <Route strict path='/loader' component={Loader} />
        <Route strict path='/login' render={() => <Redirect to="/"/>} />
      </Switch>
      </div>
    </BrowserRouter>
  </div> 
  }  
  else if(isLoggedIn===false) {
    return  <BrowserRouter>
    <div className="routerDiv">
      <Switch>
        <Route exact path="/" render={()=><Redirect to="/login" />}/>
        <Route path="/login" render={() => <Login userIdSetter={userIdSetter} userEmailSetter={userEmailSetter}/>} />
        <Route render={() => <Register />} exact path='/register'/>
        <Route component={Profile}  path='/profile'/>
      </Switch>
      </div>
    </BrowserRouter>
  }
 
  
}

export default withRouter(App)
