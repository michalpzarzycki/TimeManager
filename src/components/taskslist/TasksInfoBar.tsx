import React from 'react';
import styles from './TasksInfoBar.module.css'
import { connect } from 'react-redux';
import {DARK_ROUTE1, LIGHT_ROUTE1} from '../../variables'
const {darkBackground, darkColor} = DARK_ROUTE1
const {lightBackground, lightColor} = LIGHT_ROUTE1
function TasksInfoBar({handleAllChecked, darkMode}: any) {
    
    return <div className={styles.tasksInfoBarContainer} 
                style={{color: darkMode ? darkColor : lightColor,
                        backgroundColor: darkMode ? darkBackground : lightBackground,
                        borderColor: darkMode ? darkColor : lightColor}}>
        <div className={styles.checkbox}>
        <input type="checkbox" onClick={handleAllChecked}/>
        </div>
        <div className={styles.id}>ID</div>
        <div className={styles.avatar}></div>
        <div className={styles.title}>TYTUL</div>
        <div className={styles.importance}>WAZNOSC</div>
        <div className={styles.deadline}>DEADLINE</div>
        <div className={styles.buttons}>BUTTONS</div>
    </div>
}

const mapStateToProps = (state: any) => {
    return {
        darkMode: state.darkmode
    }
}
export default connect(mapStateToProps)(TasksInfoBar)