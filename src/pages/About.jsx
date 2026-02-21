import "./About.css";
import myPic from "../assets/avatar.jpeg"; 

function About() {
  return (
    <div className="about-page">
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/skills">Skills</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      <header className="about-header">
        <h1 className="name">Shelomith Anyango</h1>
        <h2 className="role">Software Developer</h2>
      </header>

      <section className="about-content">
        <div className="about-grid">
          {/* Main Card */}
          <div className="about-card main-about">
            <h4 className="card-title">About Me</h4>
            <p>
              I'm a passionate creator who believes in the power of thoughtful
              design and clean code. I specialize in crafting digital experiences 
              that are both beautiful and functional.
            </p>
            <div className="location">
              <span>📍 Bungoma, Kenya</span>
            </div>
          </div>

          {/* my profile Card */}
          <div className="about-card profile-card">
            
            <button className="add-photo-btn"><img src={myPic} alt="My Profile" /></button>
          </div>
        </div>

        {/* Bottom Contact Card */}
        <div className="about-card contact-card">
          <h3>Let's work together</h3>
          <p>Have a project in mind? I'd love to hear about it.</p>
          <div className="contact-btns">
            <button className="hero-btn1"><a href="/skills">Get in touch</a></button>
            <button className="hero-btn2"><a href="">Download CV</a></button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;