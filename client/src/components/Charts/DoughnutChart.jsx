import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  // Dummy data
  const data = {
    labels: ['Red', 'Blue', 'Yellow'], // Labels for each section of the doughnut
    datasets: [
      {
        label: 'My First Dataset',
        data: [5, 20, 75], // Data points for each section
        backgroundColor: [
          '#ff5e00', // Red
          '#cc5200', // Blue
          '#ff9e00', // Yellow
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 205, 86, 1)',
        ],
        borderWidth: 1, // Border width for each section
      },
    ],
  };

  const options = {
    responsive: true, // Make chart responsive to container size
    maintainAspectRatio: false, // Allow the chart to adjust its aspect ratio based on container
    plugins: {
      title: {
        display: true,
        text: 'All Users on System',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className="w-full h-full">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
