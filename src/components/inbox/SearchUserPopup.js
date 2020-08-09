import React, { useState, useEffect } from 'react';
import styles from './SearchUserPopup.module.css'
import ConversationWindow from './ConversationWindow';


export default function SearchUserPopup({isUserSearch, allUsers, handleClick, conversation}) {
    let [openConversationPopup, setOpenConversationPopup] = useState(false)

    return(
        <div className={isUserSearch ? styles.mainDiv : styles.none}>
            <form>
                <input type="text" />
                <button type="submit">SEARCH</button>
            </form>
            <div>
                {allUsers && allUsers.map(user => {
                    return <div className={styles.userDiv} style={{color:'white'}} onClick={() => {
                        handleClick(user.email)
                        setOpenConversationPopup(true)
                        }} >
                            <div>{user.name}</div>
                            <div>{user.email}</div>
                         </div>
                })}
            </div>
            <ConversationWindow conversation={conversation} setOpenConversationPopup={setOpenConversationPopup} openConversationPopup={openConversationPopup}/>
        </div>
    )
}