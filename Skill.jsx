import React from 'react';
import './Skill.css';
import { motion } from 'framer-motion';
import {
  FaBolt,
  FaLaptopCode,
  FaBrain,
  FaUsers,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from 'react-icons/fa';

function Skill() {
  return (
    <div className="skill-wrapper">
      <motion.h1
        className="skill-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        𝕊𝕂𝕀𝕃𝕃𝕊
      </motion.h1>

      <motion.div
        className="skill-container"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        {/* 1. Core Skills */}
        <div className="skill-card">
          <h2><FaBolt className="icon" /> Core Skills</h2>
          <ul>
            <li>Electrical Circuits</li>
            <li>Power Electronics</li>
            <li>Embedded Systems & IoT</li>
            <li>Electrical Machines & Motor Drives</li>
          </ul>
        </div>

        {/* 2. Software Skills */}
        <div className="skill-card">
          <h2><FaLaptopCode className="icon" /> Software Skills</h2>
          <ul>
            <li>
              <strong>Programming Languages:</strong> Java, Python,
              JavaScript, TypeScript, C, C++
            </li>
            <li>
              <strong>Frontend:</strong> React.js, HTML, CSS, Bootstrap
            </li>
            <li>
              <strong>Backend:</strong> Express.js, Django
            </li>
            <li>
              <strong>Database:</strong> MySQL, MongoDB
            </li>
          </ul>
        </div>

        {/* 3. DSA */}
        <div className="skill-card">
          <h2><FaBrain className="icon" /> DSA Skills</h2>
          <ul>
            <li>Practiced in Java, Python, JavaScript, TypeScript, C & C++</li>
            <li>
              Arrays, Strings, Linked Lists, Stacks, Queues, Trees,
              Graphs, Hash Tables
            </li>
            <li>
              Algorithms: Sorting, Searching, Recursion, Dynamic Programming
            </li>
          </ul>
        </div>

        {/* 4. Soft Skills */}
        <div className="skill-card">
          <h2><FaUsers className="icon" /> Soft Skills</h2>
          <ul>
            <li>Leadership (Class Representative 2023–2027)</li>
            <li>Public Speaking</li>
            <li>Team Collaboration</li>
            <li>Presentation & Communication</li>
            <li>Problem Solving</li>
          </ul>
        </div>

      </motion.div>

      <motion.footer
        className="about-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <a
          href="https://www.instagram.com/lucifer_ps_666?igsh=cDVkd21vY25uY29t"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.linkedin.com/in/parthasarathy56/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/partha0025"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a href="mailto:sasisarathy56@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>
      </motion.footer>
    </div>
  );
}

export default Skill;