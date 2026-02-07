import 'bootstrap/dist/css/bootstrap.min.css';
import './Homepage.css';
import profile from './assets/Capture.png';
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import back from "./assets/Partha_Sarathy_Resume.pdf";
import { FaDownload } from "react-icons/fa";

function Homepage() {
  return (
    <>
      <div className='container-fluid'>

        {/* Header */}
        <header className='text-center bg-gradient text-white header-gradient'>
          <h3 className='display-4 animate__animated animate__fadeInUp title'>
            Welcome to My Portfolio
          </h3>
        </header>

        {/* Navbar */}
        <nav className='py-3 d-flex flex-wrap justify-content-center gap-3 shadow-sm sticky-top bg-white'>
          <Link to='/about' className='nav-item px-3 py-1 text_about text-dark'>𝔸𝔹𝕆𝕌𝕋</Link>
          <Link to='/skills' className='nav-item px-3 py-1 text_about text-dark'>𝕊𝕂𝕀𝕃𝕃</Link>
          <Link to='/intern' className='nav-item px-3 py-1 text_about text-dark'>𝕀ℕ𝕋𝔼ℝℕ𝕊ℍ𝕀ℙ</Link>
          <Link to='/project' className='nav-item px-3 py-1 text_about text-dark'>ℙℝ𝕆𝕁𝔼ℂ𝕋</Link>
          <Link to='/certificate' className='nav-item px-3 py-1 text_about text-dark'>ℂ𝔼ℝ𝕋𝕀𝔽𝕀ℂ𝔸𝕋𝔼</Link>
        </nav>

        {/* Main Section */}
        <main className='d-flex flex-column-reverse flex-md-row align-items-center justify-content-center text-center text-md-start py-4 px-3 gap-4 bg-black text-white h-100'>
  
            <div className='text_welcome animate__animated animate__fadeInLeft'>
              <h2 className='mb-3 display-6 fw-bold'>
                Hi, I’m <span className='text-primary'>Partha Sarathy</span>
              </h2>

              <p className='fs-5 para'>
                A passionate <strong>MERN Stack & Backend Developer</strong> specializing in building
                scalable, secure, and high-performance web applications.
              </p>

              <p className='fs-5 text-light mb-4'>
                I work with <strong>Node.js, Express.js, MySQL, TypeScript</strong> and have a strong
                interest in <strong>AI-driven and IoT-based solutions</strong> that solve real-world problems.
              </p>

              <a
                href={back}
                download
                className='text-center resume btn btn-primary d-inline-flex align-items-center'
              >
                <FaDownload size={20} style={{ marginRight: "10px" }} />
                Download Resume
              </a>
            </div>

            <div className='animate__animated animate__zoomIn'>
              <img
                src={profile}
                className='profile_img img-fluid shadow-lg'
                alt='Profile of Partha Sarathy'
              />
            </div>

          </main>


        {/* Footer */}
        <footer className='bg-gradient text-white footer-gradient mt-auto'>
          <section className='d-flex flex-wrap justify-content-center align-items-center gap-4'>
            <a href='https://www.instagram.com/lucifer_ps_666?igsh=cDVkd21vY25uY29t' target='_blank' rel='noopener noreferrer' className='text-white fs-4'>
              <FaInstagram />
            </a>
            <a href='https://www.linkedin.com/in/parthasarathy56/' target='_blank' rel='noopener noreferrer' className='text-white fs-4'>
              <FaLinkedin />
            </a>
            <a href='https://github.com/partha0025' target='_blank' rel='noopener noreferrer' className='text-white fs-4'>
              <FaGithub />
            </a>
            <a href='mailto:sasisarathy56@gmail.com' className='text-white fs-4'>
              <FaEnvelope />
            </a>
          </section>
        </footer>

      </div>
    </>
  );
}

export default Homepage;
