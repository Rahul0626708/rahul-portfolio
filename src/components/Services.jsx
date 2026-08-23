const SERVICES = [
  {
    icon: "bx bx-code",
    title: "Software Development",
    desc: "Building full-stack applications with React, FastAPI, Spring Boot, and Node.js, backed by PostgreSQL and MongoDB.",
  },
  {
    icon: "bx bx-crop",
    title: "AI & Automation",
    desc: "Designing AI-integrated apps and self-hosted automation pipelines, favoring local models over costly external APIs.",
  },
  {
    icon: "bx bx-bot",
    title: "Workflow Engineering",
    desc: "Building scraping, scoring, and publishing pipelines with n8n, connecting job portals, databases, and messaging platforms.",
  },
  {
    icon: "bx bx-network-chart",
    title: "AI & Automation",
    desc: "Building agentic AI systems, LLM-powered applications, multi-agent workflows, and intelligent automation for business and software engineering.",
  },
  
];

function Services() {
  return (
    <section id="services">
      <div className="container">
        <h1 className="sub-title">
          My<span> Services</span>
        </h1>
        <div className="services-list">
          {SERVICES.map((s) => (
            <div key={s.title}>
              <i className={s.icon} style={{ color: "darkred" }}></i>
              <h2>{s.title}</h2>
              <p>{s.desc}</p>
              <a href="#contact" className="read">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
