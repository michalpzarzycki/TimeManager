import React, { Component, useEffect } from 'react'
import Chart from "chart.js";

export default function ThirdChart() {
    let chartRef = React.createRef();
    
    useEffect(()=>{
        const myChartRef = chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "doughnut",
            data: {
                //Bring in data
                labels: ["Super Important", "Important", "Not Important"],
                datasets: [
                    {
                        label: "Active tasks",
                        data: [86, 67, 91],
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }, []) 
    
        return (
            <div>
                <canvas
                    id="myChart"
                    ref={chartRef}
                />
            </div>
        )
    }

