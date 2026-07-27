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
        ℙℝ𝕆𝔽𝕀𝕃𝔼
      </motion.h1>

      <motion.div
    className="about-card"
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <p className="text-light">
  I’m <strong>Partha Sarathy S</strong>, a final year B.E. Electrical and Electronics Engineering student at Karpagam College of Engineering with a strong passion for <strong>Software Development</strong> and <strong>Embedded Systems</strong>. I enjoy building reliable, efficient, and scalable software while developing hardware-integrated solutions for real-world applications. My core technical skills include <strong>C/C++, Python, JavaScript, TypeScript, and Java</strong>, along with experience in backend development using <strong>Node.js, Express.js, and MySQL</strong>. I have worked on embedded and IoT-based projects, particularly in smart agriculture, involving automated irrigation, pest control, soil monitoring, and sensor-based decision systems by integrating software with microcontrollers and electronic hardware. Through internships in both industrial and software environments, I have gained practical experience in problem-solving, software development, and engineering workflows. 
   My goal is to build a career as a <strong>Software Developer</strong> or <strong>Embedded Systems Engineer</strong>, contributing to innovative products that bridge software and hardware to solve meaningful real-world challenges.
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
