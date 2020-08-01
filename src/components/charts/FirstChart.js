import React, { useEffect, useState } from 'react';
import { Bar } from "react-chartjs-2";
import styles from './FirstChart.module.css'
import { db } from '../../firebase/firebase';


export default function FirstChart({userId}) {
    let [doneTasks, setDoneTasks] = useState([])
    const [chartData, setChartData] = useState({})
    useEffect(()=>{
        //FIRESTORE
        db.collection('doneTasks').where('userId', '==', userId).onSnapshot(snapshot => {
            let arr = [];
            snapshot.forEach(doc => arr.push(doc.data()))
            setDoneTasks([...arr])
        })
    }, []) 
    useEffect(()=>{
        charts()
    }, [doneTasks])
function charts() {
    let arr = [0,0,0,0,0,0,0,0,0,0,0,0]
    
    doneTasks.forEach(doneTask => {
        let date = new Date(Number(doneTask.doneDate));
        arr[date.getMonth()-1] += 1
    })
    console.log("CHARTS")
    setChartData({
        labels: ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [
                    {
                        label: "COMPLETED TASKS/MONTH",
                        data: [...arr],
                        backgroundColor: ["rgba(255,12,33,0.5)", "blue", "green", "blue", "red", "blue", 'white', 'black'],
                        borderColor:'transparent',
                        borderWidth: 2
                    }
                ]
}
    )
}


        return (
            <div className={styles.mainDiv}>
                <Bar data={chartData} options={{ maintainAspectRatio: false }}/>
            </div>
        )
    }

