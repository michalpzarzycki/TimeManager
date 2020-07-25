import React, { useEffect, useState } from 'react';
import styles from './InboxMesseges.module.css';
import Conversation from './Conversation';
import firebase, { db } from '../../firebase/firebase';

export default function InboxMesseges({openConversationPopup, setOpenConversationPopup}) {

    let [conversationList, setConversationList] = useState([])

    useEffect(() => {
        
        db.collection('conversations').where('users', 'array-contains', firebase.auth().currentUser.email).onSnapshot(snapshot => {
            let arr = [];
            snapshot.forEach(doc => {
                arr.push(doc.data())
                console.log("arr",arr)
            })
            setConversationList([...arr])
        })
    }, [])
    return(
        <div className={styles.mainContainer}>
            {conversationList.length>0 && conversationList.map(elem => {
                return(
                    <Conversation conversationList={conversationList} openConversationPopup={openConversationPopup} setOpenConversationPopup={setOpenConversationPopup}/>
                )
            })}
        </div>
    )
}