'use client';

import Link from 'next/link';
import { motion } from "framer-motion";
import Image from 'next/image';
import {
    SiDocker, SiKubernetes, SiPython, SiNodedotjs, SiExpress, SiFastapi, SiSpringboot, SiReact, SiMongodb, SiMysql, SiPostgresql, SiGraphql, SiGithub, SiSwagger, SiIcloud, SiJet, SiTypescript, SiTailwindcss, SiVercel
} from "react-icons/si";
import { ExternalLink, PlayCircle, BookOpen } from "lucide-react";

// Map technology names to icons
const techIconMap: Record<string, { icon: React.ReactNode; label: string }> = {
    "Python": { icon: <SiPython />, label: "Python" },
    "Node.js": { icon: <SiNodedotjs />, label: "Node.js" },
    "Java": { icon: <span className="font-bold text-lg">J</span>, label: "Java" },
    "Express.js": { icon: <SiExpress />, label: "Express.js" },
    "FastAPI": { icon: <SiFastapi />, label: "FastAPI" },
    "Spring Boot": { icon: <SiSpringboot />, label: "Spring Boot" },
    "REST APIs": { icon: <span className="font-bold text-lg">API</span>, label: "REST APIs" },
    "GraphQL": { icon: <SiGraphql />, label: "GraphQL" },
    "MongoDB": { icon: <SiMongodb />, label: "MongoDB" },
    "MySQL": { icon: <SiMysql />, label: "MySQL" },
    "PostgreSQL": { icon: <SiPostgresql />, label: "PostgreSQL" },
    "Docker": { icon: <SiDocker />, label: "Docker" },
    "Kubernetes": { icon: <SiKubernetes />, label: "Kubernetes" },
    "CI/CD": { icon: <SiIcloud />, label: "CI/CD" },
    "React": { icon: <SiReact />, label: "React" },
    "TypeScript": { icon: <SiTypescript />, label: "TypeScript" },
    "JWT": { icon: <SiJet />, label: "JWT" },
    "JWT Auth": { icon: <SiJet />, label: "JWT Auth" },
    "API Documentation": { icon: <SiSwagger />, label: "API Docs" },
    "Cloud Platforms": { icon: <SiIcloud />, label: "Cloud" },
    "Monitoring Tools": { icon: <SiIcloud />, label: "Monitoring" },
    "Tailwind CSS": { icon: <SiTailwindcss />, label: "Tailwind CSS" },
    "Vite": { icon: <SiVercel />, label: "Vite" },
};

const statusIconMap: Record<string, React.ReactNode> = {
    github: <SiGithub />,
    demo: <PlayCircle size={16} />,
    docs: <BookOpen size={16} />,
    live: <ExternalLink size={16} />,
};

const statusColors: Record<string, string> = {
    github: "bg-gray-900 text-white hover:bg-gray-800",
    demo: "bg-blue-600 text-white hover:bg-blue-700",
    docs: "bg-green-600 text-white hover:bg-green-700",
    live: "bg-purple-600 text-white hover:bg-purple-700",
};

