import { motion } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

const InfiniteBanner: React.FC = () => {
  const bannerText =
    "Latest news headline goes here - Check out more at our site! "; // Example text
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  // Get the width of the element
  useEffect(() => {
    setWidth(ref.current ? ref.current.scrollWidth : 0);
  }, [ref.current]);

  // Define animation properties
  const marqueeVariants = {
    animate: {
      x: [width, -width],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div
      ref={ref}
      className="overflow-hidden whitespace-nowrap bg-gray-200 py-2"
    >
      <motion.div
        className="inline-block"
        variants={marqueeVariants}
        animate="animate"
      >
        {bannerText.repeat(10)}
      </motion.div>
    </div>
  );
};

export default InfiniteBanner;
