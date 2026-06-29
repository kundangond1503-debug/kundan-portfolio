import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Journey from "./components/Journey";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import Loader from "./components/Loader";
import Education from "./components/Education";

import Spotlight from "./components/Spotlight";
import CursorFollower from "./components/CursorFollower";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="bg-[#050816] text-white relative overflow-x-hidden">

      {/* 🌟 Cursor Glow Light */}
      <Spotlight />

      {/* 🔵 Moving Cursor Dot */}
      <CursorFollower />

      <Navbar />
      <Hero />
      <About />
      <Journey />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;