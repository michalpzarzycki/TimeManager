import React from 'react';
import {formatDistance} from 'date-fns'
import styles from './TaskDeadline.module.css'

export default function TaskDeadline({task}: any) {
    return(
        <div className={styles.deadline}>
            {task.deadline && formatDistance(new Date(task.deadline), Date.now(),{ addSuffix: true })}
        </div>
    )
}