'use client';
#just
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.42, 0, 0.58, 1] as [number, number, number, number] }
    },
};

const buttonVariants = {
    rest: { scale: 1, rotateX: 0, boxShadow: "0 4px 24px 0 rgba(59,130,246,0.10)" },
    hover: {
        scale: 1.07,
        rotateX: 8,
        boxShadow: "0 8px 32px 0 rgba(59,130,246,0.25), 0 0 16px 2px rgba(59,130,246,0.15)",
        transition: { type: "spring" as const, stiffness: 300, damping: 18 },
    },
};

const Hero = () => {
    // Dynamically import Typewriter only on the client
    const [Typewriter, setTypewriter] = React.useState<React.ComponentType<{
        textStyle?: Record<string, string | number>;
        startDelay?: number;
        cursorColor?: string;
        multiText?: string[];
        multiTextDelay?: number;
        typeSpeed?: number;
        multiTextLoop?: boolean;
    }> | null>(null);

    React.useEffect(() => {
        import("react-typewriter-effect").then(mod => setTypewriter(() => mod.default));
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50 overflow-hidden">
            {/* Animated Blurred Gradient Blob Background */}
            <div
                className="absolute inset-0 pointer-events-none z-0"
                aria-hidden="true"
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0.7 }}
                    animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.7, 1, 0.7] }}
                    transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
                    className="absolute left-1/2 top-1/2 w-[600px] h-[400px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-blue-400 via-purple-300 to-pink-400 opacity-40 blur-3xl rounded-full"
                />
                {/* Optional: Spotlight/Light-follow-cursor effect container */}
                <div id="spotlight-cursor-effect" className="absolute inset-0 z-0" />
            </div>

            <motion.div
                className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center justify-center"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">
                    {/* Name */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg"
                    >
                        Kousaila Benhamouche
                    </motion.h1>

                    {/* Title with Typewrnpm install framer-motioniter */}
                    <motion.div variants={itemVariants} className="mb-6 min-h-[2.5rem]">
                        {Typewriter && (
                            <Typewriter
                                textStyle={{
                                    fontSize: "1.5rem",
                                    fontWeight: 600,
                                    color: "#2563eb",
                                    letterSpacing: "0.01em",
                                }}
                                startDelay={500}
                                cursorColor="#2563eb"
                                multiText={[
                                    "Backend Developer",
                                    "DevOps Researcher",
                                    "Problem Solver",
                                ]}
                                multiTextDelay={1200}
                                typeSpeed={70}
                                multiTextLoop
                            />
                        )}
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                        variants={itemVariants}
                        className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed"
                    >
                        Building scalable systems and optimizing deployment pipelines.
                    </motion.p>

                    {/* Education */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg text-gray-600 mb-12"
                    >
                        Currently completing my Master&apos;s in Information Systems Engineering at ESI-SBA.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <motion.a
                            href="#projects"
                            variants={buttonVariants}
                            initial="rest"
                            whileHover="hover"
                            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg border-2 border-blue-600 hover:bg-blue-700 transition-all duration-300 hover:shadow-xl transform-gpu"
                        >
                            View Projects
                        </motion.a>

                        <motion.a
                            href="/resume.pdf"
                            download
                            variants={buttonVariants}
                            initial="rest"
                            whileHover="hover"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 shadow-lg hover:bg-blue-50 transition-all duration-300 hover:shadow-xl transform-gpu"
                        >
                            Download Resume
                        </motion.a>

                        <motion.a
                            href="#contact"
                            variants={buttonVariants}
                            initial="rest"
                            whileHover="hover"
                            className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300 hover:shadow-xl transform-gpu"
                        >
                            Contact Me
                        </motion.a>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
                    initial={{ y: 0, opacity: 0.7 }}
                    animate={{
                        y: [0, 18, 0],
                        opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.6,
                        ease: "easeInOut",
                    }}
                >
                    <svg
                        className="w-7 h-7 text-gray-400 drop-shadow-lg"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;