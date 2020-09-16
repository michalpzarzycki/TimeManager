import React from 'react';
import styles from './TaskDone.module.css';

export default function TaskDone({task, setDoneTask, setUncompletedTask}: any) {
    return (<>
        <div className={styles.id}>
            {task.done ? <button onClick={() => setDoneTask(task)}>DONE</button> : <button onClick={() => setUncompletedTask(task)}>Not done</button>}
        </div>
        <div className={task.done ? styles.done : styles.notDone}></div>
        </>
    )
}