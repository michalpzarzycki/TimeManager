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
                        backgroundColor: ["#74b4e4", "#74b4e4", "#74b4e4", "#74b4e4", "#74b4e4", "#74b4e4", "#74b4e4", "#74b4e4", "#74b4e4", "#74b4e4", "#74b4e4"],
                        borderColor:'rgba(255,255,255,1)',
                        borderWidth: 1,
                        yAxes: [{
                            gridLines: {
                                zeroLineColor: '#ffcc33'
                            }
                        }]
                    }
                ],
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                }
          
            
}
    )
}


        return (
     
                <Bar data={chartData} />
         
        )
    }

