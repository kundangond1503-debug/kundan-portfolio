import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import CanvasScene from "./CanvasScene";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-10 pb-0 bg-gradient-to-b from-[#050816] via-[#0b1120] to-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-8 px-6">

        {/* LEFT */}
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
              "Full Stack Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="block mt-3 text-2xl text-cyan-400 font-semibold"
          />

          <p className="mt-3 text-gray-400 text-base leading-6">
            Passionate about building modern, scalable, and user-friendly web applications using the MERN Stack.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex gap-4">
            <a
              href="#projects"
              className="px-8 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-8 py-3 rounded-xl border border-cyan-400 hover:bg-cyan-500 transition"
            >
              Contact Me
            </a>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-4 mt-16 mb-0 pb-0">
            <div className="bg-white/5 p-3 rounded-xl text-center">
              <h2 className="text-2xl text-cyan-400 font-bold">10+</h2>
              <p className="text-xs text-gray-400">Projects</p>
            </div>

            <div className="bg-white/5 p-3 rounded-xl text-center">
              <h2 className="text-2xl text-cyan-400 font-bold">200+</h2>
              <p className="text-xs text-gray-400">DSA</p>
            </div>

            <div className="bg-white/5 p-3 rounded-xl text-center">
              <h2 className="text-2xl text-cyan-400 font-bold">2+</h2>
              <p className="text-xs text-gray-400">Years</p>
            </div>
          </div>

        </motion.div>

        {/* RIGHT */}
        <CanvasScene />

      </div>
    </section>
  );
}

export default Hero;