'use client';

import React from "react";
import { motion } from "framer-motion";
import {
    SiNodedotjs, SiPython, SiExpress, SiFastapi, SiSpringboot, SiPostgresql, SiMysql, SiMongodb, SiGraphql,
    SiDocker, SiKubernetes, SiGooglecloud, SiArgo, SiPrometheus,
    SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiTailwindcss,
    SiGit, SiLinux, SiNginx, SiMicrodotblog, SiGithubactions, SiIced
} from "react-icons/si";
import Image from 'next/image';

// Illustrations for each category (replace with your own images if desired)
const categoryImages = {
    Backend: "/images/skills-backend.jpg", // server racks or terminal code
    "DevOps & Cloud": "/images/skills-devops.jpg", // cloud infra or CI/CD
    Frontend: "/images/skills-frontend.jpg", // UI mockup/wireframe
    "Tools & Other": "/images/skills-tools.jpg", // system diagram
};

const skillCategories = [
    {
        title: "Backend",
        color: "from-blue-500 to-blue-700",
        skills: [
            "Node.js",
            "Python",
            "Java",
            "Express.js",
            "FastAPI",
            "Spring Boot",
            "REST APIs",
            "GraphQL",
            "MongoDB",
            "MySQL",
            "PostgreSQL"
        ]
    },
    {
        title: "DevOps & Cloud",
        color: "from-green-500 to-green-700",
        skills: [
            "Docker",
            "Kubernetes",
            "Google Cloud Platform (GKE, Cloud Run)",
            "CI/CD",
            "GitOps",
            "ArgoCD",
            "Monitoring (Prometheus, Grafana)"
        ]
    },
    {
        title: "Frontend",
        color: "from-purple-500 to-pink-500",
        skills: [
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "HTML5",
            "CSS3",
            "Tailwind CSS"
        ]
    },
    {
        title: "Tools & Other",
        color: "from-gray-400 to-gray-600",
        skills: [
            "Git",
            "GitHub Actions",
            "Linux",
            "Nginx",
            "Microservices Architecture"
        ]
    }
];

const featured = [
    "GitOps Implementation",
    "CI/CD Pipeline Optimization",
    "Google Cloud Platform",
    "Microservices Architecture",
    "Performance Engineering"
];

const stats = [
    { label: "Performance Improvement", value: 5.1, suffix: "x", color: "text-blue-600", glow: "from-blue-400 to-blue-600" },
    { label: "Cost Optimization", value: 80, suffix: "%", color: "text-green-600", glow: "from-green-400 to-green-600" },
    { label: "Production Applications", value: 4, suffix: "+", color: "text-gray-800", glow: "from-purple-400 to-pink-500" }
];

// Framer Motion variants
const sectionVariants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.18 }
    }
};
const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.42, 0, 0.58, 1] as [number, number, number, number] } }
};
const pillVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.42, 0, 0.58, 1] as [number, number, number, number] } }
};

// Map skill names to icon components and colors
const skillIconMap: Record<string, { icon: React.ReactNode; color: string; label: string }> = {
    // Backend
    "Node.js": { icon: <SiNodedotjs />, color: "bg-blue-100 text-blue-600", label: "Node.js" },
    "Python": { icon: <SiPython />, color: "bg-blue-100 text-blue-600", label: "Python" },
    "Java": { icon: <SiIced />, color: "bg-blue-100 text-blue-600", label: "Java" }, // No SiJava, use SiIced as placeholder
    "Express.js": { icon: <SiExpress />, color: "bg-blue-100 text-blue-600", label: "Express.js" },
    "FastAPI": { icon: <SiFastapi />, color: "bg-blue-100 text-blue-600", label: "FastAPI" },
    "Spring Boot": { icon: <SiSpringboot />, color: "bg-blue-100 text-blue-600", label: "Spring Boot" },
    "REST APIs": { icon: <SiGraphql />, color: "bg-blue-100 text-blue-600", label: "REST APIs" },
    "GraphQL": { icon: <SiGraphql />, color: "bg-blue-100 text-blue-600", label: "GraphQL" },
    "MongoDB": { icon: <SiMongodb />, color: "bg-blue-100 text-blue-600", label: "MongoDB" },
    "MySQL": { icon: <SiMysql />, color: "bg-blue-100 text-blue-600", label: "MySQL" },
    "PostgreSQL": { icon: <SiPostgresql />, color: "bg-blue-100 text-blue-600", label: "PostgreSQL" },

    // DevOps & Cloud
    "Docker": { icon: <SiDocker />, color: "bg-green-100 text-green-600", label: "Docker" },
    "Kubernetes": { icon: <SiKubernetes />, color: "bg-green-100 text-green-600", label: "Kubernetes" },
    "Google Cloud Platform (GKE, Cloud Run)": { icon: <SiGooglecloud />, color: "bg-green-100 text-green-600", label: "Google Cloud Platform" },
    "CI/CD": { icon: <SiGithubactions />, color: "bg-green-100 text-green-600", label: "CI/CD" }, // No SiCicd, use SiGithubactions
    "GitOps": { icon: <SiGit />, color: "bg-green-100 text-green-600", label: "GitOps" },
    "ArgoCD": { icon: <SiArgo />, color: "bg-green-100 text-green-600", label: "ArgoCD" },
    "Monitoring (Prometheus, Grafana)": { icon: <SiPrometheus />, color: "bg-green-100 text-green-600", label: "Prometheus & Grafana" },

    // Frontend
    "React": { icon: <SiReact />, color: "bg-purple-100 text-purple-600", label: "React" },
    "Next.js": { icon: <SiNextdotjs />, color: "bg-purple-100 text-purple-600", label: "Next.js" },
    "TypeScript": { icon: <SiTypescript />, color: "bg-purple-100 text-purple-600", label: "TypeScript" },
    "JavaScript": { icon: <SiJavascript />, color: "bg-purple-100 text-purple-600", label: "JavaScript" },
    "HTML5": { icon: <SiHtml5 />, color: "bg-purple-100 text-purple-600", label: "HTML5" },
    "CSS3": { icon: <SiCss3 />, color: "bg-purple-100 text-purple-600", label: "CSS3" },
    "Tailwind CSS": { icon: <SiTailwindcss />, color: "bg-purple-100 text-purple-600", label: "Tailwind CSS" },

    // Tools & Other
    "Git": { icon: <SiGit />, color: "bg-gray-100 text-gray-800", label: "Git" },
    "GitHub Actions": { icon: <SiGithubactions />, color: "bg-gray-100 text-gray-800", label: "GitHub Actions" },
    "Linux": { icon: <SiLinux />, color: "bg-gray-100 text-gray-800", label: "Linux" },
    "Nginx": { icon: <SiNginx />, color: "bg-gray-100 text-gray-800", label: "Nginx" },
    "Microservices Architecture": { icon: <SiMicrodotblog />, color: "bg-gray-100 text-gray-800", label: "Microservices" },
};

