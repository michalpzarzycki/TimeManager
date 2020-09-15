import React, { useEffect, useState } from 'react';
import styles from './Pagination.module.css';

export default function Pagination({numberOfElems, elemsOnPage, topics, paginateTopics}: any) {

    const [pages, setPages] = useState<any>([1,2,3,4,5]) 
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(5)
    useEffect(() => {
        let pages = Math.ceil(numberOfElems/elemsOnPage)
        let arr = Array.from({length: pages}, (v,i) => i+1)
        setPages([...arr])   
        console.log("PAGES", pages)
    }, [numberOfElems])
   useEffect(() => {
    paginateTopics(currentPage, postPerPage, topics)
   }, [currentPage,topics])
    function nextPageSetter() {
        if(currentPage> Math.ceil(numberOfElems/elemsOnPage)) {
        } else {
            setCurrentPage(currentPage+1)
        }

    }
    function previousPageSetter() {
        if(currentPage-1>0) {
            setCurrentPage(currentPage-1)
        }
    }

    return(
        <div className={styles.paginationDiv}>
        <div className={styles.paginationButtons}>
             <div className={styles.longButton} onClick={previousPageSetter}>{`<<`}</div>
             {pages.map((page: any) => {
                 return <div className={currentPage===page ? styles.smallButtonActive : styles.smallButton} >{page}</div>
             })}
             <div className={styles.longButton} onClick={nextPageSetter}>{`>>`}</div>
        </div>
    </div>
    )
}