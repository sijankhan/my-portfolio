import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <div className="container grid contact-grid">
        <div className="contact-info">
          <h2>Let's <span className="text-gradient">Talk</span></h2>
          <p className="subtitle">Ready to elevate your online presence? Send me a message and let's discuss your project.</p>
          <div className="contact-details">
            <a href="mailto:nibirmon8@gmail.com" className="contact-item">
              <span className="contact-icon">📧</span>
              <span>nibirmon8@gmail.com</span>
            </a>
            <a href="https://wa.me/8801871931303?text=Hi%2C%20I%20want%20to%20enquire%20about%20a%20website." target="_blank" rel="noopener noreferrer" className="contact-item">
              <span className="contact-icon">💬</span>
              <span>WhatsApp: +880 1871 931303</span>
            </a>
            <a href="https://www.fiverr.com/nibirmon8" target="_blank" rel="noopener noreferrer" className="contact-item">
              <span className="contact-icon">🟢</span>
              <span>Hire me on Fiverr</span>
            </a>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>Dhaka, Bangladesh · Working worldwide</span>
            </div>
          </div>
        </div>
        <div className="contact-form-container card">
          <form className="contact-form">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="john@example.com" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows="4" placeholder="Tell me about your project..."></textarea>
            </div>
            <button type="button" className="btn btn-primary full-width" onClick={(e) => e.preventDefault()}>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
