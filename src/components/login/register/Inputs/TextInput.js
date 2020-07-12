import React from 'react';
import styles from './TextInput.module.css'


export default function TextInput({value,placeholder="Please, set placeholder", type="text", handleChange, name="", error=false}) {
    return(
        <div className={styles.mainDiv}>
        <span className={styles.inputContainer}>
        <input className={error ? styles.inputError : styles.input} type={type} placeholder={placeholder} onChange={handleChange} name={name} value={value}/>
        <label style={{ display:"block",minWidth:"100px", minHeight:"20px", color:"red"}}>{error.length>1 ? error : ""}</label>
        </span>
        </div>
    )
}