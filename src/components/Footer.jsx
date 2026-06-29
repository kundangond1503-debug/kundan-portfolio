import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-cyan-400">
          Kundan Kumar Gond
        </h2>

        <p className="text-gray-400 mt-3">
          MERN Stack Developer • Computer Science Student
        </p>

        <div className="flex justify-center gap-8 mt-6 text-2xl">

          <a
            href="https://github.com/YOUR_GITHUB"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/YOUR_LINKEDIN"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://instagram.com/YOUR_INSTAGRAM"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 duration-300"
          >
            <FaInstagram />
          </a>

        </div>

        <p className="text-gray-500 mt-8 text-sm">
          © 2026 Kundan Kumar Gond. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;