import React from 'react'
import styles from './Navbar.module.css'
import SidebarButton from './SidebarButton'
import Clock from './Clock'

export default function Navbar({toggleSidebar, toggle}) {

    return <div className={styles.navbarContainer}>
        <SidebarButton toggleSidebar={toggleSidebar}/>
        <div className={styles.clockAndWeather}>
            <div><Clock /></div>
            <div>14°C</div>
        </div>
        <h1 className={styles.header}>TaskManager</h1>
        <div className={styles.userSection}>
            <div className={styles.picture}></div>
            <div className={styles.user}>Selena</div>
            <div className={styles.arrow}></div>
        </div>
    </div>
}