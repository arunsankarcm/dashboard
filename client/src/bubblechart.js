import React from 'react';
import { Bubble } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const MetricsBubbleChart = ({ data }) => {
    const chartData = {
        datasets: data.map(item => ({
            label: item.label,
            data: [{
                x: item.likelihood,
                y: item.impact,
                r: item.intensity / 10 // Adjust radius size as needed
            }],
            backgroundColor: 'rgba(0, 123, 255, 0.5)',
            hoverBackgroundColor: 'rgba(0, 123, 255, 0.75)'
        })),
    };

    const options = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Likelihood'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Impact'
                }
            }
        }
    };

    return <Bubble data={chartData} options={options} />;
};

export default MetricsBubbleChart;
