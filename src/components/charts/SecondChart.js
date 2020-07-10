import React, { Component, useEffect } from 'react'
import Chart from "chart.js";

export default function SecondChart() {
    let chartRef = React.createRef();
    
    useEffect(()=>{
        const myChartRef = chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: ["Mon", "Tue", "Wed", "thu", "fri", "sat", "sun"],
                datasets: [
                    {
                        label: "Completed tasks",
                        data: [86, 67, 91,1,56,98,5],
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

