import React from 'react';
import styles from './TopicDiscuss.module.css';

export default function TopicDiscuss() {
    return(
        <div>
        <div className={styles.mainDiv}>
            <div className={styles.userBox}>
                <div className={styles.userNameBox}>userName</div>
                <div className={styles.pictureBox}>IMG</div>
                <div className={styles.infoBox}>infoBox</div>
            </div>
            <div className={styles.postBox}>
                <div className={styles.messageBox}>
                    <div className={styles.messageDate}>Posted 5 days ago</div>
                    <div className={styles.messageContent}>JavaScript is the best programming language. Change my mind!</div>
                </div>
                <div className={styles.signatureBox}>
                    <div className={styles.signatureContent}>The World Is Yours</div>
                </div>
            </div>
        </div>
        </div>
    )
}