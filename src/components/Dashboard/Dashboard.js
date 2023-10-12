import React, { useState } from 'react';
import styles from './Dashboard.module.css';
import Sidebar from '../SideBar/Sidebar';
import TopBarWelcome from '../TopBar&Welcome/TopBarWelcome';
// import PieGraphsContent from "../PieGraphsContent/PieGraphsContent";
// import Demographic from '../Demographics/Demographic';
//import Profile from '../Profile/Profile';
//import Compatibility from '../Compatibility/Compatibility';
//import E-Quiz from '../E-Quiz/E-Quiz';
// import Answers from '../Answers/Answers';
// import Profile from '../Profile/Profile';
// import Compatibility from '../Compatibility/Compatibility';
// import EQuiz from '../E-Quiz/E-Quiz';
//import Answers from '../Answers/Answers';
// import Subscriptions from '../Subscriptions/Subscriptions';
// import Roles from '../Roles/Roles';
//import Mail from '../Mail/Mail';

const Dashboard = () => {
  const name = 'Austin Robertson';
  const position = 'Marketing Administrator';
  const [activePage, setActivePage] = useState('Dashboard');

  return (
    <div className={styles.dashboardContainer}>
      <TopBarWelcome name={name} position={position} />
      <Sidebar setActivePage={setActivePage} />
      <div className={styles.rightContainer}>
        {/* PieGraphs */}
        {/* {activePage === 'Dashboard' && <PieGraphsContent />} */}

        {/*Demographic*/}
        {/* {activePage === 'Demographic' && <Demographic />} */}

        {/* Profile */}
        {/* {activePage === 'Profile' && <Profile />} */}

        {/* Compatibility */}
        {/* {activePage === 'Compatibility' && <Compatibility />} */}
        {/*Compatibility
        {activePage === 'Compatibility' && <Compatibility />}*/}

        {/* E-Quiz* */}
        {/* {activePage === 'E-Quiz' && <EQuiz />} */}

        {/* Answers */}
        {/* {activePage === 'Answers' && <Answers />} */}

        {/* Subscriptions */}
        {/* {activePage === 'Subscriptions' && <Subscriptions />} */}

        {/* Roles */}
        {/* {activePage === 'Roles' && <Roles />} */}

        {/*Mail
        {activePage === 'Mail' && <Mail />}*/}

      </div>
    </div>
  );
};

export default Dashboard;