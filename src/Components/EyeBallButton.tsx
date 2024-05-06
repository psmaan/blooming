import { motion, useMotionValue, useTransform } from "framer-motion";
import React, { useRef } from "react";

const EyeBallButton: React.FC = () => {
  const boundaryRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Handling mouse move within the boundary
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (boundaryRef.current) {
      const rect = boundaryRef.current.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const posX = (event.clientX - rect.left - centerX) / centerX;
      const posY = (event.clientY - rect.top - centerY) / centerY;
      x.set(posX * 10); // Multiplier to control range of movement
      y.set(posY * 10);
    }
  };

  return (
    <div
      ref={boundaryRef}
      className="relative w-52 h-52 flex items-center justify-center z-10"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }} // Reset on mouse leave
    >
      <motion.div
        style={{ x, y, scale: useTransform(x, [-10, 10], [1, 1.1]) }}
        className="w-28 h-28 bg-transparent rounded-full border scale-150 border-white flex items-center justify-center cursor-pointer"
      >
        <motion.span
          style={{ x, y }}
          className="text-white font-recoleta py-10 px-8"
        >
          More
        </motion.span>
      </motion.div>
    </div>
  );
};

export default EyeBallButton;
