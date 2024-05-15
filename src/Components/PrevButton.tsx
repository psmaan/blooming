import { motion, useMotionValue, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";
interface AnimatedButtonI {
  innerText: string;
  textClass: string;
  justifyEnd?: boolean;
}
const PrevButton: React.FC<AnimatedButtonI> = (props) => {
  const boundaryRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
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
      className={
        props.justifyEnd
          ? "w-full items-center hidden tb:flex  justify-end  "
          : "w-full items-center hidden tb:flex "
      }
    >
      <motion.div
        className={
          hover
            ? "w-[12px] h-[2px] transition-all bg-[#B2FF02]"
            : "w-[20px] h-[2px] bg-[#B2FF02]  transition-all"
        }
      ></motion.div>
      <div
        onMouseEnter={() => setHover(true)}
        ref={boundaryRef}
        className="relative w-52 h-16 flex items-center justify-center z-10 gap-4 cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
          setHover(false);
        }} // Reset on mouse leave
      >
        <motion.div
          style={{ x, y, scale: useTransform(x, [-10, 10], [1, 1.1]) }}
          className="flex items-center "
        >
          <motion.span style={{ x, y }} className={props.textClass}>
            {props.innerText}
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
};

export default PrevButton;
