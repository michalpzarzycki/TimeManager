import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import SidebarButton from './SidebarButton'
import Clock from './Clock'
import { fromUnixTime } from 'date-fns'
import { Link, BrowserRouter, withRouter } from 'react-router-dom'
import firebase from '../firebase/firebase'
import { storage } from '../firebase/firebase'

export default function Navbar({toggleSidebar, user}) {
    let [date, setDate] = useState('')
useEffect(() => {
    if(user) {
        console.log("JESTJES ")
        console.log("KKKKKK", user)
        storage.ref().child(`profiles/${user.email}.jpg`).getDownloadURL().then((url) => {
            console.log("URLaaa", url, user.email)
            document.getElementById('userPicture').style.backgroundImage = `url(${url})`
        }).catch(err => console.log("ERROR", err))
        console.log("sadasd", date )
        setInterval(() => {
            let obj = new Date()
            setDate(`${obj.getHours()}:${obj.getMinutes()}:${obj.getSeconds()}`)
        }, 1000)
    }
  
},[user])
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
            <div id="userPicture" className={styles.picture}></div>
<div className={styles.user}>{user && user.email}</div>
            <div className={styles.arrow}></div>
        </div>
    </Link>
 
   
      
    </div>
}

