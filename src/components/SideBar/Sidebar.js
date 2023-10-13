import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemIcon, IconButton, Modal } from '@material-ui/core';
import { Home, BarChart, ChevronRight, Menu } from '@material-ui/icons';
import styles from './Sidebar.module.css';
import logo from '../assets/LogoTransparent.png';
import { Grid } from '@mui/material';

const sidebarButtons = [
  { name: 'User', icon: Home },
  { name: 'Quize', icon: BarChart },
  { name: 'Counselling', icon: BarChart },
];

const Sidebar = ({ setActivePage }) => {
  const [selectedButton, setSelectedButton] = useState('User');

  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleButtonClick = (buttonName) => {
    setActivePage(buttonName);
    setSelectedButton(buttonName);
    setIsSidebarVisible(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 912);
    };

    handleResize(); // Call initially to set the initial value

    window.addEventListener('resize', handleResize); // Listen for window resize events

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the event listener
    };
  }, []);

  const handleHamburgerClick = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      {isMobile ? (
        <>
          <IconButton className={styles.hamburgerIcon} onClick={handleHamburgerClick}>
            <Menu fontSize="large" />
          </IconButton>
          <Modal open={isSidebarVisible} onClose={handleHamburgerClick}>
            <div className={`${styles.sidebar} ${isSidebarVisible ? styles.open : ''}`}>
              {/* <div className={styles.logoContainer}>
                <img src={logo} alt="Logo" className={styles.logo} />
              </div> */}
              <div>
                <Typography variant="body2" className={styles.subtitle}>
                  Home
                </Typography>
                <div className={styles.sectionBreak}>
                  <List component="nav">
                    {sidebarButtons.slice(0, 1).map((button) => (
                      <ListItem
                        key={button.name}
                        button
                        onClick={() => handleButtonClick(button.name)}
                        className={selectedButton === button.name ? styles.selectedButton : ''}
                      >
                        <ListItemIcon className={styles.listItemIcon}>
                          <button.icon
                            fontSize="small"
                            className={selectedButton === button.name ? styles.selectedIcon : styles.listItemIcon}
                          />
                        </ListItemIcon>
                        <span className={styles.listItemText}>{button.name}</span>
                        {selectedButton === button.name && (
                          <ChevronRight fontSize="small" className={styles.selectedChevron} />
                        )}
                        {selectedButton !== button.name && <ChevronRight fontSize="small" className={styles.chevron} />}
                      </ListItem>
                    ))}
                  </List>
                </div>
              </div>
              <div>
                <Typography variant="body2" className={styles.subtitle}>
                  Pages
                </Typography>
                <div className={styles.sectionBreak}>
                  <List component="nav">
                    {sidebarButtons.slice(1).map((button) => (
                      <ListItem
                        key={button.name}
                        button
                        onClick={() => handleButtonClick(button.name)}
                        className={selectedButton === button.name ? styles.selectedButton : ''}
                      >
                        <ListItemIcon className={styles.listItemIcon}>
                          <button.icon
                            fontSize="small"
                            className={selectedButton === button.name ? styles.selectedIcon : styles.listItemIcon}
                          />
                        </ListItemIcon>
                        <span className={styles.listItemText}>{button.name}</span>
                        {selectedButton === button.name && (
                          <ChevronRight fontSize="small" className={styles.selectedChevron} />
                        )}
                        {selectedButton !== button.name && <ChevronRight fontSize="small" className={styles.chevron} />}
                      </ListItem>
                    ))}
                  </List>
                </div>
              </div>
            </div>
          </Modal>
        </>
      ) : (
        <Container className={styles.sidebar}>
          <Grid sx={{ paddingTop: '5px', paddingBottom: '5px', paddingLeft: '12px', fontSize: '40px' }}
          >
            <Typography className='logo' style={{ fontSize: '30px', fontFamily: 'Leckerli One' }}>
              Nano Chat
            </Typography>

          </Grid>

          {/* <div className={styles.logoContainer}>
            <img src={logo} alt="Logo" className={styles.logo} />
          </div> */}
          <div>
            <Typography variant="body2" className={styles.subtitle}>
              Home
            </Typography>
            <div className={styles.sectionBreak}>
              <List component="nav">
                {sidebarButtons.slice(0, 1).map((button) => (
                  <ListItem
                    key={button.name}
                    button
                    onClick={() => handleButtonClick(button.name)}
                    className={selectedButton === button.name ? styles.selectedButton : ''}
                  >
                    <ListItemIcon className={styles.listItemIcon}>
                      <button.icon
                        fontSize="small"
                        className={selectedButton === button.name ? styles.selectedIcon : styles.listItemIcon}
                      />
                    </ListItemIcon>
                    <span className={styles.listItemText}>{button.name}</span>
                    {selectedButton === button.name && (
                      <ChevronRight fontSize="small" className={styles.selectedChevron} />
                    )}
                    {selectedButton !== button.name && <ChevronRight fontSize="small" className={styles.chevron} />}
                  </ListItem>
                ))}
              </List>
            </div>
          </div>
          <div>
            <Typography variant="body2" className={styles.subtitle}>
              Pages
            </Typography>
            <div className={styles.sectionBreak}>
              <List component="nav">
                {sidebarButtons.slice(1).map((button) => (
                  <ListItem
                    key={button.name}
                    button
                    onClick={() => handleButtonClick(button.name)}
                    className={selectedButton === button.name ? styles.selectedButton : ''}
                  >
                    <ListItemIcon className={styles.listItemIcon}>
                      <button.icon
                        fontSize="small"
                        className={selectedButton === button.name ? styles.selectedIcon : styles.listItemIcon}
                      />
                    </ListItemIcon>
                    <span className={styles.listItemText}>{button.name}</span>
                    {selectedButton === button.name && (
                      <ChevronRight fontSize="small" className={styles.selectedChevron} />
                    )}
                    {selectedButton !== button.name && <ChevronRight fontSize="small" className={styles.chevron} />}
                  </ListItem>
                ))}
              </List>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default Sidebar;



