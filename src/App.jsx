import { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Journey from "./components/Journey";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Experience />
        <Journey />
        <Services />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <a
        href="home"
        className={`top ${showTop ? "show" : ""}`}
        aria-label="Back to top"
      >
        <i className="bx bx-up-arrow-alt"></i>
      </a>
    </>
  );
}

export default App;
