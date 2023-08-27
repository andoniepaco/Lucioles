import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './Chart.css'

const data = [
  { name: 'Vacancy 1', value: 12 },
  { name: 'Vacancy 2', value: 19 },
  { name: 'Vacancy 3', value: 3 },
  { name: 'Vacancy 4', value: 5 },
  { name: 'Vacancy 5', value: 2 },
  { name: 'Vacancy 6', value: 3 },
];

const Chart = () => {
  return (
    <div>
      <p>Dashboard</p>
      <p>How is your hiring going?</p>
      <BarChart className='chart' width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" interval={0} />
        <YAxis dataKey="value" interval={0} />
        {/* <YAxis /> */}
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default Chart;
