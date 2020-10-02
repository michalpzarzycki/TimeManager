import React, { useState, useEffect } from 'react';
import styles from './SearchUserPopup.module.css'
import ConversationWindow from './ConversationWindow';
import inboxService from '../../services/inboxService';

export default function SearchUserPopup({ isUserSearch, setIsUserSearch, handleClick, conversation, newInbox, allUsers, allUserConversations, setOpenConversationPopup, currentConversation, openConversationPopup }: any) {

  
    return (
        <div className={isUserSearch ? styles.mainDiv : styles.none}>
            <div className={styles.exit} onClick={() => setIsUserSearch(false)}></div>
            {/* <form>
                <input type="text" />
                <button type="submit">SEARCH</button>
            </form> */}
            <div>
                {allUsers && allUsers.map((user: any, index: any) => {
                    return <div key={index} className={styles.userDiv} style={{ color: 'white' }} onClick={() => {}}
                     ><div className={styles.userPhotoSection} style={user.url && { backgroundImage: `url(${user.url})` }}></div>
                        <div className={styles.detailsSection}>
                            <div>Name: {user.name || 'unknown'}</div>
                            <div>Surname: {user.surname || 'unknown'}</div>
                            <div>Email {user.email}</div>
                        </div>
                    </div>
                })}
            </div>
            <ConversationWindow currentConversation={currentConversation} openConversationPopup={openConversationPopup} setOpenConversationPopup={setOpenConversationPopup} conversation={conversation} allUserConversations={allUserConversations}/>
        </div>
    )
}