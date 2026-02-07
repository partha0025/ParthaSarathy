import { motion } from 'framer-motion';
import './Libraries.css';
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from 'react-icons/fa';

function Libraries() {
  return (
    <div className="air-theme-bg">
      <div className="container-lg py-5">
        <motion.h1
          className="text-center air-heading mb-5"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Library Module
        </motion.h1>

        {/* Card 1 - partha_ds Library */}
        <motion.div
          className="air-card mx-auto p-5 shadow-lg rounded-4 mb-5"
          style={{ maxWidth: '900px' }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <section className="mb-4">
            <b>
              <h1 className="text-center">'partha_ds' Library</h1>
            </b>
            <h2 className="section-title2">
              🚀 What is <strong>partha_ds</strong>?
            </h2>
            <p>
              A modular, lightweight JavaScript library for Data Structures &
              Algorithms. Ideal for learners, developers, and backend engineers.
            </p>
          </section>

          <section className="mb-4">
            <h3 className="section-title2">📦 Installation</h3>
            <pre>
              <code className="cod">npm install partha_ds</code>
            </pre>
            <a
              href="https://www.npmjs.com/package/partha_ds"
              className="air-link"
              target="_blank"
              rel="noreferrer"
            >
              View on NPM
            </a>
          </section>

          <section className="mb-4">
            <h3 className="section-title2">💡 Key Features</h3>
            <ul>
              <li>✅ OOP-based, clean and readable</li>
              <li>✅ Zero dependencies – fast and secure</li>
              <li>✅ Great for learning, prototyping, and interviews</li>
              <li>✅ Covers core DSA topics</li>
            </ul>
          </section>

          <section className="mb-4">
            <h3 className="section-title2">🧰 What’s Inside?</h3>
            <ul>
              <li>🔗 Lists: Singly, Doubly, Circular</li>
              <li>🧱 Stacks, Queues, Deques</li>
              <li>🌲 BST, AVL Trees, Heaps</li>
              <li>🌐 Graphs, DFS, BFS, Tries</li>
              <li>⚙️ Sorting & Topological Sort</li>
            </ul>
          </section>

          <section className="mb-4">
            <h3 className="section-title2">🔗 Links</h3>
            <a
              href="https://github.com/partha0025/Data_structure_libaray"
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none"
            >
              <FaGithub /> View Code
            </a>
          </section>
        </motion.div>

        {/* Card 2 - Digital Logic Circuits Simulation */}
        <motion.div
          className="air-card mx-auto p-5 shadow-lg rounded-4"
          style={{ maxWidth: '900px' }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <section className="mb-4">
            <b>
              <h1 className="text-center">
                Digital Logic Circuits Simulation (Java Console-Based)
              </h1>
            </b>
          </section>

          <section className="mb-4">
            <h3 className="section-title2">📖 Overview</h3>
            <p>
              A console-based Java application for simulating fundamental digital
              logic circuits. This project models gates like AND, OR, NOT, NAND,
              NOR, XOR, and XNOR while supporting truth table generation,
              compound logic evaluation, and real-time binary input processing.
              Built with a modular architecture, making it easy to extend to
              sequential circuits and custom gate creation.
            </p>
          </section>

          <section className="mb-4">
            <h3 className="section-title2">💡 Key Features</h3>
            <ul>
              <li>⚡ All basic gates</li>
              <li>⚡ Compound logic evaluation (multiple gates in sequence)</li>
              <li>⚡ Real-time binary input simulation</li>
              <li>⚡ Modular design for scalability</li>
              <li>⚡ Extendable to sequential circuits and user-defined gates</li>
            </ul>
          </section>

          <section className="mb-4">
            <h3 className="section-title2">🛠 Technologies Used</h3>
            <ul>
              <li>☕ Java (Core)</li>
              <li>📜 Object-Oriented Programming</li>
              <li>🔄 Modular Code Design</li>
              <li>💻 Console-Based UI</li>
            </ul>
          </section>

          <section className="mb-4">
            <h3 className="section-title2">🔗 GitHub Link</h3>
            <a
              href="https://github.com/partha0025/Digital-logic-circuit-simulation"
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none"
            >
              <FaGithub /> View Code
            </a>
          </section>
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="about-footer5"
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
    </div>
  );
}

export default Libraries;
