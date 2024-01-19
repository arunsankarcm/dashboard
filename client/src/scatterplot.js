import React from 'react';
import { Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

// Register the necessary Chart.js components
ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const IntensityRelevanceScatter = ({ data }) => {
    // Prepare data for the scatter plot
    const chartData = {
        datasets: [
            {
                label: 'Intensity vs Relevance',
                data: data.map(item => ({
                    x: item.intensity,
                    y: item.relevance
                })),
                backgroundColor: 'rgba(75, 192,0.6)'
            }
        ],
    };

    // Chart options
    const options = {
        scales: {
            x: {
                type: 'linear',
                title: {
                    display: true,
                    text: 'Intensity'
                }
            },
            y: {
                type: 'linear',
                title: {
                    display: true,
                    text: 'Relevance'
                }
            }
        }
    };

    return <Scatter data={chartData} options={options} />;
};

export default IntensityRelevanceScatter;
                    
