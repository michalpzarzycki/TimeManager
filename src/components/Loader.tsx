import React, { useEffect } from 'react';
import styles from './Loader.module.css'

export default function Loader() {
useEffect(() => {
    console.log("HEJJJka")
}, [])
    return(
        <div className={styles.mainDiv}>
            <div className={styles.loader}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}