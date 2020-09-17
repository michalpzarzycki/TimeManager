import React from 'react';
import styles from './ChangeUserDataField.module.css';

export default function ChangeUserDataField({label, inputName, inputValue, handelDoubleClick,handleChange, handleEdit, spanId}: any) {
    return(
        <div>{label}:
            <input name={inputName} 
                    className={styles.infoSpanDetail} 
                    value={inputValue} 
                    readOnly 
                    onDoubleClick={event => handelDoubleClick(event)}
                    onChange = {(event) => handleChange(event)}
                    style={{background:'transparent', outline:"none", border:"0px", display:"inline-block", width:"auto"}}
                    />
            <span id={spanId} 
                    onClick={handleEdit} 
                    className={styles.noneEdit}
             >
            </span>
        </div>
    )
}