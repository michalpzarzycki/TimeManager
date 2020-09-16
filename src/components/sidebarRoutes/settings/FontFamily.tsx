import React from 'react';
import styles from './FontFamily.module.css';

export default function FontFamily() {
    return(
        <div className={styles.mainDiv}>
            <h1 className={styles.header}>FONT FAMILY</h1>
            <div className={styles.selectBox}>
                <select>
                    <option>Arial</option>
                    <option>Helvetica</option>
                    <option>GIll Sans</option>
                    <option>Noto Sans</option>
                    <option>AvantGarde</option>
                </select>
            </div>
        </div>
    )
}