import React, { useState, useEffect } from 'react'
import {Doughnut} from "react-chartjs-2";
import {db} from '../../firebase/firebase'
import { defaults } from 'react-chartjs-2'


defaults.global.defaultFontColor = 'white'
defaults.global.defaultFontFamily = 'Arial'

export default function ThirdChart({userId}) {
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
    let arr = [0,0,0]
    
    doneTasks.forEach(doneTask => {
        let importance = doneTask.importance
        arr[importance-1] += 1
    })
    console.log("CHARTS import", arr)
    setChartData({
        labels: ["Super Important", "Important", "Not Important"],
                    datasets: [
                        {
                            label: "Active tasks",
                            data: [...arr],
                            backgroundColor: ['yellow', 'red', 'blue'],
                            color: 'white'
                        }
                    ]
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
            <div>
          <Doughnut data={chartData}/>
            </div>
        )
    }

