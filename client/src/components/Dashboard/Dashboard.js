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
        {/* user */}
        {activePage === 'User' && <User/>}

        {/*Quize*/}
        {activePage === 'Quize' && <Quize/>}

        {/* Counselling */}
        {activePage === 'Counselling' && <Counselling />}

      </div>
    </div>
  );
};

export default Dashboard;