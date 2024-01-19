import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data, category }) => {
    // Process data to get counts for each category
    const categoryCounts = data.reduce((acc, item) => {
        const key = item[category];
        acc[key] = (acc[key] || 0) + 1;
        return acc;
    }, {});

    const chartData = {
        labels: Object.keys(categoryCounts),
        datasets: [
            {
                data: Object.values(categoryCounts),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    // ... more colors
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    // ... more border colors
                ],
                borderWidth: 1,
            },
        ],
    };

    return <Pie data={chartData} />;
};

export default PieChart;
