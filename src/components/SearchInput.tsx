import React from 'react';
import styles from './SearchInput.module.css';
import { connect } from 'react-redux'
import {DARK_ROUTE1, LIGHT_ROUTE1} from '../variables'
const { darkBackground, darkColor} = DARK_ROUTE1;
const { lightBackground, lightColor} = LIGHT_ROUTE1

function SearchInput({darkMode} : any) {

    return (<>
        <div className={styles.route1TasksNav_searchDiv} style={{backgroundColor: darkMode ? darkBackground : lightBackground}}>
        <span className={styles.span}>
        <input onChange={() => {}} name="search" type="search" placeholder="Search Task" autoComplete="off" className={styles.route1TasksNav_searchDiv_input} 
        style={{
                backgroundColor: darkMode ? darkBackground : lightBackground,
                color: darkMode ? darkColor : lightColor,
                borderColor: darkMode ? darkColor : lightColor
                }}/>
        </span>
    </div>
    </>
    )
}

const mapStateToProps = (state : any) => {
    return {
        darkMode: state.darkmode
    }
}

export default connect(mapStateToProps)(SearchInput)