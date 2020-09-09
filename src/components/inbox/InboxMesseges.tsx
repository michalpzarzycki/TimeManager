import React, { useEffect, useState } from 'react';
import styles from './InboxMesseges.module.css';
import Conversation from './Conversation';


export default function InboxMesseges({openConversationPopup, setOpenConversationPopup, allUserConversations, convId, conversation, handleClick} : any) {

    let [currentConversation, setCurrentConversation] = useState<any>('')

    useEffect(() => {
    }, [allUserConversations])
    return(
        <div className={styles.mainContainer}>
            {allUserConversations.length>0 && allUserConversations.map((conv : any) => {
                return(
                    <Conversation conversation={conv} handleClick={handleClick} setOpenConversationPopup={setOpenConversationPopup} convId={convId}/>
                )
            })}
           
        </div>
    )
}