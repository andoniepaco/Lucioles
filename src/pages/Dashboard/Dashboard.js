import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  console.log('Dashboard component rendered'); // Add this line
  return (
    <div className='dashboard-content'>
      <h1>Welcome to the Dashboard</h1>
      {/* Your dashboard content */}
    </div>
  );
};


export default Dashboard;