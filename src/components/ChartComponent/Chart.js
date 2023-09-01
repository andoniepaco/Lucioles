import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Chart.css'
const data = [
  { name: '  ', yAxis: '  ' },
  { name: 'Vacancy 1', yAxis: "Published", vacanyLevel:"Published" },
  { name: 'Vacancy 2', yAxis: "Tested", vacanyLevel:"Screened" },
  { name: 'Vacancy 3', yAxis: "Screened", vacanyLevel: "Candidate Found"},
  { name: 'Vacancy 4', yAxis: "Posible Match", vacanyLevel:"Tested" },
  { name: 'Vacancy 5', yAxis: "Candidate Found",vacanyLevel:"Posible Match" },
];


const Chart = () => {
  return (
    <ResponsiveContainer className="chart-container"  height={300}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="name" />
        <YAxis type="category" dataKey ="yAxis" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="vacanyLevel" stroke="#9fd3c7" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
