import React, { useState } from 'react';
import styles from './DarkMode.module.css';
import ToggleSwitch from './ToggleSwitch';

export default function DarkMode() {
    const [toggle, setToggle] = useState<boolean>(false)
    function handleToggle() {
        setToggle(!toggle)
        console.log("TOGGLE", toggle)
    }
    return(
        <div className={styles.mainDiv}>
                <h1>DARK MODE</h1>
                <div className={styles.toggleBox}>
                    <ToggleSwitch handleToggle={handleToggle}/>
                </div>
                <div className={toggle ? styles.toggleIconMoon : styles.toggleIconSun}></div>
        </div>
    )
}