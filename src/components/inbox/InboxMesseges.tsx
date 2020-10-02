import React, { useEffect, useState } from 'react';
import styles from './InboxMesseges.module.css';
import Conversation from './Conversation';
import {useAuth} from '../../hooks/useAuth'

export default function InboxMesseges({openConversationPopup, setOpenConversationPopup, allUserConversations, convId, conversation, handleClick} : any) {

    let [currentConversation, setCurrentConversation] = useState<any>('')
    let [isUserLogged] = useState<any>(useAuth().isLoggedIn)

    return(
        <div className={styles.mainContainer}>
            {isUserLogged && allUserConversations.length>0 && allUserConversations.map((conv : any) => {
                return(
                <Conversation conversation={conv} handleClick={handleClick} setOpenConversationPopup={setOpenConversationPopup} convId={convId} isUserLogged={isUserLogged}/>
                )
            })}
           
        </div>
    )
}