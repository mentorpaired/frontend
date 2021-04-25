import React, { useContext } from 'react';
import { Loading } from '../../../components/Loading';
import { StateContext } from '../../../store';
import DashboardCard from './dashboard-card/DashboardCard';


const Dashboard = () => {
	const { state } = useContext(StateContext)
  return (
    <div className="dashboard-card-container">
      { state.loading ? (<Loading/>) : (
        <React.Fragment>
          <DashboardCard/>
          <DashboardCard/>
          <DashboardCard/>
          <DashboardCard/>
        </React.Fragment>
      )}
    </div>
  );
}

export default Dashboard;
