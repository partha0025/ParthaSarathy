import './Console.css';
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Console() {
  return (
    <>
      {/* Background particles */}
      <div className="fire-particles"></div>

      {/* Main container */}
      <div className="container py-5 position-relative" style={{ zIndex: 10 }}>
        <h1 className="fire-title text-center mb-5">ℂ𝕆ℕ𝕊𝕆𝕃𝔼 ℙℝ𝕆𝕁𝔼ℂ𝕋𝕊</h1>

        {/* Project 1: Interest Calculation */}
        <section className="project-card animate-fade-in mb-5">
          <h2 className="fire-subtitle">💰 Interest Calculation</h2>
          <p><strong>Package:</strong> <code>om.wipro.bank</code></p>
          <p><strong>Tech Stack:</strong> Java, OOP Principles, Exception Handling</p>

          <h4 className="text-warning">📌 Project Description:</h4>
          <p>
            Developed a modular Java application to compute <strong>Recurring Deposit (RD)</strong> maturity interest and total amount.
            Uses age and gender-based interest rates, built with OOP principles like <em>abstraction</em>, <em>inheritance</em>, and
            <em>exception handling</em>.
          </p>

          <h4 className="text-warning">🧠 Algorithm / Logic:</h4>
          <ol>
            <li>Input <strong>principal</strong>, <strong>tenure</strong> (5 or 10 years), <strong>age</strong>, and <strong>gender</strong>.</li>
            <li>Validate inputs with exception handling.</li>
            <li>Calculate interest based on tenure, age, and gender using specific rates.</li>
            <li>Calculate maturity amount = principal + interest.</li>
            <li>Display results.</li>
          </ol>

          <h4 className="text-warning">🔗 Features:</h4>
          <ul>
            <li>Exception handling for invalid inputs.</li>
            <li>Clear modular OOP design (abstract class and subclass).</li>
          </ul>
          <a href="https://github.com/partha0025/Console_Intrest_calculation" target="_blank" rel="noreferrer" className="text-decoration-none">
            <FaGithub /> View Code
          </a>
        </section>

        {/* Project 2: Banking Application */}
        <section className="project-card animate-fade-in mb-5">
          <h2 className="fire-subtitle">🏦 Banking Application</h2>
          <p><strong>Package:</strong> <code>om.wipro.bank</code></p>
          <p><strong>Tech Stack:</strong> Java, Interfaces, Exception Handling</p>

          <h4 className="text-warning">📌 Project Description:</h4>
          <p>
            Banking app simulating account operations: create accounts, withdraw, deposit, transfer.
            Implements interfaces and handles exceptions robustly.
          </p>

          <h4 className="text-warning">🧠 Algorithm / Logic:</h4>
          <ol>
            <li>Create bank accounts with account details.</li>
            <li>Allow withdraw, deposit, and transfer methods.</li>
            <li>Throw exceptions for invalid operations (e.g. insufficient funds).</li>
            <li>Display transaction success or error messages.</li>
          </ol>

          <h4 className="text-warning">🔗 Features:</h4>
          <ul>
            <li>Interface implementation for account operations.</li>
            <li>Exception handling for business rules.</li>
          </ul>
          <a href="https://github.com/partha0025/Console_Banking_application" target="_blank" rel="noreferrer" className="text-decoration-none">
            <FaGithub /> View Code
          </a>
        </section>

        {/* Project 3: To-Do List Console */}
        <section className="project-card animate-fade-in mb-5">
          <h2 className="fire-subtitle">📝 To-Do List Console</h2>
          <p><strong>Tech Stack:</strong> Python</p>

          <h4 className="text-warning">📌 Project Description:</h4>
          <p>
            Simple command-line To-Do List application to add, view, and delete tasks.
            Users interact via console inputs.
          </p>

          <h4 className="text-warning">🧠 Algorithm / Logic:</h4>
          <ol>
            <li>Display menu to user for add, delete, or list tasks.</li>
            <li>Store tasks in a list.</li>
            <li>Perform requested operation and update task list accordingly.</li>
          </ol>

          <h4 className="text-warning">🔗 Features:</h4>
          <ul>
            <li>Console input and output interaction.</li>
            <li>Basic CRUD operations on tasks.</li>
          </ul>
          <a href="https://github.com/partha0025/Console-todo-List" target="_blank" rel="noreferrer" className="text-decoration-none">
            <FaGithub /> View Code
          </a>
        </section>

        {/* Project 4: Temperature Converter */}
        <section className="project-card animate-fade-in mb-5">
          <h2 className="fire-subtitle">🌡️ Temperature Converter</h2>
          <p><strong>Tech Stack:</strong> Python</p>

          <h4 className="text-warning">📌 Project Description:</h4>
          <p>
            Converts temperature between Celsius, Fahrenheit, and Kelvin scales.
            Console-based interaction.
          </p>

          <h4 className="text-warning">🧠 Algorithm / Logic:</h4>
          <ol>
            <li>Take input temperature and scale from user.</li>
            <li>Use formulae to convert temperature to other scales.</li>
            <li>Output converted temperatures.</li>
          </ol>

          <h4 className="text-warning">🔗 Features:</h4>
          <ul>
            <li>Supports multiple temperature scale conversions.</li>
            <li>Simple console UI.</li>
          </ul>
          <a href="https://github.com/partha0025/Temperature-Converter" target="_blank" rel="noreferrer" className="text-decoration-none">
            <FaGithub /> View Code
          </a>
        </section>

        {/* Project 5: Quiz App */}
        <section className="project-card animate-fade-in">
          <h2 className="fire-subtitle">❓ Quiz App</h2>
          <p><strong>Tech Stack:</strong> Python</p>

          <h4 className="text-warning">📌 Project Description:</h4>
          <p>
            Console quiz application with multiple choice questions,
            user input, and scoring system.
          </p>

          <h4 className="text-warning">🧠 Algorithm / Logic:</h4>
          <ol>
            <li>Ask multiple questions with predefined answers.</li>
            <li>Compare user input with correct answers.</li>
            <li>Calculate and display final score.</li>
          </ol>

          <h4 className="text-warning">🔗 Features:</h4>
          <ul>
            <li>Score tracking.</li>
            <li>Feedback based on answers.</li>
          </ul>
          <a href="https://github.com/partha0025/console-quiz-app" target="_blank" rel="noreferrer" className="text-decoration-none">
            <FaGithub /> View Code
          </a>
        </section>
      </div>

      {/* Footer with social links */}
      <motion.footer
        className="about-footer3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <a href="https://www.instagram.com/lucifer_ps_666?igsh=cDVkd21vY25uY29t" target="_blank" rel="noreferrer" aria-label="Instagram" className="mx-3">
          <FaInstagram size={24} />
        </a>
        <a href="https://www.linkedin.com/in/parthasarathy56/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="mx-3">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/partha0025" target="_blank" rel="noreferrer" aria-label="GitHub" className="mx-3">
          <FaGithub size={24} />
        </a>
        <a href="mailto:sasisarathy56@gmail.com" aria-label="Email" className="mx-3">
          <FaEnvelope size={24} />
        </a>

      </motion.footer>
    </>
  );
}

export default Console;
