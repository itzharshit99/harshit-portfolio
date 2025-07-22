"use client";

import React, { useState } from "react";
import "../css/contact.css";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Simulate form submission (replace with actual API call if needed)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000); // Reset after 3 seconds
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="contact" className="contact">
      <div className="contact-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>

      <div className="contact-container">
        <div className={`contact-content ${isVisible ? "visible" : ""}`}>
          <div className="contact-badge">
            <span className="badge-icon">📧</span>
            <span>Get in Touch</span>
          </div>
          <h2 className="contact-title">Contact Me</h2>
          <div className="contact-card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="card-item translate-z-50">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="card-item translate-z-60">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div className="card-item translate-z-70">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <div className="card-item translate-z-80">
                  <button type="submit" className="submit-button">
                    Send Message
                  </button>
                </div>
              </form>
              {isSubmitted && (
                <div className="success-message translate-z-90">
                  Message sent successfully!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-dot"></div>
        <span className="scroll-text">Back to Top</span>
      </div>
    </section>
  );
}

export default Contact;