import React, { useState, useEffect } from 'react';
import styles from './SearchUserPopup.module.css'
import ConversationWindow from './ConversationWindow';
import inboxService from '../../services/inboxService';

export default function SearchUserPopup({ isUserSearch, setIsUserSearch, handleClick, conversation, newInbox, allUsers, allUserConversations, setOpenConversationPopup, openConversationPopup }: any) {
    let [currentConversation, setCurrentConversation] = useState<any>('')

    useEffect(() => {
        jeszczwniewiem()
    }, [allUserConversations])
    function jeszczwniewiem() {
        allUsers.forEach((user: any) => {
            let filtered = allUserConversations.filter((conv: any) => {
                console.log('k', conv)
                let a = conv.users.includes(user.email)  
                console.log(user.email, a) 
                return a
            })
            console.log(filtered)
            //if there is another user email, it means that conversation exists so open it
            if(filtered.length>0) {
                //otworz okno z konwersacja
                console.log('jest')
                //setCurrentConv
                setCurrentConversation({...filtered[0]})
                setOpenConversationPopup(true)
                
            } else {
                //if there is no email, yu have to create conversation first 
                newInbox.createNewConversation(user.email).then((docRef: any) => {
                    newInbox.getCreatedConversation(docRef).then((doc: any) => {
                        setCurrentConversation({...doc[0]})
                        setOpenConversationPopup(true)
                    })
    
                })
                //stworz konwersacje
                //otworz okno 
                
                console.log('nie ma')
            }
        });  

      }
    return (
        <div className={isUserSearch ? styles.mainDiv : styles.none}>
            <div className={styles.exit} onClick={() => setIsUserSearch(false)}></div>
            {/* <form>
                <input type="text" />
                <button type="submit">SEARCH</button>
            </form> */}
            <div>
                {allUsers && allUsers.map((user: any) => {
                    return <div className={styles.userDiv} style={{ color: 'white' }} onClick={() => {
                        // console.log("A::", allUserConversations)
                        jeszczwniewiem()
                        // //find another user email
                        // console.log("user",user)
                        // let filtered = allUserConversations.filter((conv: any) => {
                        //     console.log('k', conv)
                        //     let a = conv.users.includes(user.email)  
                        //     console.log(user.email, a) 
                        //     return a
                        // })
                        // console.log(filtered)
                        // //if there is another user email, it means that conversation exists so open it
                        // if(filtered.length>0) {
                        //     //otworz okno z konwersacja
                        //     console.log('jest')
                        //     //setCurrentConv
                        //     setCurrentConversation({...filtered[0]})
                        //     setOpenConversationPopup(true)
                            
                        // } else {
                        //     //if there is no email, yu have to create conversation first 
                        //     newInbox.createNewConversation(user.email).then((docRef: any) => {
                        //         newInbox.getCreatedConversation(docRef).then((doc: any) => {
                        //             setCurrentConversation({...doc[0]})
                        //             setOpenConversationPopup(true)
                        //         })

                        //     })
                        //     //stworz konwersacje
                        //     //otworz okno 
                            
                        //     console.log('nie ma')
                        // }

                    }}
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