import React from 'react'
import styles from './Navbar.module.css'
import SidebarButton from './SidebarButton'
import Clock from './Clock'
import { Link, BrowserRouter, withRouter } from 'react-router-dom'
import firebase from '../firebase/firebase'

export default function Navbar({toggleSidebar, user}) {

    function handleSignOut() {
        firebase.auth().signOut().then(() => {
            console.log("SignOutSuccf")
        })
        .catch(() => {
            console.log("EROORSIGNOUT")
        })
    }
    return <div className={styles.navbarContainer}>
        <SidebarButton toggleSidebar={toggleSidebar}/>
        <div className={styles.clockAndWeather}>
            <div><Clock /></div>
            <div>14°C</div>
        </div>
        <h1 className={styles.header}>TaskManager</h1>
        <button onClick={handleSignOut}><Link to="/login">LOGOUT</Link></button>
    <Link to="/profile">
    <div className={styles.userSection}>
            <div className={styles.picture}></div>
<div className={styles.user}>{user.email}</div>
            <div className={styles.arrow}></div>
        </div>
    </Link>
 
   
      
    </div>
}

