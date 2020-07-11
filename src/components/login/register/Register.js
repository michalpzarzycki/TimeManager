import React, { useState } from 'react';
import styles from './Register.module.css';
import firebase from '../../../firebase/firebase'

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
        <form>
            <input type="email" placeholder="email" onChange={handleChange} name="email"/>
            <input type="password" placeholder="password" onChange={handleChange} name="password"/>
            <button type="submit" onClick={handleSubmit}>REGISTER</button>
        </form>
    </div>
}