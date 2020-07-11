import React, {useState} from 'react';
import firebase from '../../../firebase/firebase'
import TextInput from './Inputs/TextInput';
import styles from './Login.module.css'

export default function Login({isLoggedIn}) {
    const [user, setUser] = useState({email : '', password: ""});
    firebase.auth().onAuthStateChanged(user => {
        console.log("USER", user)
    })
    function handleChange(e) {
        setUser({...user, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log()
        firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(() => {
            console.log("SUCCESS")
            isLoggedIn(user)
            setUser(true)
        }).catch(e => {
            console.log("ERROR", e)
        })
    
    }

    function handleSignOut() {
        firebase.auth().signOut().then(() => {
            console.log("SignOutSuccf")
        })
        .catch(() => {
            console.log("EROORSIGNOUT")
        })
    }
 
    return <div className={styles.mainDiv}>
        <div className={styles.leftSide}>
            <div className={styles.leftSideUserDiv}>
                <div className={styles.leftSideUserDivHeader}>USERS</div>
                <div className={styles.leftSideUserDivUsers}>
                    <div className={styles.user1}></div>
                    <div className={styles.user2}></div>
                    <div className={styles.user3}></div>
                </div>
            </div>
        </div>
        <form className={styles.form}>
            <TextInput type="email" placeholder="email" />
            <TextInput type="password" placeholder="password" />
            <button onClick={handleSubmit}>ENTER</button>
            <button onClick={handleSignOut}>SIGNOUT</button>
        </form>
       

    </div>
}