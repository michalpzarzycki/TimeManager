import React, {useState, useEffect} from 'react';
import {db} from '../../firebase/firebase';
import styles from './AddEditPopup.module.css';
import DatePicker from "react-datepicker";
import { storage } from '../../firebase/firebase';
import uniquid from 'uniqid'
import TextInput from '../login/register/Inputs/TextInput';


export default function AddPopup({task, handleChange, handleSubmit, isLoading, isEdited}) {
    
    
    let [popup, setPopup] = useState(false);
    const [editedTask, setEditedTask] = useState("")
    const [editedDeadline, setEditedDeadline] = useState("")
    const [editedImportance, setEditedImportance] = useState("")
    const [editedPhoto, setEditedPhoto] = useState("")
    let [time, setTime] = useState('')
 

    function handelFile(event) {
        console.log("IDID", uniquid())
        console.log("filr", event.target.files[0])
        let file = event.target.files[0]
        storage.ref().child(`files/${event.target.files[0].name}`).put(file).then(() => {
            console.log("POSZEDL")
        }).catch(
            console.log("NIE POSZEDL")
        )

    }

    return(<>
        <div className={isLoading ? styles.loader : ''}>
        <span className={isLoading ? styles.loadIcon : ''}></span>
    </div>
    <div className={true ? styles.popup : styles.none}>
    <h1><span className={isEdited ? styles.editSuccess : styles.edit}></span>Create Task</h1>
        <div className={styles.closePopup} onClick={() => setPopup(false)}></div>
        <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputContainer}>
                        <span className={styles.label}>Task</span>
                        <span className={styles.inputBox}>
                            <span className={styles.icon}></span>
                            <input type="text" name='task' placeholder="Your task" onChange={handleChange}/>
                        </span>
                    </div>
                    <div className={styles.inputContainer}>
                        <span className={styles.label}>Task</span>
                        <span className={styles.inputBox}>
                            <span className={styles.icon}></span>
                            {/* <input type="text" name='task' placeholder="Your task" onChange={handleChange}/> */}
                            <select name="importance" onChange={handleChange}>
                                <option value='1'>Normal</option>
                                <option value='2'>Important</option>
                                <option value='3'>Very important</option>
                            </select>
                        </span>
                    </div>
                    <div className={styles.inputContainer}>
                        <span className={styles.label}>Task</span>
                        <span className={styles.inputBox}>
                            <span className={styles.icon}></span>
                            <DatePicker 
                                selected={time}
                                minDate={Date.now()}
                                customInput={<TextInput value={time} onChange={() => handleChange} />}
                                name='deadline'
                                onChange={(e) => {
                                    handleChange(e, 'deadline')
                                    let x = new Date(e)
                                    setTime(x)
                                }}
                                
                            />
                        </span>
                    </div>
                    {/* <div className={styles.inputContainer}>
                        <span className={styles.label}>Task</span>
                        <span className={styles.inputBox}>
                           <input type="file" placeholder="Add file" id="file" onChange={handleChange}/>
                        </span>
                    </div> */}
              
            <div className={styles.buttonContainer}>
                <p className={isEdited ? styles.isEdited : ''}>Ready? Vamos =></p>
                <button type="submit">SUBMIT</button>
            </div>
           
        </form>
        
    </div>
    </>
)
}