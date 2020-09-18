import React, {useState} from 'react';
import styles from './FontFamily.module.css';
import { connect } from 'react-redux';
import { setFontFamily } from '../../../redux/action';

 function FontFamily({font, handleChange}: any) {
    let arial = 'Arial, Helvetica, sans-serif'
    let gill = '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif'
    // 'Times New Roman', Times, serif
    // 'Courier New', Courier, monospace
    // Verdana, Geneva, Tahoma, sans-serif
    return(
        <div className={styles.mainDiv}>
            <h1 className={styles.header}>FONT FAMILY</h1>
            <div className={styles.selectBox}>
                <select onChange={handleChange}>
                    <option value={arial}>Arial</option>
                    <option value={gill}>Gill Sans</option>
                    <option value="Noto Sans">Noto Sans</option>
                    <option value="Avant Grande">AvantGarde</option>
                </select>
            </div>
        </div>
    )
}
const mapStateToProps = (state: any) => {
    return {
        font: state
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        handleChange: (event: any) => dispatch(setFontFamily(event.target.value))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FontFamily)
