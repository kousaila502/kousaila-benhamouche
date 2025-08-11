const projectsData = [
    {
        id: 'user-service-microservice',
        title: "User Service Microservice",
        subtitle: "Production-Ready FastAPI Authentication Service",
        description: "Enterprise-grade user management microservice built with FastAPI, featuring JWT authentication, role-based access control, and admin dashboard. Deployed on Google Kubernetes Engine with GitOps automation and serving 17+ active users.",
        focus: "FastAPI Development, JWT Authentication, Kubernetes Deployment, GitOps",
        technologies: ["Python", "FastAPI", "PostgreSQL", "JWT", "Kubernetes", "Docker", "ArgoCD", "Neon", "SQLAlchemy"],
        liveUrl: "https://34.95.5.30.nip.io/user/docs",
        githubUrl: "https://github.com/kousaila502/user-service-microservice",
        apiDocsUrl: "https://34.95.5.30.nip.io/user/docs",
        healthUrl: "https://34.95.5.30.nip.io/user/health",
        featured: true,
        category: "microservice",
        images: {
            main: "/projects/user-service-microservice/swagger-user-service.PNG",
            gallery: [
                "/projects/user-service-microservice/swagger-user-service.PNG",
                "/projects/user-service-microservice/admin-user-management.PNG",
                "/projects/user-service-microservice/profile.PNG",
                "/projects/user-service-microservice/user-argocd-app.PNG",
                "/projects/user-service-microservice/health-check-user-service.PNG"
            ]
        },
        details: {
            challenge: "Create a production-ready user authentication microservice with enterprise security, role-based access control, and seamless integration with other microservices in a multi-cloud environment.",
            solution: "Developed a comprehensive FastAPI microservice with JWT authentication, PostgreSQL integration, admin dashboard, and GitOps deployment. Implemented cross-service authentication and production monitoring.",
            architecture: "FastAPI Python service deployed on Google Kubernetes Engine with ArgoCD GitOps, Neon PostgreSQL database, NGINX Ingress with Let's Encrypt SSL, and comprehensive health monitoring.",
            achievements: [
                "Production deployment serving 17+ active users",
                "JWT authentication with cross-service token validation",
                "Role-based access control (User, Admin)",
                "Real-time admin dashboard for user management",
                "GitOps deployment with ArgoCD on Kubernetes",
                "Comprehensive health monitoring and API documentation",
                "SSL/TLS security with Let's Encrypt certificates",
                "Integration with Order Service and frontend application",
                "PostgreSQL integration with async SQLAlchemy",
                "Complete user lifecycle management (register, login, profile, admin)"
            ]
        }
    },
    {
        id: 'order-service-microservice',
        title: "Order Service Microservice",
        subtitle: "Enterprise E-commerce Order Management System",
        description: "Comprehensive order management microservice with admin dashboard, real-time analytics, and multi-platform integration. Currently processing $1,593.95 in revenue with 9 completed orders and advanced business intelligence features.",
        focus: "Order Processing, Business Analytics, Admin Dashboard, Multi-Platform Integration",
        technologies: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Kubernetes", "Docker", "ArgoCD", "Redis", "Business Analytics"],
        liveUrl: "https://34.95.5.30.nip.io/orders/docs",
        githubUrl: "https://github.com/kousaila502/order-service-microservice",
        apiDocsUrl: "https://34.95.5.30.nip.io/orders/docs",
        healthUrl: "https://34.95.5.30.nip.io/orders/health",
        featured: true,
        category: "microservice",
        images: {
            main: "/projects/order-service-microservice/admin-order-stats.PNG",
            gallery: [
                "/projects/order-service-microservice/admin-order-stats.PNG",
                "/projects/order-service-microservice/admin-order-management.PNG",
                "/projects/order-service-microservice/order-docs.PNG",
                "/projects/order-service-microservice/argocd-dashboard.PNG",
                "/projects/order-service-microservice/user-orders.PNG"
            ]
        },
        details: {
            challenge: "Build a comprehensive order management system with real-time analytics, admin operations, multi-service integration, and production-grade monitoring for an enterprise e-commerce platform.",
            solution: "Created a sophisticated FastAPI microservice with dedicated PostgreSQL database, admin dashboard, business analytics, and seamless integration with User, Cart, Product, and Search services.",
            architecture: "FastAPI microservice on Google Kubernetes Engine with dedicated Neon PostgreSQL instance, ArgoCD GitOps deployment, NGINX Ingress, and comprehensive health monitoring across multiple cloud platforms.",
            achievements: [
                "Processing real revenue: $1,593.95 from 9 completed orders",
                "Real-time business analytics and order statistics",
                "Comprehensive admin dashboard with bulk operations",
                "Multi-platform health monitoring (GKE, Heroku, Render)",
                "Complete order lifecycle management (create, track, update)",
                "Integration with 4 other microservices across clouds",
                "Dedicated PostgreSQL database with connection optimization",
                "GitOps deployment with automatic rollback capabilities",
                "Role-based access control for admin operations",
                "Production monitoring with 99.9% uptime"
            ]
        }
    },
    {
        id: 'ecommerce-microservices',
        title: "TechMart Multi-Cloud GitOps Platform",
        subtitle: "World's First Systematic Multi-Cloud GitOps Orchestration",
        description: "Production-ready multi-cloud e-commerce platform with GitOps orchestration across 5 cloud providers. Featuring 100% automation, enterprise security, cost optimization (60%+ reduction), and serving 17 active users with $1,593.95 in revenue.",
        focus: "Multi-Cloud Architecture, GitOps Automation, Cost Optimization, Enterprise Security",
        technologies: ["React", "TypeScript", "Python", "Node.js", "Java", "Docker", "Kubernetes", "ArgoCD", "MongoDB", "PostgreSQL", "Redis", "Elasticsearch", "Grafana"],
        liveUrl: "https://ecommerce-app-omega-two-64.vercel.app",
        githubUrl: "https://github.com/kousaila502/ecommerce-microservices-platform",
        apiDocsUrl: "https://34.95.5.30.nip.io",
        featured: true,
        category: "platform",
        images: {
            main: "/projects/ecommerce-microservices.png",
            gallery: [
                "/projects/ecommerce-microservices.png"
            ]
        },
        details: {
            challenge: "Design and implement the world's first systematic multi-cloud GitOps orchestration system for an enterprise-grade e-commerce platform, spanning 5 cloud providers with full automation and production security.",
            solution: "Built a comprehensive multi-cloud architecture with 100% GitOps automation using ArgoCD, unified JWT authentication, SSL/TLS everywhere, and intelligent cost optimization achieving 60%+ reduction in infrastructure costs.",
            architecture: `Multi-Cloud Production Architecture:
Frontend (Vercel - HTTPS) → API Gateway (GKE + Let's Encrypt) → Microservices (User & Order on GKE | Product & Cart on Heroku | Search on Render) → Databases (Neon PostgreSQL | MongoDB Atlas | Upstash Redis | Bonsai Elasticsearch) → Orchestration (Azure) → Monitoring (Grafana Cloud)`,
            achievements: [
                "Multi-cloud deployment across Vercel, GKE, Heroku, Render, Azure",
                "100% GitOps automation with ArgoCD (zero manual interventions)",
                "Production users: 17 active users, $1,593.95 revenue processed",
                "Cost optimization: 60%+ reduction ($180 → $72/month)",
                "Enterprise security: JWT, SSL/TLS everywhere, secrets management",
                "Performance: API response times 50-200ms across all services",
                "99.9% uptime with automatic rollback capabilities",
                "Novel research contributions for thesis defense",
                "Real-time monitoring with Grafana Cloud integration",
                "Complete documentation and reproducibility framework"
            ]
        }
    },
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
        featured: true,
        category: "fullstack",
        images: {
            main: "/projects/e-social-assistance.png",
            gallery: [
                "/projects/e-social-assistance.png"
            ]
        },
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
        id: 'tourism-api',
        title: "Tourism REST API",
        subtitle: "Production-Ready Backend Service",
        description: "Comprehensive REST API for Algerian tourism with advanced backend features including authentication, file handling, and role management.",
        focus: "REST API Development, Authentication, Database Design",
        technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "API Documentation"],
        category: "backend",
        images: {
            main: "/projects/tourism-api.png",
            gallery: [
                "/projects/tourism-api.png"
            ]
        },
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
        category: "fullstack",
        images: {
            main: "/projects/enterprise-platform.png",
            gallery: [
                "/projects/enterprise-platform.png"
            ]
        },
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
        category: "devops",
        images: {
            main: "/projects/devops-lab.png",
            gallery: [
                "/projects/devops-lab.png"
            ]
        },
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