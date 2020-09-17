import React from 'react';
import Loader from '../../Loader'
import styles from './ChangePicturePopup.module.css';

export default function ChangePicturePopup({openPopup, isPictureLoaded, setOpenPopup, handleFile}: any) {
    return(
        <div className={openPopup ? styles.popup : styles.none}>
            <section className={styles.pictureSectionPopup}>
                <div className={styles.exit} onClick={() => setOpenPopup(false)}></div>
                {isPictureLoaded ?  
                                <div id="picturePopup" className={styles.picturePopup}></div> 
                              : <div className={styles.loader}><Loader /></div>}
            </section>
            <section className={styles.inputSectionPopup}>
                <div className={styles.inputDivInput}>
                    <input type="file" onChange={handleFile}/>
                </div>
                <div className={styles.inputDivLoader}>
                    <progress className={styles.progress} value="0" max="100" id="uploader">0%</progress>
                </div>
            </section>
        </div>
    )
}