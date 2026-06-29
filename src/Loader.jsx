import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="fixed inset-0 bg-[#050816] flex justify-center items-center z-[999]">

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="text-center"
      >

        <h1 className="text-6xl font-black text-cyan-400">
          KG
        </h1>

        <p className="text-gray-400 mt-5">
          Loading Portfolio...
        </p>

      </motion.div>

    </div>
  );
}

export default Loader;