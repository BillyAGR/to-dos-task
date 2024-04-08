import React from "react";
import { TodoContext } from "../TodoContext";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";
import './TodoChart.css';

ChartJS.register(ArcElement, Tooltip, Legend);

function TodoChart() {
    const {
        completedTodos,
        totalTodos,
    } = React.useContext(TodoContext);

    const data = {
        label: ['Completed', 'remaining'],
        datasets: [
            {
                data: [completedTodos, totalTodos - completedTodos],
                backgroundColor: ['#9028f0', '#FFFFFF'],
                hoverBackgroundColor: ['#9028f0', '#FFFFFF'],
            }
        ]
    }

    return (
        <div className="TodoChart">
            <Doughnut className="TodoChart" data={data} />
        </div>
    )
}

export { TodoChart };