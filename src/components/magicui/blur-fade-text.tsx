"use client";

import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import { useMemo } from "react";

interface BlurFadeTextProps {
  text: string;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  characterDelay?: number;
  delay?: number;
  yOffset?: number;
  animateByCharacter?: boolean;
}

const BlurFadeText = ({
  text,
  className,
  variant,
  characterDelay = 0.03,
  delay = 0,
  yOffset = 8,
  animateByCharacter = false,
}: BlurFadeTextProps) => {
  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: "blur(8px)" },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" }, // kembalikan ke y: 0
  };

  const combinedVariants = variant || defaultVariants;
  const characters = useMemo(() => Array.from(text), [text]);

  if (animateByCharacter) {
    return (
      <div className="flex whitespace-pre">
        {characters.map((char, i) => (
          <motion.span
            key={i}
            initial="hidden"
            animate="visible"
            variants={combinedVariants}
            transition={{
              delay: delay + i * characterDelay,
              duration: 0.3,
              ease: "easeOut",
            }}
            className={cn("inline-block", className)}
            style={{
              width: char === " " ? "0.5em" : "auto",
              display: "inline-block",
            }}
          >
            {char}
          </motion.span>
        ))}
      </div>
    );
  }

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={combinedVariants}
      transition={{
        delay,
        duration: 0.5,
        ease: "easeOut",
      }}
      className={cn("inline-block", className)}
    >
      {text}
    </motion.span>
  );
};

export default BlurFadeText;
