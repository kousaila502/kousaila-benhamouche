
import React from "react";
import { motion } from "framer-motion";

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

// Count-up animation hook
function useCountUp(target: number, duration = 1.2) {
    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
        let start = 0;
        let raf: number;
        const startTime = performance.now();
        function animate(now: number) {
            const elapsed = (now - startTime) / 1000;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Number((start + (target - start) * progress).toFixed(2)));
            if (progress < 1) raf = requestAnimationFrame(animate);
            else setCount(target);
        }
        raf = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(raf);
    }, [target, duration]);
    return count;
}

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
                    {skillCategories.map((category, idx) => (
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
                                <img
                                    src={categoryImages[category.title as keyof typeof categoryImages]}
                                    alt={`${category.title} illustration`}
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
                                    {category.skills.map((skill, skillIdx) => (
                                        <motion.span
                                            key={skill}
                                            className="px-4 py-2 rounded-full text-sm font-medium border border-gray-200 bg-white/80 backdrop-blur-md text-gray-800 transition-all duration-200 hover:scale-110 hover:shadow-lg hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 cursor-default"
                                            variants={pillVariants}
                                            whileHover={{
                                                boxShadow: "0 0 12px 2px rgba(59,130,246,0.18)",
                                                background: "linear-gradient(90deg,#dbeafe 0%,#f3e8ff 100%)"
                                            }}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
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
                        {featured.map((specialty, idx) => (
                            <motion.span
                                key={specialty}
                                className="px-6 py-3 rounded-full text-lg font-medium bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 text-white shadow-lg backdrop-blur-md animate-pulse"
                                variants={pillVariants}
                                whileHover={{
                                    scale: 1.08,
                                    boxShadow: "0 0 24px 4px rgba(139,92,246,0.18)",
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
                    className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={sectionVariants}
                >
                    {stats.map((stat, idx) => {
                        const value = inView ? stat.value : 0;
                        const displayValue = stat.suffix === "%" ? Math.round(value) : value;
                        return (
                            <motion.div
                                key={stat.label}
                                className={`rounded-xl p-8 shadow-lg border border-gray-100 bg-white/80 backdrop-blur-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group`}
                                variants={cardVariants}
                                whileHover={{
                                    boxShadow: `0 0 0 4px rgba(59,130,246,0.10), 0 8px 32px 0 rgba(59,130,246,0.13), 0 0 24px 2px rgba(168,85,247,0.14)`,
                                    borderColor: "rgba(59,130,246,0.25)"
                                }}
                            >
                                <motion.div
                                    className={`text-4xl font-bold mb-2 ${stat.color} bg-gradient-to-r ${stat.glow} bg-clip-text text-transparent`}
                                    animate={{ opacity: inView ? 1 : 0 }}
                                    transition={{ duration: 0.7 }}
                                >
                                    {stat.suffix === "+" ? (
                                        <>
                                            <CountUp end={value} />{stat.suffix}
                                        </>
                                    ) : (
                                        <>
                                            <CountUp end={displayValue} decimals={stat.suffix === "x" ? 1 : 0} />{stat.suffix}
                                        </>
                                    )}
                                </motion.div>
                                <div className="text-gray-600">{stat.label}</div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

// CountUp component for animated numbers
function CountUp({ end, decimals = 0 }: { end: number; decimals?: number }) {
    const [val, setVal] = React.useState(0);
    React.useEffect(() => {
        let raf: number;
        let start = 0;
        const duration = 1.2;
        const startTime = performance.now();
        function animate(now: number) {
            const elapsed = (now - startTime) / 1000;
            const progress = Math.min(elapsed / duration, 1);
            setVal(Number((start + (end - start) * progress).toFixed(decimals)));
            if (progress < 1) raf = requestAnimationFrame(animate);
            else setVal(end);
        }
        raf = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(raf);
    }, [end, decimals]);
    return <span>{val.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}</span>;
}

export default Skills;