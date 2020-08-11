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
        <Link to='/'><div className={styles.help}><span className={styles.mainPageIcon}></span>Main Page</div></Link>
        <Link to='/profile'><div className={styles.profile}><span className={styles.profileIcon}></span>Profile</div></Link>
        <Link to='/settings'><div className={styles.settings}><span className={styles.settingsIcon}></span>Settings</div></Link>
        <Link to='/inbox'><div className={styles.inbox}><span className={styles.inboxIcon}></span>Inbox</div></Link>
        <Link to='/contact'><div className={styles.contact}><span className={styles.contactIcon}></span>Contact</div></Link>
        <Link to='/myexcuses'><div className={styles.myexcuses}><span className={styles.myexcusesIcon}></span>My Excuses</div></Link>
        <Link to='/notes'><div className={styles.notes}><span className={styles.notesIcon}></span>Notes</div></Link>
        <Link to='/inspiration'><div className={styles.inspiration}><span className={styles.inspirationIcon}></span>inspiration</div></Link>
        <Link to='/community'><div className={styles.community}><span className={styles.communityIcon}></span>Community</div></Link>
        <div className={styles.logout} onClick={handleLogout}><span className={styles.logoutIcon}></span>Logout</div>
    </div>
}


export default withRouter(Sidebar)