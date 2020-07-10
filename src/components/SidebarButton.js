import React from 'react';
import styles from './SidebarButton.module.css'

export default function SidebarButton({toggleSidebar}) {
    return <div 
    className={styles.sidebarButtonContainer}
    onClick = {() => {
        console.log(toggleSidebar())
    }}>
        <div className={styles.sidebarButtonBox}>
            HELLO
        </div>
    </div>
}