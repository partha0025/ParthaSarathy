import "./InternshipCerts.css";
import steel_plant from "./assets/salem-steel.jpg";
import python from "./assets/python.png";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaBuilding,
  FaCalendarAlt,
  FaAward,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";

export default function InternshipCerts() {
  const [selectedCert, setSelectedCert] = useState(null);

  const internships = [
    {
      icon: "🏭",
      company: "SAIL – Salem Steel Plant",
      title: "Industrial Training Intern",
      duration: "24 Apr – 30 Apr 2024",
      description:
        "Gained practical exposure to steel manufacturing processes, industrial automation, and production workflow while working alongside experienced process engineers.",
      skills: [
        "Steel Manufacturing",
        "Casting",
        "Rolling",
        "Industrial Safety",
        "Process Control",
      ],
      cert: steel_plant,
    },
    {
      icon: "🐍",
      company: "NextGen Solution",
      title: "Python Developer Intern",
      duration: "15 Apr – 12 May 2024",
      description:
        "Developed Python applications, explored Object-Oriented Programming, integrated MySQL databases, and built real-world mini projects.",
      skills: [
        "Python",
        "OOP",
        "MySQL",
        "Problem Solving",
        "Mini Projects",
      ],
      cert: python,
    },
  ];

  return (
    <section className="internship-section">
      {/* Background Glow */}
      <div className="bg-circle circle1"></div>
      <div className="bg-circle circle2"></div>
      <div className="bg-circle circle3"></div>

      {/* Heading */}
      <motion.div
        className="heading"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>𝔼𝕏ℙ𝔼ℝ𝕀𝔼ℕℂ𝔼</h1>
      </motion.div>

    

      {/* Internship Cards */}
      <div className="internship-grid">
        {internships.map((item, index) => (
          <motion.div
            key={index}
            className="internship-card"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.03,
              rotateX: 5,
              rotateY: -5,
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="card-top">
              <div className="company-icon">{item.icon}</div>

              <div>
                <h2>{item.title}</h2>

                <p className="company">
                  <FaBuilding /> {item.company}
                </p>

                <p className="duration">
                  <FaCalendarAlt /> {item.duration}
                </p>
              </div>
            </div>

            <p className="description">{item.description}</p>

            <div className="skill-tags">
              {item.skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>

            <button
              className="certificate-btn"
              onClick={() => setSelectedCert(item.cert)}
            >
              <FaAward /> View Certificate
              <FaArrowRight />
            </button>
          </motion.div>
        ))}
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="certificate-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="certificate-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <button
                className="close-btn"
                onClick={() => setSelectedCert(null)}
              >
                <FaTimes />
              </button>

              <img src={selectedCert} alt="Certificate" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <motion.footer
        className="about-footer36"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
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
    </section>
  );
}