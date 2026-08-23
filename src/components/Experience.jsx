import React from "react";

const EXPERIENCES = [
  {
    number: "01",
     role: "Backend Developer",
    company: "PearlThoughts",
    duration: "2 Months",
    icon: "bx bx-server",
    description:
      "Developed backend functionality using Python and its frameworks, working with APIs, server-side logic, database integration, and debugging. Contributed to building reliable backend features.",
    skills: ["Python", "Backend", "APIs", "Database", "Frameworks"],
  },

  {
    number: "02",
    role: "Data Science & Analytics Intern",
    company: "Zidio Development",
    duration: "3 Months",
    icon: "bx bx-bar-chart-alt-2",
    description:
      "Worked on data cleaning, preprocessing, exploratory data analysis, and machine learning workflows using Python. Built and evaluated predictive models while working with real-world datasets.",
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "EDA"],
  },
  {
    number: "03",
    role: "Web Developer Intern",
    company: "Internshala",
    duration: "Internship",
    icon: "bx bx-code-alt",
    description:
      "Worked on web development projects and responsive interfaces, implementing frontend functionality and improving user experience. Gained practical experience with modern web technologies, debugging, and collaborative development.",
    skills: ["HTML", "CSS", "JavaScript", "Web Development"],
  },
];

function Experience() {
  return (
    <section className="experience" id="experience">

      <h1 className="sub-title">
        My <span>Experience</span>
      </h1>

      <p className="experience-intro">
        My professional journey across web development,
        data science, analytics, and backend engineering.
      </p>

      <div className="experience-container">

        {EXPERIENCES.map((exp) => (
          <div className="experience-card" key={exp.company}>

            <div className="experience-number">
              {exp.number}
            </div>

            <div className="experience-line"></div>

            <div className="experience-content">

              <div className="experience-icon">
                <i className={exp.icon}></i>
              </div>

              <div className="experience-info">

                <div className="experience-top">

                  <div>
                    <h2>{exp.role}</h2>
                    <h3>{exp.company}</h3>
                  </div>

                  <span className="experience-duration">
                    <i className="bx bx-calendar"></i>
                    {exp.duration}
                  </span>

                </div>

                <p>{exp.description}</p>

                <div className="experience-skills">
                  {exp.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Experience;