import React from 'react'


const projects = [
  {
    title: "StayMate",
    description: "An Airbnb-style full-stack app with auth, image upload, and booking.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://nomadstay.live",
    github: "https://github.com/hinaloza15/staymate"
  },
  {
    title: "TradeView",
    description: "A Zerodha-style trading dashboard with Chart.js and dummy stock data.",
    tech: ["React", "Chart.js", "Express", "Bootstrap"],
    link: "https://tradeview.live",
    github: "https://github.com/hinaloza15/TradeView"
  },
  {
    title: "DevConnect",
    description: "A full-stack blog platform with real-time commenting and likes.",
    tech: ["React", "Node", "MongoDB", "Socket.io"],
    link: "#",
    github: "#"
  },
  {
    title: "AlgoVis",
    description: "Task manager app with filters, tags, and deadline reminders.",
    tech: ["React", "Redux", "Firebase"],
    link: "#",
    github: "#"
  },
  {
    title: "SmartCart",
    description: "My personal portfolio built using React and animations.",
    tech: ["React", "AOS", "Bootstrap"],
    link: "#",
    github: "#"
  },
  {
    title: "AI Meeting Summarizer and Scheduler Assistant",
    description: "Find top-rated restaurants based on your location.",
    tech: ["HTML", "CSS", "JS", "Yelp API"],
    link: "#",
    github: "#"
  }
];

function Projects() {
  return (
    <div className="container my-5 mt-5">
      <h2 className="section-heading mb-5 text-center mt-5 section-divider" data-aos="fade-right">Projects</h2>
      <div className="row">
        {projects.map((project, idx) => (
          <div className="col-md-4 mb-4 d-flex align-items-stretch" key={idx}>
            <div className="card project-card shadow-sm w-100" data-aos="fade-up">
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title text-pink">{project.title}</h5>
                  <p className="card-text text-desc">{project.description}</p>
                </div>
                <ul className="list-inline tech-list mt-3">
                  {project.tech.map((tech, i) => (
                    <li key={i} className="list-inline-item badge bg-dark border text-desc me-1">{tech}</li>
                  ))}
                </ul>
                <div className="mt-3">
                  <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-outline-pink btn-sm me-2">Live</a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline-light btn-sm">Code</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;