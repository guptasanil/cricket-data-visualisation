import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState } from "react";
import { UserData } from "../data";

function BarChart({ chartData }) {
  return (
    <Bar
      data={chartData}
      options={{
        maintainAspectRatio: true,

        indexAxis: "y",
      }}
    />
  );
}

export default BarChart;
