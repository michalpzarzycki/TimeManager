import React, { useState } from 'react'
import styles from './Task.module.css'
import TaskEditPopup from './TaskEditPopup';
import TaskEditButtons from './TaskEditButtons';
import TaskDeadline from './TaskDeadline';
import TaskImportance from './TaskImportace';
import TaskCheckBox from './TaskCheckBox';
import TaskTitle from './TaskTitle';
import TaskDone from './TaskDone';
import TaskLoader from './TaskLoader';
import route1Service from '../../services/route1Service';
import { connect } from 'react-redux';
import {DARK_ROUTE1, LIGHT_ROUTE1} from '../../variables'
const { darkBackground, darkColor} = DARK_ROUTE1;
const { lightBackground, lightColor} = LIGHT_ROUTE1

function Task({ task, handleDeletePopup, handleDetailsPopup, darkMode }: any) {
    const [popup, setPopup] = useState(false);
    const [editedTask, setEditedTask] = useState("")
    const [editedDeadline, setEditedDeadline] = useState("")
    const [editedImportance, setEditedImportance] = useState("")
    const [editedPhoto, setEditedPhoto] = useState("")
    const [isEdited, setIsEdited] = useState(false)
    const [isLoading, setIsLoading] = useState(false)


    const handleEdit = () => setPopup(true)

    function handleChange(event: any) {
        if (event.target.name === 'task') setEditedTask(event.target.value)
        if (event.target.name === 'importance') setEditedImportance(event.target.value)
        if (event.target.name === 'deadline') setEditedDeadline(event.target.value)
        if (event.target.name === 'photo') setEditedPhoto(event.target.value)
    }
    function handleSubmit(event: any) {
        event.preventDefault()
        setIsLoading(true)
        route1Service.editTask(task.docId, { task: editedTask, deadline: editedDeadline, importance: editedImportance, photo: editedPhoto})
                     .then(() => {
                            setTimeout(() => {
                                setIsLoading(false)
                            }, 1000)
                            setTimeout(() => {
                                setIsEdited(false)
                            }, 6000)
                            setIsEdited(true) })  
                     .catch(() => {
                            setTimeout(() => {
                                setIsLoading(false)
                            }, 1000)
                            setTimeout(() => {
                                setIsEdited(false)
                            }, 6000)
        })

    }
    const handleChecked = (task: any) => route1Service.changeDoneTask(task.docId, task.done)
    
    const setDoneTask = (task: any) => route1Service.setTaskCompleted({...task, doneDate: Date.now()}, task.docId)
    
    const setUncompletedTask = (task: any) => route1Service.setTaskUncompleted({...task, uncompletedDate: Date.now()}, task.docId)

    return <div className={styles.tasksInfoBarContainer} style={{backgroundColor: darkMode ? darkBackground : lightBackground, borderColor: darkMode ? darkColor : lightColor}}>
                <TaskLoader 
            j         isLoading={isLoading} />
                <TaskEditPopup
                    handleChange={handleChange}
                    isEdited={isEdited}
                    popup={popup}
                    setPopup={setPopup}
                    handleSubmit={handleSubmit}/>
                <TaskCheckBox 
                    task={task} 
                    handleChecked={handleChecked} />
                <TaskDone  
                    task={task} 
                    setDoneTask={setDoneTask} 
                    setUncompletedTask={setUncompletedTask} />
                <TaskTitle 
                    task={task} />
                <TaskImportance 
                    task={task} />
                <TaskDeadline 
                    task={task} />
                <TaskEditButtons
                    handleDeletePopup={handleDeletePopup}
                    handleDetailsPopup={handleDetailsPopup}
                    handleEdit={handleEdit}
                    task={task} />
        </div>
}
const mapStateToProps = (state: any) => {
    return {
        darkMode: state.darkmode
    }
}
export default connect(mapStateToProps)(Task)