const Skills = () => {
    // For count-up animation on scroll
    const [inView, setInView] = React.useState(false);
    const ref = React.useRef<HTMLDivElement>(null);
    React.useEffect(() => {
        if (!ref.current) return;
        const observer = new window.IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { threshold: 0.5 }
        );
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="skills" className="relative py-20 bg-gray-50 overflow-hidden">
            {/* Animated Blob/Gradient Background */}
            <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
                <motion.div
                    initial={{ opacity: 0.5, scale: 0.9 }}
                    animate={{ opacity: [0.5, 0.7, 0.5], scale: [0.9, 1.1, 0.9] }}
                    transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
                    className="absolute left-1/2 top-1/2 w-[700px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-blue-300 via-purple-200 to-green-200 opacity-30 blur-3xl rounded-full"
                />
            </div>
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.7 }}
                    variants={sectionVariants}
                >
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                        variants={cardVariants}
                    >
                        Skills &amp; Technologies
                    </motion.h2>
                    <motion.div
                        variants={cardVariants}
                        className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 shadow-lg animate-pulse mb-6"
                    />
                    <motion.p
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                        variants={cardVariants}
                    >
                        A comprehensive toolkit for building scalable backend systems, optimizing DevOps workflows,
                        and creating efficient full-stack solutions.
                    </motion.p>
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={sectionVariants}
                >
                    {skillCategories.map((category) => (
                        <motion.div
                            key={category.title}
                            className="relative rounded-2xl shadow-xl border border-gray-100 bg-white/80 backdrop-blur-md overflow-hidden group flex flex-col min-h-[340px]"
                            variants={cardVariants}
                            whileHover={{
                                scale: 1.035,
                                boxShadow: "0 8px 32px 0 rgba(59,130,246,0.13), 0 0 24px 2px rgba(168,85,247,0.14)",
                            }}
                        >
                            {/* Background Illustration */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={categoryImages[category.title as keyof typeof categoryImages]}
                                    alt={`${category.title} illustration`}
                                    width={400}
                                    height={300}
                                    className="object-cover w-full h-full opacity-20 group-hover:opacity-30 transition duration-500"
                                    loading="lazy"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20`} />
                            </div>
                            {/* Card Content */}
                            <div className="relative z-10 flex flex-col h-full p-8">
                                <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-2">
                                    {category.title}
                                </h3>
                                <div className="flex flex-wrap gap-3 mt-auto">
                                    {category.skills.map((skill) => {
                                        const iconData = skillIconMap[skill];
                                        return (
                                            <motion.span
                                                key={skill}
                                                className={`flex flex-col items-center justify-center px-3 py-2 rounded-full border border-gray-200 bg-white/80 backdrop-blur-md transition-all duration-200 hover:scale-110 hover:shadow-lg cursor-default ${iconData?.color || ""}`}
                                                variants={pillVariants}
                                                whileHover={{
                                                    boxShadow: "0 0 12px 2px rgba(59,130,246,0.18)",
                                                    background: "linear-gradient(90deg,#dbeafe 0%,#f3e8ff 100%)"
                                                }}
                                                aria-label={iconData?.label || skill}
                                                title={iconData?.label || skill}
                                            >
                                                <span className="text-2xl mb-1">{iconData?.icon || "?"}</span>
                                                <span className="text-xs font-medium text-gray-700">{iconData?.label || skill}</span>
                                            </motion.span>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Specialized In */}
                <motion.div
                    className="mt-16"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={sectionVariants}
                >
                    <motion.h3
                        className="text-2xl font-bold mb-6 text-center text-gray-900"
                        variants={cardVariants}
                    >
                        Specialized In
                    </motion.h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {featured.map((specialty) => (
                            <motion.span
                                key={specialty}
                                className={
                                    "px-6 py-3 rounded-full text-lg font-medium shadow-lg backdrop-blur-md transition-all duration-300 " +
                                    [
                                        "bg-gradient-to-r from-blue-500 to-blue-400 text-white",
                                        "bg-gradient-to-r from-green-500 to-green-400 text-white",
                                        "bg-gradient-to-r from-purple-500 to-pink-400 text-white",
                                        "bg-gradient-to-r from-yellow-400 to-orange-400 text-white",
                                        "bg-gradient-to-r from-pink-500 to-red-400 text-white"
                                    ][0 % 5]
                                }
                                variants={pillVariants}
                                whileHover={{
                                    scale: 1.08,
                                    boxShadow: "0 0 24px 4px rgba(59,130,246,0.18)",
                                    background: "linear-gradient(90deg,#60a5fa 0%,#a78bfa 100%)"
                                }}
                            >
                                {specialty}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                {/* Stats */}
                <motion.div
                    ref={ref}
                    className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center" nce:true, amount: 0.5 }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                variants={sectionVariants}
                >
                {stats.map((stat, idx) => {
                    const value = inView ? stat.value : 0; motion.div
                    const displayValue = stat.suffix === "%" ? Math.round(value) : value; abel
                }
                        return ({`rounded-xl p-8 shadow-lg border border-gray-100 bg-white/80 backdrop-blur-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group`}
                <motion.div variants={cardVariants}
                    key={stat.label} whileHover={{
                        className={`rounded-xl p-8 shadow-lg border border-gray-100 bg-white/80 backdrop-blur-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group`
                    }       boxShadow: `0 0 0 4px rgba(59,130,246,0.10), 0 8px 32px 0 rgba(59,130,246,0.13), 0 0 24px 2px rgba(168,85,247,0.14)`,
                variants={cardVariants}                                    borderColor: "rgba(59,130,246,0.25)"
                whileHover={{}}
                                    boxShadow: `0 0 0 4px rgba(59,130,246,0.10), 0 8px 32px 0 rgba(59,130,246,0.13), 0 0 24px 2px rgba(168,85,247,0.14)`, >
                borderColor: "rgba(59,130,246,0.25)"   <motion.div
                                }}g-gradient-to-r ${stat.glow} bg-clip-text text-transparent`}
                            >animate={{ opacity: inView ? 1 : 0 }}
                <motion.divansition={{ duration: 0.7 }}
                className={`text-4xl font-bold mb-2 ${stat.color} bg-gradient-to-r ${stat.glow} bg-clip-text text-transparent`}
                animate={{ opacity: inView ? 1 : 0 }}ix === "+" ? (
                transition={{ duration: 0.7 }}                       <>
                                >untUp end={value} />{stat.suffix}
                    {stat.suffix === "+" ? (
                        <>
                            <CountUp end={value} />{stat.suffix}        <>
                            </>     <CountUp end={displayValue} decimals={stat.suffix === "x" ? 1 : 0} />{stat.suffix}
                            ) : (
                            <>
                                <CountUp end={displayValue} decimals={stat.suffix === "x" ? 1 : 0} />{stat.suffix}
                            </>e="text-gray-600">{stat.label}</div>
                                    )}
                </motion.div>
                <div className="text-gray-600">{stat.label}</div>
            </motion.div>
            );
                    })}
        </motion.div>
            </div >
        </section >
    );
}; end: number; decimals ?: number }) {

    // CountUp component for animated numbers
    function CountUp({ end, decimals = 0 }: { end: number; decimals?: number }) {
        const [val, setVal] = React.useState(0);
        React.useEffect(() => {
            let raf: number;;
            let start = 0; {
                const duration = 1.2; / 1000;
                const startTime = performance.now();
                function animate(now: number) { start) * progress).toFixed(decimals)));
        const elapsed = (now - startTime) / 1000; 1) raf = requestAnimationFrame(animate);
        const progress = Math.min(elapsed / duration, 1); (end);
        setVal(Number((start + (end - start) * progress).toFixed(decimals)));
        if (progress < 1) raf = requestAnimationFrame(animate); estAnimationFrame(animate);
            else setVal(end);=> cancelAnimationFrame(raf);
    } [end, decimals]);
    raf = requestAnimationFrame(animate); return <span>{val.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}</span>;
    return () => cancelAnimationFrame(raf);
}
    }, [end, decimals]);
return <span>{val.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}</span>;}export default Skills;