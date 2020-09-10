import React from 'react';
import styles from './ShoutBox.module.css';
import Messege from '../../taskslist/Messege';

export default function ShoutBox({handleChange, handleSubmit, messeges, toggleShoutBox}: any) {
    return(<section className={toggleShoutBox ? styles.shoutBoxSection : styles.hideShoutBox}>
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
    </section> )
}