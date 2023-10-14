import React, { useState } from 'react';
import styles from './Dashboard.module.css';
import Sidebar from '../SideBar/Sidebar';
import TopBarWelcome from '../TopBar&Welcome/TopBarWelcome';
import User from './User';
import Quize from './Quize';
import Counselling from './Counselling';

const Dashboard = () => {
  const name = 'Austin Robertson';
  const position = 'Marketing Administrator';
  const [activePage, setActivePage] = useState('User');

  return (
    <div className={styles.dashboardContainer}>
      <TopBarWelcome name={name} position={position} />
      <Sidebar setActivePage={setActivePage} />
      <div className={styles.rightContainer}>
        {/* PieGraphs */}
        {activePage === 'User' && <User/>}

        {/*Demographic*/}
        {activePage === 'Quize' && <Quize/>}

        {/* Profile */}
        {activePage === 'Counselling' && <Counselling />}

      </div>
    </div>
  );
};

export default Dashboard;