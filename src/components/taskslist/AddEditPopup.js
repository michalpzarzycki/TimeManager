import React, {useState, useEffect} from 'react';
import {db} from '../../firebase/firebase';
import styles from './AddEditPopup.module.css';

export default function AddEditPopup({task, names, placeholders, title, description, labels, handleChange, handleSubmit, isLoading, isEdited}) {
    
    
    let [popup, setPopup] = useState(false);
    const [editedTask, setEditedTask] = useState("")
    const [editedDeadline, setEditedDeadline] = useState("")
    const [editedImportance, setEditedImportance] = useState("")
    const [editedPhoto, setEditedPhoto] = useState("")
 



    return(<>
        <div className={isLoading ? styles.loader : ''}>
        <span className={isLoading ? styles.loadIcon : ''}></span>
    </div>
    <div className={true ? styles.popup : styles.none}>
    <h1><span className={isEdited ? styles.editSuccess : styles.edit}></span>{title}</h1>
        <div className={styles.closePopup} onClick={() => setPopup(false)}></div>
        <form onSubmit={handleSubmit} className={styles.form}>
         {names.map((name, index) => {
             return(
                <div className={styles.inputContainer}>
                <span className={styles.label}>{labels[index]}</span>
                <span className={styles.inputBox}>
                    <span className={styles.icon}></span>
                    <input type="text" name={name} placeholder={placeholders[index]} onChange={handleChange}/>
                </span>
            </div>
             )
         })}   
            <div className={styles.buttonContainer}>
                <p className={isEdited ? styles.isEdited : ''}>{description}</p>
                <button type="submit">SUBMIT</button>
            </div>
           
        </form>
        
    </div>
    </>
)
}