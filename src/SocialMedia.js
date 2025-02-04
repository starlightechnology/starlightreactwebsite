import React from "react";

const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
  },
  post: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: "20px",
    marginBottom: "30px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  image: {
    flex: "0 0 150px",
    height: "150px",
    borderRadius: "8px",
    objectFit: "cover",
  },
  content: {
    flex: "1",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
  },
  date: {
    fontSize: "14px",
    color: "#999",
    marginBottom: "10px",
  },
  text: {
    fontSize: "16px",
    color: "#555",
  },
};

function SocialMedia() {
  return (
    <div style={styles.container}>
      <div style={styles.post}>
        {/* Blog Image */}
        <img
          src="https://via.placeholder.com/150"
          alt="Kennedy Hartley"
          style={styles.image}
        />
        {/* Blog Content */}
        <div style={styles.content}>
          <h2 style={styles.title}>Meet Kennedy Hartley</h2>
          <p style={styles.date}>January 7, 2025</p>
          <p style={styles.text}>
            As the President and CTO of Starlight Technology, I am driven by a
            deep passion for leveraging technology to empower small businesses.
            My mission is to optimize digital tools, streamline workflows, and
            create scalable solutions tailored to the unique challenges of each
            client. At Starlight Technology, we believe in turning complex
            challenges into seamless, efficient systems that drive success.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
