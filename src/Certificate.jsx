import React from "react";
import "./Certificate.css";
import { motion } from 'framer-motion';
import {
  FaInstagram, FaLinkedin, FaGithub, FaEnvelope
} from 'react-icons/fa';
import ml from './assets/ml.jpg';
import System from './assets/System.PNG';
import js from './assets/gl-js.jpg';
import anpy from './assets/gl-anpy.jpg';
import injava from './assets/gl-in-java.jpg';
import java from './assets/gl-java.jpg';
import node from './assets/gl-node.PNG';
import hrps from './assets/HR-ps.PNG';
import hrjsi from './assets/HR-jsi.PNG';
import hrjsb from './assets/HR-jsB.PNG';
import hrpy from './assets/HR-python.PNG';
import cloud from './assets/cloud.PNG';
import simple from './assets/simplelearn.PNG';
import mongoo from './assets/MangoDB.PNG'

const certificates = [
  {title: "MongooDB for student basic", issuer: "MongooDB", date: 'JUNE 2025', image: mongoo    },
  { title: "Node.js with Express Framework", issuer: "Simplilearn", date: 'MAY 2025', image: simple },
  { title: "Cloud Computing", issuer: "NPTEL", date: "JAN-APR 2025", image: cloud },
  { title: "Problem Solving (Basic)", issuer: "HackerRank", date: "APR 2025", image: hrps },
  { title: "JavaScript (Intermediate)", issuer: "HackerRank", date: 'JAN 2025', image: hrjsi },
  { title: "JavaScript (Basic)", issuer: "HackerRank", date: "JAN 2025", image: hrjsb },
  { title: "Python (Basic)", issuer: "HackerRank", date: 'JAN 2025', image: hrpy },
  { title: "Node.js in Hindi", issuer: "Great Learning", date: "DEC 2024", image: node },
  { title: "Introduction to Java", issuer: "Great Learning", date: "OCT 2024", image: java },
  { title: "Inheritance in Java", issuer: "Great Learning", date: "OCT 2024", image: injava },
  { title: "Android App with Python", issuer: "Great Learning", date: "SEP 2024", image: anpy },
  { title: "Introduction to JavaScript", issuer: "Great Learning", date: 'SEP 2024', image: js },
  { title: "System Design through Verilog", issuer: "NPTEL", date: "JUL-SEP 2024", image: System },
  { title: "Python Programming for ML", issuer: "Karthik's Show", date: "JUNE 2024", image: ml },
];

const Certificate = () => {
  return (
    <div className="certs-container container-fluid py-5 text-center">
            <motion.div
  initial={{ opacity: 0, scale: 0.95, rotateX: 10 }}
  animate={{ opacity: 1, scale: 1, rotateX: 0 }}
  transition={{ duration: 3, ease: "easeOut" }}>
      <h2 className="anime-glow-title">ℂ𝔼ℝ𝕋𝕀𝔽𝕀ℂ𝔸𝕋𝔼𝕊</h2>

      <div className="d-flex flex-wrap justify-content-center gap-4 px-3">
        {certificates.slice().reverse().map((cert, idx) => (
          <div key={idx} className="flip-card-v2">
            <div className="flip-inner">
              <div className="flip-front">
                <h5 className="cert-title">{cert.title}</h5>
                <p className="cert-issuer">Issuer: <strong>{cert.issuer}</strong></p>
                <p className="cert-date">{cert.date}</p>
              </div>
              <div className="flip-back">
                <img src={cert.image} alt={cert.title} className="flip-image" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <motion.footer
        className="about-footer21 mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <a href="https://www.instagram.com/lucifer_ps_666?igsh=cDVkd21vY25uY29t" target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a href="https://www.linkedin.com/in/parthasarathy56/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/partha0025" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="mailto:sasisarathy56@gmail.com"><FaEnvelope /></a>
      </motion.footer>
      </motion.div>
    </div>
  );
};

export default Certificate;
