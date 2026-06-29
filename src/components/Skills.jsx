import { motion } from "framer-motion";

const skillData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Tailwind CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React.js", level: 88 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 82 },
      { name: "REST API", level: 80 },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 80 },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0b1120] text-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="text-5xl font-bold text-center"
        >
          Technical Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 mt-16">

          {skillData.map((group, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8"
            >

              <h3 className="text-2xl font-bold text-cyan-400 mb-8">
                {group.category}
              </h3>

              {group.skills.map((skill, i) => (

                <div key={i} className="mb-6">

                  <div className="flex justify-between mb-2">

                    <span>{skill.name}</span>

                    <span>{skill.level}%</span>

                  </div>

                  <div className="w-full bg-gray-700 rounded-full h-3">

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1 }}
                      className="bg-cyan-400 h-3 rounded-full"
                    />

                  </div>

                </div>

              ))}

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;