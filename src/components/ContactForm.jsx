import React, { useState } from 'react';

// --- Style Objects (Inline CSS for Dark Theme) ---
const styles = {
  formContainer: {
    maxWidth: '600px', // Adjusted for wider form like in image
    margin: '50px auto',
    padding: '40px',
    borderRadius: '10px',
    backgroundColor: '#1a1a1a', // Dark background
    color: '#e0e0e0', // Light text color
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)', // More prominent shadow
    backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%232f2f2f\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zm0-30V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', // Subtle dark pattern
    backgroundAttachment: 'fixed', // Keep pattern fixed
    backgroundSize: '15px 15px',
  },
  h1: {
    textAlign: 'center',
    color: '#e0e0e0',
    fontSize: '2.5rem', // Larger heading
    marginBottom: '10px',
  },
  subtitle: {
    textAlign: 'center',
    color: '#a0a0a0', // Lighter grey for subtitle
    fontSize: '1.1rem',
    marginBottom: '30px',
    lineHeight: '1.5',
  },
  inputGroup: {
    marginBottom: '25px', // More space between fields
  },
  label: {
    display: 'block',
    marginBottom: '10px', // Space between label and input
    color: '#e0e0e0',
    fontWeight: 'normal', // Labels seem regular weight in image
    fontSize: '1rem',
  },
  input: {
    width: '100%',
    padding: '15px 20px', // Increased padding
    border: 'none', // No border
    borderRadius: '5px',
    backgroundColor: '#333333', // Darker input background
    color: '#e0e0e0', // Input text color
    fontSize: '1rem',
    boxSizing: 'border-box',
    outline: 'none', // Remove outline on focus
  },
  textarea: {
    width: '100%',
    padding: '15px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#333333',
    color: '#e0e0e0',
    fontSize: '1rem',
    boxSizing: 'border-box',
    minHeight: '120px', // Taller textarea
    resize: 'vertical', // Allow vertical resizing
    outline: 'none',
  },
  button: {
    width: '100%',
    padding: '15px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#ffffff', // White button background
    color: '#1a1a1a', // Dark text on button
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    marginTop: '30px', // Space above button
  },
  buttonHover: {
    backgroundColor: '#cccccc', // Slightly darker white on hover
  },
};

const ContactFormStyled = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    note: '',
  });
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your message, ${formData.name}!`);
    console.log('Form Data Submitted:', formData);
    // Here you would typically send formData to your backend service
  };

  return (
    <div style={styles.formContainer}>
      <h1 style={styles.h1}>Let's Get In Touch</h1>
      <p style={styles.subtitle}>
        We'd love to hear from you – let's turn your vision into reality.
      </p>
      <form onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            style={styles.input}
            value={formData.name}
            onChange={handleChange}
            placeholder="Name" // Placeholder text
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="phone">Phone</label>
          <input
            type="tel" // Use type="tel" for phone numbers
            id="phone"
            name="phone"
            style={styles.input}
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            style={styles.input}
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail"
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="note">Note</label>
          <textarea
            id="note"
            name="note"
            style={styles.textarea}
            value={formData.note}
            onChange={handleChange}
            placeholder="Leave us a message (optional)"
          ></textarea>
        </div>
        
        <button
          type="submit"
          style={{ ...styles.button, ...(isHovered ? styles.buttonHover : null) }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactFormStyled;
