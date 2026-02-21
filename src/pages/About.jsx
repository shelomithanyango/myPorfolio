import "./About.css";
// import myPic from "../assets/myPic.jpeg"; // Use this in the img tag below when ready

function About() {
  return (
    <div className="about-page">
      <nav className="navbar">
        <h2 className="logo">Portfolio</h2>
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
              <span>📍 Nairobi, Kenya</span>
            </div>
          </div>

          {/* Profile Card */}
          <div className="about-card profile-card">
            <div className="profile-icon">👤</div>
            <button className="{my}">📸 Add your photo</button>
          </div>
        </div>

        {/* Bottom Contact Card */}
        <div className="about-card contact-card">
          <h3>Let's work together</h3>
          <p>Have a project in mind? I'd love to hear about it.</p>
          <div className="contact-btns">
            <button className="hero-btn1">Get in touch</button>
            <button className="hero-btn2">Download CV</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;