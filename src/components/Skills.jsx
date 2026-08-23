const TECH_SKILLS = [
  { name: "Python", icon: "bx bxl-python", color: "yellow", value: 92 },
  { name: "JavaScript", icon: "bx bxl-javascript", color: "yellow", value: 90 },
  { name: "Node.js", icon: "bx bxl-nodejs", color: "green", value: 90 },
  { name: "MongoDB", icon: "bx bxl-mongodb", color: "green", value: 88 },
  { name: "Express.js", icon: "bx bx-server", color: "#68a063", value: 88 },
  { name: "Generative AI", icon: "bx bx-brain", color: "#8e44ad", value: 88 },
  { name: "LLM / AI Agents", icon: "bx bx-bot", color: "#e67e22", value: 86 },
  { name: "REST APIs", icon: "bx bx-code-block", color: "#3498db", value: 90 },
  { name: "n8n Automation", icon: "bx bx-cog", color: "#ff6b35", value: 85 },
  { name: "Web Scraping", icon: "bx bx-globe", color: "#16a085", value: 82 },
];

const PRO_SKILLS = [
  { label: "Problem-Solving", value: 92 },
  { label: "Analytical Thinking", value: 90 },
  { label: "Communication", value: 85 },
  { label: "Teamwork", value: 88 },
];

const RADIUS = 80;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function RadialBar({ label, value }) {
  const offset = CIRCUMFERENCE - (value / 100) * CIRCUMFERENCE;

  return (
    <div className="radial-bar">
      <svg viewBox="0 0 200 200">
        <circle
          className="progress-bar"
          cx="100"
          cy="100"
          r={RADIUS}
        ></circle>

        <circle
          className="path"
          cx="100"
          cy="100"
          r={RADIUS}
          style={{
            strokeDasharray: CIRCUMFERENCE,
            strokeDashoffset: offset,
          }}
        ></circle>
      </svg>

      <div className="percentage">{value}%</div>
      <div className="text">{label}</div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills">
      <h1 className="sub-title">
        My<span> Skills</span>
      </h1>

      <div className="skills-wrap">

        {/* Technical Skills */}
        <div className="container1">
          <h2 className="heading1">Technical Skills</h2>

          <div className="Technical-bars">
  {TECH_SKILLS.map((s) => (
    <div className="bar" key={s.name}>
      <i
        style={{ color: s.color }}
        className={s.icon}
      ></i>

      <div className="info">
        <span>{s.name}</span>

        <div className="progress-line">
          <span
            style={{
              width: `${s.value}%`,
            }}
          >
            <span className="percent-label">
              {s.value}%
            </span>
          </span>
        </div>
      </div>
    </div>
  ))}
</div>
        </div>

        {/* Professional Skills */}
        <div className="container">
          <h2 className="heading1">Professional Skills</h2>

          <div className="radial-bars">
            {PRO_SKILLS.map((s) => (
              <RadialBar
                key={s.label}
                label={s.label}
                value={s.value}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;