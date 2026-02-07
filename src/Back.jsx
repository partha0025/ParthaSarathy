import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Back.css';

const floatVariants = {
  initial: { opacity: 0, y: 15 },
  animate: {
    opacity: 1,
    y: [15, 10, 15],
    transition: { duration: 4, ease: 'easeInOut' }
  }
};

const Section = ({ children }) => (
  <motion.section
    className="section-box"
    variants={floatVariants}
    initial="initial"
    animate="animate"
  >
    {children}
  </motion.section>
);

const Footer = () => (
  <motion.footer
    className="about-footer4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1 }}
  >
    <a href="https://www.instagram.com/lucifer_ps_666?igsh=cDVkd21vY25uY29t" target="_blank" rel="noreferrer"><FaInstagram /></a>
    <a href="https://www.linkedin.com/in/parthasarathy56/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
    <a href="https://github.com/partha0025" target="_blank" rel="noreferrer"><FaGithub /></a>
    <a href="mailto:sasisarathy56@gmail.com"><FaEnvelope /></a>
  </motion.footer>
);

export default function Back() {
  return (
    <div className="container-fluid avatar-water-theme">
      <header className="header-section">
        <h1 className="header-title">BACKEND PROJECTS</h1>
      </header>

      <div className="projects-wrapper">

        <Section>
          <h2 className="section-title">Contact Book API</h2>
          <p className="section-paragraph">
            RESTful API for managing contacts with file-based JSON storage.
          </p>
          <ul className="section-list">
            <li>Node.js & Express.js</li>
            <li>CRUD operations</li>
            <li>Local JSON persistence</li>
          </ul>
          <a href="https://github.com/partha0025/Contact-book-api" target="_blank" rel="noreferrer">
            <FaGithub /> View Code
          </a>
        </Section>

        <Section>
          <h2 className="section-title">Billing System API</h2>
          <p className="section-paragraph">
            Backend service to record sales data and generate structured billing logs.
          </p>
          <ul className="section-list">
            <li>Express.js with CORS</li>
            <li>Plain text file storage</li>
          </ul>
          <a href="https://github.com/partha0025/Billing-System" target="_blank" rel="noreferrer">
            <FaGithub /> View Code
          </a>
        </Section>

        <Section>
          <h2 className="section-title">E-Commerce API</h2>
          <p className="section-paragraph">
            Scalable backend for e-commerce applications with authentication and order handling.
          </p>
          <ul className="section-list">
            <li>MongoDB & Mongoose</li>
            <li>JWT-based authentication</li>
          </ul>
          <a href="https://github.com/partha0025/E-com-api" target="_blank" rel="noreferrer">
            <FaGithub /> View Code
          </a>
        </Section>

        <Section>
          <h2 className="section-title">Student Management API</h2>
          <p className="section-paragraph">
            REST API for managing students, courses, enrollments, and grading.
          </p>
          <ul className="section-list">
            <li>Role-based access control</li>
            <li>RESTful architecture</li>
          </ul>
          <a href="https://github.com/partha0025/Student-data-fetching-api" target="_blank" rel="noreferrer">
            <FaGithub /> View Code
          </a>
        </Section>

        {/* ✅ SIH Project */}
        <Section>
          <h2 className="section-title">Multi-Language FAQ Chatbot API (SIH)</h2>
          <p className="section-paragraph">
            Backend API developed to support a <strong>Smart India Hackathon (SIH)</strong> project.
            Automatically detects language and returns the most relevant FAQ answer.
          </p>
          <ul className="section-list">
            <li>Node.js & Express.js</li>
            <li>Language detection using <code>franc-min</code></li>
            <li>FAQ matching with <code>string-similarity</code></li>
            <li>Supports EN, HI, TA, TE, BN</li>
          </ul>
          <p className="section-paragraph">
            👨‍💻 <strong>Role:</strong> Backend Developer (developed for an SIH participant)
          </p>
          <a href="https://github.com/partha0025/Language-Agnostic-chatbot-API" target="_blank" rel="noreferrer">
            <FaGithub /> View Code
          </a>
        </Section>

      </div>

      <Footer />
    </div>
  );
}
