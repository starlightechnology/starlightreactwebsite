import React, { useState } from "react";

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    email: "",
    industry: "",
    message: "",
  });

  const [showOtherFields, setShowOtherFields] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "industry" && value === "Other") {
      setShowOtherFields(true);
    } else {
      setShowOtherFields(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server or email
    alert("Form submitted: " + JSON.stringify(formData));
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      {/* Name */}
      <div style={styles.formGroup}>
        <label style={styles.label} htmlFor="name">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
          required
        />
      </div>

      {/* Business Name */}
      <div style={styles.formGroup}>
        <label style={styles.label} htmlFor="businessName">
          Business Name
        </label>
        <input
          type="text"
          id="businessName"
          name="businessName"
          value={formData.businessName}
          onChange={handleChange}
          style={styles.input}
          required={showOtherFields}
        />
      </div>

      {/* Phone Number */}
      <div style={styles.formGroup}>
        <label style={styles.label} htmlFor="phone">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          style={styles.input}
          required={showOtherFields}
        />
      </div>

      {/* Email */}
      <div style={styles.formGroup}>
        <label style={styles.label} htmlFor="email">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />
      </div>

      {/* Industry Dropdown */}
      <div style={styles.formGroup}>
        <label style={styles.label} htmlFor="industry">
          Industry
        </label>
        <select
          id="industry"
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          style={styles.input}
          required
        >
          <option value="">Select an Industry</option>
          <option value="eCommerce">eCommerce</option>
          <option value="Commission">Commission</option>
          <option value="Service">Service</option>
          <option value="Finance">Finance</option>
          <option value="Logistics">Logistics</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Show Additional Fields if "Other" is selected */}
      {showOtherFields && (
        <>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="businessName">
              Business Name
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
        </>
      )}

      {/* Contact Message Section */}
      <div style={styles.formGroup}>
        <label style={styles.label} htmlFor="message">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          style={styles.textarea}
          placeholder="Input any additional information..."
        />
      </div>

      {/* Submit Button */}
      <button type="submit" style={styles.submitButton}>
        Submit Consultation Request
      </button>
    </form>
  );
};

const styles = {
  form: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    height: "150px",
    backgroundColor: "transparent",
  },
  submitButton: {
    padding: "10px 20px",
    backgroundColor: "#0056b3",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default ConsultationForm;
