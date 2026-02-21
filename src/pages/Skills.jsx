import "./Skills.css";

function Skills() {
  return (
    <div className="skills-page">
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/skills">Skills</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      <header className="skills-header">
        <h1 className="skills-title">My Skills</h1>
      </header>

      <section className="skills-content">
        {/* Skills Grid */}
        <div className="skills-grid">
          {/* Skill Card Example */}
          <div className="skill-card">
            <h4 className="skill-name">JavaScript</h4>
            <p>A versatile programming language used for web development.</p>
          </div>

          {/* Add more skill cards as needed */}
          <div className="skill-card">
            <h4 className="skill-name">React</h4>
            <p>A popular JavaScript library for building user interfaces.</p>
          </div>

          <div className="skill-card">
            <h4 className="skill-name">Node.js</h4>
            <p>A JavaScript runtime built on Chrome's V8 engine for server-side development.</p>
          </div>

          <div className="skill-card">
            <h4 className="skill-name">CSS</h4>
            <p>Styling language used to design the look and feel of web pages.</p>
          </div>

          {/* Add more skills as needed */}
        </div>
      </section>
    </div>
  );
}

export default Skills;      