import React, { useEffect, useState } from 'react';
import styles from './InboxMesseges.module.css';
import Conversation from './Conversation';
import firebase, { db } from '../../firebase/firebase';

export default function InboxMesseges({openConversationPopup, setOpenConversationPopup, allUserConversations}) {
    useEffect(() => {
        console.log("WORK")
        console.log("ALL", allUserConversations)
    }, [allUserConversations])
    return(
        <div className={styles.mainContainer}>
            {allUserConversations.length>0 && allUserConversations.map(conversation => {
                return(
                    <Conversation conversation={conversation} />
                )
            })}
        </div>
    )
}