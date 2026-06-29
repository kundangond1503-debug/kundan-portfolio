import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-24 bg-[#0b1120] text-white">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-14"
        >
          About <span className="text-cyan-400">Me</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-10"
        >

          {/* FLEX CONTAINER */}
<div className="flex flex-row items-start gap-10">

  {/* LEFT IMAGE */}
  <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
  <img
    src="/kundan10.jpeg"
    alt="Kundan"
    className="w-full h-full object-cover rounded-2xl border border-white/20 shadow-xl"
  />
</div>

  {/* RIGHT TEXT */}
  <div className="text-gray-300 leading-8">
    <p className="text-lg">
      Hi! I'm <span className="text-cyan-400 font-semibold">Kundan Kumar Gond</span>,
      a Computer Science student and MERN Stack Developer.
      I love building modern web apps.
    </p>

    <p className="mt-4">
      I improve my skills daily by practicing DSA and building projects.
    </p>
  </div>

</div>

          {/* GRID SECTION */}
          <div className="grid md:grid-cols-2 gap-8 mt-10">

            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                Interests
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>✔ Full-Stack Development</li>
                <li>✔ MERN Stack</li>
                <li>✔ Data Structures & Algorithms</li>
                <li>✔ Open Source</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                Strengths
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>✔ Problem Solving</li>
                <li>✔ Team Collaboration</li>
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