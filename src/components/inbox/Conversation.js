import React, { useState } from 'react';
import styles from './Conversation.module.css'
import MessegePopup from './MessegePopup';
import firebase from '../../firebase/firebase'
import ConversationWindow from './ConversationWindow';

export default function Conversation({conversationList, openConversationPopup, setOpenConversationPopup}) {
    let [isPopup, setIsPopup] = useState(false)
    function handlePopup() {
        setIsPopup(!isPopup)
    }
    return(<>
        <div className={styles.mainContainer} onClick={() => setOpenConversationPopup(true)}>
            <div className={styles.photo}></div>
            <div className={styles.lastMessege}>{conversationList[0].users.filter(x => x!== firebase.auth().currentUser.email)}</div>
        </div>
        <ConversationWindow setOpenConversationPopup={setOpenConversationPopup} openConversationPopup={openConversationPopup}/>
        </>
    )
}