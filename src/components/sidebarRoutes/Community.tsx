import React, { useState, useEffect } from 'react';
import Messege from '../taskslist/Messege'
import styles from './Community.module.css';
import firebase, {db} from '../../firebase/firebase'
interface IMessage {
    user: any,
    message?: any,
    date?: any
}
export default function Community({userId, userEmail} : any) {
    const [messegesContainer, setMessage] = useState<IMessage>({'user': userId})
    const [messeges, setMesseges] = useState<any>([])
    let arr: any[]= []
    useEffect(() => {
       
        db.collection("shoutbox").onSnapshot(function(querySnapshot) {
                arr.length = 0
            querySnapshot.forEach(function(doc) {
                arr.push(doc.data())
            
            });
            db.collection('users').where('email', '==', `helena@wp.pl`).onSnapshot(x => {
                console.log("HUE", x.forEach(x => {
                    console.log(x.data())
                }))
            })
           setMesseges([...arr])
           console.log("MESSEGES", messeges)
        })

    },[])
    function handleChange(event : any) {
        setMessage({...messegesContainer, [event.target.name]:event.target.value, date: Date.now()})
    }

    function handleSubmit(e: any) {
        e.preventDefault()
        db.collection('shoutbox').add(messegesContainer).then(() => {
            console.log("SENDED SUCCESFULLY")
        }).catch(err => {
            console.log("sth went wrong", err)
        })

    }
    return(
        <div className={styles.communityContainer}>
            <section className={styles.shoutBoxSection}>
                <div className={styles.shoutBoxDiv}>
                    <div className={styles.messegesContainer}>
                        {messeges && messeges.map((messege : any) => {
                           return  <Messege messege={messege}/>
                        })}
                    </div>
                    <form onSubmit={handleSubmit} className={styles.sendMessegeContainer}>
                        <input className={styles.sendMessegeInput} type="text" placeholder="Your messege..." name="message" onChange={handleChange}/>
                        <button type="submit" className={styles.sendMessegeButton} >Send</button>
                    </form>
                </div>
            </section>
            <section className={styles.forumSection}>
    <p>FORUM IN PROGRESS...{messeges && messeges.length}</p>
            </section>
        </div>
    )
}