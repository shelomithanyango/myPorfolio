import "./Home.css";

function Home() {
  return (
    <div className="hero">
      <nav className="navbar">
        <h1 className="logo">Portfolio</h1>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/skills">Skills</a></li>
          <li><a href="/contact">Contact</a></li>
          </ul>
        
      </nav>
    

      <section className="hero-content">
        <div className="welcome-badge">
          <p className="welcome-text">👋 Welcome to my portfolio</p>
        </div>
        
        <h1>Hi, I'm <span>Shelomith Anyango</span></h1>
        <h2>Software Developer</h2>
        
        <p className="description">
          A full stack developer with a passion for creating dynamic and responsive softwares.
        </p>

        <div className="hero-btns">
          <button className="hero-butn1"><a href="/skills">View My Skills</a></button>
          <button className="hero-butn2"><a href="/contact">Get in Touch</a></button>
        </div>
      </section>
    </div>
  );
}

export default Home;