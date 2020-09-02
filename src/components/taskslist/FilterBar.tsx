import React from 'react';
import { connect } from 'react-redux'
import styles from './FilterBar.module.css'
import { setSearchFilterField } from '../../redux/action';

function FilterBar({onSearchChange} : any) {
    return <div className={styles.filterBarContainer}>
        <div className={styles.filterBarCheckbox}>
            <input type="checkbox" onChange={onSearchChange}/>
        </div>
        <div className={styles.filterBarSelect}>
            <select>SELECT</select>
        </div>
    </div>
}


const mapStateToProps = (state: any) => {
    return {
        searchFilterField: ''
    }
}

const mapDispatchToProps = (dispatch: any) => {
    console.log(dispatch)
    return {
        onSearchChange: (event: any) => dispatch(setSearchFilterField(event.target.value))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FilterBar)
