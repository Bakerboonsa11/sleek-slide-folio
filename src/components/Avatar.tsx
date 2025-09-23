"use client";

import { motion } from "framer-motion";

const Avatar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <motion.div
        className="w-48 h-48 rounded-full overflow-hidden shadow-2xl border-4 border-primary/20"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img src="/bonsa.jpg" alt="Baker Boonsa" className="w-full h-full object-cover" />
      </motion.div>
      <motion.div
        className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold"
        animate={{
          rotate: [0, 360],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        🚀
      </motion.div>
    </motion.div>
  );
};

export default Avatar;
