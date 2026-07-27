import 'bootstrap/dist/css/bootstrap.min.css';
import './Homepage.css';
import profile from './assets/Capture.png';
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope , FaAward } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import back from "./assets/Partha_Sarathy_Resume.pdf";
import { FaDownload } from "react-icons/fa";
import { SiHackerrank, SiLeetcode } from "react-icons/si";

function Homepage() {
  return (
    <>
      <div className='container-fluid'>


        {/* Navbar */}
        <nav className='py-3 d-flex flex-wrap justify-content-center gap-1 shadow-sm     bg-white navbar-gradient'>
          <Link to='/about' className='nav-item px- py-1 text_about text-dark'>ℙℝ𝕆𝔽𝕀𝕃𝔼</Link>
          <Link to='/skills' className='nav-item px-3 py-1 text_about text-dark'>𝕊𝕂𝕀𝕃𝕃𝕊</Link>
          <Link to='/intern' className='nav-item px-3 py-1 text_about text-dark'>𝔼𝕏ℙ𝔼ℝ𝕀𝔼ℕℂ𝔼</Link>
          <Link to='/project' className='nav-item px-3 py-1 text_about text-dark'>ℙℝ𝕆𝕁𝔼ℂ𝕋</Link>
          <Link to='/certificate' className='nav-item px-3 py-1 text_about text-dark'>ℂ𝔼ℝ𝕋𝕀𝔽𝕀ℂ𝔸𝕋𝔼</Link>
        </nav>

        {/* Main Section */}
        <main className='d-flex flex-column-reverse flex-md-row align-items-center justify-content-center text-center text-md-start py-1 px-3 gap-5 bg-black text-white h-100'>

          {/* Achievement Bubble */}

<div className="achievement-bubble">

  <div className="achievement-title">
    <FaAward className="award-icon" />
    <h4>Coding Profiles</h4>
  </div>

  <div className="achievement-section">

    <h4 className="text-center">HackerRank</h4>

    <div className="badge-item">
      <span>C</span>
      <span className="gold">Gold Badge 🥇</span>
    </div>

    <div className="badge-item">
      <span>Java</span>
      <span className="gold">Gold Badge 🥇</span>
    </div>

    <div className="badge-item">
      <span>Python</span>
      <span className="gold">Gold Badge 🥇</span>
    </div>

    <div className="badge-item">
      <span>JS</span>
      <span className="silver">Silver Badge 🥈</span>
    </div>

  </div>

  <div className="achievement-section">

    <h4 class='mt-2 text-center'>LeetCode</h4>

    <div className="leetcode-box">
      <span className="count">50+</span>
      <p>Problems Solved</p>
    </div>

  </div>

</div>
  
            <div className='text_welcome'>
              <h2 className="mb-3 display-6 fw-bold">
  Hi, I’m <span className="text-primary">Partha Sarathy</span>
</h2>

<p className="fs-5 para">
  A passionate <strong>Software Developer & Embedded Systems Engineer</strong> with a strong foundation in
  <strong> C/C++, Python</strong>, and backend development.
</p>

<p className="fs-5 text-light mb-4 para">
  I enjoy building <strong>efficient software, embedded applications, and hardware-integrated solutions</strong>.
  Passionate about developing reliable systems that combine software and electronics to solve real-world problems.
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
        <footer className='bg-white text-black footer-gradient mt-auto'>
          <section className='d-flex flex-wrap justify-content-center align-items-center gap-4'>
            <a href='https://www.instagram.com/lucifer_ps_666?igsh=cDVkd21vY25uY29t' target='_blank' rel='noopener noreferrer' className='text-black fs-4'>
              <FaInstagram />
            </a>
            <a href='https://www.linkedin.com/in/parthasarathy56/' target='_blank' rel='noopener noreferrer' className='text-black fs-4'>
              <FaLinkedin />
            </a>
            <a href='https://github.com/partha0025' target='_blank' rel='noopener noreferrer' className='text-black fs-4'>
              <FaGithub />
            </a>
            <a href='mailto:sasisarathy56@gmail.com' className='text-black fs-4'>
              <FaEnvelope />
            </a>

            <a
  href="https://www.hackerrank.com/profile/sasisarathy56"
  target="_blank"
  rel="noopener noreferrer"
  className="text-black fs-4"
  aria-label="HackerRank"
>
  <SiHackerrank />
</a>

<a
  href="https://leetcode.com/u/sasisarathy/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-black fs-4"
  aria-label="LeetCode"
>
  <SiLeetcode />
</a>
          </section>

        </footer>


      </div>

      
    </>
  );
}

export default Homepage;
