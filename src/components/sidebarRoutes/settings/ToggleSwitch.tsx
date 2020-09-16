import React from 'react';
import styles from './ToggleSwitch.module.css'

export default function ToggleSwitch({handleToggle}: any) {
    return(
<label className={styles.switch}>
  <input type="checkbox" onChange = {handleToggle}/>
  <span className={styles.slider}></span>
</label> )
}