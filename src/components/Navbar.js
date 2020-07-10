import React from 'react'
import styles from './Navbar.module.css'
import SidebarButton from './SidebarButton'

export default function Navbar({toggleSidebar, toggle}) {
function ret(x) {
    return x
}
    return <div className={styles.navbarContainer}>
        <SidebarButton toggleSidebar={toggleSidebar}/>
<div>{toggle ? "true" : "false"}</div>
    </div>
}