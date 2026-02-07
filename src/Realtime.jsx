import React from "react";
import { motion } from "framer-motion";
import "./Realtime.css";
import {
  FaInstagram,
  FaExternalLinkAlt,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from 'react-icons/fa';

function Realtime() {
  return (
    <div className="project-bg1">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="project-heading1">ℝ𝔼𝔸𝕃 𝕋𝕀𝕄𝔼 ℙℝ𝕆𝕁𝔼ℂ𝕋𝕊</h1>

        {/* Smart Solar Powered LED System */}
        <div className="project-details1">
          <h2>Smart Solar Powered LED System</h2>
          <p><strong>Duration:</strong> Jul 2025 - Jul 2025</p>
          <p><strong>Role:</strong> Full Stack Developer</p>
          <p><strong>Associated with:</strong> Karpagam College of Engineering</p>
          <p>
            <a
              href="https://partha0025.github.io/solarDashboard/"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              🌐 Live Dashboard <FaExternalLinkAlt />
            </a>
          </p>

          <h3>🔋 Project Overview:</h3>
          <p>
            Built a Smart Solar LED System Dashboard for real-time monitoring
            of solar-powered LED street lights, with sensor data visualization
            to ensure efficient energy usage and maintenance tracking.
          </p>

          <h3>💻 Frontend:</h3>
          <ul>
            <li>React.js for real-time updates.</li>
            <li>Displays solar power, battery voltagex.</li>
          </ul>

          <h3>🛠 Backend:</h3>
          <ul>
            <li>Node.js & Express.js REST APIs for data & LED control.</li>
            <li>No authentication — controlled local use.</li>
          </ul>

          <h3>🗃 Database:</h3>
          <ul>
            <li>MySQL storing solar data, LED logs, battery health.</li>
            <li>Optimized schema for fast retrieval.</li>
          </ul>

          <h3>🔧 Key Features:</h3>
          <ul>
            <li>Live monitoring & control.</li>
          </ul>

          <h3>📊 Impact:</h3>
          <ul>
            <li>Less manual inspection.</li>
            <li>Higher lighting efficiency.</li>
          </ul>

          <h3>📂 Repositories:</h3>
          <p>
            <a
              href="https://github.com/partha0025/SolarApi"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              Backend API Repo <FaGithub />
            </a>
          </p>
          <p>
            <a
              href="https://github.com/partha0025/solarDashboard"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              Frontend React Repo <FaGithub />
            </a>
          </p>
        </div>

        {/* Fitness-Energy Project */}
       {/* Fitness-Energy Project */}
<div className="project-details1">
  <h2>⚡ Fitness-Energy Project</h2>
  <p><strong>Role:</strong> IoT & FULL STACK DEVELOPER</p>
  <p><strong>Team:</strong> Eco Lift-ICA</p>
     <a
              href="https://partha0025.github.io/RENEWABLE-ENERGY-INTEGRATED-LAT-PULL-DOWN-MACHINE/"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              🌐 Live Dashboard <FaExternalLinkAlt />
            </a>
  <h3>💡 Project Overview:</h3>
  <p>
    Designed an innovative system that <strong>converts workout energy</strong> 
    from gym equipment into <strong>renewable electricity</strong>.  
    Built-in generators store energy in batteries for later use or grid contribution.  
    A live dashboard tracks <strong>voltage generation</strong> and <strong>battery status</strong>, 
    motivating users to see their fitness impact in real time.
  </p>

  <h3>💻 Frontend:</h3>
  <ul>
    <li>React.js for real-time power & battery visualization.</li>
    <li>Responsive dashboard with charts, gauges, and live counters.</li>
    <li>Clean UI with motivational elements to encourage workouts.</li>
  </ul>

  <h3>🛠 Backend & IoT:</h3>
  <ul>
    <li>Node.js & Express.js REST APIs fetching live voltage & battery data.</li>
    <li>Arduino/ESP-based IoT module for sensor data transmission.</li>
    <li>Optimized for quick updates with minimal latency.</li>
  </ul>

  <h3>🌟 Unique Features:</h3>
  <ul>
    <li>Tracks personal power generation during workouts.</li>
    <li>Contributes clean energy to local power storage or grid.</li>
    <li>Encourages eco-friendly fitness culture.</li>
  </ul>

  <h3>🤝 Collaboration:</h3>
  <p>
    Developed with the <strong>Eco Lift-ICA team</strong>, blending <em>fitness</em>, 
    <em>green energy</em>, and <em>IoT-based data monitoring</em> into one impactful project.
  </p>

  <h3>🌍 Impact:</h3>
  <ul>
    <li>Promotes personal fitness while generating clean energy.</li>
    <li>Raises awareness about renewable power through everyday activity.</li>
    <li>Encourages sustainable gym infrastructure.</li>
  </ul>
  <h3>📂 Repositories:</h3>
          <p>
            <a
              href="https://github.com/partha0025/api"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              Backend API Repo <FaGithub />
            </a>
          </p>
          <p>
            <a
              href="https://github.com/partha0025/RENEWABLE-ENERGY-INTEGRATED-LAT-PULL-DOWN-MACHINE"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              Frontend React Repo <FaGithub />
            </a>
          </p>
</div>

{/* Freelancer Project */}
<div className="project-details1">
  <h2>🛠 Sri Sai Vignesh Electrical & Plumbing Services (Freelancer Project)</h2>

  <p><strong>Role:</strong> Full Stack Developer</p>
  <p><strong>Type:</strong> Freelance Client Project</p>

  <p>
    <a
      href="https://sri-sai-vignesh-electrical.web.app/"
      target="_blank"
      rel="noreferrer"
      className="project-link"
    >
      🌐 Live Website <FaExternalLinkAlt />
    </a>
  </p>

  <h3>📌 Project Overview:</h3>
  <p>
    Developed a <strong>complete business website</strong> for
    <strong> Sri Sai Vignesh Electrical & Plumbing Shop</strong> to showcase
    their <strong>services, work experience, customer reviews</strong> and
    provide a professional online presence for local clients.
  </p>

  <h3>💻 Frontend:</h3>
  <ul>
    <li>React.js for a modern and responsive UI.</li>
    <li>Service showcase, gallery, reviews & contact sections.</li>
    <li>Optimized UI for mobile and desktop users.</li>
  </ul>

  <h3>🛠 Backend:</h3>
  <ul>
    <li>Node.js & Express.js REST APIs.</li>
    <li>Handles reviews, service data, and client inquiries.</li>
    <li>Secure and scalable backend architecture.</li>
  </ul>

  <h3>🗃 Database:</h3>
  <ul>
    <li>MySQL database hosted on <strong>Clever Cloud</strong>.</li>
    <li>Stores services, reviews, and business data.</li>
  </ul>

  <h3>🚀 Deployment:</h3>
  <ul>
    <li>Frontend deployed on <strong>Firebase</strong>.</li>
    <li>Backend deployed on <strong>Render</strong>.</li>
    <li>Production-ready with live hosting.</li>
  </ul>

  <h3>🌟 Key Features:</h3>
  <ul>
    <li>Professional service showcase.</li>
    <li>Customer reviews & experience display.</li>
    <li>Improved local business visibility.</li>
  </ul>

  <h3>📈 Impact:</h3>
  <ul>
    <li>Helped client attract more customers.</li>
    <li>Built strong online credibility for the business.</li>
    <li>Delivered a real-world freelance solution.</li>
  </ul>
</div>

 
      </motion.div>
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
    </div>
  );
}

export default Realtime;
