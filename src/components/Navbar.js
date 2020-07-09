import React from 'react'
import styles from './Navbar.module.css'
import SidebarButton from './SidebarButton'

export default function Navbar() {
    return <div className={styles.navbarContainer}>
        <SidebarButton />
        <div>NAVBAR</div>
    </div>
}