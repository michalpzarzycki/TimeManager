import React, { useState } from 'react';
import styles from './FileInput.module.css'


export default function FileInput({handleFileChange, error=false, file}) {
    let [fileName, setFileName] = useState('');

  
    return(
        <div className={styles.div}>
            <span className={styles.span, error && styles.error}>
                <label className={styles.label}>
                    {error && <div>{error}</div>}
                    <span>{file ? file.name : 'UPLOAD FILE'}</span>
                <input type="file" className={styles.input} onChange={e => handleFileChange(e)}/>
                </label>
            </span>
        </div>
    )
}