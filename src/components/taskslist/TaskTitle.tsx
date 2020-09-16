import React from 'react';
import styles from './TaskTitle.module.css'

export default function TaskTitle({task}: any) {
    return(
        <div className={styles.title}>{task.task}</div>
    )
}