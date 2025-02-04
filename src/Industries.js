import React, { useState } from "react";

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  buttonPanel: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "30px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s",
  },
  buttonActive: {
    backgroundColor: "#0056b3",
  },
  content: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#F8F9FA",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    fontSize: "18px",
    lineHeight: "1.6",
    color: "#333",
  },
  extSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#007BFF",
    color: "#FFFFFF",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    fontSize: "18px",
    lineHeight: "1.6",
  },
  extLeft: {
    flex: 1,
    paddingRight: "20px",
    textAlign: "left",
  },
  extRight: {
    flex: 1,
    textAlign: "center",
  },
  buttonConsult: {
    padding: "10px 20px",
    backgroundColor: "#FFC107",
    color: "#333",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

function Industries() {
  const [activeIndustry, setActiveIndustry] = useState("Ecommerce");

  const industryContent = {
    Ecommerce: "We help ecommerce businesses build robust platforms, optimize user experiences, and scale to handle high traffic demands.",
    "Client-Based": "We specialize in technology solutions for client-based businesses, streamlining workflows and enhancing customer experiences.",
    "Service Industries": "Our expertise in the service industry helps businesses improve operational efficiency and deliver exceptional customer service.",
    Finance: "We provide secure and efficient solutions for the finance industry, including data analysis, reporting, and compliance tools.",
    Logistics: "Our logistics solutions optimize supply chains, improve tracking, and enhance overall efficiency for transportation and distribution.",
  };

  return (
    <div style={styles.container}>
      {/* Button Panel */}
      <div style={styles.buttonPanel}>
        {Object.keys(industryContent).map((industry) => (
          <button
            key={industry}
            style={{
              ...styles.button,
              ...(activeIndustry === industry ? styles.buttonActive : {}),
            }}
            onClick={() => setActiveIndustry(industry)}
          >
            {industry}
          </button>
        ))}
        <button
          style={{
            ...styles.button,
            ...(activeIndustry === "Ext." ? styles.buttonActive : {}),
          }}
          onClick={() => setActiveIndustry("Ext.")}
        >
          Ext.
        </button>
      </div>

      {/* Content Section */}
      {activeIndustry !== "Ext." ? (
        <div style={styles.content}>{industryContent[activeIndustry]}</div>
      ) : (
        <div style={styles.extSection}>
          <div style={styles.extLeft}>
            <h2>Personalize Tech to Your Business Needs</h2>
            <p>
              Let us craft a custom solution that aligns with your unique goals and challenges. Your business is one of
              a kind, and your technology should be too.
            </p>
          </div>
          <div style={styles.extRight}>
            <button style={styles.buttonConsult}>Schedule a Consultation</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Industries;
