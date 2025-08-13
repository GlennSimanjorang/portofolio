"use client";

import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: Variants;
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: `${number}px` | `${number}%` | string; // Tipe aman
  blur?: string;
}

const BlurFade = ({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  inView = false,
  inViewMargin = "-50px",
  blur = "6px",
}: BlurFadeProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { ref: inViewRef, inView: inViewResult } = useInView({
    triggerOnce: true,
    rootMargin: inViewMargin,
  });

  const isInView = !inView || inViewResult;

  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" },
  };

  const combinedVariants = variant || defaultVariants;

  return (
    <motion.div
      ref={(node) => {
        ref.current = node;
        inViewRef(node); 
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={combinedVariants}
      transition={{
        delay: delay + 0.04,
        duration,
        ease: "easeOut",
      }}
      className={cn("inline-block", className)} 
    >
      {children}
    </motion.div>
  );
};

export default BlurFade;
