import Link from 'next/link';
import { motion } from "framer-motion";
import {
    SiDocker, SiKubernetes, SiPython, SiNodeDotjs, SiJava, SiExpress, SiFastapi, SiSpringboot, SiReact, SiMongodb, SiMysql, SiPostgresql, SiGraphql, SiGithub, SiSwagger, SiCloud, SiJwt, SiApi
} from "react-icons/si";

// Map technology names to icons
const techIconMap: Record<string, { icon: React.ReactNode; label: string }> = {
    "Python": { icon: <SiPython />, label: "Python" },
    "Node.js": { icon: <SiNodeDotjs />, label: "Node.js" },
    "Java": { icon: <SiJava />, label: "Java" },
    "Express.js": { icon: <SiExpress />, label: "Express.js" },
    "FastAPI": { icon: <SiFastapi />, label: "FastAPI" },
    "Spring Boot": { icon: <SiSpringboot />, label: "Spring Boot" },
    "REST APIs": { icon: <SiApi />, label: "REST APIs" },
    "GraphQL": { icon: <SiGraphql />, label: "GraphQL" },
    "MongoDB": { icon: <SiMongodb />, label: "MongoDB" },
    "MySQL": { icon: <SiMysql />, label: "MySQL" },
    "PostgreSQL": { icon: <SiPostgresql />, label: "PostgreSQL" },
    "Docker": { icon: <SiDocker />, label: "Docker" },
    "Kubernetes": { icon: <SiKubernetes />, label: "Kubernetes" },
    "CI/CD": { icon: <SiCloud />, label: "CI/CD" },
    "React": { icon: <SiReact />, label: "React" },
    "JWT": { icon: <SiJwt />, label: "JWT" },
    "API Documentation": { icon: <SiSwagger />, label: "API Docs" },
    "Cloud Platforms": { icon: <SiCloud />, label: "Cloud" },
    "Monitoring Tools": { icon: <SiCloud />, label: "Monitoring" },
};

const statusIconMap: Record<string, React.ReactNode> = {
    github: <SiGithub />,
    demo: <SiCloud />,
    docs: <SiSwagger />,
};

const statusColors: Record<string, string> = {
    github: "bg-gray-900 text-white hover:bg-gray-800",
    demo: "bg-blue-600 text-white hover:bg-blue-700",
    docs: "bg-green-600 text-white hover:bg-green-700",
};

const Projects = () => {
    const projects = [
        {
            id: 'ecommerce-microservices',
            title: "E-commerce Microservices Platform",
            subtitle: "Scalable Backend Architecture with DevOps Pipeline",
            description: "Microservices-based e-commerce platform demonstrating modern backend architecture, containerization, and automated deployment workflows.",
            focus: "Backend Architecture, Microservices, DevOps, Cloud Deployment",
            technologies: ["Python", "Node.js", "Java", "Docker", "Kubernetes", "CI/CD"],
            status: { demo: "Coming Soon", github: "GitHub", docs: "Documentation" },
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
            status: { demo: "Swagger Docs", github: "GitHub", docs: "API Demo" },
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
            status: { demo: "Coming Soon", github: "GitHub", docs: "Screenshots" },
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
            status: { demo: "Documentation", github: "GitHub", docs: "Infrastructure Diagrams" },
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
                                className={`relative flex flex-col md:flex-row ${isEven ? "" : "md:flex-row-reverse"} bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-300`}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.4 }}
                                variants={cardVariants}
                                whileHover={{
                                    scale: 1.025,
                                    boxShadow: "0 8px 32px 0 rgba(59,130,246,0.13), 0 0 24px 2px rgba(168,85,247,0.14)",
                                }}
                            >
                                {/* Project Image */}
                                <motion.div
                                    className="md:w-1/2 w-full h-56 md:h-auto flex-shrink-0 relative overflow-hidden"
                                    initial={{ opacity: 0, scale: 0.97 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.7, delay: 0.1 }}
                                >
                                    <img
                                        src={`/projects/${project.id}.png`}
                                        alt={project.title}
                                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    {/* Optional tag */}
                                    <span className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md backdrop-blur-md">
                                        {index === 0 ? "Production" : index === 1 ? "API" : index === 2 ? "Fullstack" : "Research"}
                                    </span>
                                </motion.div>
                                {/* Project Content */}
                                <div className="flex-1 flex flex-col justify-between p-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-800 mb-1">{project.title}</h3>
                                        <p className="text-blue-600 font-semibold mb-2 tracking-wider">{project.subtitle}</p>
                                        <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                                        <p className="text-sm font-medium text-green-600 mb-4">{project.focus}</p>
                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.technologies.map((tech, techIndex) => {
                                                const iconData = techIconMap[tech];
                                                return (
                                                    <motion.span
                                                        key={techIndex}
                                                        className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200 cursor-pointer"
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
                                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium inline-block shadow-md hover:shadow-lg"
                                        >
                                            Read More
                                        </Link>
                                        {/* Status badges */}
                                        {Object.entries(project.status).map(([key, value]) => (
                                            <span
                                                key={key}
                                                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm shadow-md transition-all duration-200 cursor-pointer ${statusColors[key] || "bg-gray-200 text-gray-800"}`}
                                            >
                                                {statusIconMap[key]}
                                                {value}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;