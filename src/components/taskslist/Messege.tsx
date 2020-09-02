import React from 'react';
import { formatDistanceToNow } from 'date-fns'
import styles from './Messege.module.css'

export default function Messege({messege}: any) {
    return(
        <div className={styles.messegeContainer}>
            <div className={styles.messegeElements}>
                <div className={styles.userImage}></div>
                <div className={styles.messegeAndDate}>
                    <div className={styles.messege}>
                     <div>{messege.message}</div>
                     </div>
                     <div className={styles.date}>Sended {formatDistanceToNow(messege.date, {addSuffix: true})}</div>
                </div>
            
            </div>
        </div>
    )
}