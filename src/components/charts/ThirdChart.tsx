import React, { useState, useEffect } from 'react'
import {Doughnut} from "react-chartjs-2";
import {db} from '../../firebase/firebase'
import { defaults } from 'react-chartjs-2'


defaults.global.defaultFontColor = 'black'
defaults.global.defaultFontFamily = 'Arial'

export default function ThirdChart({userId} : any) {
    let [doneTasks, setDoneTasks] = useState<any>([])
    const [chartData, setChartData] = useState({})
    useEffect(()=>{
        //FIRESTORE
        db.collection('doneTasks').where('userId', '==', userId).onSnapshot(snapshot => {
            let arr : any[] = [];
            snapshot.forEach(doc => arr.push(doc.data()))
            setDoneTasks([...arr])
        })
    }, []) 
    useEffect(()=>{
        charts()
    }, [doneTasks])
function charts() {
    let arr = [0,0,0]
    
    doneTasks.forEach((doneTask : any) => {
        let importance = doneTask.importance
        arr[importance-1] += 1
    })
    console.log("CHARTS import", arr)
    setChartData({
        labels: ["Super Important", "Important", "Normal"],
                    datasets: [
                        {
                            label: "Active tasks",
                            data: [...arr],
                            backgroundColor: ['#F41A1A', '#E2ED11', '#71716F'],
                            color: 'black'
                        }
                    ],    options: {
                                    responsive: true,
                                    maintainAspectRatio: false
                                }
}
    )
}
    // let chartRef = React.createRef();
    
    // useEffect(()=>{
    //     const myChartRef = chartRef.current.getContext("2d");
        
    //     new Chart(myChartRef, {
    //         type: "doughnut",
    //         data: {
    //             //Bring in data
    //             labels: ["Super Important", "Important", "Not Important"],
    //             datasets: [
    //                 {
    //                     label: "Active tasks",
    //                     data: [86, 67, 91],
    //                 }
    //             ]
    //         },
    //         options: {
    //             responsive: true,
    //             maintainAspectRatio: false
    //         }
    //     });
    // }, []) 
    
        return (
            
          <Doughnut data={chartData}   />
            
        )
    }

