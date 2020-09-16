import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import Task from './Task';
import styles from './TasksList.module.css'
 function TasksList({ isAllChecked, taskList, handleDeletePopup, handleDetailsPopup}: any): any {


    return <div className={styles.tasksListContainer}>
      {(!taskList.length) ? <div>BRAK TASKOW</div> : taskList.map((task: any) => {
          console.log("TASKlist TASK", task)
          return (
              <Task isAllChecked={isAllChecked} task={task} handleDeletePopup={handleDeletePopup} handleDetailsPopup={handleDetailsPopup}/>
          )
      })}
    </div>
}
const mapStateToProps = (state: any): any => {
    return {
        searchFilterField: state.searchFilterField
    }
}
export default connect(mapStateToProps)(TasksList)