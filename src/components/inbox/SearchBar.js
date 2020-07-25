import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import Receiver from './Receiver';
import {db} from '../../firebase/firebase'

export default function SearchBar({openConversationPopup, setOpenConversationPopup}) {
    let [popup, setPopup] = useState(false);
    let [receivers, setReceivers] = useState([])
    
    function handleFocus() {
        let arr = []
        db.collection('users').get().then(snapshot => {
            snapshot.forEach(doc => arr.push(doc.data()))
            setReceivers([...arr])
            setPopup(true)
        })
      
    }
    return(
        <div className={styles.mainContainer}>
            <div className={styles.searchInput}>
                <div className={styles.inputDiv}>
                <input className={styles.input} type="search" placeholder="Search..."  onFocus={handleFocus}/>
                {popup && <div className={styles.popup}>
                   {receivers && receivers.map(user => {
                       return <Receiver user={user} openConversationPopup={openConversationPopup} setOpenConversationPopup={setOpenConversationPopup}/>
                   })}
                </div>}
                </div>
               
            </div>
        </div>
    )
}