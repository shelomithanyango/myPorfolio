import "./About.css";
import myPic from "../assets/avatar.jpeg";

function About() {
  return (
    <div className="about-page">

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Portfolio</h2>

        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/skills">Skills</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      {/* Header */}
      <header className="about-header">
        <h1 className="name">Shelomith Anyango</h1>
        <h2 className="role">Software Developer</h2>
      </header>

      {/* Content */}
      <section className="about-content">
        <div className="about-grid">

          {/* About Card */}
          <div className="about-card main-about">
            <h4>About Me</h4>

            <p>
              I'm a passionate creator who believes in clean code and thoughtful design.
              I build digital experiences that are both beautiful and functional.
            </p>

            <div className="location">
              <span>📍 Bungoma, Kenya</span>
            </div>
          </div>

          {/* Profile Card */}
          <div className="about-card profile-card">
            <div className="profile-icon"></div>

            <div className="add-photo-btn">
              <img src={myPic} alt="My Profile" />
            </div>

          </div>

        </div>
      </section>

      {/* Contact Card */}
      <div className="about-card contact-card">
        <h3>Let's work together</h3>

        <p>Have a project in mind? I'd love to hear about it.</p>

        <div className="contact-btns">
          <button className="hero-btn1">
            <a href="/skills">View Skills</a>
          </button>

          <button className="hero-btn2">
            Download CV
          </button>
        </div>
      </div>

    </div>
  );
}

export default About;