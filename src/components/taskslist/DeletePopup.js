import React from 'react';
import styles from './DeletePopup.module.css'

export default function DeletePopup({handleDeletePopup, handleDelete}) {

    return(
       
            <div className={styles.formContainer}>
                <h1 className={styles.question}>Are you sure that you want to delete that task?</h1>
                <div className={styles.buttonsDiv}>
                    {/* <button className={styles.yesButton} onClick={() => handleDelete(task.id)}>Yes</button> */}
                    <button className={styles.noButton} onClick={handleDeletePopup}>No</button>
                </div>
            </div>
     
    )
}