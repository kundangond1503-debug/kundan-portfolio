import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0b1120] text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold">
          Let's Connect
        </h2>

        <p className="mt-4 text-gray-400">
          I'm always open to discussing new opportunities, collaborations,
          or exciting projects.
        </p>

        <form className="mt-12 space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none"
          />

          <button
            className="bg-cyan-500 px-8 py-3 rounded-xl hover:bg-cyan-600"
          >
            Send Message
          </button>

        </form>

        <div className="flex justify-center gap-8 text-3xl mt-12">

          <a href="#"><FaEnvelope /></a>

          <a href="#"><FaGithub /></a>

          <a href="#"><FaLinkedin /></a>

          <a href="#"><FaInstagram /></a>

        </div>

      </div>
    </section>
  );
}

export default Contact;