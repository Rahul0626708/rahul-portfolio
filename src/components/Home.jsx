import { useEffect, useRef } from "react";
import Typed from "typed.js";
import heroBg from "../assets/hero-bg2.png";

function Home() {
  const typedEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: [
  "Generative AI Developer",
  "Agentic AI Developer",
  "Backend Developer",
  "AI Automation Developer",
  "LLM Application Developer",],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section
      className="home"
      id="home"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Rahul Prakash</h1>
        <h3>
          And I'm a <span className="text" ref={typedEl}></span>
        </h3>
        <p>
      I'm a Generative AI & Backend Developer focused on building
      LLM-powered applications, Agentic AI systems, and intelligent
      automation workflows.
      <br />
      Experienced with Python, Node.js, MongoDB, REST APIs, AI Agents,
      and workflow automation.
    </p>
        <div className="home-sci">
          <a href="#" style={{ "--i": 7 }} aria-label="Facebook">
            <i className="bx bxl-facebook"></i>
          </a>
          <a
  href="https://www.linkedin.com/in/rahul-prakash-621627215"
  target="_blank"
  rel="noopener noreferrer"
  style={{ "--i": 8 }}
  aria-label="LinkedIn"
>
  <i className="bx bxl-linkedin"></i>
</a>
          <a href="#" style={{ "--i": 9 }} aria-label="WhatsApp">
            <i className="bx bxl-whatsapp"></i>
          </a>
          <a href="https://github.com/Rahul0626708" style={{ "--i": 10 }} aria-label="GitHub">
            <i className="bx bxl-github"></i>
          </a>
        </div>
        <a href="#about" className="btn-box">
          More About Me
        </a>
      </div>
    </section>
  );
}

export default Home;
