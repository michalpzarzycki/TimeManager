import React, { useState, useEffect } from 'react'
import styles from './Task.module.css'
import { db } from '../../firebase/firebase'

export default function Task({task, handleDeletePopup, handleDetailsPopup}) {
    let [popup, setPopup] = useState(false);
    const [editedTask, setEditedTask] = useState("")
    const [editedDeadline, setEditedDeadline] = useState("")
    const [editedImportance, setEditedImportance] = useState("")
    const [editedPhoto, setEditedPhoto] = useState("")
    let [isEdited, setIsEdited] = useState(false)
    let [isLoading, setIsLoading] = useState(false)

    function handleEdit(elemId) {
        setPopup(true)
        console.log("Handle edit",elemId)

      


    }

function handleChange(event) {
    if(event.target.name ==='task') setEditedTask(event.target.value)
    if(event.target.name ==='importance') setEditedImportance(event.target.value)
    if(event.target.name ==='deadline') setEditedDeadline(event.target.value)
    if(event.target.name ==='photo') setEditedPhoto(event.target.value)

}
function handleSubmit(event) {
    event.preventDefault()
    setIsLoading(true)
    db.collection('tasks').doc(task.id).update({
        task: editedTask,
        deadline:editedDeadline,
        importance: editedImportance,
        photo:editedPhoto
    }).then(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
        setTimeout(() => {
            setIsEdited(false)
        }, 6000)
        console.log("SUCCESEDIT")
        setIsEdited(true)
    }).catch(error => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
        setTimeout(() => {
            setIsEdited(false)
        }, 6000)
        console.log("ERROR")
    })

}
function handleChecked(task) {
    db.collection('tasks').doc(task.dataId).update({
        done:!task.done
    }).then(() => {
    })
}

function setDoneTask(task) {
    let doneTask = {
        ...task,
        doneDate: Date.now()
    }
    console.log("TASKTASK", task)
    db.collection('doneTasks').add({...doneTask})

    db.collection('tasks').doc(task.docId).delete()
}

function setUncompletedTask(task) {
    let uncompletedTask = {
        ...task,
        uncompletedDate: Date.now()
    }
  
    db.collection('uncompletedTasks').add({...Task})

    db.collection('tasks').doc(task.docId).delete()
}

    return <div className={styles.tasksInfoBarContainer}>
        <div className={isLoading ? styles.loader : ''}>
            <span className={isLoading ? styles.loadIcon : ''}></span>
        </div>
        <div className={popup ? styles.popup : styles.none}>
            <h1><span className={isEdited ? styles.editSuccess : styles.edit}></span>EDIT TASK</h1>
            <div className={styles.closePopup} onClick={() => setPopup(false)}></div>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputContainer}>
                    <span className={styles.label}>Task</span>
                    <span className={styles.inputBox}>
                        <span className={styles.icon}></span>
                        <input type="text" name="task" placeholder="Task" onChange={handleChange}/>
                    </span>
                </div>
                <div className={styles.inputContainer}>
                    <span className={styles.label}>Deadline</span>
                    <span className={styles.inputBox}>
                        <span className={styles.icon}></span>
                        <input type="text" name="deadline" placeholder="Deadline" onChange={handleChange}/>
                    </span>
                </div>
                <div className={styles.inputContainer}>
                    <span className={styles.label}>Importance</span>
                    <span className={styles.inputBox}>
                        <span className={styles.icon}></span>
                        <input type="text" name="importance" placeholder="Importance" onChange={handleChange}/>
                    </span>
                </div>
                <div className={styles.inputContainer}>
                    <span className={styles.label}>Photo</span>
                    <span className={styles.inputBox}>
                        <span className={styles.icon}></span>
                        <input type="text" name="photo" placeholder="Photo" onChange={handleChange}/>
                    </span>
                </div>
                <div className={styles.buttonContainer}>
                    <p className={isEdited ? styles.isEdited : ''}>Everything's edited properly? -> </p>
                    <button type="sybmit">SUBMIT</button>
                </div>
               
            </form>
            
        </div>
    <div className={styles.checkbox}>
        <input type="checkbox" checked={task.done} onClick={() => handleChecked(task)}/>
    </div>
    <div className={styles.id}>
        {task.done ? <button onClick={() => setDoneTask(task)}>DONE</button> : <button onClick={() => setUncompletedTask(task)}>Not done</button>}
    </div>
    <div className={task.done ? styles.done : styles.notDone}></div>
    <div className={styles.title}>{task.task}</div>
    <div className={styles.importance}>WAZNOSC</div>
    <div className={styles.deadline}>{Date.now()}</div>
    <div className={styles.buttons}>
        <div className={styles.details} onClick={() => handleDetailsPopup(task)}></div>
        <div className={styles.edit} onClick={() => handleEdit(task.id)}></div>
        <div className={styles.delete} onClick={() => handleDeletePopup(task.id)}></div>
    </div>
</div>
}