import React from 'react';
import styles from './MessegePopup.module.css';
import Messeges from './Messeges';

export default function MessegePopup({isPopup, handlePopup} : any) {
    function handleSubmit() {

    }
    return(
        <div className={isPopup ? styles.mainContainer : styles.none}>
            <div className={styles.closePopup} onClick={handlePopup}></div>
            <div>
                <Messeges />
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input type="text" placeholder="Messege"/>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
} 