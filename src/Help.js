import React from "react";

const styles = {
  footerLink: {
    marginLeft: "10px",
    textDecoration: "none",
    color: "#007bff",
  },
};

const Help = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Help Center</h1>
      <p>We're here to assist you with any questions or issues. Feel free to reach out!</p>

      {/* Footer */}
      <div style={{ textAlign: "center", padding: "10px", backgroundColor: "#f8f9fa", marginTop: "20px" }}>
        &copy; {new Date().getFullYear()} Starlight Technology. 
        <a href="/careers" style={styles.footerLink}>
          Careers
        </a>
      </div>
    </div>
  );
};

export default Help;
