import Link from 'next/link';

const projectsData = [
    {
        id: 'e-social-assistance',
        title: "E-Social-Assistance Platform",
        subtitle: "Enterprise-Grade Social Welfare Management System",
        description: "Comprehensive digital platform for managing social welfare programs, assistance requests, budget allocation, and payment processing. Built with modern web technologies to streamline social services administration.",
        focus: "Full-Stack Development, Enterprise Architecture, Social Impact Technology",
        technologies: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Tailwind CSS", "Vite"],
        liveUrl: "https://enterprise-social-platform.vercel.app",
        githubUrl: "https://github.com/kousaila502/enterprise-social-platform",
        apiDocsUrl: "https://enterprise-social-platform.onrender.com/api-docs",
        featured: true, // Mark as featured project
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
        title: "TechMart Multi-Cloud GitOps Platform",
        subtitle: "World's First Systematic Multi-Cloud GitOps Orchestration for Enterprise E-commerce",
        description: "Production-ready multi-cloud e-commerce platform with GitOps orchestration, cost optimization, enterprise security, and real user validation. Deployed across 5 cloud providers with full documentation and thesis-ready architecture.",
        focus: "Multi-Cloud GitOps, Enterprise Security, Cost Optimization, Production Monitoring",
        technologies: ["React", "TypeScript", "Python", "Node.js", "Java", "Docker", "Kubernetes", "CI/CD", "MongoDB", "PostgreSQL", "Redis", "Elasticsearch", "Grafana"],
        liveUrl: "https://ecommerce-app-omega-two-64.vercel.app",
        githubUrl: "https://github.com/kousaila502/ecommerce-microservices-platform",
        apiDocsUrl: "https://34.95.5.30.nip.io", // API Gateway base URL
        details: {
            challenge: "Build the world's first systematic multi-cloud GitOps orchestration system for an enterprise-grade e-commerce platform, integrating 5 cloud providers, full automation, and production security.",
            solution: "Implemented a multi-cloud architecture with GitOps automation using ArgoCD, cost optimization, unified JWT authentication, and full SSL/TLS security. Achieved 100% uptime, zero manual interventions, and 60%+ cost reduction.",
            architecture: `
Frontend Layer (Vercel - HTTPS)
    ↓
API Gateway Layer (Google Kubernetes Engine - HTTPS with Let's Encrypt)
    ↓
Microservices Layer (User & Order on GKE | Product & Cart on Heroku | Search on Render)
    ↓
Database Layer (Dedicated Neon PostgreSQL | MongoDB Atlas | Upstash Redis | Bonsai Elasticsearch)
    ↓
Orchestration Layer (Azure Container Instance)
    ↓
Monitoring Layer (Grafana Cloud)
            `,
            achievements: [
                "Multi-cloud deployment across Vercel, GKE, Heroku, Render, Azure",
                "100% GitOps automation with ArgoCD (zero manual interventions)",
                "Enterprise-grade security: JWT, SSL/TLS, secrets management",
                "Cost optimization: $180 → $72/month (60%+ reduction)",
                "Production monitoring with Grafana Cloud",
                "Real user validation: 17 active users, 100% uptime",
                "Performance benchmarking: API response times 50-200ms",
                "Full documentation and reproducibility for thesis defense",
                "Novel contributions: multi-cloud GitOps, cost optimization algorithm, unified authentication"
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

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function ProjectDetail({ params }: PageProps) {
    const { id } = await params;
    const project = projectsData.find(p => p.id === id);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className={`bg-gradient-to-r ${
                project.featured 
                    ? 'from-blue-600 via-purple-600 to-green-600' 
                    : 'from-blue-600 to-green-600'
            } text-white`}>
                <div className="max-w-4xl mx-auto px-4 py-16">
                    <Link href="/#projects" className="text-blue-200 hover:text-white mb-4 inline-block">
                        ← Back to Projects
                    </Link>
                    {project.featured && (
                        <div className="mb-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-400 text-yellow-900">
                                ⭐ Featured Project
                            </span>
                        </div>
                    )}
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
                    <p className="text-xl opacity-90">{project.subtitle}</p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 py-16 space-y-12">

                {/* Live Demo Banner for E-Social-Assistance */}
                {project.id === 'e-social-assistance' && (
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
                        <div className="flex items-center mb-4">
                            <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                            <span className="text-green-700 font-medium">Live & Production Ready</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Experience the Full Platform</h3>
                        <p className="text-gray-600 mb-4">
                            Complete social welfare management system with real-time data, secure authentication, and production-grade features.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <a 
                                href={project.liveUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                🚀 Live Demo
                            </a>
                            <a 
                                href={project.apiDocsUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                            >
                                📚 API Docs
                            </a>
                        </div>
                    </div>
                )}

                {/* Overview */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Project Overview</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">{project.description}</p>
                    <div className="bg-blue-50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-blue-800 mb-2">Technical Focus</h3>
                        <p className="text-blue-700">{project.focus}</p>
                    </div>
                </section>

                {/* Technology Stack */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Technology Stack</h2>
                    <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium text-lg"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Challenge & Solution */}
                <section className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-3xl font-bold text-orange-600 mb-6">Challenge</h2>
                        <p className="text-gray-700 leading-relaxed">{project.details.challenge}</p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-green-600 mb-6">Solution</h2>
                        <p className="text-gray-700 leading-relaxed">{project.details.solution}</p>
                    </div>
                </section>

                {/* Architecture */}
                <section>
                    <h2 className="text-3xl font-bold text-purple-600 mb-6">Technical Architecture</h2>
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <p className="text-gray-700 leading-relaxed">{project.details.architecture}</p>
                    </div>
                </section>

                {/* Achievements */}
                <section>
                    <h2 className="text-3xl font-bold text-red-600 mb-6">Key Achievements</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {project.details.achievements.map((achievement, index) => (
                            <div key={index} className="flex items-start bg-green-50 p-4 rounded-lg">
                                <span className="text-green-500 text-xl mr-3">✓</span>
                                <span className="text-gray-700 font-medium">{achievement}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Special Features Section for E-Social-Assistance */}
                {project.id === 'e-social-assistance' && (
                    <section className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
                        <h2 className="text-3xl font-bold text-purple-600 mb-6">Platform Features</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">👑 Admin Dashboard</h3>
                                <ul className="text-gray-600 space-y-1">
                                    <li>• Complete system oversight</li>
                                    <li>• User management & analytics</li>
                                    <li>• Budget pool configuration</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">👨‍💼 Case Worker Tools</h3>
                                <ul className="text-gray-600 space-y-1">
                                    <li>• Request review & approval</li>
                                    <li>• Document verification</li>
                                    <li>• Eligibility assessment</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">💰 Finance Management</h3>
                                <ul className="text-gray-600 space-y-1">
                                    <li>• Payment processing</li>
                                    <li>• Budget allocation tracking</li>
                                    <li>• Financial reporting</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">👤 User Portal</h3>
                                <ul className="text-gray-600 space-y-1">
                                    <li>• Request submission</li>
                                    <li>• Status tracking</li>
                                    <li>• Document management</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                )}

                {/* Action Buttons */}
                <section className="border-t pt-8">
                    <div className="flex flex-wrap gap-4">
                        {project.liveUrl && (
                            <a 
                                href={project.liveUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
                            >
                                🚀 View Live Demo
                            </a>
                        )}
                        {project.githubUrl && (
                            <a 
                                href={project.githubUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-medium text-lg"
                            >
                                📱 GitHub Repository
                            </a>
                        )}
                        {project.apiDocsUrl && (
                            <a 
                                href={project.apiDocsUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-lg"
                            >
                                📚 API Documentation
                            </a>
                        )}
                        {!project.liveUrl && !project.githubUrl && (
                            <>
                                <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg">
                                    View Live Demo
                                </button>
                                <button className="px-8 py-4 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-medium text-lg">
                                    GitHub Repository
                                </button>
                                <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-lg">
                                    Documentation
                                </button>
                            </>
                        )}
                    </div>
                </section>

                {/* Additional Info for E-Social-Assistance */}
                {project.id === 'e-social-assistance' && (
                    <section className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-yellow-800 mb-2">🎯 Perfect for</h3>
                        <p className="text-yellow-700">
                            Demonstrating enterprise-level full-stack development skills, production deployment experience, 
                            and ability to create comprehensive social impact technology solutions.
                        </p>
                    </section>
                )}
            </div>
        </div>
    );
}