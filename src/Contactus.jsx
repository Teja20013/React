import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import './Contactus.css'

function Contactus() {
  return (
    <div className="contact-container">
      {/* Page Heading */}
      <h2 className="contact-title">📞 Get in Touch</h2>
      <p className="contact-description">
        Have questions or need assistance? Reach out to us, and we'll be happy to help!
      </p>

      {/* Contact Info Section */}
      <div className="contact-info">
        <div className="info-box">
          <FaMapMarkerAlt className="contact-icon" />
          <p>123 Fresh Market Street, City, Country</p>
        </div>
        <div className="info-box">
          <FaPhoneAlt className="contact-icon" />
          <p>+123 456 7890</p>
        </div>
        <div className="info-box">
          <FaEnvelope className="contact-icon" />
          <p>support@grocerystore.com</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form-container">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contactus;
