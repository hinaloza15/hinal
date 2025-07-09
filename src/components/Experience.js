import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const experiences = [
  {
    company: "Seyon Solutions",
    role: "Software Engineer",
    duration: "Feb 2025 – Present",
    points: [
      "Built an AI chatbot that converts plain text to SQL",
      "Integrated OpenAI, AWS, PostgreSQL",
    ],
  },
  {
    company: "Illinois Tollway",
    role: "IT intern",
    duration: "June 2024 – Oct 2024",
    points: [
      "Led training for new IT systems",
      "Automated reports using Python & SQL",
    ],
  },
  {
    company: "University of Illinois at Chicago",
    role: "Computer Specialist I",
    duration: "June 2023 – June 2024",
    points: [
      "Led training for new IT systems",
      "Automated reports using Python & SQL",
    ],
  },
];

function Experience() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="experience-container">
      <h2 className="mb-5 mt-5 text-center section-divider" data-aos="fade-right">
        Experience
      </h2>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" data-aos="fade-up" key={index}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>
                {exp.role} <span>@ {exp.company}</span>
              </h3>
              <p className="duration">{exp.duration}</p>
              <ul>
                {exp.points.map((point, idx) => (
                  <li key={idx}>▸ {point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
