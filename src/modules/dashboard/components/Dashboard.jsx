import React from 'react';
import DashboardCard from './dashboard-card/DashboardCard';


const Dashboard = () => {
  return (
    <div className="dashboard-card-container">
      <DashboardCard/>
      <DashboardCard/>
      <DashboardCard/>
      <DashboardCard/>
    </div>
  );
}

export default Dashboard;
