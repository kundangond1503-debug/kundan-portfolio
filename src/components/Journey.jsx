import { motion } from "framer-motion";

const timeline = [
  {
    year: "2024",
    title: "Started B.Tech in Computer Science",
    desc: "Began my Computer Science Engineering journey and built a strong foundation in C, C++, programming fundamentals, and problem-solving.",
  },
  {
    year: "2025",
    title: "Explored Full-Stack Development",
    desc: "Learned the MERN Stack, built multiple real-world projects, practiced DSA regularly, and improved my development skills.",
  },
  {
    year: "2026",
    title: "Career Goal",
    desc: "Become a skilled Software Development Engineer (SDE), contribute to impactful products, and continuously learn new technologies.",
  },
];

function Journey() {
  return (
    <section
      id="journey"
      className="py-24 bg-[#050816] text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="text-5xl font-bold text-center"
        >
          My Journey
        </motion.h2>

        <div className="relative mt-20">

          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 w-1 h-full bg-cyan-500"></div>

          {timeline.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .8 }}
              className={`mb-16 flex ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              }`}
            >

              <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 md:w-[45%] ml-12 md:ml-0">

                <div className="absolute -left-8 md:left-auto md:right-[-42px] top-8 w-5 h-5 bg-cyan-400 rounded-full border-4 border-[#050816]"></div>

                <h3 className="text-cyan-400 text-3xl font-bold">
                  {item.year}
                </h3>

                <h4 className="text-2xl mt-3 font-semibold">
                  {item.title}
                </h4>

                <p className="text-gray-400 mt-4 leading-7">
                  {item.desc}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Journey;