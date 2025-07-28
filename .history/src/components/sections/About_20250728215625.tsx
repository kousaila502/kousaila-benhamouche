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

const skillAreas = [
    { icon: "💻", label: "Frontend Development" },
    { icon: "🖥️", label: "Backend Development" },
    { icon: "⚙️", label: "DevOps" },
    { icon: "☁️", label: "Cloud Platforms" },
    { icon: "📦", label: "Database Design" },
    { icon: "🔐", label: "Security & Auth" },
    { icon: "📈", label: "System Optimization" },
    { icon: "🚀", label: "CI/CD Automation" },
];

const skillCardVariants = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] as [number, number, number, number] } },
};

const About = () => {
    const achievements = [
        {
            icon: "🚀",
            title: "5.1x Performance Improvement",
            description: "Deployment speed optimization (175s vs 900s)"
        },
        {
            icon: "💰",
            title: "80% Cost Optimization",
            description: "Infrastructure costs reduced ($383→$78/month)"
        },
        {
            icon: "📊",
            title: "60% Codebase Reduction",
            description: "Maintained functionality with cleaner code"
        },
        {
            icon: "🎓",
            title: "Master&apos;s Thesis Research",
            description: "Quantifiable results with real-world impact"
        },
        {
            icon: "🏗️",
            title: "4+ Production Apps",
            description: "Built and deployed production-ready applications"
        }
    ];

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

                    {/* Right: Skill Areas */}
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
                            Skill Areas
                        </motion.h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {skillAreas.map((skill, idx) => (
                                <motion.div
                                    key={skill.label}
                                    className="flex flex-col items-center justify-center p-5 bg-gray-50 rounded-xl shadow-md border border-gray-100 cursor-pointer relative group transition-all"
                                    variants={skillCardVariants}
                                    whileHover={{
                                        scale: 1.07,
                                        boxShadow: "0 8px 32px 0 rgba(59,130,246,0.12), 0 0 24px 2px rgba(168,85,247,0.13)",
                                    }}
                                >
                                    {/* Glowing background on hover */}
                                    <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition duration-300"
                                        style={{
                                            background: "radial-gradient(circle at 60% 40%, #a5b4fc33 0%, #f472b633 100%)",
                                            filter: "blur(10px)",
                                        }}
                                    />
                                    <span className="text-3xl z-10">{skill.icon}</span>
                                    <span className="mt-2 text-base font-medium text-gray-800 z-10 text-center">{skill.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

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