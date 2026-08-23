import React from "react";

const JOURNEY_STATS = [
  {
    icon: "bx bx-code-alt",
    value: "8+",
    label: "Projects Built",
  },
  {
    icon: "bx bx-brain",
    value: "450+",
    label: "DSA Problems Solved",
  },
  {
    icon: "bx bx-server",
    value: "Python, Django",
    label: "Core Technologies",
  },
  {
    icon: "bx bx-bot",
    value: "Generative AI",
    label: "Current Focus",
  },
];

function Journey() {
  return (
    <section className="journey" id="journey">

      <h1 className="sub-title">
        My <span>Development Journey</span>
      </h1>

      <div className="journey-stats">

        {JOURNEY_STATS.map((stat) => (
          <div className="journey-card" key={stat.label}>

            <i className={stat.icon}></i>

            <h2>{stat.value}</h2>

            <p>{stat.label}</p>

          </div>
        ))}

      </div>

      <div className="journey-content">

        <h2>
          From DSA to Generative AI & Backend Engineering
        </h2>

        <p>
          I started my development journey by strengthening my
          problem-solving skills through <strong>450+ DSA problems</strong>,
          building a strong foundation in algorithms, data structures,
          and logical thinking. I then moved into
          <strong> backend and full-stack development</strong>, working
          with Python, Node.js, Express.js, MongoDB, and REST APIs to
          build real-world applications.
        </p>

        <p>
          Today, I’m focused on
          <strong> Generative AI, LLMs, Agentic AI, and intelligent
          automation</strong>, building AI-powered systems that combine
          strong software engineering with practical AI solutions.
        </p>

      </div>

    </section>
  );
}

export default Journey;