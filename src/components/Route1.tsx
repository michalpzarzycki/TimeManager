
import React, { useState, useEffect } from 'react';
import styles from './Route1.module.css'
import { withRouter } from 'react-router-dom';
import uniqid from 'uniqid'
import AddPopup from './taskslist/AddPopup';
import DeletePopup from './taskslist/DeletePopup';
import Details from './taskslist/Details';
import Route1Charts from '../components/charts/Route1Charts'
import route1Service from '../services/route1Service'
import SearchOrCreateTask from './taskslist/SearchOrCreateTask';
import TasksSection from './taskslist/TasksSection';
import { connect } from 'react-redux';
import { defaults } from 'react-chartjs-2';
import {getTasksRequest, getTasksSuccess, getTasksFailure} from '../redux/action'
import {DARK_ROUTE1, LIGHT_ROUTE1} from '../variables'
const { darkBackground, darkColor} = DARK_ROUTE1;
const { lightBackground, lightColor} = LIGHT_ROUTE1
interface ITask {
    id?: any,
    photo?: any,
    task?: any,
    importance?: any,
    deadline: any
}


function Route1({ user, darkMode, fontFamily, setTasksToStore, tasks }: any): any {
    const [popup, setPopup] = useState<any>(false)
    const [deletePopup, setDeletePopup] = useState<any>(false)
    const [task, setTask] = useState<ITask>({
        id: "",
        photo: "",
        task: "",
        importance: "1",
        deadline: ""
    })
    const [taskList, setTaskList] = useState<any[]>([])
    const [uniqueId, setUniqueId] = useState(uniqid())
    const [isEdited, setIsEdited] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [detailsPopup, setDetailsPopup] = useState(false)
    const [taskToDelete, setTaskToDel] = useState("")
    const [taskDetails, setTaskDetails] = useState("")
    const [isAllChecked] = useState<any | never>(false);

    useEffect(() => {
        let unsubscribe: any;
        if (user) unsubscribe = route1Service.getUserTasksSnapshot(user.email, setTasksToStore)
        // return () => user && unsubscribe()
    }, [user])
useEffect(() => {
    if(tasks.tasks) setTaskList(tasks.tasks)

}, [tasks])
    useEffect(() => {
        darkMode ? defaults.scale.gridLines.color = "#white" : defaults.scale.gridLines.color = "grey"
        darkMode ? defaults.global.defaultFontColor='white' : defaults.global.defaultFontColor='grey';
        darkMode ? defaults.global.tooltips.titleFontColor='white' : defaults.global.tooltips.titleFontColor='grey';
        defaults.global.defaultFontFamily=fontFamily
    }, [darkMode])
    const handlePopup = () => setPopup(!popup)

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
        route1Service.createTask({
            dataId: uniqueId,
            user: user.email,
            id: uniqueId,
            photo: task.photo,
            task: task.task,
            importance: task.importance,
            deadline: task.deadline,
            done: false,
            keyword: task.task.toLowerCase().split(" ")
        }).then(() => {
            setTimeout(() => {
                setIsLoading(false)
                setIsEdited(true)
            }, 1000)
        })
    }
    const handleDelete = () => route1Service.deleteTask(taskToDelete)

    function handleDetailsPopup(task: any) {
        setDetailsPopup(!detailsPopup)
        setTaskDetails(task)
    }


    return (
        <div className={styles.route1Container} style={{backgroundColor: darkMode ? darkBackground : lightBackground}}>
            <Details 
                taskDetails={taskDetails} 
                detailsPopup={detailsPopup} 
            />
            <DeletePopup 
                handleDeletePopup={handleDeletePopup} 
                handleDelete={handleDelete} 
                deletePopup={deletePopup} 
            />
            <AddPopup
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                isLoading={isLoading}
                isEdited={isEdited}
                isPopup={popup}
                handlePopup={handlePopup}
            />
            <Route1Charts user={user} />
            <SearchOrCreateTask handlePopup={handlePopup} />
            <TasksSection 
                taskList={taskList} 
                handleDeletePopup={handleDeletePopup} 
                isAllChecked={isAllChecked} 
                handleDetailsPopup={handleDetailsPopup} 
            />
        </div>)
}

const mapStateToProps = (state: any) => {
    return {
        darkMode: state.darkmode,
        fontFamily: state.fontfamily,
        tasks: state.tasks

    }
}
const mapDispatchToProps = (dispatch: any) => {
    return{
     setTasksToStore: (data: any) => {
        dispatch(getTasksRequest([]))
        if(data) {
            dispatch(getTasksSuccess(data))
        } else {
            dispatch(getTasksFailure([]))
        }
    }
}
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Route1))