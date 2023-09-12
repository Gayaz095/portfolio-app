import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalOpen(true);
    e.target.reset();
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button className="submit-button" type="submit">
            Send Message
          </button>
        </form>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>Message Sent</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
