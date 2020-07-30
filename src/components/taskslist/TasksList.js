import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import Task from './Task';
import styles from './TasksList.module.css'
 function TasksList({taskList, handleDeletePopup, handleDetailsPopup, searchFilterField}) {
    let [validateTaskList, setValidateTaskList] = useState(taskList)
    useEffect(()=>{
        console.log("SEARCH FILTER Z TASKA", searchFilterField)
        setValidateTaskList([])
        taskList.forEach(task =>  {
            task.task.match(new RegExp(searchFilterField, 'gi') && setValidateTaskList([...validateTaskList, task]))
            console.log("Miecho",checkTask(task.task, searchFilterField))
            let liczba = checkTask(task.task, searchFilterField)
            console.log("LICZBA", liczba)
        })
        console.log("FILTROWANA", validateTaskList)
    },[searchFilterField])
    function checkTask(taskName, str) {
        var pattern = str.split("").map((x)=>{
            return `(?=.*${x})`
        }).join("");
        console.log("PATTERN", pattern, taskName)
        var regex = new RegExp(`${pattern}`, "g")
        return taskName.match(regex);
    }

    return <div className={styles.tasksListContainer}>
      { taskList.map((task) => {
          console.log("TASKlist TASK", task)
          return (
              <Task task={task} handleDeletePopup={handleDeletePopup} handleDetailsPopup={handleDetailsPopup}/>
          )
      })}
    </div>
}
const mapStateToProps = state => {
    return {
        searchFilterField: state.searchFilterField
    }
}
export default connect(mapStateToProps)(TasksList)