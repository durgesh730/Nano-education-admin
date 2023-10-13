import React, { useState } from 'react';
import profileImage from '../assets/profileImage.png';
import { Typography, IconButton, MenuItem, Badge, Modal } from '@material-ui/core';
import { Notifications} from '@material-ui/icons';
import styles from './TopBarWelcome.module.css';
import { CircleFlag } from 'react-circle-flags';

const TopBarWelcome = ({ name, position }) => {
  const countryOptions = [
    { value: 'us', label: 'United States' },
    { value: 'gb', label: 'United Kingdom' },
    { value: 'in', label: 'India' },
    { value: 'ch', label: 'China' },
    // Add more country options as needed
  ];

  const [selectedCountryCode, setSelectedCountryCode] = useState('us'); // Default country code
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const handleFlagClick = () => {
    //setIsDropdownOpen(!isDropdownOpen);
  };

  const handleFlagOptionClick = (countryCode) => {
    //setSelectedCountryCode(countryCode);
    //setIsDropdownOpen(false);
    //handleNewNotification('Country has been changed');
  };

  const handleNotificationClick = () => {
    setIsNotificationModalOpen(true);
  };

  const handleCloseNotificationModal = () => {
    setIsNotificationModalOpen(false);
    // Clear notifications
    setNotifications([]);
  };

  return (
    <div className={styles.topBarWelcome}>
      <div className={styles.topBar}>
        <div className={styles.flag}>
          <CircleFlag
            countryCode={selectedCountryCode}
            className={styles.flagContainer}
            onClick={handleFlagClick}
          />
          {isDropdownOpen && (
            <div className={styles.dropdown}>
              {countryOptions.map((option) => (
                <MenuItem key={option.value} onClick={() => handleFlagOptionClick(option.value)}>
                  {option.label}
                </MenuItem>
              ))}
            </div>
          )}
        </div>
        <IconButton className={styles.badge} onClick={handleNotificationClick}>
          <Badge badgeContent={notifications.length} color="error">
            <Notifications />
          </Badge>
        </IconButton>
        <div className={styles.userDp}>
          <img src={profileImage} alt="User DP" className={styles.userDpImage} />
        </div>
        <div className={styles.userInfo}>
          <div className={styles.userInfoText}>
            <Typography variant="subtitle1" className={styles.userName}>{name}</Typography>
            <Typography variant="caption" >{position}</Typography>
          </div>
        </div>
        <div className={styles.flexibleSpace}></div>
      </div>
      <Modal open={isNotificationModalOpen} onClose={handleCloseNotificationModal}>
        <div className={styles.notificationModal}>
          <Typography variant="h6" className={styles.notificationModalTitle}>
            Notifications
          </Typography>
          <ul className={styles.notificationList}>
            {notifications.map((notification, index) => (
              <li key={index} className={styles.notificationItem}>
                {notification}
              </li>
            ))}
          </ul>
        </div>
      </Modal>
    </div>
  );
};

export default TopBarWelcome;
