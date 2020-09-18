import React, { useEffect, useState } from 'react';
import { Bar } from "react-chartjs-2";
import styles from './FirstChart.module.css'
import { db } from '../../firebase/firebase';
import { connect } from 'react-redux';
import { defaults } from 'react-chartjs-2';


 function FirstChart({userId, darkMode, fontFamily} : any) {
    let [doneTasks, setDoneTasks] = useState<any>([])
    const [chartData, setChartData] = useState<any>({})
    useEffect(()=>{
        //FIRESTORE
        db.collection('doneTasks').where('userId', '==', userId).onSnapshot(snapshot => {
            let arr : any[] = []
            snapshot.forEach(doc => arr.push(doc.data()))
            let arr2 : any[] = [...arr]
            setDoneTasks(arr2)
        })
    }, []) 
    useEffect(() => {
        darkMode ? defaults.scale.gridLines.color = "#white" : defaults.scale.gridLines.color = "grey"
        darkMode ? defaults.global.defaultFontColor='white' : defaults.global.defaultFontColor='grey';
        darkMode ? defaults.global.tooltips.titleFontColor='white' : defaults.global.tooltips.titleFontColor='grey';
        defaults.global.defaultFontFamily=fontFamily
    }, [darkMode, fontFamily])
    useEffect(()=>{
        charts()
    }, [doneTasks])
function charts() {
    let arr = [0,0,0,0,0,0,0,0,0,0,0,0]
    let background = darkMode ? '#fff' : '#74b4e4' 
    doneTasks.forEach((doneTask : any) => {
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
                        backgroundColor: [background, background, background, background, background, background, background, background, background, background, background],
                        borderColor: 'fff',
                        borderWidth: '1px',
                    
                        
                    }
                ],
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true,
                                fontColor: '#fff'
                            },
                        }],
                      xAxes: [{
                            ticks: {
                                fontColor: '#fff'
                            },
                        }]
                    } 
                }
          
            
}
    )
}


        return (
     
                <Bar data={chartData} />
         
        )
    }
const mapStateToProps = (state: any) => {
    return {
        darkMode: state.darkmode,
        fontFamily: state.fontfamily
    }
}
export default connect(mapStateToProps)(FirstChart)