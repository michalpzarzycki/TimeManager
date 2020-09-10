import React from 'react';
import styles from './Topic.module.css'

export default function Topic() {
    return(
        <div className={styles.mainDiv}>
            <div className={styles.topicDiv}>
                <div className={styles.topicTitle}>Topic Title</div>
                <div className={styles.topicInfo}>przez Elena, 27 minut temu</div>
            </div>
            <div className={styles.lastReplyDiv}>
                <div className={styles.replyImg}><span className={styles.img}>IMG</span></div>
                <div className={styles.replyInfo}>
                    <div className={styles.replyUser}>Elena</div>
                    <div className={styles.replyTime}>7 minut temu</div>
                </div>
            </div>
        </div>

    )
}