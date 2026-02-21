import "./Home.css";

function Home() {
  return (
    <div className="hero">
      <nav className="navbar">
        <h1 className="logo">Portfolio</h1>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
          </ul>
        
      </nav>
    

      <section className="hero-content">
        <div className="welcome-badge">
          <p className="welcome-text">👋 Welcome to my portfolio</p>
        </div>
        
        <h1>Hi, I'm <span>Shelomith Anyango</span></h1>
        <h2>Full Stack Developer</h2>
        
        <p className="description">
          A full stack developer with a passion for creating dynamic and responsive web applications.
        </p>

        <div className="hero-btns">
          <button className="hero-butn1">View My Skills</button>
          <button className="hero-butn2">Get in Touch</button>
        </div>
      </section>
    </div>
  );
}

export default Home;