import './Skills.css';

function Skills() {
  return (
    <div className="skills-page">
      <header className="skills-header">
        
               <nav className="navbar">
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/skills">Skills</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className='skills-header-content'>
        <h1>My Skills</h1>
        <p className="subtitle">What I specialize in</p>
      </div>
        
      </header>

      <div className="skills-grid">
        {/* Card 1: Frontend */}
        <div className="skill-card">
          <div className="icon-box react-icon">
             <i className="fab fa-react"></i> 
          </div>
          <h3>Frontend Development</h3>
          <p>
            Specializing in React.js to build interactive, state-driven user interfaces. 
            Expertise in modern CSS, responsive layouts, and UI/UX implementation.
          </p>
          <div className="card-tags">
            <span className="tag">React</span>
            <span className="tag">Javascript</span>
            <span className="tag">HTML5</span>
            <span className="tag">CSS3</span>
          </div>
        </div>

        {/* Card 2: Backend */}
        <div className="skill-card">
          <div className="icon-box backend-icon">
             <i className="fab fa-python"></i>
          </div>
          <h3>Backend & Logic</h3>
          <p>
            Building robust server-side applications using Python and Django. 
            Focused on clean API design, database management, and scalable logic.
          </p>
          <div className="card-tags">
            <span className="tag">Python</span>
            <span className="tag">Django</span>
            <span className="tag">PostgreSQL</span>
          </div>
        </div>

        {/* Card 3: Tools */}
        <div className="skill-card">
          <div className="icon-box tools-icon">
            <i className="fas fa-tools"></i>
          </div>
          <h3>Tools & Others</h3>
          <p>
            Proficient in Git, VS Code, and various development tools.
            Committed to clean code practices and efficient development workflows.
          </p>
          <div className="card-tags">
            <span className="tag">Git</span>
            <span className="tag">VS Code</span>
            <span className="tag">REST APIs</span>
            <span className="tag">Testing</span>
          </div>
        </div>
      </div>

<footer className="skills-footer">
  <p>© 2026 Shelomith Anyango</p>
  <div className="social-links">
    {/* LinkedIn Logo */}
    <a href="https://linkedin.com/in/shelomith-anyango" target="_blank" rel="noreferrer" className="social-icon linkedin">
      <i className="fa-brands fa-linkedin"></i>
    </a>

    {/* WhatsApp Logo */}
    <a href="https://wa.me/254741080548" target="_blank" rel="noreferrer" className="social-icon whatsapp">
      <i className="fa-brands fa-whatsapp"></i>
    </a>

    {/* GitHub Logo */}
    <a href="https://github.com/shelomithanyango" target="_blank" rel="noreferrer" className="social-icon github">
      <i className="fa-brands fa-github"></i>
    </a>

  </div>
</footer>
    </div>
  );
}

export default Skills;