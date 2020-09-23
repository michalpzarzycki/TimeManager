import React, { useState } from 'react';
import firebase, { db } from '../../firebase/firebase';
import styles from './Contact.module.css';
import {DARK_CONTACT, LIGHT_CONTACT} from '../../variables'
import { connect } from 'react-redux';
import {useFormValidation} from '../../hooks/useFormValidation'
import {validate} from '../../validates/contactFormValidation'
import contactService from '../../services/contactService'
const {darkBackground, darkColor} = DARK_CONTACT;
const {lightBackground, lightColor} = LIGHT_CONTACT
 function Contact({darkMode}: any) {
    const [headerContent, setHeaderContent] = useState<any>("Questions? Suggestions? Send it to us!")
    const { handleSubmit,
            handleChange,
            errors,
            values} = useFormValidation(() => contactService.sendSuggestion(values, setHeaderContent), validate)


 
    return(
    <div className={styles.contactContanier} style={{backgroundColor: darkMode ? darkBackground : lightBackground}}>
        <div className={styles.formContainer}>
            <h1 className={styles.header}>{headerContent}</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <textarea placeholder="Your messege" name="description" onChange={handleChange}/>
                <div>
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