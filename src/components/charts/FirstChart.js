import React, { useEffect } from 'react';
import Chart from "chart.js";
import styles from './FirstChart.module.css'


export default function FirstChart() {
    let chartRef = React.createRef();
    
    useEffect(()=>{
        const myChartRef = chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "radar",
            data: {
                //Bring in data
                labels: ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [
                    {
                        label: "Total Tasks",
                        data: [86, 67, 91,88,66,32,15,28,96,34,75,96],
                    }
                ]
            },
            tooltips: {
                backgroundColor: "rgba(99,99,99,0.8)"

            },
            options: {
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

