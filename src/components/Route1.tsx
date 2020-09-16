/* eslint-disable */

import React, { useState, useEffect } from 'react';
import styles from './Route1.module.css'
import FilterBar from './taskslist/FilterBar';
import TasksList from './taskslist/TasksList';
import TasksInfoBar from './taskslist/TasksInfoBar';
import { withRouter, Route } from 'react-router-dom';
import uniqid from 'uniqid'
import AddPopup from './taskslist/AddPopup';
import DeletePopup from './taskslist/DeletePopup';
import Details from './taskslist/Details';
import SearchInput from './SearchInput';
import Route1Charts from '../components/charts/Route1Charts'
import route1Service from '../services/route1Service'
interface ITask {
    id?: any,
    photo?: any,
    task?: any,
    importance?: any,
    deadline: any
}


function Route1({ user }: any) {
    let [popup, setPopup] = useState<any>(false)
    let [deletePopup, setDeletePopup] = useState<any>(false)
    const [task, setTask] = useState<ITask>({
        id: "",
        photo: "",
        task: "",
        importance: "1",
        deadline: ""
    })
    const [taskList, setTaskList] = useState<any[]>([])
    const [tasksArray, setTasksArray] = useState([])
    const [uniqueId, setUniqueId] = useState(uniqid())
    const [currUser, setCurrUser] = useState('')
    const [isEdited, setIsEdited] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [detailsPopup, setDetailsPopup] = useState(false)
    const [taskToDelete, setTaskToDel] = useState("")
    const [taskDetails, setTaskDetails] = useState("")
    const [searchValue, setSearchValue] = useState<any>("")
    const [file, setFile] = useState({});
    const [isAllChecked, setIsAllChecked] = useState< any | never>(false);

    useEffect(() => {
        let unsubscribe: any;
        if (user) {
            unsubscribe = route1Service.getUserTasksSnapshot(user.id).then((arr: any) => {
                setTaskList([...arr])
            })  
        }
        return () => user && unsubscribe()
    }, [user])

    function searchValueSetter(value: any): void {
        setSearchValue(value)
    }
    function handlePopup() {
        setPopup(!popup)
    }
    function handleDeletePopup(taskId: any) {
        setDeletePopup(!deletePopup)
        setTaskToDel(taskId)
    }
    function handleChange(event: any, name: any = '') {
        if (name === 'deadline') {
            let x = new Date(event)

            setTask({ ...task, 'deadline': x.getTime() })
        } else {
            setTask({ ...task, [event.target.name]: event.target.value })
        }


    }
    function handleSubmit(e: any) {
        e.preventDefault()
        setIsLoading(true)
        setUniqueId(uniqid())

        let createdTask =  { dataId: uniqueId,
        userId: user.uid,
        id: uniqueId,
        photo: task.photo,
        task: task.task,
        importance: task.importance,
        deadline: task.deadline,
        done: false,
        keyword: task.task.toLowerCase().split(" ")
        }
        route1Service.createTask(uniqid, createdTask).then(() => {
            setTimeout(() => {
                setIsLoading(false)
                setIsEdited(true)
            }, 1000)
        })
    }
    const handleDelete = () =>  route1Service.deleteTask(taskToDelete)

    function handleDetailsPopup(task: any) {
        setDetailsPopup(!detailsPopup)
        console.log("UUU", task)
        setTaskDetails(task)

    }
    // function handleAllChecked(e: any) {
    //     e.target.checked ? setIsAllChecked(true) : setIsAllChecked(false)
    // }


    return (
        <div className={styles.route1Container}>
            <div className={detailsPopup ? styles.deletePopupContainer : styles.none}>
                <Details taskDetails={taskDetails} />
            </div>
            <div className={deletePopup ? styles.deletePopupContainer : styles.none}>
                <DeletePopup handleDeletePopup={handleDeletePopup} handleDelete={handleDelete} />
            </div>
            <section className={popup ? styles.createTaskPopup : styles.none}>
                <AddPopup
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    isLoading={isLoading}
                    isEdited={isEdited}
                    isPopup={popup}
                    handlePopup={handlePopup} />
            </section>
            <Route1Charts user={user} />
            <section className={styles.route1TasksNav}>
                <SearchInput />
                <div className={styles.route1TasksNav_createDiv}>
                    <button onClick={handlePopup} className={styles.route1TasksNav_createDiv_button}>Create Task</button>
                </div>
            </section>
            <section className={styles.route1TasksSection}>
                <FilterBar />
                <div className={styles.route1TaskSectionTasks}>
                    <TasksInfoBar handleAllChecked={()=>{}} />
                    {/* <TasksList  
                        isAllChecked={isAllChecked} 
                        taskList={taskList}  
                        handleDeletePopup={handleDeletePopup} 
                        handleDetailsPopup={handleDetailsPopup}/> */}
                </div>
            </section>
        </div>)
}


export default withRouter(Route1)