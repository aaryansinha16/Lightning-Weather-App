import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins:{
    title: {
        display: true,
        text: "How's the temperature today",
      },
  }
};

const labels = ['Morning', 'Afternoon', 'Evening', 'Night'];

export const data = {
  labels,
  datasets: [
    {
      label: 'temperature',
      data: [20,26,22,20],
      borderColor: 'orange',
      backgroundColor: 'yellow',
    }
  ],
};
