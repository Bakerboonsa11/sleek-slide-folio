"use client";

import { motion } from "framer-motion";

const InteractiveCard = () => {
  return (
    <motion.div
      className="w-64 h-80 rounded-2xl shadow-2xl"
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="w-full h-full relative"
        style={{ transformStyle: "preserve-3d" }}
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front of the card */}
        <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-primary to-secondary rounded-2xl flex flex-col items-center justify-center p-6 text-white">
          <h3 className="text-2xl font-bold mb-2">Baker Boonsa</h3>
          <p className="text-center">Hover over me to reveal my picture!</p>
        </div>

        {/* Back of the card */}
        <div className="absolute w-full h-full backface-hidden bg-white rounded-2xl overflow-hidden" style={{ transform: "rotateY(180deg)" }}>
          <img src="/bonsa.jpg" alt="Baker Boonsa" className="w-full h-full object-cover" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default InteractiveCard;
