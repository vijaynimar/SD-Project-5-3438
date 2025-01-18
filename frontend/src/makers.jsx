import React from 'react';
import './makers.css'; // Add styles for this component if needed

const About = () => {
  return (
    <section className="about-section">
      <h2>About Our Team</h2>
      <div className="team-members">
        <div className="team-member">
          <img
            src="https://via.placeholder.com/150"
            alt="Member 1"
            className="team-member-img"
          />
          <h3>Ritik Dethliya</h3>
          <p>Role: Frontend Developer</p>
          <p>
            Ritik Dethliya is passionate about creating dynamic, user-friendly
            interfaces. With a focus on React, Ritik Dethliya brings ideas to life with
            creativity and attention to detail.
          </p>
        </div>

        <div className="team-member">
          <img
            src="https://via.placeholder.com/150"
            alt="Member 2"
            className="team-member-img"
          />
          <h3>Vijay Kumar </h3>
          <p>Role: Backend Developer</p>
          <p>
            Vijay Kumar specializes in building robust, scalable backend services.
            They are skilled in Node.js, Express, and database design, ensuring
            everything runs smoothly behind the scenes.
          </p>
        </div>

        <div className="team-member">
          <img
            src="https://via.placeholder.com/150"
            alt="Member 3"
            className="team-member-img"
          />
          <h3>Kuldeep Gangrade</h3>
          <p>Role: UX/UI Designer</p>
          <p>
             Kuldeep Gangradehas keeps the team organized and ensures everything stays on
            track. They are responsible for the planning, coordination, and
            execution of projects, ensuring timely delivery and quality.
          </p>
        </div>

        <div className="team-member">
          <img
            src="https://via.placeholder.com/150"
            alt="Member 4"
            className="team-member-img"
          />
          <h3>Seek</h3>
          <p>Role: </p>
          <p>
            Chandrika being seeking
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
