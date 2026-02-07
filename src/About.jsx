import React from 'react';
import './About.css';
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className="about-wrapper">
      <div className="particles-container">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i} className="particle" />
        ))}
      </div>

      <motion.h1
        className="about-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        𝔸𝔹𝕆𝕌𝕋
      </motion.h1>

      <motion.div
    className="about-card"
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <p className="text-light">
      I’m <strong>Partha Sarathy S</strong>, a pre-final year B.E. Electrical and Electronics Engineering student with a strong passion for <strong>backend development</strong> and <strong>problem-solving through technology</strong>. I enjoy designing systems that are efficient, scalable, and reliable.
    </p>

    <p className="text-light">
      My core technical strengths lie in <strong>JavaScript, TypeScript, Python, C, and Java</strong>. I primarily work with <strong>Node.js, Express.js, and MySQL</strong> to build RESTful APIs, server-side logic, and database-driven applications. I focus on writing clean, maintainable code with a strong understanding of backend fundamentals.
    </p>

    <p className="text-light">
      Alongside backend development, I have a growing interest in <strong>AI/ML and IoT</strong>. I’ve worked on smart agriculture projects involving automated irrigation, pest control, soil analysis, and sensor-based decision systems—bridging software with real-world engineering solutions.
    </p>

    <p className="text-light">
      I’ve completed internships at a <strong>steel manufacturing plant</strong> and at <strong>NextGen Solution (Python)</strong>, where I gained hands-on experience in industrial processes, real-time problem solving, and practical software development in professional environments.
    </p>

    <p className="text-light">
      I hold certifications in <strong>JavaScript and Node.js</strong> from platforms like <strong>Great Learning</strong> and <strong>HackerRank</strong>. Beyond academics, I serve as the <strong>Class Representative (2023–2026)</strong>, actively involved in leadership, coordination, mentoring, and public speaking.
    </p>

    <p className="text-light">
      <strong>My goal</strong> is to become a skilled backend developer who builds impactful, scalable systems and contributes to meaningful projects that solve real-world problems through technology.
    </p>
  </motion.div>


      <motion.footer
        className="about-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <a href="https://www.instagram.com/lucifer_ps_666?igsh=cDVkd21vY25uY29t" target="_blank" rel="noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/parthasarathy56/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/partha0025" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="mailto:sasisarathy56@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>
      </motion.footer>

      
    </div>
  );
}

export default About;
