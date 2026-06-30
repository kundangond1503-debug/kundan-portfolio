import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-10 bg-[#0b1120] text-white">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-6"
        >
          About <span className="text-cyan-400">Me</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6"
        >

          {/* FLEX CONTAINER */}
          <div className="flex flex-col md:flex-row items-center gap-6">

            {/* IMAGE */}
            <div className="w-40 h-40 md:w-52 md:h-52 flex-shrink-0">
              <img
                src="/kundan10.jpeg"
                alt="Kundan"
                className="w-full h-full object-cover rounded-xl border border-white/20 shadow-lg"
              />
            </div>

            {/* TEXT */}
            <div className="text-gray-300 leading-6 text-center md:text-left">
              <p className="text-base">
                Hi! I'm{" "}
                <span className="text-cyan-400 font-semibold">
                  Kundan Kumar Gond
                </span>
                , MERN Stack Developer.
              </p>

              <p className="mt-2 text-sm">
                I build modern web apps and practice DSA daily.
              </p>
            </div>

          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-5 mt-6">

            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                Interests
              </h3>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>✔ Full-Stack Development</li>
                <li>✔ MERN Stack</li>
                <li>✔ DSA</li>
                <li>✔ Open Source</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                Strengths
              </h3>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>✔ Problem Solving</li>
                <li>✔ Teamwork</li>
                <li>✔ Quick Learner</li>
                <li>✔ Clean Code</li>
              </ul>
            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}

export default About;