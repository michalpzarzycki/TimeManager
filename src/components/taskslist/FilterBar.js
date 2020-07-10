import React from 'react';
import styles from './FilterBar.module.css'

export default function FilterBar() {
    return <div className={styles.filterBarContainer}>
        <div className={styles.filterBarCheckbox}>
            <input type="checkbox"/>
        </div>
        <div className={styles.filterBarSelect}>
            <select>SELECT</select>
        </div>
    </div>
}