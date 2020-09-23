import React, { useState } from 'react';
import firebase, { db } from '../../firebase/firebase';
import styles from './Contact.module.css';
import {DARK_CONTACT, LIGHT_CONTACT} from '../../variables'
import { connect } from 'react-redux';
import {useFormValidation} from '../../hooks/useFormValidation'
import {validate} from '../../validates/contactFormValidation'
const {darkBackground, darkColor} = DARK_CONTACT;
const {lightBackground, lightColor} = LIGHT_CONTACT
 function Contact({darkMode}: any) {
    const [suggestion, setSuggestion] = useState<any>({})
    const [isAnnonymous, setIsAnnonymous] = useState<any>(false)
    const [user] = useState<any>(firebase.auth().currentUser.email)
    const [headerContent, setHeaderContent] = useState<any>("Questions? Suggestions? Send it to us!")
    const { handleSubmit, handleChange, errors, values} = useFormValidation(callback, validate)

  
    function handleCheckBox(event: any) {
        setIsAnnonymous(event.target.checked)
    }
    function callback() {
        db.collection('suggestions').add({values}).then(() => {            
            setHeaderContent('YOUR SUGGESTION HAS BEEN SENDED!')
        }).catch(() => {
            setHeaderContent('STH WENT WRONG ;(, TRY AGAIN')
        })
    }
 
    return(
    <div className={styles.contactContanier} style={{backgroundColor: darkMode ? darkBackground : lightBackground}}>
        <div className={styles.formContainer}>
            <h1 className={styles.header}>{headerContent}</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <textarea placeholder="Your messege" name="description" onChange={handleChange}/>
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