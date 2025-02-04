import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const styles = { 
  topNavBar: {
    backgroundColor:'#000F89', // Dark blue background
    color: 'white',
    padding: '10px 20px', 
    display: 'flex',
    justifyContent: 'space-between', // Pushes items to left and right
    alignItems: 'center',
    fontSize: '14px',
    flexWrap: 'wrap', // Ensures items wrap on small screens
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
    flex: 1, // Ensures items stay on the left
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end', // Ensures "Schedule Consultation" is to the right
    flex: 1,
  },
  topNavItem: {
    display: 'flex',
    alignItems: 'center',
    margin: '5px', // Adds space between items
  },
  phoneButton: {
    marginLeft: '10px',
    padding: '5px 10px',
    backgroundColor: '#ffffff',
    color: '#003366',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  scheduleButton: {
    backgroundColor: '#add8e6', // Light blue
    color: '#003366',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginLeft: '10px',
  },
};

function TopNavBar() {
  const [isMobile, setIsMobile] = useState(false);

  // Update the screen size state on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };
    handleResize(); // Run once to check on initial load
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={styles.topNavBar}>
      {/* Left Section (Support and IT Support) */}
      <div style={styles.leftSection}>
        {/* Contact Support - Always visible on small screens */}
        {isMobile && (
          <div style={styles.topNavItem}>
            <span>Contact Support: 000-000-0000</span>
            <a href="tel:0000000000" style={styles.phoneButton}>Call</a>
          </div>
        )}

        {/* IT Support - Visible on larger screens */}
        {!isMobile && (
          <div style={styles.topNavItem}>
            <a href="tel:000000000" style={styles.phoneButton}>IT Support</a>
          </div>
        )}

        {/* Support - Visible on larger screens */}
        {!isMobile && (
          <div style={styles.topNavItem}>
            <a href="tel:0000000000" style={styles.phoneButton}>Support</a>
          </div>
        )}
      </div>

      {/* Right Section (Schedule Consultation Button) */}
      <div style={styles.rightSection}>
        <Link to="/consultation" style={styles.scheduleButton}>Schedule Consultation</Link>
      </div>
    </div>
  );
}

export default TopNavBar;
