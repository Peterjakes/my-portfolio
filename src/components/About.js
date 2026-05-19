import React from 'react';
import './About.css';

const About = () => {
  // Tech stack badges — update as your skills grow
  const techStack = ['React', 'Node.js', 'JavaScript', 'Flutter', 'Laravel', 'PHP'];

  return (
    // Section id="about" links it to navbar scroll
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">

          {/* Avatar Section — left side */}
          <div className="avatar-container">
            <div className="avatar-wrapper">
        
            </div>
          </div>

          {/* Bio Section — right side */}
          <div className="bio-container">
            <h2>About Me</h2>

            {/* Bio paragraphs */}
            <p className="bio-text">
              I'm Peter Jakes, a passionate full-stack developer and graphic designer with expertise in building modern, scalable web applications. I love turning ideas into reality through clean code and beautiful design.
            </p>
            <p className="bio-text">
              With experience in React, Node.js, Laravel, and Flutter, I create seamless digital experiences. Whether it's architecting APIs or designing compelling user interfaces, I bring creativity and technical excellence to every project.
            </p>

            {/* Tech stack badges */}
            <div className="tech-badges">
              {techStack.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>

            {/* CV download button */}
            
             <a href="/resume-peter-jakes.pdf"
              download
              className="cv-download-btn"
            >
              <span className="download-icon">⬇</span>
              Download My CV
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;