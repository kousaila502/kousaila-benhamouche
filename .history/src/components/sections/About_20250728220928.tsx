'use client';
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.18,
        },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.42, 0, 0.58, 1] as [number, number, number, number] } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] as [number, number, number, number] } },
};

const academicBoxVariants = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] as [number, number, number, number], delay: 0.2 } },
};

const skills = [
    {
        //img: "/skills/frontend.jpg", // Replace with your actual image paths
        title: "Frontend",
        icon: "🧠",
        description: "Modern UI/UX, React, Tailwind, and delightful user experiences."
    },
    {
        //img: "/skills/backend.jpg",
        title: "Backend",
        icon: "🔧",
        description: "Robust APIs, scalable systems, and clean architecture."
    },
    {
        //img: "/skills/devops.jpg",
        title: "DevOps",
        icon: "⚙️",
        description: "CI/CD, automation, cloud, and infrastructure as code."
    }
];

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.7 }}
                    variants={containerVariants}
                >
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                        variants={fadeUp}
                    >
                        About Me
                    </motion.h2>
                    <motion.div
                        variants={fadeUp}
                        className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 shadow-lg animate-pulse"
                    />
                </motion.div>

                {/* Profile + Story with image embedded top-left */}
                <motion.div
                    className="mb-20"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={containerVariants}
                >
                    <div className="relative">
                        {/* Desktop: float image left, text wraps; Mobile: stack */}
                        <div className="block md:hidden mb-6 flex justify-center">
                            <motion.img
                                src="/profile.jpg"
                                alt="Profile"
                                className="w-36 h-36 rounded-full object-cover shadow-xl border-4 border-white"
                                style={{ background: "linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)" }}
                                loading="lazy"
                                variants={fadeUp}
                            />
                        </div>
                        <div className="hidden md:block float-left mr-8 mb-4">
                            <motion.img
                                src="/profile.jpg"
                                alt="Profile"
                                className="w-36 h-36 rounded-full object-cover shadow-xl border-4 border-white"
                                style={{ background: "linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)" }}
                                loading="lazy"
                                variants={fadeUp}
                            />
                        </div>
                        <motion.div
                            className="space-y-6 text-lg text-gray-700 leading-relaxed"
                            variants={containerVariants}
                        >
                            <motion.p variants={fadeUp}>
                                I&apos;m a 5th-year Computer Science student at <span className="font-semibold text-blue-600">École Supérieure d&apos;Informatique (ESI-SBA)</span>,
                                specializing in Information Systems Engineering with a focus on backend development and DevOps practices.
                            </motion.p>
                            <motion.p variants={fadeUp}>
                                Currently completing my master&apos;s thesis on <span className="font-semibold">&quot;Leveraging GitOps for Scalable and Maintainable CI/CD Pipelines,&quot;</span>
                                where I achieved quantifiable <span className="font-bold text-green-600">5.1x performance improvements</span> through
                                real-world research on Google Cloud Platform.
                            </motion.p>
                            <motion.p variants={fadeUp}>
                                My journey spans from building production-ready REST APIs and enterprise platforms to optimizing
                                infrastructure costs by <span className="font-bold text-green-600">80%</span> and implementing automated deployment pipelines.
                                I&apos;m passionate about creating efficient, scalable systems and solving complex technical challenges.
                            </motion.p>
                            <motion.p variants={fadeUp}>
                                <span className="font-semibold text-blue-600">Graduating in September 2025</span>, I&apos;m eager to apply my research-backed expertise in backend development
                                and DevOps practices to contribute to innovative projects and teams.
                            </motion.p>
                        </motion.div>
                        {/* Clear float for following content */}
                        <div className="clear-both" />
                    </div>
                </motion.div>

                {/* Skills Overview */}
                <motion.div
                    className="mb-20"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={containerVariants}
                >
                    <motion.h3
                        className="text-2xl font-bold text-gray-900 mb-8 text-center"
                        variants={fadeUp}
                    >
                        Skills Overview
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {skills.map((skill, idx) => (
                            <motion.div
                                key={skill.title}
                                className="flex flex-col items-center bg-gray-50 rounded-2xl shadow-md border border-gray-100 p-6 group cursor-pointer transition-all"
                                variants={cardVariants}
                                whileHover={{
                                    scale: 1.06,
                                    boxShadow: "0 8px 32px 0 rgba(59,130,246,0.13), 0 0 24px 2px rgba(168,85,247,0.14)",
                                }}
                            >
                                <div className="w-20 h-20 rounded-xl overflow-hidden mb-4 shadow-lg border-2 border-white group-hover:ring-4 group-hover:ring-blue-200 transition flex items-center justify-center bg-white">
                                    <img
                                        src={skill.img}
                                        alt={skill.title}
                                        className="object-cover w-full h-full"
                                        loading="lazy"
                                    />
                                    <span className="absolute text-3xl">{skill.icon}</span>
                                </div>
                                <span className="text-lg font-bold text-gray-800 mb-2">{skill.title}</span>
                                <span className="text-sm text-gray-600 text-center">{skill.description}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Passion & Vision */}
                <motion.div
                    className="mt-16 max-w-3xl mx-auto text-center"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.7 }}
                    variants={containerVariants}
                >
                    <motion.h3
                        className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2"
                        variants={fadeUp}
                    >
                        <span role="img" aria-label="lightbulb">💡</span> Passion &amp; Vision
                    </motion.h3>
                    <motion.p
                        className="text-lg text-gray-700 leading-relaxed"
                        variants={fadeUp}
                    >
                        I thrive at the intersection of software engineering and infrastructure. I enjoy crafting systems that are clean, efficient, and easy to maintain. Driven by curiosity, performance metrics, and a love for elegant automation, I take pride in building tools that empower others.
                    </motion.p>
                </motion.div>

                {/* What's Next */}
                <motion.div
                    className="mt-16 max-w-3xl mx-auto text-center"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.7 }}
                    variants={containerVariants}
                >
                    <motion.h3
                        className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2"
                        variants={fadeUp}
                    >
                        <span role="img" aria-label="rocket">🚀</span> What’s Next?
                    </motion.h3>
                    <motion.p
                        className="text-lg text-gray-700 leading-relaxed"
                        variants={fadeUp}
                    >
                        I’m actively seeking roles or collaborations where I can contribute to backend architecture, platform engineering, or developer experience (DevEx). My goal is to work alongside passionate teams and keep learning every single day.
                    </motion.p>
                </motion.div>

                {/* Academic Highlight */}
                <motion.div
                    className="mt-16 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-8 shadow-xl"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={academicBoxVariants}
                    animate={{
                        boxShadow: [
                            "0 8px 32px 0 rgba(139,92,246,0.10)",
                            "0 12px 40px 0 rgba(139,92,246,0.18)",
                            "0 8px 32px 0 rgba(139,92,246,0.10)"
                        ]
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut"
                    }}
                >
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Academic Excellence</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            Master&apos;s in Information Systems Engineering
                        </p>
                        <p className="text-blue-600 font-semibold text-xl">
                            École Supérieure d&apos;Informatique (ESI-SBA)
                        </p>
                        <p className="text-gray-600 mt-2">
                            Graduating September 2025
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;