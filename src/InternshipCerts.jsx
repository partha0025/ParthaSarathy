import './InternshipCerts.css';
import steel_plant from './assets/salem-steel.jpg';
import python from './assets/python.png';
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

/* ⭐ Optimized Stars */
function Stars() {
  const stars = useMemo(() =>
    Array.from({ length: 60 }).map((_, i) => {
      const size = Math.random() * 2 + 1;
      return (
        <div
          key={i}
          className="star"
          style={{
            width: size,
            height: size,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      );
    }), []
  );

  return <div className="stars">{stars}</div>;
}

export default function InternshipCerts() {
  const [flipped, setFlipped] = useState(null);

  const internships = [
    {
      company: "SAIL – Salem Steel Plant",
      title: "Industrial Training Intern",
      duration: "24–30 Apr 2024",
      highlights: [
        "Steel manufacturing workflow",
        "Casting & rolling observation",
        "Worked with process engineers",
      ],
      cert: steel_plant,
    },
    {
      company: "NextGen Solution",
      title: "Python Developer Intern",
      duration: "15 Apr – 12 May 2024",
      highlights: [
        "Python & OOP mastery",
        "MySQL integration",
        "Built mini applications",
      ],
      cert: python,
    },
  ];

  return (
    <section className="internship-section">
      <Stars />

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        INTERNSHIPS
      </motion.h2>

      <div className="internship-grid">
        {internships.map((item, index) => (
          <div
            key={index}
            className="internship-card-wrapper"
            onClick={() => setFlipped(flipped === index ? null : index)}
          >
            <div className={`internship-card ${flipped === index ? 'flipped' : ''}`}>
              <div className="card-front glass">
                <h3>{item.title}</h3>
                <p className="duration">{item.duration}</p>
                <p className="company">{item.company}</p>
                <ul>
                  {item.highlights.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>

              <div className="card-back glass">
                <img src={item.cert} alt="Internship Certificate" />
                <span>Certificate</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="about-footer36">
        <a href="https://www.instagram.com/lucifer_ps_666?igsh=cDVkd21vY25uY29t" aria-label="Instagram"><FaInstagram /></a>
        <a href="https://www.linkedin.com/in/parthasarathy56/" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="https://github.com/partha0025" aria-label="GitHub"><FaGithub /></a>
        <a href="mailto:sasisarathy56@gmail.com" aria-label="Email"><FaEnvelope /></a>
      </footer>
    </section>
  );
}
