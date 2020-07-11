import React, { useState } from 'react';
import styles from './Register.module.css';
import firebase from '../../../firebase/firebase'
import Login from './Login';
import TextInput from './Inputs/TextInput';
import FileInput from './Inputs/FileInput';

export default function Register() {
const [user, setUser] = useState({email : '', password: ""});

    function handleChange(e) {
        setUser({...user, [e.target.name]: e.target.value})
    }
    function handleSubmit(e) {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(e => {
            console.log("ERROR", e)
        })

    }
    return <div className={styles.mainDiv}>
      <h1 className={styles.header}>REGISTER FORM</h1>
        <form className={styles.form}>
            <TextInput type="email" placeholder="email" onChange={handleChange} name="email"/>
            <TextInput type="password" placeholder="password" onChange={handleChange} name="password"/>
            <TextInput placeholder="ResetPassword" type="password"/>
            <TextInput placeholder="Name" backgroundImage='url("../../../../icons/delete.png")'/>
            <TextInput placeholder="Surname"/>
            <TextInput placeholder="Nickname"/>
            <FileInput />
            <TextInput placeholder="Telephone"/>
            <TextInput placeholder="City"/>
            <TextInput placeholder="Country"/>
            <textarea  placeholder="opis"/>
            <button type="submit" onClick={handleSubmit}>REGISTER</button>
        </form>
    </div>
}