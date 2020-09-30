import React, {useState} from 'react';
import styles from './FontSize.module.css';
import { connect } from 'react-redux';
import { setFontSize } from '../../../redux/action';


function FontSize({fontSize, handleChange, header}: any) {

    return(
        <div className={styles.mainDiv}>
        <h1 className={styles.header}>{header}</h1>
        <div className={styles.selectBox}>
            <label>
                <input type="radio" value="bigFontSize" checked={fontSize==='bigFontSize'} onChange={handleChange}/>
                BIG
            </label>
            <label>
                <input type="radio" value="mediumFontSize" checked={fontSize==='mediumFontSize'} onChange={handleChange}/>
                MEDIUM
            </label>
            <label>
                <input type="radio" value="smallFontSize" checked={fontSize==='smallFontSize'} onChange={handleChange}/>
                SMALL
            </label>
        </div>
    </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        fontSize: state.fontsize
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        handleChange: (event: any) => dispatch(setFontSize(event.target.value))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FontSize)