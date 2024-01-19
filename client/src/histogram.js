import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const LikelihoodRelevanceHistogram = ({ data, metric }) => {
    // Create bins for the histogram
    const bins = new Array(10).fill(0); // Adjust number of bins as needed
    const binSize = 1; // Adjust the size of each bin

    data.forEach(item => {
        const value = item[metric];
        if (value !== undefined) {
            const binIndex = Math.floor(value / binSize);
            bins[binIndex] = (bins[binIndex] || 0) + 1;
        }
    });

    const chartData = {
        labels: bins.map((_, index) => `${index * binSize} - ${(index + 1) * binSize}`),
        datasets: [
            {
                label: `Frequency of ${metric}`,
                data: bins,
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
            },
        ],
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

export default LikelihoodRelevanceHistogram;
