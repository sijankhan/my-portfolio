import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      img: '/images/spice_garden.png',
      title: 'Spice Garden Dhaka',
      category: 'Restaurant',
      description: 'Online menu, order form, WhatsApp chat button — fully mobile-friendly.',
      tags: ['Online Menu', 'Order Form', 'WhatsApp Chat'],
      link: 'https://github.com/sijankhan/spice-garden-dhaka',
    },
    {
      id: 2,
      img: '/images/brightmind_academy.png',
      title: 'BrightMind Academy',
      category: 'Education',
      categoryColor: 'blue',
      description: 'A complete coaching center website with 6 course listings, batch schedule table, teacher profiles, student enrollment form, and WhatsApp contact. Built in 7 days using AI.',
      tags: ['Courses', 'Enrollment Form', 'Batch Schedule', 'WhatsApp'],
      link: 'https://brightmindacademy0.netlify.app/',
    },
    {
      id: 3,
      img: '/images/healthfirst_clinic.png',
      title: 'HealthFirst Clinic',
      category: 'Healthcare',
      categoryColor: 'green',
      description: 'A professional clinic website with doctor profiles, services list, appointment booking form, patient testimonials, and WhatsApp button. Built in 3 days using AI.',
      tags: ['Doctor Profiles', 'Appointment Form', 'Testimonials', 'WhatsApp'],
      link: 'https://healthfirst-clinic0.netlify.app',
    },
    {
      id: 4,
      img: '/images/portfolio_1.png',
      title: 'E-commerce Platform',
      category: 'Web App',
      description: 'A modern storefront with product catalog, cart, and secure checkout.',
      tags: ['eCommerce', 'Responsive', 'SEO'],
    },
    {
      id: 4,
      img: '/images/portfolio_2.png',
      title: 'Corporate Dashboard',
      category: 'SaaS',
      description: 'Data-driven dashboard with real-time analytics and clean UI.',
      tags: ['Dashboard', 'Analytics', 'Dark Mode'],
    },
    {
      id: 5,
      img: '/images/portfolio_3.png',
      title: 'AI Startup Landing Page',
      category: 'Landing Page',
      description: 'High-conversion landing page with animations and lead capture.',
      tags: ['Landing Page', 'Animations', 'Lead Gen'],
    },
  ];

  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <h2 className="text-center">Featured <span className="text-cyan">Work</span></h2>
        <p className="text-center subtitle">A selection of my recent AI-powered web designs.</p>

        <div className="grid portfolio-grid">
          {projects.map(project => (
            <div key={project.id} className="portfolio-item card">
              <div className="portfolio-img">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="portfolio-info">
                <p className={`portfolio-category text-${project.categoryColor || 'purple'}`}>{project.category}</p>
                <h4>{project.title}</h4>
                <p className="portfolio-desc">{project.description}</p>
                <div className="portfolio-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-secondary portfolio-link">
                    View Live ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
