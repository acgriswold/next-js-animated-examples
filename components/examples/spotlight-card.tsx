"use client"

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export type SpotlightCardProps = {
    header: string,
    subHeader?: string,
    description: string,
}

export function SpotlightCard({header, subHeader, description}: SpotlightCardProps) {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    let rotateX = useMotionValue(0);
    let rotateY = useMotionValue(0);

    function handleMouseLeave({}: React.MouseEvent<HTMLElement>) {
        rotateX.set(0)
        rotateY.set(0)
    }

    function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
    }: React.MouseEvent<HTMLElement>) {
        if (!currentTarget)
            return;
    
        let { left, top, width, height } = currentTarget.getBoundingClientRect();

        mouseX.set(clientX - left);
        mouseY.set(clientY - top);

        const centerX = width / 2;
        const centerY = height / 2;

        rotateX.set((centerY - mouseY.get()) / 25)
        rotateY.set((mouseX.get() - centerX) / 25)
    }

    return (
        <div onMouseMove={handleMouseMove}
             onMouseLeave={handleMouseLeave}>
            <motion.div
                className="group relative max-w-md rounded-xl border border-white/10 bg-gray-900 px-8 py-16 shadow-2xl"
                style={{
                    transform: useMotionTemplate`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1, 1, 1)`,
                    transition: "all 1000ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
                }}
            >
                <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                    radial-gradient(
                        650px circle at ${mouseX}px ${mouseY}px,
                        rgba(14, 165, 233, 0.15),
                        transparent 80%
                    )
                    `,
                }}
                />
                <div>
                <h3 className="text-base font-semibold leading-7 text-sky-500">
                    {subHeader}
                </h3>
                <div className="mt-2 flex items-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-white">
                    {header}
                    </span>
                </div>
                <p className="mt-6 text-base leading-7 text-gray-300">
                    {description}
                </p>
                </div>
            </motion.div>
        </div>
    );
}