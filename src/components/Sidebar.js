import React from 'react';
import {Link, withRouter} from 'react-router-dom'
import styles from './Sidebar.module.css'

function Sidebar({toggle}) {
    
    return <div className={toggle ? styles.sidebarContainer : styles.none}>
        <div className={styles.profile}>Profile</div>
        <div className={styles.settings}>Settings</div>
        <div className={styles.inbox}>Inbox</div>
        <div className={styles.contact}>Contact</div>
        <Link to='/myexcuses'><div className={styles.help}>My Excuses</div></Link>
        <Link to='/notes'><div className={styles.help}>Notes</div></Link>
        <Link to='/inspiration'><div className={styles.help}>inspiration</div></Link>
        <Link to='/community'><div className={styles.help}>Community</div></Link>
        <div className={styles.logout}>Logout</div>
    </div>
}


export default withRouter(Sidebar)