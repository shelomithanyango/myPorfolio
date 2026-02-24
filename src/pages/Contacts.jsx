import './Contacts.css';

function Contacts() {
  return (
    <div className="contact-page">
          <nav className="navbar">
             <h2 className="logo">Portfolio</h2>

        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/skills">Skills</a></li>
          <li><a href="/contacts">Contacts</a></li>
        </ul>
      </nav>
      <div className="contact-container">
        {/* Top Info Cards */}
        <div className="info-grid">
          <div className="info-card">
            <div className="info-icon"><i className="fas fa-envelope"></i></div>
            <h4>Email</h4>
            <p>shelomith42@gmail.com</p>
          </div>
          <div className="info-card">
            <div className="info-icon"><i className="fas fa-phone"></i></div>
            <h4>Phone</h4>
            <p>+254 741 080 548</p>
          </div>
          <div className="info-card">
            <div className="info-icon"><i className="fas fa-location-dot"></i></div>
            <h4>Location</h4>
            <p>Bungoma, Kenya</p>
          </div>
        </div>

        {/* Message Form */}
        <div className="form-card">
          <h2>Send me a message</h2>
          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" placeholder="Cielo" />
              </div>
              <div className="form-group">
                <label>Your Email</label>
                <input type="email" placeholder="cielo@example.com" />
              </div>
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="your Inquiry" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Tell me about your inquiry..."></textarea>
            </div>
            <button type="submit" className="send-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;