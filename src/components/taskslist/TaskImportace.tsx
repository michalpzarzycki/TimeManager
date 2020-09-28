import React from 'react';
import styles from './TaskImportance.module.css';

export default function TaskImportance({task}: any) {
    return(
        <div className={styles.importance}>{
            (task.importance===1 && "normal") ||
            (task.importance===2 && "important") ||
            (task.importance===3 && "very important")
        }</div>
    )
}