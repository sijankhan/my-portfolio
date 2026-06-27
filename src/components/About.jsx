import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container grid about-grid">
        <div className="about-image">
          <img src="/images/about_me.png" alt="About Me" />
        </div>
        <div className="about-content">
          <h2>Meet <span className="text-cyan">Nahid</span></h2>
          <p>
            Assalamu Alaikum! I'm MD Nahid Hassan — a web designer from Bangladesh who helps small businesses look professional online. I use the latest AI design tools to create beautiful, modern websites that you can be proud of.
          </p>
          <p>
            I understand that as a business owner, your time and money matter. That's why I focus on two things: <strong>fast delivery</strong> (most websites ready within 3–7 days) and <strong>honest, affordable pricing</strong> with no hidden costs. Whether you run a restaurant in Dhaka, a clothing shop in Chattogram, or a freelance business serving clients abroad — I'm here to help you grow.
          </p>
          <div className="stats flex">
            <div className="stat-item">
              <h3>50+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-item">
              <h3>3–7</h3>
              <p>Days Delivery</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
