// import profileImage from '../assets/profileImage.png';
import { Typography} from '@material-ui/core';
import styles from './TopBarWelcome.module.css';

const TopBarWelcome = () => {

  return (
    <div className={styles.topBarWelcome}>
      <div className={styles.topBar}>
        
        {/* <div className={styles.LogOut}>
          <button>Log Out</button>
        </div> */}

        <div className={styles.userDp}>
          {/* <img src={profileImage} alt="User DP" className={styles.userDpImage} /> */}
        </div>
        
        <div className={styles.userInfo}>
          <div className={styles.userInfoText}>
            <Typography variant="subtitle1" className={styles.userName}>Durgesh</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBarWelcome;
