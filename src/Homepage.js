import React from "react"; 
import { Link } from "react-router-dom";

const styles = {
  missionSection: {
    position: "relative",
    color: "#D3D3D3", // Light grey font
    fontFamily: "Times New Roman, serif",
    textAlign: "center",
    padding: "60px 20px",
    fontSize: "24px",
    fontWeight: "bold",
    lineHeight: "1.5",
    height: "100vh", // Full viewport height
    backgroundColor: "#00068e", // Dark blue background
    display: "flex", // To center the content
    justifyContent: "center", // Center content horizontally
    alignItems: "center", // Center content vertically
  },
  reviewsSection: {
    padding: "40px 20px",
    backgroundColor: "#343A40", // Light grey background for contrast
    textAlign: "center",
    borderRadius: "10px",
    color: "#fff",
    position: "relative", // For positioning the Write Review button
  },
  reviewCard: {
    display: "inline-block",
    width: "30%",
    margin: "10px",
    padding: "20px",
    backgroundColor: "#FFFFFF",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    fontSize: "16px",
    lineHeight: "1.4",
    textAlign: "left",
  },
  stars: {
    color: "#FFD700", // Gold color for the stars
    fontSize: "18px",
    marginBottom: "5px",
  },
  reviewText: {
    marginBottom: "10px",
    fontSize: "16px",
  },
  reviewer: {
    fontStyle: "italic",
    fontSize: "14px",
  },
  writeReviewButton: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    position: "absolute", // Position it within the reviews section
    bottom: "20px",
    right: "20px",
    transition: "all 0.5s",
    opacity: 0, // Initially hidden
    visibility: "hidden", // Initially hidden
  },
  writeReviewButtonHover: {
    opacity: 1,
    visibility: "visible", // Button becomes visible on hover
    transform: "scale(1.1)",
  },
  plusButton: {
    fontSize: "50px",
    background: "transparent",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    position: "absolute",
    bottom: "20px",
    right: "20px",
    transition: "all 0.2s",
  },
  secondaryMissionSection: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#007BFF",
    color: "#D3D3D3",
    padding: "60px 20px",
  },
  secondaryMissionText: {
    flex: 1,
    fontFamily: "Times New Roman, serif",
    fontSize: "20px",
    lineHeight: "1.5",
    marginRight: "20px",
  },
  secondaryMissionImage: {
    flex: 1,
    textAlign: "center",
  },
  consultationButton: {
    display: "inline-block",
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#0056b3",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    textDecoration: "none",
    fontSize: "16px",
    cursor: "pointer",
  },
  footer: {
    backgroundColor: "#343A40",
    color: "#D3D3D3",
    textAlign: "center",
    padding: "20px",
    fontSize: "14px",
  },
  footerLink: {
    color: "#FFFFFF",
    textDecoration: "none",
    margin: "0 10px",
  },
};

function Homepage() {
  return (
    <div>
      {/* Mission Statement Section */}
      <div style={styles.missionSection}>
        Empowering businesses through innovative web and data solutions,
        transforming ideas into scalable digital realities. We deliver expert
        consulting and seamless implementation to drive growth, efficiency, and
        long-term success.
      </div>

      {/* Reviews Section */}
      <div style={styles.reviewsSection}>
        <h2>Customer Reviews</h2>
        <div style={styles.reviewCard}>
          <div style={styles.stars}>★★★★★</div>
          <strong>Company A:</strong>
          <p>
            "Starlight Technology revolutionized our data systems. Their
            expertise is unparalleled!"
          </p>
        </div>
        <div style={styles.reviewCard}>
          <div style={styles.stars}>★★★★★</div>
          <strong>Company B:</strong>
          <p>
            "We saw measurable growth thanks to their web development services.
            Highly recommend!"
          </p>
        </div>

        {/* Plus Button, shown initially */}
        <button
          style={styles.plusButton}
        >
          +
        </button>

        {/* Write a Review Button, becomes visible when hovered */}
        <Link to="/review">
          <button
            style={styles.writeReviewButton}
          >
            Write a Review
          </button>
        </Link>
      </div>

      {/* Secondary Mission Section */}
      <div style={styles.secondaryMissionSection}>
        <div style={styles.secondaryMissionText}>
          Transforming businesses with customized web and data strategies that
          deliver measurable impact. Let us take your business to the next
          level with tailored solutions.
        </div>
        <div style={styles.secondaryMissionImage}>
          <img
            src="/path/to/your/image.jpg"
            alt="Mission Visualization"
            style={{ width: "100%", maxWidth: "300px", borderRadius: "8px" }}
          />
          <a href="/consultation" style={styles.consultationButton}>
            Book a Consultation
          </a>
        </div>
      </div>

      {/* Footer without Careers and Help links */}
      <footer style={styles.footer}>
        <div>
          &copy; {new Date().getFullYear()} Starlight Technology.
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
