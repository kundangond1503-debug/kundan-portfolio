import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import CanvasScene from "./CanvasScene";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-b from-[#050816] via-[#0b1120] to-black"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10 px-6">
        {/* Left Side */}

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-black leading-tight">
            Hi,
            <br />
            I'm <span className="text-cyan-400">Kundan Kumar Gond</span>
          </h1>

          <TypeAnimation
            sequence={[
              "MERN Stack Developer",
              2000,
              "React Developer",
              2000,
              "Node.js Developer",
              2000,
              "Full Stack Web Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="block mt-6 text-2xl text-cyan-400 font-semibold"
          />

          <p className="mt-6 text-gray-400 text-lg leading-8">
            Passionate about building modern, scalable, and user-friendly web
            applications using the MERN Stack.
          </p>

          {/* Buttons */}

          <div className="mt-8 flex gap-5">
            <a
              href="#projects"
              className="px-8 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 hover:scale-105"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-8 py-3 rounded-xl border border-cyan-400 hover:bg-cyan-500 hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-5 text-center">
              <h2 className="text-3xl font-bold text-cyan-400">10+</h2>
              <p className="text-gray-400 text-sm mt-2">Projects</p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-5 text-center">
              <h2 className="text-3xl font-bold text-cyan-400">200+</h2>
              <p className="text-gray-400 text-sm mt-2">DSA Problems</p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-5 text-center">
              <h2 className="text-3xl font-bold text-cyan-400">2+</h2>
              <p className="text-gray-400 text-sm mt-2">Years Learning</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side */}

        <CanvasScene />

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-7 h-12 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
