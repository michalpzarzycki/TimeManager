import React from 'react';
import styles from './SidebarButton.module.css'

export default function SidebarButton({toggleSidebar, toggle} : any) {
    return <div 
    className={styles.sidebarButtonContainer}
    onClick = {() => toggleSidebar()}>
        <div className={!toggle ? styles.sideBarButtonBoxOpen : styles.sideBarButtonBoxClosed}>
            
        </div>
    </div>
}