import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Blog from "./Blog";
import SocialMedia from "./SocialMedia";
import Services from "./Services";
import About from "./About";
import Industries from "./Industries";
import Homepage from "./Homepage";
import Careers from "./Homepage"; // Import Careers component
import Help from "./Homepage"; // Import Help component
import TopNavBar from "./TopNavBar"; // Import the TopNavBar component
import Consultation from "./Consultation"; // Import the Consultation component
import Review from "./Review"; // Import Review component

// Inline styles for quick integration
const styles = {
  app: {
    display: "flex",
    height: "100vh",
    flexDirection: "column",
  },
  mainContent: {
    flex: 1,
    padding: "20px",
    overflow: "auto",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between", // Ensure space between logo and navigation/menu
    padding: "1px 15px",
    backgroundColor: "#F2F3F4",
    position: "relative", // Required for the hamburger menu positioning
    zIndex: 2, // Ensures it appears above other elements
  },
  logo: {
    height: "100px",
    width: "auto",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    padding: 0,
    justifyContent: "space-between",
    flex: 1,
  },
  navItem: {
    marginLeft: "90px",
    display: "inline-block",
  },
  navLink: {
    textDecoration: "none",
    color: "#333",
    fontSize: "20px",
    fontWeight: "bold",
  },
  burgerBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "30px",
    height: "30px",
    zIndex: 3,
    cursor: "pointer",
    position: "absolute", // Position it absolutely within the header
    top: "20px", // Align to top within the navbar
    right: "20px", // Align to right side
  },
  burgerLine: {
    height: "4px",
    width: "100%",
    backgroundColor: "#333",
    borderRadius: "2px",
    transition: "all 0.3s",
  },
  fullScreenMenu: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "black",
    zIndex: 2,
    transition: "all 0.3s ease-in-out",
  },
  fullScreenLink: {
    color: "white",
    fontSize: "24px",
    textDecoration: "none",
    padding: "10px",
    margin: "10px 0",
  },
};

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800); // Adjust to your needs
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleNav = () => setIsOpen(!isOpen);
  const resetNav = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <Router>
      <div style={styles.app}>
        {/* Add TopNavBar above the original navbar */}
        <TopNavBar />

        {/* Original Header Section with logo and navigation */}
        <header style={styles.header}>
          <div style={styles.headerContainer}>
            <div style={styles.logoContainer}>
              <Link to="/">
                <img
                  src="/starlightlogo.png"
                  alt="Starlight Technology Logo"
                  style={styles.logo}
                />
              </Link>
            </div>
            {isMobile && (
              <div style={styles.menuButtonContainer}>
                <div style={styles.burgerBox} onClick={toggleNav}>
                  <div style={styles.burgerLine} />
                  <div style={styles.burgerLine} />
                  <div style={styles.burgerLine} />
                </div>
              </div>
            )}
          </div>
          {!isMobile && (
            <nav>
              <ul style={styles.navLinks}>
                <li style={styles.navItem}>
                  <Link to="/services" style={styles.navLink}>
                    Services
                  </Link>
                </li>
                <li style={styles.navItem}>
                  <Link to="/industries" style={styles.navLink}>
                    Industries
                  </Link>
                </li>
                <li style={styles.navItem}>
                  <Link to="/social-media" style={styles.navLink}>
                    SLT Insider
                  </Link>
                </li>
                <li style={styles.navItem}>
                  <Link to="/about" style={styles.navLink}>
                    Contact
                  </Link>
                </li>
                <li style={styles.navItem}>
                  <Link to="/careers" style={styles.navLink}>
                    Careers
                  </Link>
                </li>
                <li style={styles.navItem}>
                  <Link to="/help" style={styles.navLink}>
                    Help
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </header>

        {/* Main Content Section with routing */}
        <div style={styles.mainContent}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/social-media" element={<SocialMedia />} />
            <Route path="/about" element={<About />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/help" element={<Help />} />
            <Route path="/review" element={<Review />} /> {/* New Review Route */}
          </Routes>
        </div>

        {isMobile && isOpen && (
          <div style={styles.fullScreenMenu}>
            <Link
              to="/services"
              style={styles.fullScreenLink}
              onClick={resetNav}
            >
              Services
            </Link>
            <Link
              to="/industries"
              style={styles.fullScreenLink}
              onClick={resetNav}
            >
              Industries
            </Link>
            <Link
              to="/social-media"
              style={styles.fullScreenLink}
              onClick={resetNav}
            >
              SLT Insider
            </Link>
            <Link to="/about" style={styles.fullScreenLink} onClick={resetNav}>
              Contact
            </Link>
            <Link to="/careers" style={styles.fullScreenLink} onClick={resetNav}>
              Careers
            </Link>
            <Link to="/help" style={styles.fullScreenLink} onClick={resetNav}>
              Help
            </Link>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
