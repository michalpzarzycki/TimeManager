import React from 'react';
import styles from './Details.module.css'

export default function Details({taskDetails}: any) {

    return(
       
            <div className={styles.formContainer}>
                <div>
                    <div>{taskDetails.task}</div>
                </div>
            </div>
     
    )
}