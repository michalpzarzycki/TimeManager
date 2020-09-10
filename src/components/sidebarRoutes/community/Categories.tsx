import React from 'react';
import Category from './Category'
import {withRouter} from 'react-router-dom'
import styles from './Categories.module.css'
let cat: any[] = ['Productivity', 'Know How', 'Time Management', 'Inspirations', 'Hyde Park'] 
 function Categories({history}: any) {
    function handleClick(categoryName: any) {
        history.push(`/categories/${categoryName}`)
    } 
    return( 
        <div className={styles.mainDiv}>
            {cat.map((category) => <Category categoryName={category} handleClick={handleClick}/>)}
        </div>  
    )
}


export default withRouter(Categories)