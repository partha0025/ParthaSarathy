import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Front.css";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Front() {
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in-section");
    const handleScroll = () => {
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          section.classList.add("visible");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="dynamic-bg container-fluid">
      <h1 className="page-heading">
        𝔽ℝ𝕆ℕ𝕋𝔼ℕ𝔻 ℙℝ𝕆𝕁𝔼ℂ𝕋𝕊
        <span className="shine"></span>
      </h1>

      <div className="container py-5">

        {/* Landing Page */}
        <section className="fade-in-section project-description p-4 mb-5 rounded-4 shadow-sm">
          <h2 className="mb-3">Modern Landing Page</h2>

          <p>
            Responsive landing page built as part of a Web Design course,
            focusing on clean UI and layout fundamentals.
          </p>

          <ul className="land-list">
            <li>HTML5 & CSS3 (no JavaScript)</li>
            <li>Responsive design using Flexbox & media queries</li>
            <li>Modern UI with gradients and hover effects</li>
          </ul>

          <p>
            <strong>What I learned:</strong> semantic HTML, responsive layouts,
            CSS styling best practices.
          </p>

          <a
            href="https://github.com/partha0025/Landing-page"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-success"
          >
            <FaGithub /> View Code
          </a>
        </section>

        {/* Smart Billing System */}
        <section className="fade-in-section billing-system p-4 rounded-4 shadow-sm">
          <h2 className="mb-3">Smart Billing System (Mini Project)</h2>

          <p>
            Full-stack billing application designed for small businesses with
            dynamic frontend and backend integration.
          </p>

          <ul className="land-list">
            <li>Dynamic item entry & total calculation</li>
            <li>Frontend validation using JavaScript</li>
            <li>Data persistence using MySQL</li>
          </ul>

          <ul className="land-list">
            <li><strong>Frontend:</strong> HTML, CSS, JavaScript</li>
            <li><strong>Backend:</strong> Node.js, Express.js</li>
            <li><strong>Database:</strong> MySQL</li>
          </ul>

          <p>
            <strong>Backend Contribution:</strong> REST API design, JSON data
            handling, database integration.
          </p>

          <a
            href="https://github.com/partha0025/Billing-System"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-success"
          >
            <FaGithub /> View Code
          </a>
        </section>

      </div>

      {/* Footer */}
      <motion.footer
        className="about-footer1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <a href="https://www.instagram.com/lucifer_ps_666?igsh=cDVkd21vY25uY29t" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/parthasarathy56/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/partha0025" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:sasisarathy56@gmail.com">
          <FaEnvelope />
        </a>
      </motion.footer>
    </div>
  );
}

export default Front;
