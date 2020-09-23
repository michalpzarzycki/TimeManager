import React, { useState } from 'react';
import styles from './Language.module.css';
import { connect } from 'react-redux';
import { setLanguage } from '../../../redux/action';
const LANGUAGE: any = {
    pol:{
        header: "WYBIERZ JEZYK"
    },
    spa:{
        header: "ELIGE LENGUA"
    },
    usa:{
        header: "CHOOSE LANGUAGE"
    },
    it:{
        header: "SCEGLI LA LINGUA"
    },
    ger:{
        header: "SPRACHE WÄHLEN"
    },
    chin:{
        header: "选择语言"
    },
    ru:{
        header: "ВЫБЕРИТЕ ЯЗЫК"
    },
    pg:{
        header: "ESCOLHA O SEU IDIOMA"
    }
}
function Language({language, handleChange}: any) {
    return(
        <div className={styles.mainDiv}>
        <h1 className={styles.header} style={{opacity: language ?  '1' : '0' }}>{language && LANGUAGE[language].header}</h1>
        <div className={styles.selectBox}>
            
                <label className={styles.radioPoland}> 
                    <input type="radio" value='pol' className={styles.radioButton} onChange={handleChange} checked={language === 'pol'}/>
                    <div className={language==='pol' ?  styles.selectedBorder : ''}></div>
                </label>
                <label className={styles.radioSpain}> 
                    <input type="radio" value='spa' className={styles.radioButton} onChange={handleChange} checked={language === 'spa'}/>
                    <div className={language==='spa' ?  styles.selectedBorder : ''}></div>

                </label>
                <label className={styles.radioUsa}> 
                    <input type="radio" value='usa' className={styles.radioButton} onChange={handleChange} checked={language === 'usa'}/>
                    <div className={language==='usa' ?  styles.selectedBorder : ''}></div>

                </label>
                <label className={styles.radioItaly}> 
                    <input type="radio" value='it' className={styles.radioButton} onChange={handleChange} checked={language === 'it'}/>
                    <div className={language==='it' ?  styles.selectedBorder : ''}></div>

                </label>
                <label className={styles.radioGermany}> 
                    <input type="radio" value='ger' className={styles.radioButton} onChange={handleChange} checked={language === 'ger'}/>
                    <div className={language==='ger' ?  styles.selectedBorder : ''}></div>

                </label>
                <label className={styles.radioChina}> 
                    <input type="radio" value='chin' className={styles.radioButton} onChange={handleChange} checked={language === 'chin'}/>
                    <div className={language==='chin' ?  styles.selectedBorder : ''}></div>

                </label>
                <label className={styles.radioRussia}> 
                    <input type="radio" value='ru' className={styles.radioButton} onChange={handleChange} checked={language === 'ru'}/>
                    <div className={language==='ru' ?  styles.selectedBorder : ''}></div>
                </label>
                <label className={styles.radioPortugal}> 
                    <input type="radio" value='pg' className={styles.radioButton} onChange={handleChange} checked={language === 'pg'}/>
                    <div className={language==='pg' ?  styles.selectedBorder : ''}></div>
                </label>
    
        </div>
    </div>
    )
}
const mapStateToProps = (state: any) => {
    return {
        language: state.language
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        handleChange: (event: any) => dispatch(setLanguage(event.target.value))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Language)