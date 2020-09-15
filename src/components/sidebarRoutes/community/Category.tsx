import React, { useEffect } from 'react';
import {Link, withRouter} from 'react-router-dom';
import styles from './Category.module.css';

function Category({categoryName, match}: any) {
 
    function noSpace(x: any){
        return  x.split("").filter((x: any) => x!==' ').join("")
        }
    
    return(
        <Link to={`/community/${noSpace(categoryName).toLowerCase()}`} className={styles.mainSection}>
                <div className={styles.contentDiv}>
                    <p className={styles.categoryName}>{categoryName}</p>
                </div>
        </Link>
        
    )
}

export default withRouter(Category)