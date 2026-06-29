import { motion } from "framer-motion";

function Education() {
  return (
    <section id="education" className="py-24 bg-[#0b1120] text-white">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16"
        >
          <span className="text-white">Education</span>
        </motion.h2>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-lg">

          <h3 className="text-2xl font-bold text-cyan-400">
            Bachelor of Technology (B.Tech)
          </h3>

          <p className="text-xl mt-2">
            Computer Science & Engineering
          </p>

          <p className="text-gray-400 mt-2">
            2024 - 2028
          </p>

          <p className="text-gray-400 mt-5 leading-8">
            Currently pursuing B.Tech in Computer Science with a strong focus on
            Data Structures & Algorithms, Web Development, Database Management
            Systems, Operating Systems, and Object-Oriented Programming.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Education;