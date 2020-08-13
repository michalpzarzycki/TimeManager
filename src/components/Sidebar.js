import React, { useState, useLayoutEffect } from 'react';
import {Link, withRouter} from 'react-router-dom'
import firebase from '../firebase/firebase'
import styles from './Sidebar.module.css'

function Sidebar({toggle, history}) {
    let [isLoader, setIsLoader] = useState(false)
    const [size, setSize] = useState(window.innerWidth);
  useLayoutEffect(() => {
    function updateSize() {
        console.log(window.innerWidth)
      setSize(window.innerWidth);
   
    }
    console.log("SIZE", size)
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  

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
        <Link to='/'><div className={styles.help}><span className={styles.mainPageIcon}></span>{size>800 ? 'Main Page' : ''}</div></Link>
        <Link to='/profile'><div className={styles.profile}><span className={styles.profileIcon}></span>{size>800 ? 'Profile' : ''}</div></Link>
        <Link to='/settings'><div className={styles.settings}><span className={styles.settingsIcon}></span>{size>800 ? 'Settings' : ''}</div></Link>
        <Link to='/inbox'><div className={styles.inbox}><span className={styles.inboxIcon}></span>{size>800 ? 'Inbox' : ''}</div></Link>
        <Link to='/contact'><div className={styles.contact}><span className={styles.contactIcon}></span>{size>800 ? 'Contact' : ''}</div></Link>
        <Link to='/myexcuses'><div className={styles.myexcuses}><span className={styles.myexcusesIcon}></span>{size>800 ? 'My Excuses' : ''}</div></Link>
        <Link to='/notes'><div className={styles.notes}><span className={styles.notesIcon}></span>{size>800 ? 'Notes' : ''}</div></Link>
        <Link to='/inspiration'><div className={styles.inspiration}><span className={styles.inspirationIcon}></span>{size>800 ? 'Inspirations' : ''}</div></Link>
        <Link to='/community'><div className={styles.community}><span className={styles.communityIcon}></span>{size>800 ? 'Community' : ''}</div></Link>
        <div className={styles.logout} onClick={handleLogout}><span className={styles.logoutIcon}></span>{size>800 ? 'Logout' : ''}</div>
    </div>
}


export default withRouter(Sidebar)