const Projects = () => {
    const projects = [
        {
            id: 'e-social-assistance',
            title: "E-Social-Assistance Platform",
            subtitle: "Enterprise-Grade Social Welfare Management System",
            description: "Comprehensive digital platform for managing social welfare programs, assistance requests, budget allocation, and payment processing. Built with modern web technologies to streamline social services administration.",
            focus: "Full-Stack Development, Enterprise Architecture, Social Impact Technology",
            technologies: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Tailwind CSS", "Vite"],
            status: {
                live: { label: "Live Demo", url: "https://enterprise-social-platform.vercel.app" },
                github: { label: "GitHub", url: "https://github.com/kousaila502/enterprise-social-platform" },
                docs: { label: "API Docs", url: "https://enterprise-social-platform.onrender.com/api-docs" }
            },
            featured: true,
            badge: "Production",
            details: {
                challenge: "Creating a comprehensive digital solution for social welfare organizations to manage assistance programs, track requests, allocate budgets, and process payments efficiently while ensuring security and compliance.",
                solution: "Developed a full-stack enterprise platform with role-based access control, automated workflows, real-time analytics, and secure payment processing. Implemented cross-origin authentication and production-ready deployment.",
                architecture: "React TypeScript frontend deployed on Vercel, Node.js/Express backend on Render, MongoDB Atlas database, JWT authentication with HTTP-only cookies, and comprehensive API documentation with Swagger.",
                achievements: [
                    "Complete role-based access control (Admin, Case Worker, Finance Manager, Applicant)",
                    "Real-time request management workflow with 8 status transitions",
                    "Secure cross-origin authentication with JWT and HTTP-only cookies",
                    "Comprehensive budget pool management with allocation tracking",
                    "Production deployment with Vercel frontend and Render backend",
                    "Full API documentation with 25+ endpoints and Swagger UI",
                    "Responsive design with Tailwind CSS and modern UI/UX",
                    "Algerian localization with Wilaya integration and DZD currency"
                ]
            }
        },
        {
            id: 'ecommerce-microservices',
            title: "E-commerce Microservices Platform",
            subtitle: "Scalable Backend Architecture with DevOps Pipeline",
            description: "Microservices-based e-commerce platform demonstrating modern backend architecture, containerization, and automated deployment workflows.",
            focus: "Backend Architecture, Microservices, DevOps, Cloud Deployment",
            technologies: ["Python", "Node.js", "Java", "Docker", "Kubernetes", "CI/CD"],
            status: {
                demo: { label: "Live Demo", url: "https://ecommerce-app-omega-two-64.vercel.app" },
                github: { label: "GitHub", url: "https://github.com/kousaila502/ecommerce-microservices-platform" },
                docs: { label: "Documentation", url: "#" }
            },
            badge: "DevOps",
            details: {
                challenge: "Building scalable microservices architecture with automated deployment pipelines for e-commerce platform.",
                solution: "Implemented containerized microservices with Kubernetes orchestration and GitOps deployment methodology.",
                architecture: "6 microservices using Python, Node.js, and Java with Docker containers, deployed on Google Cloud Platform.",
                achievements: [
                    "5.1x faster deployment times (175s vs 900s)",
                    "Complete CI/CD automation with ArgoCD",
                    "Multi-language microservices architecture",
                    "Production-ready on Google Cloud Platform"
                ]
            }
        },
        {
            id: 'tourism-api',
            title: "Tourism REST API",
            subtitle: "Production-Ready Backend Service",
            description: "Comprehensive REST API for Algerian tourism with advanced backend features including authentication, file handling, and role management.",
            focus: "REST API Development, Authentication, Database Design",
            technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "API Documentation"],
            status: {
                demo: { label: "Swagger Docs", url: "#" },
                github: { label: "GitHub", url: "#" },
                docs: { label: "API Demo", url: "#" }
            },
            badge: "API",
            details: {
                challenge: "Creating comprehensive REST API for tourism platform with secure authentication and role management.",
                solution: "Built production-ready API with JWT authentication, file uploads, pagination, and role-based access control.",
                architecture: "Node.js backend with Express.js framework, MongoDB database, and comprehensive API documentation.",
                achievements: [
                    "60% codebase reduction with unified architecture",
                    "Complete authentication and authorization system",
                    "File upload and processing capabilities",
                    "Production-ready REST API with documentation"
                ]
            }
        },
        {
            id: 'enterprise-platform',
            title: "Enterprise Management Platform",
            subtitle: "Fullstack Web Application",
            description: "Complete fullstack solution for enterprise management with modern frontend, robust backend API, and database integration.",
            focus: "Fullstack Development, Frontend Integration, Database Management",
            technologies: ["Node.js", "React", "MySQL", "Express.js"],
            status: {
                demo: { label: "Coming Soon", url: "#" },
                github: { label: "GitHub", url: "#" },
                docs: { label: "Screenshots", url: "#" }
            },
            badge: "Fullstack",
            details: {
                challenge: "Developing complete fullstack enterprise management solution with modern frontend and robust backend.",
                solution: "Created end-to-end application with React frontend, Node.js backend, and MySQL database integration.",
                architecture: "Fullstack architecture with React frontend, Express.js API, MySQL database, and JWT authentication.",
                achievements: [
                    "Complete fullstack development solution",
                    "Modern React frontend with responsive design",
                    "Robust backend API with database integration",
                    "Enterprise-scale architecture and security"
                ]
            }
        },
        {
            id: 'devops-lab',
            title: "DevOps Infrastructure Lab",
            subtitle: "Cloud Infrastructure & Automation",
            description: "DevOps project demonstrating infrastructure automation, monitoring setup, and deployment optimization.",
            focus: "DevOps, Infrastructure, Monitoring, Cloud Platforms",
            technologies: ["Kubernetes", "Docker", "Cloud Platforms", "Monitoring Tools"],
            status: {
                demo: { label: "Documentation", url: "#" },
                github: { label: "GitHub", url: "#" },
                docs: { label: "Infrastructure Diagrams", url: "#" }
            },
            badge: "Research",
            details: {
                challenge: "Optimizing deployment infrastructure and implementing comprehensive monitoring for DevOps workflows.",
                solution: "Built automated infrastructure with Kubernetes, monitoring setup, and cost optimization strategies.",
                architecture: "Cloud-native infrastructure with Kubernetes orchestration, Prometheus monitoring, and automated deployments.",
                achievements: [
                    "80% infrastructure cost optimization ($383→$78/month)",
                    "Comprehensive monitoring with Prometheus and Grafana",
                    "Infrastructure-as-code implementation",
                    "Master's thesis research with quantifiable results"
                ]
            }
        }
    ];

    // Animation variants
    const cardVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.97 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.42, 0, 0.58, 1] as [number, number, number, number] } }
    };

    return (
        <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
            {/* Soft background blob */}
            <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
                <motion.div
                    initial={{ opacity: 0.4, scale: 0.9 }}
                    animate={{ opacity: [0.4, 0.7, 0.4], scale: [0.9, 1.1, 0.9] }}
                    transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
                    className="absolute left-1/2 top-1/2 w-[700px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-blue-200 via-purple-100 to-pink-100 opacity-30 blur-3xl rounded-full"
                />
            </div>
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.7 }}
                    variants={cardVariants}
                >
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
                        variants={cardVariants}
                    >
                        Featured <span className="text-blue-600">Projects</span> <span className="text-purple-500 font-extrabold tracking-wide">DevOps</span> <span className="text-green-600 font-extrabold tracking-wide">Fullstack</span>
                    </motion.h2>
                    <motion.div
                        variants={cardVariants}
                        className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 shadow-lg animate-pulse mb-6"
                    />
                    <motion.p
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                        variants={cardVariants}
                    >
                        Showcasing <span className="text-blue-600 font-semibold">fullstack</span> development, <span className="text-purple-500 font-semibold">backend architecture</span>, and <span className="text-green-600 font-semibold">DevOps</span> expertise through real-world projects.
                    </motion.p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projects.map((project, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={project.id}
                                className={`relative flex flex-col md:flex-row ${isEven ? "" : "md:flex-row-reverse"} bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-300 ${project.featured ? 'ring-2 ring-purple-200 bg-gradient-to-br from-white to-purple-50' : ''}`}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.4 }}
                                variants={cardVariants}
                                whileHover={{
                                    scale: 1.025,
                                    boxShadow: project.featured
                                        ? "0 8px 32px 0 rgba(168,85,247,0.18), 0 0 24px 2px rgba(59,130,246,0.14)"
                                        : "0 8px 32px 0 rgba(59,130,246,0.13), 0 0 24px 2px rgba(168,85,247,0.14)",
                                }}
                            >
                                {/* Featured Badge */}
                                {project.featured && (
                                    <div className="absolute top-2 right-2 z-10">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-yellow-400 to-orange-400 text-yellow-900 shadow-lg">
                                            ⭐ Featured
                                        </span>
                                    </div>
                                )}

                                {/* Project Image */}
                                <motion.div
                                    className="md:w-1/2 w-full h-56 md:h-auto flex-shrink-0 relative overflow-hidden"
                                    initial={{ opacity: 0, scale: 0.97 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.7, delay: 0.1 }}
                                >
                                    <Image
                                        src={`/projects/${project.id}.png`}
                                        alt={project.title}
                                        width={600}
                                        height={400}
                                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    {/* Project Badge */}
                                    <span className={`absolute top-4 left-4 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md backdrop-blur-md ${project.featured
                                            ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                                            : project.badge === 'DevOps'
                                                ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                                                : project.badge === 'API'
                                                    ? 'bg-gradient-to-r from-green-500 to-blue-500'
                                                    : project.badge === 'Fullstack'
                                                        ? 'bg-gradient-to-r from-orange-500 to-red-500'
                                                        : 'bg-gradient-to-r from-gray-500 to-gray-600'
                                        }`}>
                                        {project.badge}
                                    </span>
                                </motion.div>

                                {/* Project Content */}
                                <div className="flex-1 flex flex-col justify-between p-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-800 mb-1">{project.title}</h3>
                                        <p className={`font-semibold mb-2 tracking-wider ${project.featured ? 'text-purple-600' : 'text-blue-600'}`}>
                                            {project.subtitle}
                                        </p>
                                        <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                                        <p className="text-sm font-medium text-green-600 mb-4">{project.focus}</p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.technologies.map((tech, techIndex) => {
                                                const iconData = techIconMap[tech];
                                                return (
                                                    <motion.span
                                                        key={techIndex}
                                                        className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer ${project.featured
                                                                ? 'bg-purple-100 text-purple-700 hover:bg-purple-200 hover:text-purple-800'
                                                                : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700'
                                                            }`}
                                                        whileHover={{ scale: 1.13, boxShadow: "0 0 12px 2px rgba(59,130,246,0.18)" }}
                                                        title={iconData?.label || tech}
                                                        aria-label={iconData?.label || tech}
                                                    >
                                                        {iconData?.icon && <span className="text-lg">{iconData.icon}</span>}
                                                        <span className="hidden sm:inline">{iconData?.label || tech}</span>
                                                    </motion.span>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-wrap gap-3 mt-2">
                                        <Link
                                            href={`/projects/${project.id}`}
                                            className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium inline-block shadow-md hover:shadow-lg ${project.featured
                                                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                                                    : 'bg-blue-600 text-white hover:bg-blue-700'
                                                }`}
                                        >
                                            Read More
                                        </Link>

                                        {/* Status badges with real links */}
                                        {Object.entries(project.status).map(([key, value]) => {
                                            const statusData = value as { label: string; url: string };
                                            const isExternal = statusData.url.startsWith('http');

                                            if (isExternal && statusData.url !== '#') {
                                                return (
                                                    <a
                                                        key={key}
                                                        href={statusData.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm shadow-md transition-all duration-200 cursor-pointer ${statusColors[key] || "bg-gray-200 text-gray-800"}`}
                                                    >
                                                        {statusIconMap[key]}
                                                        {statusData.label}
                                                        {key === 'live' && <ExternalLink size={12} />}
                                                    </a>
                                                );
                                            } else {
                                                return (
                                                    <span
                                                        key={key}
                                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm shadow-md transition-all duration-200 ${statusData.url === '#'
                                                                ? 'bg-gray-200 text-gray-500 cursor-not-allowed opacity-75'
                                                                : statusColors[key] || "bg-gray-200 text-gray-800 cursor-pointer"
                                                            }`}
                                                    >
                                                        {statusIconMap[key]}
                                                        {statusData.label}
                                                    </span>
                                                );
                                            }
                                        })}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Call to Action for E-Social-Assistance */}
                <motion.div
                    className="mt-16 text-center"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.7 }}
                    variants={cardVariants}
                >
                    <motion.div
                        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-8 shadow-xl"
                        variants={cardVariants}
                    >
                        <h3 className="text-2xl font-bold mb-4">🚀 Try the Live E-Social-Assistance Platform</h3>
                        <p className="text-lg mb-6 opacity-90">
                            Experience a full-featured social welfare management system with real-time data,
                            secure authentication, and enterprise-grade features.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="https://enterprise-social-platform.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
                            >
                                <PlayCircle size={20} />
                                Live Demo
                            </a>
                            <a
                                href="https://enterprise-social-platform.onrender.com/api-docs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200"
                            >
                                <BookOpen size={20} />
                                API Documentation
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;