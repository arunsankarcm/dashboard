import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const IntensityLineChart = ({ data }) => {
    // Extract year and filter out invalid entries
    const processedData = data.map(item => {
        return {
            ...item,
            year: item.published ? new Date(item.published).getFullYear() : null
        };
    }).filter(item => item.year != null).sort((a, b) => a.year - b.year);

    // Prepare chart data
    const chartData = {
        labels: processedData.map(item => item.year),
        datasets: [
            {
                label: 'Intensity',
                data: processedData.map(item => item.intensity),
                fill: false,
                borderColor: 'rgba(75, 192, 192, 1)',
                tension: 0.1
            },
        ],
    };

    return <Line data={chartData} />;
};

export default IntensityLineChart;
