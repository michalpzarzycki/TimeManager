import React, { useState, useEffect } from 'react';
import styles from './Conversation.module.css'
import MessegePopup from './MessegePopup';
import firebase, {storage} from '../../firebase/firebase'
import ConversationWindow from './ConversationWindow';

export default function Conversation({conversation} : any) {
    let [isPopup, setIsPopup] = useState(false)
    let [openConversationPopup, setOpenConversationPopup] = useState(false)
useEffect(()=>{
    let dataRef : any = firebase.auth()
    storage.ref().child(`/profiles/${ conversation.users.filter((x : any) => x!=dataRef.currentUser.email)[0]}.jpg`)
    .getDownloadURL()
    .then((url) => {
        let elem1 = document.getElementById('convPhoto') as HTMLElement
        elem1.style.backgroundImage = `url(${url})`
    })
}, [conversation])
    function handlePopup() {
        setIsPopup(!isPopup)
    }
    return(<>
        <div className={styles.mainContainer} onClick={() => setOpenConversationPopup(true)}>
            <div className={styles.photo} id="convPhoto"></div>
    <div className={styles.lastMessege}>{conversation.messages[conversation.messages.length-1].message}</div>
            <div>{}</div>
        </div>
        <ConversationWindow conversation={conversation} setOpenConversationPopup={setOpenConversationPopup} openConversationPopup={openConversationPopup}/>
        </>
    )
}