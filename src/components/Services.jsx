import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="container">
        <h2 className="text-center">Simple & <span className="text-purple">Affordable</span> Packages</h2>
        <p className="text-center subtitle">No hidden fees. Pick a plan that fits your business — or message me for a custom quote.</p>
        
        <div className="grid services-grid">
          {/* Starter Tier */}
          <div className="card pricing-card">
            <h3>Starter</h3>
            <div className="price">$30</div>
            <p className="price-note">≈ ৳3,600</p>
            <ul className="features">
              <li>Beautiful 1–3 Page Website</li>
              <li>Mobile-Friendly Design</li>
              <li>WhatsApp & Call Button</li>
              <li>Google Maps Integration</li>
              <li>Delivered in 3 Days</li>
            </ul>
            <a href="#contact" className="btn btn-secondary full-width">Get Started</a>
          </div>

          {/* Business Tier (Recommended) */}
          <div className="card pricing-card popular">
            <div className="badge">Best Value</div>
            <h3>Business</h3>
            <div className="price">$70</div>
            <p className="price-note">≈ ৳8,400</p>
            <ul className="features">
              <li>Up to 7 Custom Pages</li>
              <li>Modern Animations & Effects</li>
              <li>Full SEO Optimization</li>
              <li>Bangla & English Content</li>
              <li>Social Media Integration</li>
              <li>Delivered in 5–7 Days</li>
            </ul>
            <a href="#contact" className="btn btn-primary full-width">Get Started</a>
          </div>

          {/* Premium Tier */}
          <div className="card pricing-card">
            <h3>Premium</h3>
            <div className="price">$175+</div>
            <p className="price-note">≈ ৳21,000+</p>
            <ul className="features">
              <li>eCommerce / Booking System</li>
              <li>Admin Dashboard & CMS</li>
              <li>Payment Gateway Setup</li>
              <li>Priority Support & Training</li>
              <li>AI-Generated Brand Assets</li>
              <li>Delivered in 7–10 Days</li>
            </ul>
            <a href="#contact" className="btn btn-secondary full-width">Get Started</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
