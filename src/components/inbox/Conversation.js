import React, { useState, useEffect } from 'react';
import styles from './Conversation.module.css'
import MessegePopup from './MessegePopup';
import firebase from '../../firebase/firebase'
import ConversationWindow from './ConversationWindow';

export default function Conversation({conversation}) {
    let [isPopup, setIsPopup] = useState(false)
    let [openConversationPopup, setOpenConversationPopup] = useState(false)
useEffect(()=>{
    console.log("PPP", conversation)
}, [conversation])
    function handlePopup() {
        setIsPopup(!isPopup)
    }
    return(<>
        <div className={styles.mainContainer} onClick={() => setOpenConversationPopup(true)}>
            <div className={styles.photo}></div>
    <div className={styles.lastMessege}>{conversation.messages[conversation.messages.length-1].message}</div>
            <div>{}</div>
        </div>
        <ConversationWindow conversation={conversation} setOpenConversationPopup={setOpenConversationPopup} openConversationPopup={openConversationPopup}/>
        </>
    )
}