import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IntensityLineChart from './intensitybar';
import PieChart from './piechart';
import IntensityRelevanceScatter from './scatterplot';
import LikelihoodRelevanceHistogram from './histogram';



const DataVisualization = ({ chartType }) => {
    const [data, setData] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState('All');

    useEffect(() => {
        axios.get('https://dashboard-backend-4pv3.onrender.com/data')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log('Error fetching data: ', error);
            });
    }, []);

    const uniqueRegions = ['All', ...new Set(data.map(item => item.region || 'Unknown'))];

    const handleRegionChange = (event) => {
        setSelectedRegion(event.target.value);
    };

    const filteredData = selectedRegion === 'All'
        ? data
        : data.filter(item => item.region === selectedRegion);


    let chartComponent;
    switch (chartType) {
        case 'line':
            chartComponent = <IntensityLineChart data={filteredData} />;
            break;
        case 'pie':
            chartComponent = <PieChart data={filteredData} category="sector" />;
            break;
        case 'scatter':
            chartComponent = <IntensityRelevanceScatter data={data} />;
            break;
        case 'histogram':
            chartComponent = <LikelihoodRelevanceHistogram data={data} metric="likelihood" />;
            break;
        default:
            chartComponent = <div>Select a Chart Type</div>;
    }

    return (
        <div>
            <select onChange={handleRegionChange} value={selectedRegion}>
                {uniqueRegions.map(region => (
                    <option key={region} value={region}>{region}</option>
                ))}
            </select>
            {chartComponent}
        </div>
    );
};

export default DataVisualization;


