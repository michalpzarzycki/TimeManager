import React, { useState, useEffect } from 'react';
import styles from './Route1.module.css'
import SecondChart from './charts/SecondChart';
import ThirdChart from './charts/ThirdChart';
import FirstChart from './charts/FirstChart';
import FilterBar from './taskslist/FilterBar';
import TasksList from './taskslist/TasksList';
import TasksInfoBar from './taskslist/TasksInfoBar';
import { withRouter, Route } from 'react-router-dom';
import uniqid from 'uniqid'
import firebase, {db} from '../firebase/firebase'
import {useAuth} from '../hooks/useAuth'
import AddEditPopup from './taskslist/AddEditPopup';
import DeletePopup from './taskslist/DeletePopup';
import Details from './taskslist/Details';
import SearchInput from './SearchInput';



function Route1({user}) {
    let [popup, setPopup] = useState(false)
    let [deletePopup, setDeletePopup] = useState(false)
    const [task, setTask] = useState({
        id:"",
        photo:"",
        task:"",
        importance:"",
        deadline:""
    })
    const [taskList, setTaskList] = useState([])
    const [tasksArray,setTasksArray] = useState([])
    let [uniqueId, setUniqueId] = useState(uniqid())
    let [currUser, setCurrUser] = useState('')
    let [isEdited, setIsEdited] = useState(false)
    let [isLoading, setIsLoading] = useState(false)
    let [detailsPopup, setDetailsPopup] = useState(false)
    let [taskToDelete, setTaskToDel] = useState("")
    let [taskDetails, setTaskDetails] = useState("")
    let [searchValue, setSearchValue] = useState("")
   
 
    useEffect(()=>{
        console.log("CURRUSER", user)
        console.log("USERID", user.uid)
        console.log("ROUTER!", user.uid)
        db.collection("tasks").where("userId", "==", `${user.uid}`)
    .onSnapshot(function(querySnapshot) {
            let arr=[]
        querySnapshot.forEach(function(doc) {
            arr.push()
            arr.push({...doc.data(), docId: doc.id})
        });

       setTaskList([...arr])
    });
          
    }, [user])
    function searchValueSetter(value) {
        setSearchValue(value)
    }
    function handlePopup() {
        setPopup(!popup)
        console.log("USER INFO",db.collection('users').get().then(x => {
       
        }))
    }
    function handleDeletePopup(taskId) {
        setDeletePopup(!deletePopup)
        console.log("handle delete")
        setTaskToDel(taskId)
    }
    function handleChange(event) {
        setTask({...task, [event.target.name]:event.target.value})
        console.log("TASK", task)
        console.log("UNIQ", uniqid())
    }
    function handleSubmit(e) {  
        e.preventDefault() 
        setIsLoading(true)
        const tasksRef = db.collection('tasks');
        setUniqueId(uniqid())
        tasksRef.doc(`${uniqueId}`).set({
            dataId: uniqueId,
            userId: user.uid,
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
            } ,1000)
        })
  
        
        }       
        function handleDelete() {
            console.log("DOC ID", taskToDelete)
            db.collection('tasks').doc(taskToDelete).delete().then(() => {
                console.log("Deleted complete")
            }).catch(err => {
                console.log("Erroro", err)
            }).then(() => {
                setDeletePopup(false)
            })
        }
 function handleDetailsPopup(task) {
        setDetailsPopup(!detailsPopup)
        console.log("UUU", task)
        setTaskDetails(task)
    
 }

 
    
    return <div className={styles.route1Container}>
          <div className={detailsPopup ? styles.deletePopupContainer : styles.none}>
            <Details taskDetails={taskDetails}/>
        </div>
        <div className={deletePopup ? styles.deletePopupContainer : styles.none}>
        <DeletePopup handleDeletePopup={handleDeletePopup} handleDelete={handleDelete}/>
        </div>
                   

    <section className={popup ? styles.createTaskPopup : styles.none}>
        
        <AddEditPopup 
            names={['task', 'deadline', 'importance', 'photo']}
            placeholders={['Your task', 'Deadline', 'Importance', 'Photo URL']} 
            title={"Add Task"} 
            description={"Let's save it ! =>"}
            labels={["Task", "Deadline", "Importance", "Photo"]}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            isEdited={isEdited}/>
    </section>
        <section className={styles.route1Charts}>
            <div className={styles.route1ChartFirst}><FirstChart userId={user.uid}/></div>
            <div className={styles.route1ChartSecond}><SecondChart  userId={user.uid}/></div>
            <div className={styles.route1ChartThird}><ThirdChart userId={user.uid}/></div>
        </section>
        <section className={styles.route1TasksNav}>
    ><SearchInput searchValueSetter={searchValueSetter}/>
            <div className={styles.route1TasksNav_createDiv}>
                <button onClick={handlePopup} className={styles.route1TasksNav_createDiv_button}>Create Task</button>
            </div>
        </section>
        <section className={styles.route1TasksSection}>
            <FilterBar />
            <div className={styles.route1TaskSectionTasks}>
                <TasksInfoBar />
                <TasksList taskList={taskList} searchValue={searchValue} handleDeletePopup={handleDeletePopup} handleDetailsPopup={handleDetailsPopup}/>
            </div>
        </section>
    </div>
} 


export default withRouter(Route1)