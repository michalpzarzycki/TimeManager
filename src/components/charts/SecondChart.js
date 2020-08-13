import React, { useState, useEffect } from 'react'
import {Line} from "react-chartjs-2";
import {db} from '../../firebase/firebase'

export default function SecondChart({userId}) {
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
        arr[date.getDay()-1] += 1
    })
    console.log("CHARTS")
    setChartData({
        labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
                datasets: [
                    {
                        label: "COMPLETED TASKS/WEEK",
                        data: [...arr],
                        backgroundColor: ["rgb(184,214,242, 0.8)"],
                        borderColor:'transparent',
                        borderWidth: 2
                    }
                ],
                options: {
                responsive: true,
                maintainAspectRatio: false
                }
}
    )
}
        return (
            
                               <Line data={chartData} />
            
        )
    }

