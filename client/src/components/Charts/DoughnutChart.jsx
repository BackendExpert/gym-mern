import React, { useRef, useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const chartRef = useRef(null);
  const [chartSize, setChartSize] = useState(250); // Default size

  // Adjust chart size based on container width
  useEffect(() => {
    const updateSize = () => {
      if (chartRef.current) {
        setChartSize(chartRef.current.clientWidth);
      }
    };

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const data = {
    labels: ["Admin", "Trainers", "Users"],
    datasets: [
      {
        label: "User Distribution",
        data: [5, 20, 75],
        backgroundColor: ["#ff5e00", "#cc5200", "#ff9e00"],
        borderColor: ["#d64500", "#992e00", "#cc7a00"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "All Users on System",
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}`,
        },
      },
    },
  };

  return (
    <div ref={chartRef} className="w-full max-w-sm mx-auto">
      <div style={{ height: `${chartSize}px` }}>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default DoughnutChart;
