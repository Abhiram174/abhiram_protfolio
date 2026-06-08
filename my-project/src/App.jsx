import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar">
        <h2>Abhirama A Rao</h2>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header className="hero">
        <h1>Hi, I'm Abhirama A Rao</h1>

        <h2>Software Developer & Internship Aspirant</h2>

        <p>
          Passionate about building efficient software solutions and
          continuously learning new technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn">
            View Projects
          </a>

          <a href="/resume.pdf" className="btn btn-outline" download>
            Download Resume
          </a>
        </div>
      </header>

      <section id="about">
        <h2>About Me</h2>

        <p>
          Highly motivated software developer with a strong foundation in
          programming and problem-solving. Passionate about continuous learning
          and leveraging innovative solutions to tackle complex challenges.
        </p>
      </section>

      <section id="skills">
        <h2>Skills</h2>

        <div className="grid">
          <div className="card">
            <h3>Programming</h3>
            <p>Java, C, C++, Python</p>
          </div>

          <div className="card">
            <h3>Web Development</h3>
            <p>HTML, CSS, JavaScript, Node.js, Express.js, SQL</p>
          </div>

          <div className="card">
            <h3>Tools</h3>
            <p>Git, GitHub, VS Code, Eclipse</p>
          </div>
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>

        <div className="grid">
          <div className="card">
            <h3>Library Management System</h3>

            <p>
              Built with HTML, CSS, JavaScript, Node.js, Express.js and MySQL.
            </p>

            <ul>
              <li>User Authentication</li>
              <li>Book Borrowing</li>
              <li>Book Returning</li>
              <li>Availability Check</li>
            </ul>
          </div>

          <div className="card">
            <h3>Smart Pet Feeding App</h3>

            <p>
              Android application integrated with Firebase Realtime Database.
            </p>

            <ul>
              <li>Remote Feeding</li>
              <li>Live Updates</li>
              <li>Realtime Commands</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="education">
        <h2>Education</h2>

        <div className="card">
          <h3>Nitte University</h3>
          <p>B.Tech Computer & Communication</p>
          <p>2023 - 2027</p>
          <p>CGPA: 6.73</p>
        </div>

        <div className="card">
          <h3>Vidyodaya PU College</h3>
          <p>PCM</p>
          <p>Percentage: 90.33%</p>
        </div>
      </section>

      <section>
        <h2>Certification</h2>

        <div className="card">
          <h3>Web Development Course - Udemy</h3>
          <p>HTML, CSS, JavaScript, Node.js, APIs and Deployment</p>
        </div>
      </section>

      <section id="contact">
        <h2>Contact</h2>

        <div className="card">
          <p>Email: abhiramaarao@gmail.com</p>
          <p>Phone: +91 9036736927</p>
          <p>Location: Udupi, Karnataka</p>
        </div>
      </section>

      <footer>
        <p>© 2026 Abhirama A Rao</p>
      </footer>
    </>
  );
}

export default App;