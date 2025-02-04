import React, { useState } from "react";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  },
  section: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "40px",
    width: "100%",
    maxWidth: "1200px",
  },
  buttonPanel: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "5px",
    textAlign: "left",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s",
  },
  buttonActive: {
    backgroundColor: "#0056b3",
  },
  contentPanel: {
    flex: 2,
    textAlign:"center",
    padding: "10px",
    backgroundColor: "#F8F9FA",
    borderRadius: "2px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    fontSize: "30px",
    lineHeight: "2.0",
  },
  detailedSection: {
    padding: "40px 20px",
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: "20px",
    lineHeight: "1.8",
  },
  blueBackground: {
    backgroundColor: "#007BFF",
  },
  lightGrayBackground: {
    backgroundColor: "#F8F9FA",
    color: "#333",
  },
  blackBackground: {
    backgroundColor: "#343A40",
  },
};

function Services() {
  const [activeService, setActiveService] = useState("Website Development");

  const services = {
    "Website Development": "We create innovative, scalable, and user-friendly websites tailored to your business needs.",
    "Cloud and Data": "We offer advanced cloud solutions and data analytics services to optimize your operations.",
    "Cybersecurity": "Protect your business with our comprehensive cybersecurity services and proactive threat management.",
    "Tech Hardware Supplier": "Get access to the latest tech hardware with our reliable and affordable supply solutions.",
    "IT Tech Support": "Our IT support services ensure your technology runs smoothly and efficiently 24/7.",
  };

  return (
    <div style={styles.container}>
      {/* Button Panel and Content Panel */}
      <div style={styles.section}>
        <div style={styles.buttonPanel}>
          {Object.keys(services).map((service) => (
            <button
              key={service}
              style={{
                ...styles.button,
                ...(activeService === service ? styles.buttonActive : {}),
              }}
              onClick={() => setActiveService(service)}
            >
              {service}
            </button>
          ))}
        </div>
        <div style={styles.contentPanel}>{services[activeService]}</div>
      </div>

      {/* Detailed Sections */}
      <div style={{ ...styles.detailedSection, ...styles.blueBackground }}>
        <h2>Website Development</h2>
        <p>
          Our website development services focus on creating intuitive, fast, and visually appealing websites that drive
          results. Whether it’s a simple portfolio or a complex e-commerce platform, we deliver exceptional solutions. 
        </p>
      </div>

      <div style={{ ...styles.detailedSection, ...styles.lightGrayBackground }}>
        <h2>Cloud and Data</h2>
        <p>
          Transform your operations with secure cloud solutions and powerful data insights. From migration to advanced
          analytics, we help you stay ahead in the digital age.
        </p>
      </div>

      <div style={{ ...styles.detailedSection, ...styles.blackBackground }}>
        <h2>Cybersecurity</h2>
        <p>
          Safeguard your business with our proactive cybersecurity solutions. We identify and mitigate threats before
          they impact your operations, ensuring your data remains secure.
        </p>
      </div>

      <div style={{ ...styles.detailedSection, ...styles.blueBackground }}>
        <h2>Tech Hardware Supplier</h2>
        <p>
          Access a wide range of technology hardware that fits your business needs. From computers to networking
          equipment, we provide cost-effective and high-quality solutions.
        </p>
      </div>

      <div style={{ ...styles.detailedSection, ...styles.lightGrayBackground }}>
        <h2>IT Tech Support</h2>
        <p>
          Our 24/7 IT support team ensures your systems are always up and running. Let us handle your technical
          challenges so you can focus on growing your business.
        </p>
      </div>
    </div>
  );
}

export default Services;

