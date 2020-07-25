import React from 'react';
import styles from './Messeges.module.css'
import Messege from './Messege';

export default function Messeges() {
    return(
        <div className={styles.mainContainer}>
                {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]. map(elem => {
                    return (<Messege />)
                })}
        </div>
    )
}