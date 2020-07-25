import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import SidebarButton from './SidebarButton'
import Clock from './Clock'
import { fromUnixTime } from 'date-fns'
import { Link, BrowserRouter, withRouter } from 'react-router-dom'
import firebase from '../firebase/firebase'

export default function Navbar({toggleSidebar, user}) {
    let [date, setDate] = useState('')
useEffect(() => {
    console.log("sadasd", date )
    setInterval(() => {
        let obj = new Date()
        setDate(`${obj.getHours()}:${obj.getMinutes()}:${obj.getSeconds()}`)
    }, 1000)
},[])
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
<div>{date.toString()}</div>
            <div>14°C</div>
        </div>
        <h1 className={styles.header}>TaskManager</h1>
    <Link to="/profile">
    <div className={styles.userSection}>
            <div className={styles.picture}></div>
<div className={styles.user}>{user.email}</div>
            <div className={styles.arrow}></div>
        </div>
    </Link>
 
   
      
    </div>
}

