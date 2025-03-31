import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const TrainerProgramme = () => {
  const data = {
    labels: ["All Programmes", "My Programmes"],
    datasets: [
      {
        data: [30, 70], // Adjust values as needed
        backgroundColor: ["#36A2EB", "#FF6384"],
        hoverBackgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  return (
    <div style={{ width: "300px", height: "300px" }}>
      <Pie data={data} />
    </div>
  );
};

export default TrainerProgramme;
