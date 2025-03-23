// src/components/LineChart.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart elements
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const OneLineChart = ({}) => {
    // Function to get the last 6 months dynamically
    const getLastSixMonths = () => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const currentMonth = new Date().getMonth(); // Get current month (0-11)
        const lastSixMonths = [];

        for (let i = 5; i >= 0; i--) {
            lastSixMonths.push(months[(currentMonth - i + 12) % 12]); // Handle negative index with modulo
        }

        return lastSixMonths;
    };

    const data = {
        labels: getLastSixMonths(), // Get the last 6 months dynamically
        datasets: [
            {
                label: 'New Members',
                data: [50, 40, 70, 20, 90, 100], // Dummy data for the sales growth
                borderColor: '#ff6900', // Line color
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // Area color
                tension: 0.4, // Smooth line
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'New Members Join Last 6 Months',
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Months',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Growth',
                },
            },
        },
    };

    return (
        <div>
            <Line data={data} options={options} />
        </div>
    );
};

export default OneLineChart;
