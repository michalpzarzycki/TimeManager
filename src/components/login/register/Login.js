import React, {useState} from 'react';
import firebase from '../../../firebase/firebase'

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
 
    return <div>
        <form>
            <input type="email" placeholder="email" onChange={handleChange} name="email"/>
            <input type="password" placeholder="password" onChange={handleChange} name="password"/>
            <button onClick={handleSubmit}>ENTER</button>
        </form>
        <button onClick={handleSignOut}>SIGNOUT</button>

    </div>
}