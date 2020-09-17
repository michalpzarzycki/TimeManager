import React from 'react';
import styles from './UserDataField.module.css';

export default function UserDataField({userData}: any) {
    return(<>
        <div>Email: <span className={styles.infoSpanDetail}>{userData.email}</span></div>
        <div>Imie: <span className={styles.infoSpanDetail}>{userData.name}</span></div>
        <div>Nazwisko: <span className={styles.infoSpanDetail}>{userData.surname}</span></div>
        </>
    )
}