import React from 'react';
import styles from './TaskEditPopup.module.css';

export default function TaskEditPopup({handleChange, isEdited, popup, setPopup, handleSubmit}: any) {
    return(
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
                <p className={isEdited ? styles.isEdited : ''}>Everything's edited properly?</p>
                <button type="submit">SUBMIT</button>
            </div>
        </form>
    </div>
    ) 
}