import React, { useState, useEffect } from 'react';
import styles from './DarkMode.module.css';
import ToggleSwitch from './ToggleSwitch';
import {connect} from 'react-redux';
import { setChangeDarkMode } from '../../../redux/action';

function DarkMode({darkMode, handleToggle}: any) {
    const [toggle, setToggle] = useState<boolean>(false)
    // function handleToggle() {
    //     setToggle(!toggle)
    //     console.log("TOGGLE", toggle)
    // }
    useEffect(() => {
        console.log("DARK MODE REDUX", darkMode)
    }, [darkMode])
    return(
        <div className={!toggle ? styles.mainDiv : styles.mainDivDark}>
                <h1>DARK MODE</h1>
                <div className={styles.toggleBox}>
                    <ToggleSwitch handleToggle={handleToggle}/>
                </div>
                <div className={toggle ? styles.toggleIconMoon : styles.toggleIconSun}></div>
        </div>
    )
}
const mapStateToProps = (state: any) => {
    return {
        darkMode: state.darkMode
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        handleToggle: (event: any) => dispatch(setChangeDarkMode(event.target.checked))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DarkMode)



