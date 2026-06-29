import { useRef } from "react";

export default function ProjectCard({ project }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // 🎯 3D tilt
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    // 🎯 magnetic movement (important Awwwards effect)
    const moveX = ((x - centerX) / centerX) * 8;
    const moveY = ((y - centerY) / centerY) * 8;

    card.style.transform = `
      perspective(1200px)
      translateX(${moveX}px)
      translateY(${moveY}px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;
  };

  const handleMouseLeave = () => {
    cardRef.current.style.transform = `
      perspective(1200px)
      translateX(0px)
      translateY(0px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl p-4 transition-transform duration-300 ease-out"
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="h-52 w-full object-cover rounded-xl"
      />

      <h2 className="text-white text-xl mt-3">
        {project.title}
      </h2>

      <p className="text-gray-300 text-sm">
        {project.description}
      </p>
    </div>
  );
}