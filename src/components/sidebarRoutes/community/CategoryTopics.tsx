import React, { useEffect, useState } from 'react';
import Topic from './Topic'
import {Link, withRouter} from 'react-router-dom'
import styles from './CategoryTopics.module.css'
import ForumFilters from './ForumFilters';
import communityService from '../../../services/communityService';

 function CategoryTopics({match, history}: any) {
     const [topics, setTopics] = useState<any>([])
     const [currentTopics, setCurrentTopics] = useState<any>([])
     useEffect(() => {
         console.log("HELLO")
          let cat = history.location.pathname.split('/').reverse()[0]
        communityService.getCategoryTopics(cat).then((doc: any) => {
            console.log("DOC", doc)
            setTopics([...doc])
        })
     }, [])
     function paginateTopics(currentPage: any, postPerPage: any, topics: any) {
        const indexOfLastPost = currentPage*postPerPage;
        const indexOfFirstPost = indexOfLastPost - postPerPage
        const currentTopics = topics.slice(indexOfFirstPost, indexOfLastPost)
        setCurrentTopics([...currentTopics])
     }

    return(
        <div className={styles.mainDiv}>
            <Link to={`${match.url}/createtopic`}>Create Topic</Link>
            <ForumFilters topics={topics} paginateTopics={paginateTopics}/>
            {currentTopics.map((topic: any) => {
                console.log("Y", topic)
            return <Topic topic={topic}/>
            }
            )}
        </div>
    )
}

export default withRouter(CategoryTopics)