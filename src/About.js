import React, { useState } from "react";

const styles = {
  container: {
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    color: "#333",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
  },
  location: {
    fontSize: "18px",
    marginBottom: "30px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  textarea: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    resize: "none",
    height: "100px",
  },
  button: {
    padding: "10px 15px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textAlign: "center",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  successMessage: {
    marginTop: "20px",
    color: "green",
    textAlign: "center",
  },
};

function About() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace this with your backend email handling logic or API call
    console.log("Email Sent:", formData);

    // Simulate success response
    setSuccessMessage("Your message has been sent successfully!");
    setFormData({
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.location}>
        <strong>Location:</strong> St. Louis, MO
      </p>

      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={styles.textarea}
          required
        ></textarea>
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Send Message
        </button>
      </form>

      {successMessage && <p style={styles.successMessage}>{successMessage}</p>}
    </div>
  );
}

export default About;
