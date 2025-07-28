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
        icon: "🧠",
        title: "Frontend",
        description: "Modern UI/UX, React, Tailwind, and delightful user experiences."
    },
    {
        icon: "🔧",
        title: "Backend",
        description: "Robust APIs, scalable systems, and clean architecture."
    },
    {
        icon: "⚙️",
        title: "DevOps",
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
                    {/* Glowing Gradient Line */}
                    <motion.div
                        variants={fadeUp}
                        className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 shadow-lg animate-pulse"
                    />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left: Profile + Story */}
                    <motion.div
                        className="space-y-6 flex flex-col items-center lg:items-start"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={containerVariants}
                    >
                        {/* Profile Picture (optional) */}
                        <motion.div
                            className="mb-6 lg:mb-0"
                            variants={fadeUp}
                        >
                            <img
                                src="/profile.jpg"
                                alt="Profile"
                                className="w-32 h-32 rounded-full object-cover shadow-xl border-4 border-white mx-auto lg:mx-0"
                                style={{ background: "linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)" }}
                                loading="lazy"
                            />
                        </motion.div>
                        {/* Paragraphs */}
                        <motion.div className="space-y-6 w-full" variants={containerVariants}>
                            <motion.p className="text-lg text-gray-700 leading-relaxed" variants={fadeUp}>
                                I&apos;m a 5th-year Computer Science student at <span className="font-semibold text-blue-600">École Supérieure d&apos;Informatique (ESI-SBA)</span>,
                                specializing in Information Systems Engineering with a focus on backend development and DevOps practices.
                            </motion.p>
                            <motion.p className="text-lg text-gray-700 leading-relaxed" variants={fadeUp}>
                                Currently completing my master&apos;s thesis on <span className="font-semibold">&quot;Leveraging GitOps for Scalable and Maintainable CI/CD Pipelines,&quot;</span>
                                where I achieved quantifiable <span className="font-bold text-green-600">5.1x performance improvements</span> through
                                real-world research on Google Cloud Platform.
                            </motion.p>
                            <motion.p className="text-lg text-gray-700 leading-relaxed" variants={fadeUp}>
                                My journey spans from building production-ready REST APIs and enterprise platforms to optimizing
                                infrastructure costs by <span className="font-bold text-green-600">80%</span> and implementing automated deployment pipelines.
                                I&apos;m passionate about creating efficient, scalable systems and solving complex technical challenges.
                            </motion.p>
                            <motion.p className="text-lg text-gray-700 leading-relaxed" variants={fadeUp}>
                                <span className="font-semibold text-blue-600">Graduating in September 2025</span>, I&apos;m eager to apply my research-backed expertise in backend development
                                and DevOps practices to contribute to innovative projects and teams.
                            </motion.p>
                        </motion.div>
                    </motion.div>

                    {/* Skills Overview */}
                    <motion.div
                        className="w-full"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={containerVariants}
                    >
                        <motion.h3
                            className="text-2xl font-bold text-gray-900 mb-6"
                            variants={fadeUp}
                        >
                            Skills Overview
                        </motion.h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {skills.map((skill, idx) => (
                                <motion.div
                                    key={skill.title}
                                    className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl shadow-md border border-gray-100 cursor-pointer relative group transition-all"
                                    variants={cardVariants}
                                    whileHover={{
                                        scale: 1.07,
                                        boxShadow: "0 8px 32px 0 rgba(59,130,246,0.12), 0 0 24px 2px rgba(168,85,247,0.13)",
                                    }}
                                >
                                    <span className="text-4xl mb-2">{skill.icon}</span>
                                    <span className="text-lg font-semibold text-gray-800 mb-1">{skill.title}</span>
                                    <span className="text-sm text-gray-600 text-center">{skill.description}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

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