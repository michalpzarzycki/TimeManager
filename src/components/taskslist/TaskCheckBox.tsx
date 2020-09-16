import React from 'react';
import styles from './TaskCheckBox.module.css'
export default function TaskCheckBox({ task, handleChecked }: any) {
    return (
    <div className={styles.checkbox}>
        <input type="checkbox" checked={task.done} name="997" onClick={() => handleChecked(task)} />
    </div>)

}