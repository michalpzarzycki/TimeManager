import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import styles from './Category.module.css';

function Category({categoryName, match}: any) {
    return(
        <Link to={`/community/${categoryName}`} className={styles.mainSection}>
                <div className={styles.contentDiv}>
                    <p className={styles.categoryName}>{categoryName}</p>
                </div>
        </Link>
        
    )
}

export default withRouter(Category)