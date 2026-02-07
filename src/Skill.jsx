import React from 'react';
import './Skill.css';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaTools, FaBrain, FaUsers
    ,FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
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
        <div className="skill-card">
          <h2><FaCode className="icon" /> Frontend Skills</h2>
          <ul>
            <li><strong>Languages:</strong> HTML, CSS, JavaScript, TypeScript</li>
            <li><strong>Frameworks:</strong> React (JS & TS), Bootstrap (basic)</li>
          </ul>
        </div>

        <div className="skill-card">
          <h2><FaDatabase className="icon" /> Backend Skills</h2>
          <ul>
            <li><strong>Languages:</strong> JavaScript (Node.js), TypeScript, Java, Python</li>
            <li><strong>Frameworks:</strong> Express.js</li>
            <li><strong>Databases:</strong> MySQL, MongoDB</li>
          </ul>
        </div>

        <div className="skill-card">
          <h2><FaTools className="icon" /> Tools</h2>
          <ul>
            <li>Visual Studio Code</li>
            <li>Git & GitHub</li>
            <li>Postman</li>
            <li>Microsoft Word, PowerPoint, Excel</li>
          </ul>
        </div>

        <div className="skill-card">
          <h2><FaBrain className="icon" /> DSA Skills</h2>
          <ul>
            <li>Practiced in Python, Java, JavaScript, TypeScript</li>
            <li>Familiar with: Arrays, Strings, Linked Lists, Stacks, Queues, Trees, Graphs, Hash Tables</li>
            <li>Algorithms: Sorting, Searching, Recursion, Dynamic Programming</li>
          </ul>
        </div>

        <div className="skill-card">
          <h2><FaUsers className="icon" /> Soft Skills</h2>
          <ul>
            <li>Leadership (Class Representative 2023–2026)</li>
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

export default Skill;
