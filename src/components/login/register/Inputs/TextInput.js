import React from 'react';
import styles from './TextInput.module.css'


export default function TextInput({placeholder="Please, set placeholder", type="text"}) {
    return(
        <div className={styles.mainDiv}>
        <span className={styles.inputContainer}>
        <input className={styles.input} type={type} placeholder={placeholder} />
        </span>
        </div>
    )
}