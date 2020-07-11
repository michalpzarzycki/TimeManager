import React from 'react';
import styles from './TasksInfoBar.module.css'

export default function TasksInfoBar() {
    return <div className={styles.tasksInfoBarContainer}>
        <div className={styles.checkbox}>
        <input type="checkbox"/>
        </div>
        <div className={styles.id}>ID</div>
        <div className={styles.avatar}></div>
        <div className={styles.title}>TYTUL</div>
        <div className={styles.importance}>WAZNOSC</div>
        <div className={styles.deadline}>DEADLINE</div>
        <div className={styles.buttons}>BUTTONS</div>
    </div>
}