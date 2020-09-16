import React from 'react';
import styles from './Details.module.css'

export default function Details({taskDetails, detailsPopup}: any) {

    return(
       <div className={detailsPopup ? styles.deletePopupContainer : styles.none}>
            <div className={styles.formContainer}>
                <div>
                    <div>{taskDetails.task}</div>
                </div>
            </div>
        </div>
     
    )
}