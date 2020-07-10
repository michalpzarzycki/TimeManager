import React from 'react'
import styles from './Task.module.css'
export default function Task() {
    return <div className={styles.tasksInfoBarContainer}>
    <div className={styles.checkbox}>
        <input type="checkbox"/>
    </div>
    <div className={styles.id}>ID</div>
    <div className={styles.avatar}></div>
    <div className={styles. title}>TYTUL</div>
    <div className={styles.importance}>WAZNOSC</div>
    <div className={styles.deadline}>{Date.now()}</div>
    <div className={styles.buttons}>
        <div className={styles.details}></div>
        <div className={styles.edit}></div>
        <div className={styles.delete}></div>
    </div>
</div>
}