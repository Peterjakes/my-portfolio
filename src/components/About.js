import React from 'react';
import { motion } from 'framer-motion';
import AnimatedAvatar from './AnimatedAvatar';
import './About.css';

const About = () => {
  // Tech stack badges 
  const techStack = ['React', 'Node.js', 'JavaScript', 'Flutter', 'Laravel', 'PHP'];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">

          {/* Avatar Section — slides in from the left */}
          <motion.div
            className="avatar-container"
            initial={{ opacity: 0, x: -50 }}   // starts left and invisible
            whileInView={{ opacity: 1, x: 0 }}  // slides into position
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}            // only animates once
          >
            <div className="avatar-wrapper">
              <AnimatedAvatar />
            </div>

            {/* Status badge — pulses gently to draw attention */}
            <motion.div
              className="status-badge"
              animate={{ scale: [1, 1.05, 1] }} // subtle pulse animation
              transition={{ duration: 2, repeat: Infinity }} // loops forever
            >
              <span className="status-dot"></span> {/* green pulsing dot in CSS */}
              Available for work
            </motion.div>
          </motion.div>

          {/* Bio Section — slides in from the right */}
          <motion.div
            className="bio-container"
            initial={{ opacity: 0, x: 50 }}    // starts right and invisible
            whileInView={{ opacity: 1, x: 0 }} // slides into position
            transition={{ duration: 0.6, delay: 0.2 }} // slight delay after avatar
            viewport={{ once: true }}
          >
            <h2>About Me</h2>

            {/* Bio paragraphs */}
            <p className="bio-text">
              I'm Peter Jakes, a passionate full-stack developer and graphic designer with expertise in building modern, scalable web applications. I love turning ideas into reality through clean code and beautiful design.
            </p>
            <p className="bio-text">
              With experience in React, Node.js, Laravel, and Flutter, I create seamless digital experiences. Whether it's architecting APIs or designing compelling user interfaces, I bring creativity and technical excellence to every project.
            </p>

            {/* Tech badges — each pops in with staggered delay */}
            <div className="tech-badges">
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="tech-badge"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }} // staggered: 0s, 0.05s, 0.1s...
                  viewport={{ once: true }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* CV download button — scales on hover and tap */}
            <motion.a
              href="/resume-peter-jakes.pdf"
              download
              className="cv-download-btn"
              whileHover={{ scale: 1.05 }} // slight scale up on hover
              whileTap={{ scale: 0.95 }}   // slight scale down on click
            >
              <span className="download-icon">⬇</span>
              Download My CV
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;