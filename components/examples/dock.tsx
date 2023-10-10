"use client"

import { motion, useMotionValue } from "framer-motion";

import DockIcon from "./dock-icon";


export default function Dock() {
    let mouseX = useMotionValue(Infinity);

    return (
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="mx-auto flex h-16 items-end gap-4 rounded-2xl bg-gray-700 px-4 pb-3"
      >
        {[...Array(8).keys()].map((i) => (
          <DockIcon mouseX={mouseX} key={i} />
        ))}
      </motion.div>
    );
  }
  