import React from 'react';
import styles from './SubmitButton.module.css'
function Loader() {
    return(
        <div style={{width:"10%", height:"100%"}}>
        <span className={styles.loader}></span>
        </div>
    )
}
export default function SubmitButton({buttonDisabled="true", buttonLoading='false', handleSubmit = () => {}, placeholder="SUBMIT" } : any) {
    return (
        <div className={styles.buttonDiv}>
            <span style={{width:"100px", height:"50px"}}>
                <button className={styles.buttonDiv} disabled={buttonDisabled} type="submit" onClick = {handleSubmit}>{buttonLoading ? <Loader /> : placeholder}</button>
            </span>
        </div>
    )
}