import React from 'react';
import styles from './TaskEditButtons.module.css';

export default function TaskEditButtons({handleDeletePopup, handleDetailsPopup, handleEdit, task}: any) {
    return(
        <div className={styles.buttons}>
        <div className={styles.details} onClick={() => handleDetailsPopup(task)}></div>
        <div className={styles.edit} onClick={() => handleEdit(task.id)}></div>
        <div className={styles.delete} onClick={() => handleDeletePopup(task.id)}></div>
    </div>
    )
}