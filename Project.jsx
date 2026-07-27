import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';
import { motion } from 'framer-motion';
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from 'react-icons/fa';

function Project() {
  return (
    <>
      <div className="project-bg">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotateX: 10 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="project-heading">ℙℝ𝕆𝕁𝔼ℂ𝕋𝕊</h1>

          {/* Wrapper for rows */}
          <div className="card-grid">

            {/* Row 1 */}
            <div className="card-row">
              <Link to="/project/front" className="link">
                <div className="hog-card">
                  <h2>𝔽ℝ𝕆ℕ𝕋𝔼ℕ𝔻</h2>
                </div>
              </Link>

              <Link to="/project/back" className="link">
                <div className="hog-card">
                  <h2>𝔹𝔸ℂ𝕂𝔼ℕ𝔻</h2>
                </div>
              </Link>
            </div>

            {/* Row 2 */}
            <div className="card-row">
              <Link to="/project/console" className="link">
                <div className="hog-card">
                  <h2>ℂ𝕆ℕ𝕊𝕆𝕃𝔼 ℙℝ𝕆𝕁𝔼ℂ𝕋</h2>
                </div>
              </Link>

              <Link to="/project/libraries" className="link">
                <div className="hog-card">
                  <h2>𝕃𝕀𝔹ℝ𝔸ℝ𝕐 𝕄𝕆𝔻𝕌𝕃𝔼𝕊</h2>
                </div>
              </Link>
            </div>

            {/* Row 3 - New Real Time Project Block */}
            <div className="card-row">
              <Link to="/project/realtime" className="link">
                <div className="hog-card">
                  <h2>ℝ𝔼𝔸𝕃 𝕋𝕀𝕄𝔼 ℙℝ𝕆𝕁𝔼ℂ𝕋</h2>
                </div>
              </Link>
            </div>

          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        className="about-footer2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <a
          href="https://www.instagram.com/lucifer_ps_666?igsh=cDVkd21vY25uY29t"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/parthasarathy56/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/partha0025"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a href="mailto:sasisarathy56@gmail.com">
          <FaEnvelope />
        </a>
      </motion.footer>
    </>
  );
}

export default Project;
