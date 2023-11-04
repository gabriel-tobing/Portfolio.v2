"use client";

import { ReactNode, useState } from "react";
import { motion } from "framer-motion";

interface TooltipProps {
  title: string;
  children: ReactNode;
}

export default function Tooltip({ title, children }: TooltipProps) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  const tooltipVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative inline-block">
      <div className="tooltip-container relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </div>
      {isTooltipVisible && (
        <motion.div
          className="hidden lg:block bottom-full mb-2 bg-neutral-500 dark:bg-neutral-100 dark:text-neutral-700 text-neutral-100 text-xs font-medium rounded px-2 py-1 absolute w-max max-w-xs"
          variants={tooltipVariants}
          initial="hidden"
          animate="visible"
        >
          {title}
        </motion.div>
      )}
    </div>
  );
}
