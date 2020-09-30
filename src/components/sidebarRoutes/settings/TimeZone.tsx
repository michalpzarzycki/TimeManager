import React from 'react';
import styles from './TimeZone.module.css';
import {connect} from 'react-redux'
import { setTimeZone } from '../../../redux/action';
function TimeZone({header}: any) {
    return(
        <div className={styles.mainDiv}>
        <h1 className={styles.header}>{header}</h1>
        <div className={styles.selectBox}>
          <select>
              <option>TIME ZONE 1</option>
          </select>
        </div>
    </div>
    )
}
const mapStateToProps = (state: any) => {
    return {
        timeZone: state.timezone
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        handleTimeZone: (event: any) => dispatch(setTimeZone(event.target.valuen))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TimeZone)