import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

const projects = [
  {
    title: "StudyVault",
    description:
      "A full-stack study material sharing platform where students can upload and download notes, previous year questions, and other academic resources.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/kundangond1503-debug/studyVault1",
    live: "#",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
  },
  {
    title: "3D Portfolio",
    description:
      "Modern developer portfolio with smooth animations, responsive design, and interactive 3D user experience.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Three.js"],
    github: "#",
    live: "#",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
  },
  {
    title: "Weather App",
    description:
      "Responsive weather application using Weather API with live forecast and clean UI.",
    tech: ["React", "Weather API", "CSS"],
    github: "#",
    live: "#",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#050816] text-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center"
        >
          My <span className="text-cyan-400">Projects</span>
        </motion.h2>

        <p className="text-center text-gray-400 mt-4">
          Some of my recent work and learning projects.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

          {projects.map((project, index) => (

            <Tilt
              key={index}
              tiltMaxAngleX={18}
              tiltMaxAngleY={18}
              perspective={1200}
              transitionSpeed={1500}
              scale={1.05}
              glareEnable={true}
              glareMaxOpacity={0.15}
              glareColor="#06b6d4"
              className="rounded-2xl"
            >

              <motion.div
                whileHover={{
                  y: -12,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] transition-all duration-500"
              >

                <div className="overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                </div>

                <div className="p-6">

                  <h2 className="text-2xl font-bold">
                    {project.title}
                  </h2>

                  <p className="text-gray-400 mt-4 leading-7">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-5">

                    {project.tech.map((item, i) => (

                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm border border-cyan-400/20"
                      >
                        {item}
                      </span>

                    ))}

                  </div>

                  <div className="flex gap-4 mt-8">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-3 rounded-lg hover:bg-white/20 transition-all duration-300"
                    >
                      <FaGithub />
                      GitHub
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-3 rounded-lg hover:scale-105 transition-all duration-300"
                    >
                      <FaExternalLinkAlt />
                      Live
                    </a>

                  </div>

                </div>

              </motion.div>

            </Tilt>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;