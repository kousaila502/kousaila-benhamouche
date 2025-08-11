// src/app/projects/data/ecommerce-microservices.ts

export const ecommerceMultiCloudProject = {
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
        main: "/projects/ecommerce.PNG",
        gallery: [
            {
                src: "/projects/ecommerce-microservices.png",
                alt: "Multi-Cloud GitOps Platform Overview",
                caption: "Complete 5-cloud architecture with GitOps orchestration"
            }
        ]
    },
    metrics: {
        cloudProviders: "5",
        automation: "100%",
        costReduction: "60%+",
        uptime: "99.9%",
        activeUsers: "17",
        revenue: "$1,593.95",
        responseTime: "50-200ms"
    },
    cloudDistribution: {
        frontend: {
            platform: "Vercel",
            technology: "React + TypeScript",
            url: "https://ecommerce-app-omega-two-64.vercel.app",
            features: ["Automatic HTTPS", "Global CDN", "Instant deployments"]
        },
        apiGateway: {
            platform: "Google Kubernetes Engine (GKE)",
            technology: "NGINX Ingress + Let's Encrypt",
            url: "https://34.95.5.30.nip.io",
            features: ["SSL/TLS termination", "Load balancing", "Path-based routing"]
        },
        microservices: {
            gke: {
                services: ["User Service", "Order Service"],
                technology: "FastAPI + PostgreSQL",
                deployment: "ArgoCD GitOps",
                database: "Neon PostgreSQL (Dedicated instances)"
            },
            heroku: {
                services: ["Product Service", "Cart Service"],
                technologies: ["Node.js + MongoDB", "Java Spring Boot + Redis"],
                deployment: "GitHub Actions CI/CD",
                databases: ["MongoDB Atlas", "Upstash Redis"]
            },
            render: {
                services: ["Search Service"],
                technology: "Node.js + Elasticsearch",
                deployment: "Git-based deployment",
                database: "Bonsai Elasticsearch"
            }
        },
        orchestration: {
            platform: "Azure Container Instance",
            technology: "Node.js Multi-Cloud Controller",
            url: "https://techmart-controller.uksouth.azurecontainer.io:3000",
            features: ["Platform monitoring", "Cost optimization", "Deployment coordination"]
        },
        monitoring: {
            platform: "Grafana Cloud",
            technology: "Prometheus + Grafana",
            url: "https://gitopsargocd.grafana.net",
            features: ["Real-time metrics", "Performance tracking", "Business analytics"]
        }
    },
    costOptimization: {
        before: {
            total: 180,
            gke: 120,
            azure: 12,
            other: 48
        },
        after: {
            total: 72,
            gke: 60,
            azure: 12,
            other: 0
        },
        savings: {
            percentage: 60,
            monthly: 108,
            annually: 1296
        },
        optimizations: [
            "Right-sized GKE nodes (e2-standard-4 → 2x e2-small)",
            "Maximized free tier usage across platforms",
            "Intelligent resource allocation based on usage patterns",
            "Automated scaling policies to prevent over-provisioning"
        ]
    },
    gitopsMetrics: {
        automation: {
            level: "100%",
            manualInterventions: 0,
            deploymentTime: "2-3 minutes",
            recoveryTime: "2-5 minutes"
        },
        comparison: {
            traditional: {
                automation: "60%",
                manualInterventions: "2-3",
                deploymentTime: "5-8 minutes",
                recoveryTime: "15-30 minutes"
            },
            gitops: {
                automation: "100%",
                manualInterventions: "0",
                deploymentTime: "2-3 minutes",
                recoveryTime: "2-5 minutes"
            }
        }
    },
    details: {
        challenge: "Design and implement the world's first systematic multi-cloud GitOps orchestration system for an enterprise-grade e-commerce platform, spanning 5 cloud providers with full automation, production security, and cost optimization.",
        solution: "Built a comprehensive multi-cloud architecture with 100% GitOps automation using ArgoCD, unified JWT authentication across all services, SSL/TLS everywhere, intelligent cost optimization achieving 60%+ reduction, and real-time monitoring with production user validation.",
        architecture: `TechMart Multi-Cloud Production Architecture:

🌐 FRONTEND LAYER
    Vercel (React + TypeScript + Global CDN)
    └── https://ecommerce-app-omega-two-64.vercel.app
                    ↓
🔗 API GATEWAY LAYER  
    Google Kubernetes Engine (NGINX Ingress + Let's Encrypt SSL)
    └── https://34.95.5.30.nip.io
                    ↓
🔧 MICROSERVICES LAYER
    ├── 👤 User Service (GKE + FastAPI + Neon PostgreSQL)
    ├── 📋 Order Service (GKE + FastAPI + Dedicated Neon PostgreSQL)
    ├── 📦 Product Service (Heroku + Node.js + MongoDB Atlas)
    ├── 🛒 Cart Service (Heroku + Java Spring Boot + Upstash Redis)
    └── 🔍 Search Service (Render + Node.js + Bonsai Elasticsearch)
                    ↓
💾 DATABASE LAYER
    ├── 🐘 Neon PostgreSQL (2 dedicated instances, AWS us-east-2)
    ├── 🍃 MongoDB Atlas (Global clusters, Auto-scaling)
    ├── 🔴 Upstash Redis (Global edge, Sub-ms latency)
    └── 🔍 Bonsai Elasticsearch (US-East-1, Full-text search)
                    ↓
🎛️ ORCHESTRATION LAYER
    Azure Container Instance (Multi-Cloud Controller)
    └── https://techmart-controller.uksouth.azurecontainer.io:3000
                    ↓
📊 MONITORING LAYER
    Grafana Cloud (Prometheus + Business Analytics)
    └── https://gitopsargocd.grafana.net`,
        achievements: [
            "🌐 Multi-cloud deployment across 5 providers: Vercel, GKE, Heroku, Render, Azure",
            "🔄 100% GitOps automation with ArgoCD (zero manual interventions)",
            "👥 Production validation: 17 active users with $1,593.95 revenue processed",
            "💰 Cost optimization: 60%+ reduction ($180 → $72/month, $1,296 annual savings)",
            "🔒 Enterprise security: Unified JWT, SSL/TLS everywhere, secrets management",
            "⚡ Performance optimization: 50-200ms API response times across all services",
            "📈 99.9% uptime with automatic rollback capabilities and disaster recovery",
            "🎓 Novel research contributions suitable for thesis defense and publication",
            "📊 Real-time monitoring with Grafana Cloud and business intelligence",
            "📚 Complete documentation framework for reproducibility and knowledge transfer",
            "🔧 Infrastructure as Code with Kubernetes manifests and GitOps workflows",
            "🌍 Global distribution with CDN, edge caching, and multi-region databases"
        ]
    },
    researchContributions: {
        novel: {
            title: "🔬 Novel Research Contributions",
            contributions: [
                "First systematic multi-cloud GitOps orchestration framework",
                "Cost optimization algorithms for intelligent cloud provider selection",
                "Unified authentication architecture across heterogeneous cloud platforms",
                "Automated disaster recovery with cross-cloud failover methodology",
                "Enterprise adoption framework for multi-cloud GitOps implementation"
            ]
        },
        academic: {
            title: "🎓 Academic Impact",
            metrics: [
                "Quantified 40% improvement in automation levels",
                "Demonstrated 60% cost reduction with maintained performance",
                "Validated 80% reduction in recovery time for production incidents",
                "Reproducible methodology with complete documentation",
                "Industry-applicable framework for enterprise adoption"
            ]
        },
        industry: {
            title: "🏢 Industry Applications",
            applications: [
                "Enterprise multi-cloud migration strategies",
                "Cost optimization for cloud-native applications",
                "GitOps adoption patterns for microservices architectures",
                "Security frameworks for distributed cloud systems",
                "Performance benchmarking for multi-cloud deployments"
            ]
        }
    },
    technicalFeatures: {
        gitops: {
            title: "🔄 GitOps Automation",
            features: [
                "ArgoCD continuous deployment with Git as single source of truth",
                "Automatic synchronization from GitHub repository changes",
                "Self-healing infrastructure with drift detection and correction",
                "Declarative configuration management with Kubernetes manifests",
                "Rollback capabilities with deployment history and version control"
            ]
        },
        security: {
            title: "🔒 Enterprise Security",
            features: [
                "Unified JWT authentication across all microservices",
                "SSL/TLS encryption with Let's Encrypt automatic certificate renewal",
                "Secrets management with Kubernetes Secrets and platform env vars",
                "CORS configuration for secure cross-origin requests",
                "Role-based access control (RBAC) with admin and user permissions"
            ]
        },
        monitoring: {
            title: "📊 Production Monitoring",
            features: [
                "Real-time business metrics: revenue, orders, user activity",
                "Performance tracking: response times, uptime, error rates",
                "Multi-platform health checks across all cloud providers",
                "Grafana Cloud dashboards with custom alerting rules",
                "Cost tracking and optimization recommendations"
            ]
        },
        scalability: {
            title: "📈 Scalability & Performance",
            features: [
                "Horizontal pod autoscaling (HPA) on Kubernetes",
                "Database connection pooling and query optimization",
                "Global CDN with edge caching for frontend assets",
                "Redis caching for session management and cart data",
                "Load balancing across multiple service instances"
            ]
        }
    },
    microservicesDetails: {
        userService: {
            title: "👤 User Service",
            url: "https://34.95.5.30.nip.io/user/docs",
            github: "https://github.com/kousaila502/user-service-microservice",
            description: "FastAPI authentication service with JWT and admin dashboard"
        },
        orderService: {
            title: "📋 Order Service", 
            url: "https://34.95.5.30.nip.io/docs",
            github: "https://github.com/kousaila502/order-service-microservice",
            description: "Order management with $1,593.95 revenue processing and analytics"
        },
        productService: {
            title: "📦 Product Service",
            url: "https://ecommerce-product-service-56575270905a.herokuapp.com",
            description: "Node.js service with MongoDB for product catalog management"
        },
        cartService: {
            title: "🛒 Cart Service",
            url: "https://ecommerce-cart-service-f2a908c60d8a.herokuapp.com", 
            description: "Java Spring Boot service with Redis for shopping cart functionality"
        },
        searchService: {
            title: "🔍 Search Service",
            url: "https://ecommerce-microservices-platform.onrender.com",
            description: "Node.js service with Elasticsearch for product search and indexing"
        }
    },
    deploymentGuide: {
        prerequisites: [
            "Docker and Kubernetes CLI tools",
            "ArgoCD installation on target cluster", 
            "Cloud provider accounts and credentials",
            "Domain name for SSL certificate generation"
        ],
        steps: [
            "1. Fork the GitHub repository and configure secrets",
            "2. Deploy ArgoCD applications for User and Order services",
            "3. Configure Heroku deployments for Product and Cart services",
            "4. Set up Render deployment for Search service", 
            "5. Deploy Azure Container Instance for orchestration controller",
            "6. Configure monitoring and alerting in Grafana Cloud"
        ]
    }
};

export default ecommerceMultiCloudProject;