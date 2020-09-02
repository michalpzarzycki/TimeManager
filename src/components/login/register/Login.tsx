import React, {useState, useEffect} from 'react';
import firebase from '../../../firebase/firebase'
import TextInput from './Inputs/TextInput';
import styles from './Login.module.css'
import {withRouter} from 'react-router-dom'
import Hexagon from '../../Hexagon';

 function Login({history, userIdSetter, userEmailSetter} : any) {
interface IUser {
    email : any,
    password : any,
    name?: any
}
 const [user, setUser] = useState<IUser>({email:"", password:""})
    function handleChange(e : any) {
        console.log("EE", e.target.value)
        setUser({...user, [e.target.name]: e.target.value})
      }
      function handleSubmit(event : any) {
        event.preventDefault()
        console.log("SUBMIT")
        firebase.auth().signInWithEmailAndPassword(user.email, user.password).then((x : any) => {
          console.log("LOGGED IN!", x.user)
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
 
    return <div className={styles.mainDiv}>
        <div className={styles.leftSide}>
            <Hexagon />
            <div className={styles.leftSideUserDiv}>
                <div className={styles.leftSideUserDivHeader}>USERS</div>
                <div className={styles.leftSideUserDivUsers}>
                    <div className={styles.user1}></div>
                    <div className={styles.user2}></div>
                    <div className={styles.user3}></div>
                </div>
            </div>
        </div>
        <form className={styles.form} onSubmit={handleSubmit} >
            <TextInput type="email" placeholder="email" name="email" value={user.name} handleChange={handleChange}/>
            <TextInput type="password" placeholder="password" name="password" value={user.password} handleChange={handleChange}/>
            <button type="submit">ENTER</button>
        </form>
       

    </div>
}


export default withRouter(Login)