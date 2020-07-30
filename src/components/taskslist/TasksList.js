import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import Task from './Task';
import styles from './TasksList.module.css'
 function TasksList({taskList, handleDeletePopup, handleDetailsPopup, searchFilterField}) {


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