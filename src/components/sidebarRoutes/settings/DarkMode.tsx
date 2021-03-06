import React, { useEffect } from 'react';
import styles from './DarkMode.module.css';
import ToggleSwitch from './ToggleSwitch';
import {connect} from 'react-redux';
import { setChangeDarkMode } from '../../../redux/action';
// import { withRouter } from 'react-router-dom';

function DarkMode({darkMode, handleToggle, darkColor, header}: any) {



    return(
        <div className={styles.mainDiv} style={{borderColor: darkMode ? darkColor : 'black'}}>
                <h1>{header}</h1>
                <div className={styles.toggleBox}>
                    <ToggleSwitch handleToggle={handleToggle}/>
                </div>
                <div className={darkMode ? styles.toggleIconMoon : styles.toggleIconSun}></div>
        </div>
    )
}
const mapStateToProps = (state: any) => {
    return {darkMode: state.darkmode}}
const mapDispatchToProps = (dispatch: any) => {
    
    return {
        handleToggle: (event: any) => dispatch(setChangeDarkMode(event.target.checked))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DarkMode)



