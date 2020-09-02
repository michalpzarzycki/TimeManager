import React from 'react';
import styles from './Messege.module.css'

export default function Messege() {
    return(
        <div className={styles.mainContainer}>
            <div className={styles.photo}></div>
            <div className={styles.messege}>MESSEGE</div>
        </div>
    )
}