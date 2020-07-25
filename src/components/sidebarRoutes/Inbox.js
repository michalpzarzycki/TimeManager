import React, {useState} from 'react';
import styles from './Inbox.module.css'
import InboxMesseges from '../inbox/InboxMesseges';
import SearchBar from '../inbox/SearchBar';


export default function Inbox() {
    let [openConversationPopup, setOpenConversationPopup] = useState(false)

    return( 
        <div className={styles.inboxContainer}>
            <SearchBar openConversationPopup={openConversationPopup} setOpenConversationPopup={setOpenConversationPopup}/>
            <InboxMesseges openConversationPopup={openConversationPopup} setOpenConversationPopup={setOpenConversationPopup}/>
        </div>
    )
}