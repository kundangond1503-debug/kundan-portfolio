import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Journey", to: "journey" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#050816]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-cyan-400">
          Kundan Gond
        </h1>

        <ul className="hidden md:flex gap-8">

          {links.map((item) => (

            <li key={item.to}>

              <Link
                to={item.to}
                smooth={true}
                duration={600}
                offset={-70}
                className="cursor-pointer hover:text-cyan-400 duration-300"
                activeClass="text-cyan-400"
                spy={true}
              >
                {item.name}
              </Link>

            </li>

          ))}

        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {open && (
        <div className="md:hidden bg-[#050816]">

          {links.map((item) => (

            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={600}
              offset={-70}
              onClick={() => setOpen(false)}
              className="block px-8 py-4 border-b border-white/10"
            >
              {item.name}
            </Link>

          ))}

        </div>
      )}
    </nav>
  );
}

export default Navbar;