import React, { useState } from 'react';
import firebase from '../../../firebase/firebase'
import TextInput from './Inputs/TextInput';
import styles from './Login.module.css'
import { withRouter } from 'react-router-dom'
import Hexagon from '../../Hexagon';

function Login({ history, userIdSetter, userEmailSetter }: any) {
    interface IUser {
        email: string,
        password: string,
        name?: any
    }

    //State of user inputs from Login form
    const [user, setUser] = useState<IUser>({ email: "", password: "" })
    //Setter of inputs change
    const handleChange = (e: any) => setUser({ ...user, [e.target.name]: e.target.value })
    //Login form submit
    function handleSubmit(event: any) {
        event.preventDefault()
        firebase.auth().signInWithEmailAndPassword(user.email, user.password).then((x: any) => {
            userIdSetter(x.user.uid)
            userEmailSetter(x.user.email)
        }).catch(error => {
            console.log("OH NO, WE HAVE GOT AN ERROR ;(", error)
        })
        history.push("/")
    }


    function handleSignOut() {
        firebase.auth().signOut().then(() => {
            console.log("SignOutSuccf")
        })
            .catch(() => {
                console.log("EROORSIGNOUT")
            })
    }

    return (
        <div className={styles.mainDiv}>
            <section className={styles.leftSide}>
                <Hexagon />
            </section>
            <section className={styles.rightSide}>
                <form className={styles.form} onSubmit={handleSubmit} >
                    <TextInput type="email" placeholder="email" name="email" value={user.name} handleChange={handleChange} />
                    <TextInput type="password" placeholder="password" name="password" value={user.password} handleChange={handleChange} />
                    <button type="submit">ENTER</button>
                </form>
            </section>
        </div>)
}


export default withRouter(Login)



{/* <div className={styles.leftSideUserDiv}>
                <div className={styles.leftSideUserDivHeader}>USERS</div>
                <div className={styles.leftSideUserDivUsers}>
                    <div className={styles.user1}></div>
                    <div classNa0
                    me={styles.user2}></div>
                    <div className={styles.user3}></div>
                </div>
            </div> */}