import React from 'react';
import styles from './Contact.module.css';

export default function Contact() {
    return(
    <div className={styles.contactContanier}>
        <div className={styles.formContainer}>
            <h1 className={styles.header}>Questions? Suggestions? Send it to us!</h1>
            <form className={styles.form}>
                <input type="text" placeholder="Your name"/>
                <input type="email" placeholder="email" />
                <textarea placeholder="Your messege" />
                <button type="submit">SEND</button>
            </form>
        </div>
    </div>)
}