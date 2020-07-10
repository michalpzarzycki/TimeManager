import React from 'react';
import styles from './Sidebar.module.css'

export default function Sidebar({toggle}) {
    
    return <div className={toggle ? styles.sidebarContainer : styles.none}>
        SIDEBAR
    </div>
}