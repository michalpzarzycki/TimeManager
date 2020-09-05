import React, { useState } from 'react';
import firebase from '../../../firebase/firebase'
import TextInput from './Inputs/TextInput';
import styles from './Login.module.css'
import { withRouter } from 'react-router-dom'
import Hexagon from '../../Hexagon';
import Loader from '../../Loader';

function Login({ history, userIdSetter, userEmailSetter }: any) {
    interface IUser {
        email: string,
        password: string,
        name?: any
    }
    const [isLoading, setIsLoading] = useState(false)
    //State of user inputs from Login form
    const [user, setUser] = useState<IUser>({ email: "", password: "" })
    //State of firebase signIn error 
    const [signInError, setSignInError] = useState<string>('')
    //Setter of inputs change
    const handleChange = (e: any) => setUser({ ...user, [e.target.name]: e.target.value })
    //Login form submit
    function handleSubmit(event: any) {
        setIsLoading(true)
        event.preventDefault()
        firebase.auth().signInWithEmailAndPassword(user.email, user.password).then((x: any) => {    
            userIdSetter(x.user.uid)
            userEmailSetter(x.user.email)
            //Turn on the Loader
            setIsLoading(false)
            //Make sure that there can not be any error messages
            setSignInError('')
            //Switch route to /
            history.push("/")
        }).catch(error => {
            //Turn off the Loader
            setIsLoading(false)
            //Display error mesage
            setSignInError(error.message)
        })

        
    }
    return (
        <div className={styles.mainDiv}>
            <div className={isLoading ?  styles.loader : styles.none}><Loader /></div>
            <section className={styles.leftSide}>
                <Hexagon />
            </section>
            <section className={styles.rightSide}>
                <form className={styles.form} onSubmit={handleSubmit} >
                    {signInError && <h1 className={styles.errorMessage}>{signInError}</h1>}
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