import React, { useState, useEffect } from 'react';
import Messege from '../taskslist/Messege'
import ShoutBox from '../sidebarRoutes/community/ShoutBox'
import Forum from '../sidebarRoutes/community/Forum'
import styles from './Community.module.css';
import firebase, {db} from '../../firebase/firebase'
import communityService from '../../services/communityService'
interface IMessage {
    user: any,
    message?: any,
    date?: any
}
export default function Community({userId, userEmail} : any) {
    const [messegesContainer, setMessage] = useState<IMessage>({'user': userId})
    const [messeges, setMesseges] = useState<any>([])
    const [toggleShoutBox, setToggleShoutBox] = useState(false)
    let arr: any[]= []
    useEffect(() => {    
        communityService.getShoutBoxSnapshot(setMesseges)
    },[])
    function handleChange(event : any) {
        setMessage({...messegesContainer, [event.target.name]:event.target.value, date: Date.now()})
    }

    function handleSubmit(e: any) {
        e.preventDefault()
        communityService.sendMessageToShoutBox(messegesContainer)
    }
    return(
        <div className={styles.communityContainer}>
                <button onClick={() => setToggleShoutBox(!toggleShoutBox)}>SHOUTBOX</button>
                <ShoutBox handleChange={handleChange} handleSubmit={handleSubmit} messeges={messeges} toggleShoutBox={toggleShoutBox}/>
            <section className={styles.forumSection}>
                <Forum />
            </section>
        </div>
    )
}