import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import Task from './Task';
import styles from './TasksList.module.css'
 function TasksList({taskList, handleDeletePopup, handleDetailsPopup, searchFilterField, isAllChecked, popup}) {


    return <div className={styles.tasksListContainer}>
      {!taskList.length>0 ? <div>BRAK TASKOW</div> : taskList.map((task) => {
          console.log("TASKlist TASK", task)
          return (
              <Task popup={popup} isAllChecked={isAllChecked} task={task} handleDeletePopup={handleDeletePopup} handleDetailsPopup={handleDetailsPopup}/>
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