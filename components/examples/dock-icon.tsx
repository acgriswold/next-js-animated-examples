"use client"

import { useTransform, type MotionValue, useSpring, motion } from "framer-motion";
import { useRef } from "react";

export default function DockIcon({ mouseX }: { mouseX: MotionValue }) {
    let ref = useRef<HTMLDivElement>(null);
  
    let distance = useTransform(mouseX, (val) => {
      let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
  
      return val - bounds.x - bounds.width / 2;
    });
  
    let widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
    let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });
  
    return (
      <motion.div
        ref={ref}
        style={{ width }}
        className="aspect-square w-10 rounded-full bg-gray-400"
      />
    );
  }
  