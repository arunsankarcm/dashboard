// Dashboard.js
import './dashboard.css';
import React from 'react';
import './App.css';
import DataVisualization from './datavisualization';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1>My Data Dashboard</h1>
            <div className="charts">
                <div className="chart-container">
                    <div className="chart-content">
                        <DataVisualization chartType="line" />
                    </div>
                </div>
                <div className="chart-container">
                    <div className="chart-content">
                        <DataVisualization chartType="pie" />
                    </div>
                </div>
                <div className="chart-container">
                    <div className="chart-content">
                        <DataVisualization chartType="scatter" />
                    </div>
                </div>
                <div className="chart-container">
                    <div className="chart-content">
                        <DataVisualization chartType="histogram" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
