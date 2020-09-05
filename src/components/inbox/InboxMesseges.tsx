import React, { useEffect } from 'react';
import styles from './InboxMesseges.module.css';
import Conversation from './Conversation';

export default function InboxMesseges({openConversationPopup, setOpenConversationPopup, allUserConversations} : any) {
    useEffect(() => {
    }, [])
    return(
        <div className={styles.mainContainer}>
            {allUserConversations.length>0 && allUserConversations.map((conversation : any) => {
                return(
                    <Conversation conversation={conversation} />
                )
            })}
        </div>
    )
}