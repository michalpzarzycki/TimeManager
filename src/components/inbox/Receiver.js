import React, { useState } from 'react';
import styles from './Receiver.module.css'
import firebase, { db } from '../../firebase/firebase'
import ConversationWindow from './ConversationWindow';

export default function Receiver({user, openConversationPopup, setOpenConversationPopup}) {
    let [conversation, setConversation] = useState("")
    function handleClick() {
        console.log("CURRENT", firebase.auth().currentUser.email)
        console.log("EMAIL", user.email)
        db.collection('conversations')
        .where('users', 'array-contains',  firebase.auth().currentUser.email)
        .onSnapshot(snapshot => {
            console.log("CUR", firebase.auth().currentUser.email)
            let arr = []
            console.log("SNAP", snapshot.forEach(doc => console.log("DOC", doc)))
            snapshot.forEach(doc => console.log(doc.data().users.filter(x =>{
                console.log("X", x)
                if(x== user.email) {
                   arr.push(doc.data())
                }
            }
           ))
           )
           setConversation(...arr)
           setOpenConversationPopup(true)

        })
    }
    return(
        <>
       
            <ConversationWindow conversation={conversation} setOpenConversationPopup={setOpenConversationPopup} openConversationPopup={openConversationPopup}/>
        
    <div className={styles.mainContainer} onClick={handleClick}>{user.email}</div>
    </>
    )
}