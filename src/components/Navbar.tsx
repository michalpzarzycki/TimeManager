import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import SidebarButton from './SidebarButton'
import Clock from './Clock'
import { fromUnixTime } from 'date-fns'
import { Link, BrowserRouter, withRouter } from 'react-router-dom'
import firebase from '../firebase/firebase'
import { storage } from '../firebase/firebase'
import Weather from './Weather'

export default function Navbar({toggleSidebar, user, toggle} : any) {
    let [date, setDate] = useState('')
useEffect(() => {
    if(user) {
        
        storage.ref().child(`profiles/${user.email}.jpg`).getDownloadURL().then((url : any) => {
            let elem1 : any =  document.getElementById('userPicture');
            elem1.style.backgroundImage = `url(${url})`
        }).catch(err => console.log("ERROR", err))
        setInterval(() => {
            let obj = new Date()
            setDate(`${obj.getHours()}:${obj.getMinutes()}:${obj.getSeconds()}`)
        }, 1000)
    }
  
},[user])
    function handleSignOut() {
        firebase.auth().signOut().then(() => {
        })
        .catch(() => {
        })
    }
    return <div className={styles.navbarContainer}>
        <SidebarButton toggleSidebar={toggleSidebar} toggle={toggle}/>
        <div className={styles.clockAndWeather}>
<div>{date.toString()}</div>
            <Weather />
        </div>
        <h1 className={styles.header}>TaskManager</h1>
    <Link to="/profile">
    <div className={styles.userSection}>
            <div id="userPicture" className={styles.picture}></div>
<div className={styles.user}>{user && user.email}</div>
            <div className={styles.arrow}></div>
        </div>
    </Link>
 
   
      
    </div>
}

