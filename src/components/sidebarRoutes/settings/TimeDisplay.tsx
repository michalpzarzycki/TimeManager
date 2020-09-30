import React from 'react';
import styles from './TimeDisplay.module.css';
import {connect} from 'react-redux'
import { setTimeFormat } from '../../../redux/action';
function TimeDisplay({timeFormat, changeTimeFormat, header}: any) {
    return(
        <div className={styles.mainDiv}>
        <h1 className={styles.header}>{header}</h1>
        <div className={styles.selectBox}>
          <select onChange={changeTimeFormat}>
              <option>TIME ZONE 1</option>
              <option>TIME ZONE 01</option>
          </select>
        </div>
    </div>
    )
}
const mapStateToProps = (state: any) => {
    return {
        timeFormat: state.timeformat 
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        changeTimeFormat: (event: any) => dispatch(setTimeFormat(event.target.value))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TimeDisplay)