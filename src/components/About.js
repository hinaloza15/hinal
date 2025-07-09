import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="about-container mb-5">
    <h1 className=" mt-5 text-center section-divider" data-aos="fade-right">About Me</h1>
      <div className="row p-4 justify-content-center align-items-center">
        <div className="col text-col-container">

          <p data-aos="fade-up">
            I'm currently a Software Engineer at
            <a
              href="https://seyonsolutions.com/"
              style={{ textDecoration: "none", color: "#ff6f91" }}
            >
              {" "}
              Seyon Solutions
            </a>
            , where I’m building an AI-powered chatbot that translates natural
            language into SQL queries. I recently graduated with a degree in
            Computer Science from the
            <a
              href="https://www.uic.edu/"
              style={{ textDecoration: "none", color: "#ff6f91" }}
            >
              {" "}
              University of Illinois at Chicago
            </a>{" "}
            in Fall 2024. I'm currently exploring the world of full-stack
            development, system design, and everything in between.
          </p>

          <ul className="tech-list-about" data-aos="fade-up" data-aos-delay="200">
            <div className="row">
              <div className="col">
                <li> JavaScript</li>
                <li> React.js</li>
                <li> Node.js</li>
                <li> Express.js</li>
              </div>
              <div className="col">
                <li> MongoDB</li>
                <li> SQL</li>
                <li> Python</li>
                <li> Git & GitHub</li>
              </div>
              <div className="col">
                <li> AWS</li>
                <li> Power BI</li>
              </div>
            </div>
          </ul>

          <p data-aos="fade-up" data-aos-delay="300">
            Outside of work, I love building fun side projects, reading about
            tech that’s shaping the future, and creating things that actually
            help people. My goal? To contribute to something that matters —
            whether it’s a line of code or a whole product.
          </p>
        </div>
        <div className="col-md-5 text-center" data-aos="fade-up">
          <img
            src="\media\images\graduation.JPEG"
            alt="Hinal Oza"
            className="about-image"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default About;
