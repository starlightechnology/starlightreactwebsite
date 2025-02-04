import React from "react";
import { Link } from "react-router-dom";

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    fontSize: "32px",
    marginBottom: "20px",
  },
  description: {
    fontSize: "18px",
    marginBottom: "20px",
  },
  link: {
    display: "inline-block",
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
    fontSize: "16px",
  },
};

function Careers() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Careers at Starlight Technology</h1>
      <p style={styles.description}>
        Join our team and make an impact! We're looking for passionate individuals to help us create innovative solutions.
      </p>
      <Link to="/" style={styles.link}>
        Back to Homepage
      </Link>
    </div>
  );
}

export default Careers;
