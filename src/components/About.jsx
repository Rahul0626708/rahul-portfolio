import aboutImg from "../assets/hero-bg.png";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={aboutImg} alt="Rahul Prakash portrait" />
      </div>
      <div className="about-text">
        <h2>
          About<span> Me</span>
        </h2>
        <h4>Generative AI & Backend Developer</h4>
        <p>
          I’m Rahul Prakash, a Generative AI & Backend Developer focused on building intelligent, scalable, and automation-driven applications. I specialize in LLM-powered applications, Agentic AI, multi-agent workflows, and AI automation, with hands-on experience developing AI agents for business intelligence, autonomous software engineering, data analysis, and workflow automation.

My core technologies include Python, JavaScript, Node.js, Express.js, MongoDB, REST APIs, n8n, and LLM technologies. I also build secure backend systems, API-driven applications, and real-world automation solutions. I enjoy combining AI, backend engineering, and automation to transform complex ideas into practical, reliable, and impactful software.

        </p>
        <a href="contact" className="btn-box">
          Let's Talk
        </a>
      </div>
    </section>
  );
}

export default About;
