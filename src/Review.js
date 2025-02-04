import React, { useState } from "react";

const styles = {
  container: {
    padding: "40px 20px",
    maxWidth: "800px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
  },
  ratingSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
  },
  star: {
    fontSize: "30px",
    color: "#FFD700", // Yellow stars
    cursor: "pointer",
    marginRight: "5px",
  },
  activeStar: {
    color: "#FFD700",
  },
  inputField: {
    width: "100%",
    marginBottom: "15px",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  reviewBox: {
    width: "100%",
    height: "100px",
    marginBottom: "15px",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    position: "relative",
  },
  placeholderDots: {
    position: "absolute",
    bottom: "10px",
    right: "10px",
    fontSize: "24px",
    color: "rgba(0, 0, 0, 0.2)", // Transparent grey dots
    pointerEvents: "none",
  },
  submitButton: {
    width: "100%",
    padding: "10px",
    fontSize: "18px",
    backgroundColor: "#007BFF", // Blue background
    color: "#FFFFFF",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  submitButtonHover: {
    backgroundColor: "#0056b3",
  },
  pastReviewsSection: {
    marginTop: "30px",
  },
  reviewItem: {
    marginBottom: "20px",
    padding: "15px",
    backgroundColor: "#f9f9f9",
    border: "1px solid #ddd",
    borderRadius: "4px",
  },
  reviewDate: {
    fontSize: "14px",
    color: "#666",
  },
};

function Review() {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState([]);

  const handleRatingClick = (index) => {
    setRating(index);
  };

  const handleSubmit = () => {
    if (name && reviewText) {
      setReviews([
        ...reviews,
        {
          name,
          text: reviewText,
          date: new Date().toLocaleDateString(),
          rating,
        },
      ]);
      setName("");
      setReviewText("");
      setRating(0);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.title}>Write a Review</div>

      {/* Rating Section */}
      <div style={styles.ratingSection}>
        {[1, 2, 3, 4, 5].map((index) => (
          <span
            key={index}
            style={{
              ...styles.star,
              color: index <= (hoveredRating || rating) ? "#FFD700" : "#ccc",
            }}
            onMouseEnter={() => setHoveredRating(index)}
            onMouseLeave={() => setHoveredRating(0)}
            onClick={() => handleRatingClick(index)}
          >
            ★
          </span>
        ))}
      </div>

      {/* Name Input */}
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={styles.inputField}
      />

      {/* Review Box */}
      <div style={styles.reviewBox}>
        <textarea
          placeholder="Write your review here..."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          style={{ ...styles.reviewBox, height: "100%", resize: "none" }}
        />
        <span style={styles.placeholderDots}>•••</span>
      </div>

      {/* Submit Button */}
      <button
        style={{
          ...styles.submitButton,
        }}
        onMouseEnter={(e) =>
          (e.target.style.backgroundColor = styles.submitButtonHover.backgroundColor)
        }
        onMouseLeave={(e) =>
          (e.target.style.backgroundColor = styles.submitButton.backgroundColor)
        }
        onClick={handleSubmit}
      >
        Submit
      </button>

      {/* Past Reviews Section */}
      <div style={styles.pastReviewsSection}>
        {reviews.map((review, index) => (
          <div key={index} style={styles.reviewItem}>
            <strong>{review.name}</strong> - {review.rating} ★
            <div>{review.text}</div>
            <div style={styles.reviewDate}>{review.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;
