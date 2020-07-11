import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, BrowserRouter} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Route1 from './components/Route1';
import Route2 from './components/Route2';
import Route3 from './components/Route3';
import Register from './components/login/register/Register';

function App() {
  const [toggle, setToggle] = useState(false)
  const [user, setUser] = useState(false)

  function toggleSidebar() {
    setToggle(!toggle)
}
  return  user ? <div>
    <Navbar toggleSidebar={toggleSidebar} toggle={toggle}/>
    <BrowserRouter>
    <div className="routerDiv">
    <Sidebar toggle={toggle}/>
      <Switch>
        <Route component={Route1} exact path='/'/>
        <Route component={Route2} path='/route2'/>
        <Route component={Route3} path='/route3'/>
      </Switch>
      </div>
    </BrowserRouter>
  </div> : <Register />
  
}

export default App;
