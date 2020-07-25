import React, { useState } from 'react';
import {Link, withRouter} from 'react-router-dom'
import firebase from '../firebase/firebase'
import styles from './Sidebar.module.css'

function Sidebar({toggle, history}) {
    let [isLoader, setIsLoader] = useState(false)
    function handleLogout() {
        setIsLoader(true)
        console.log("HHHH")
    
        firebase.auth().signOut().then(() => {
history.push('/')        
        }).catch(error => {
         
            console.log("LOGOUR ERROR", error)
        })
    }
    return <div className={toggle ? styles.sidebarContainer : styles.none}>
        <div className={isLoader ? styles.loader : ''}></div>
        <Link to='/'><div className={styles.help}>Main Page</div></Link>
        <Link to='/profile'><div className={styles.help}>Profile</div></Link>
        <Link to='/settings'><div className={styles.help}>Settings</div></Link>
        <Link to='/inbox'><div className={styles.help}>Inbox</div></Link>
        <Link to='/contact'><div className={styles.help}>Contact</div></Link>
        <Link to='/myexcuses'><div className={styles.help}>My Excuses</div></Link>
        <Link to='/notes'><div className={styles.help}>Notes</div></Link>
        <Link to='/inspiration'><div className={styles.help}>inspiration</div></Link>
        <Link to='/community'><div className={styles.help}>Community</div></Link>
        <div className={styles.logout} onClick={handleLogout}>Logout</div>
    </div>
}


export default withRouter(Sidebar)