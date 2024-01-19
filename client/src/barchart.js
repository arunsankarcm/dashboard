import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MetricsBarChart = ({ data }) => {
    const chartData = {
        labels: data.map(item => item.label), //
        datasets: [
            {
                label: 'Impact',
                data: data.map(item => item.impact),
                backgroundColor: 'rgba(255, 99, 132, 0.5)'
            },
            {
                label: 'Likelihood',
                data: data.map(item => item.likelihood),
                backgroundColor: 'rgba(54, 162, 235, 0.5)'
            },
            {
                label: 'Relevance',
                data: data.map(item => item.relevance),
                backgroundColor: 'rgba(75, 192, 192, 0.5)'
            }
        ]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    return <Bar data={chartData} options={options} />;
};

export default MetricsBarChart;

