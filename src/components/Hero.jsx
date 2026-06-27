import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero flex items-center" id="home">
      <div className="container grid hero-grid">
        <div className="hero-content animate-fade-in">
          <p className="hero-greeting">Hi, I'm <strong>MD NAHID HASSAN</strong></p>
          <h1>I Build <span className="text-gradient">Stunning Websites</span> That Grow Your Business</h1>
          <p className="subtitle">
            Get a professionally designed, mobile-friendly website delivered in just 3–7 days — at a price that works for your budget. Trusted by local businesses across Bangladesh and clients worldwide.
          </p>
          <div className="hero-btns flex">
            <a href="#portfolio" className="btn btn-primary">See My Work</a>
            <a href="#contact" className="btn btn-secondary">Let's Talk</a>
          </div>
        </div>
        <div className="hero-image animate-fade-in" style={{animationDelay: '0.2s'}}>
          <img src="/images/hero_bg.png" alt="AI Web Design" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
