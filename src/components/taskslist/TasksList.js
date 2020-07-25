import React, { useEffect, useState } from 'react';
import Task from './Task';
import styles from './TasksList.module.css'
export default function TasksList({taskList, handleDeletePopup, handleDetailsPopup, searchValue}) {
    let [validateTaskList, setValidateTaskList] = useState(taskList)
    useEffect(()=>{
        console.log(searchValue)
        setValidateTaskList([])
        taskList.forEach(task =>  task.task.match(new RegExp(searchValue) && setValidateTaskList([task])))

    },[ searchValue])
    return <div className={styles.tasksListContainer}>
      {validateTaskList.length>0 && validateTaskList.map((task) => {
          console.log("TASKlist TASK", task)
          return (
              <Task task={task} handleDeletePopup={handleDeletePopup} handleDetailsPopup={handleDetailsPopup}/>
          )
      })}
    </div>
}