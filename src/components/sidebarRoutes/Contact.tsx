import React, { useState, useEffect } from 'react';
import firebase, { db } from '../../firebase/firebase';
import styles from './Contact.module.css';
import {DARK_CONTACT, LIGHT_CONTACT} from '../../variables'
import { connect } from 'react-redux';
const {darkBackground, darkColor} = DARK_CONTACT;
const {lightBackground, lightColor} = LIGHT_CONTACT
 function Contact({darkMode}: any) {
    const [suggestion, setSuggestion] = useState<any>({})
    const [isAnnonymous, setIsAnnonymous] = useState<any>(false)
    const [user] = useState<any>(firebase.auth().currentUser.email)
    const [headerContent, setHeaderContent] = useState<any>("Questions? Suggestions? Send it to us!")
    useEffect(() => {
        console.log("SUGGESTION", suggestion)
    }, [suggestion])
    function handleChange(event: any) {
        setSuggestion({...suggestion, [event.target.name]: event.target.value})
    }
    function handleCheckBox(event: any) {
        setIsAnnonymous(event.target.checked)
    }
    function handleSubmit(event: any) {
        let finalSuggestion;
        event.preventDefault();
        if(isAnnonymous) {
            setSuggestion({...suggestion, email:'anonymous'})
             finalSuggestion = {...suggestion, email:'anonymous'}
        } else {
             finalSuggestion = {...suggestion, email:user}
        }
        db.collection('suggestions').add({finalSuggestion}).then(() => {
            console.log("SENDED SUGGESTION")
            setHeaderContent('YOUR SUGGESTION HAS BEEN SENDED!')
        }).catch(() => {
            console.log("STH WENT WRONG")
            setHeaderContent('STH WENT WRONG ;(, TRY AGAIN')
        })
    } 
    return(
    <div className={styles.contactContanier} style={{backgroundColor: darkMode ? darkBackground : lightBackground}}>
        <div className={styles.formContainer}>
            <h1 className={styles.header}>{headerContent}</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <textarea placeholder="Your messege" name="suggestion" onChange={handleChange}/>
                <div>
                <input type="checkbox" onChange={handleCheckBox} name="checkbox"/>
                <label>SELECT IF U WANNA SEND ANONYMOUS SUGGESTION</label>
                </div>
                <button type="submit">SEND</button>
            </form>
        </div>
    </div>)
}
const mapStateToProps = (state: any) => {
    return {
        darkMode: state.darkmode
    }
}
export default connect(mapStateToProps)(Contact)