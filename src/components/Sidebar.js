import React from 'react';
import styles from './Sidebar.module.css'

export default function Sidebar({toggle}) {
    
    return <div className={toggle ? styles.sidebarContainer : styles.none}>
        <div className={styles.profile}>Profile</div>
        <div className={styles.settings}>Settings</div>
        <div className={styles.inbox}>Inbox</div>
        <div className={styles.contact}>Contact</div>
        <div className={styles.help}>Help</div>
        <div className={styles.logout}>Logout</div>
    </div>
}