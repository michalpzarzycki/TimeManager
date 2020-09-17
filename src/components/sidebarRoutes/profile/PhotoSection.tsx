import React from 'react';
import styles from './PhotoSection.module.css';


export default function PhotoSection({handlePictureChange}: any) {
    return(
        <section className={styles.photoSection}>
            <div className={styles.picture} id="mainPicture"></div>
            <div className={styles.name}>Selena Gomez</div>
            <button onClick={handlePictureChange} style={{cursor:"pointer"}}>CHANGE PROFILE PICTURE</button>
        </section>
    )
}