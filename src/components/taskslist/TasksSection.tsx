import React from 'react';
import TasksInfoBar from './TasksInfoBar';
import Task from './Task';
import styles from './TasksSection.module.css'

export default function TasksSection({ taskList, handleDeletePopup, isAllChecked, handleDetailsPopup}: any) {
    return(
        <section className={styles.route1TasksSection}>
        <div className={styles.route1TaskSectionTasks}>
            <TasksInfoBar handleAllChecked={() => { }} />
            <div className={styles.tasksListContainer}>
                {(!taskList.length) ?
                    <div>BRAK TASKOW</div>
                    : taskList.map((task: any) => <Task isAllChecked={isAllChecked} task={task} handleDeletePopup={handleDeletePopup} handleDetailsPopup={handleDetailsPopup} />)}
            </div>
        </div>
    </section>
    )
} 