import React from 'react';
import styles from './DarkMode.module.css';
import ToggleSwitch from './ToggleSwitch';
import {connect} from 'react-redux';
import { setChangeDarkMode } from '../../../redux/action';
// import { withRouter } from 'react-router-dom';

function DarkMode({darkMode, handleToggle}: any) {


    return(
        <div className={!darkMode ? styles.mainDiv : styles.mainDivDark}>
                <h1>DARK MODE</h1>
                <div className={styles.toggleBox}>
                    <ToggleSwitch handleToggle={handleToggle}/>
                </div>
                <div className={darkMode ? styles.toggleIconMoon : styles.toggleIconSun}></div>
        </div>
    )
}
const mapStateToProps = (state: any) => {
    return {darkMode: state.darkMode}}
const mapDispatchToProps = (dispatch: any) => {
    
    return {
        handleToggle: (event: any) => dispatch(setChangeDarkMode(event.target.checked))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DarkMode)



