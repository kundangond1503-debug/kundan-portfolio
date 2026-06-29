import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="fixed inset-0 bg-[#050816] flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <h1 className="text-6xl font-bold text-cyan-400">KG</h1>
        <p className="text-center text-white mt-4">
          Loading Portfolio...
        </p>
      </motion.div>
    </div>
  );
}

export default Loader;