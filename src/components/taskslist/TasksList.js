import React from 'react';
import Task from './Task';
import styles from './TasksList.module.css'
export default function TasksList() {
    return <div className={styles.tasksListContainer}>
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
    </div>
}