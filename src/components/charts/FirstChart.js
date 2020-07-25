import React, { useEffect } from 'react';
import Chart from "chart.js";
import styles from './FirstChart.module.css'


export default function FirstChart() {
    let chartRef = React.createRef();
    
    useEffect(()=>{
        const myChartRef = chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "bar",
            data: {
                //Bring in data
                labels: ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [
                    {
                        label: "Total Tasks",
                        data: [86, 67, 91,88,66,32,15,28,96,34,75,96],
                        backgroundColor: ["rgba(255,12,33,0.5)", "blue", "green", "blue", "red", "blue", 'white', 'black'],
                        borderColor:'red',
                        borderWidth: 2
                    }
                ],

            },
            tooltips: {
                backgroundColor: "rgba(255,255,255, 1)"

            },
            options: {
                backgroundColor: "rgba(255,255,255, 1)",
                responsive: true,
                maintainAspectRatio: false
                          }
        });
    }, []) 
    
        return (
            <div className={styles.mainDiv}>
                <canvas
                    id="myChart"
                    ref={chartRef}
                />
            </div>
        )
    }

