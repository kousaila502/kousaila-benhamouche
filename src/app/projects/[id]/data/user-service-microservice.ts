// src/app/projects/data/user-service-microservice.ts

export const userServiceProject = {
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
            {
                src: "/projects/user-service-microservice/swagger-user-service.PNG",
                alt: "Interactive Swagger API Documentation",
                caption: "Complete FastAPI documentation with live testing capabilities"
            },
            {
                src: "/projects/user-service-microservice/admin-user-management.PNG",
                alt: "Admin User Management Dashboard",
                caption: "Real-time admin dashboard managing 17+ active users"
            },
            {
                src: "/projects/user-service-microservice/profile.PNG",
                alt: "User Profile Management",
                caption: "User profile interface with secure authentication"
            },
            {
                src: "/projects/user-service-microservice/user-argocd-app.PNG",
                alt: "ArgoCD GitOps Deployment",
                caption: "Production GitOps deployment with ArgoCD on Kubernetes"
            },
            {
                src: "/projects/user-service-microservice/health-check-user-service.PNG",
                alt: "Health Monitoring System",
                caption: "Comprehensive health monitoring with real-time status"
            },
            {
                src: "/projects/user-service-microservice/login-user-service.PNG",
                alt: "User Authentication Interface",
                caption: "Secure JWT-based login system"
            },
            {
                src: "/projects/user-service-microservice/register-user-service.PNG",
                alt: "User Registration System",
                caption: "Complete user registration with validation"
            },
            {
                src: "/projects/user-service-microservice/update-user-admin.PNG",
                alt: "Admin User Update Interface",
                caption: "Admin controls for user management and role assignment"
            }
        ]
    },
    metrics: {
        activeUsers: "17+",
        uptime: "99.9%",
        responseTime: "<50ms",
        deployment: "Kubernetes",
        automation: "100% GitOps"
    },
    details: {
        challenge: "Create a production-ready user authentication microservice with enterprise security, role-based access control, and seamless integration with other microservices in a multi-cloud environment.",
        solution: "Developed a comprehensive FastAPI microservice with JWT authentication, PostgreSQL integration, admin dashboard, and GitOps deployment. Implemented cross-service authentication and production monitoring with real-time health checks across multiple platforms.",
        architecture: `FastAPI Python Microservice Architecture:

🔗 API Gateway (NGINX Ingress + Let's Encrypt SSL)
    ↓
🐍 FastAPI Application (Async Python 3.10+)
    ↓
🔒 JWT Authentication & Authorization Middleware
    ↓
📊 PostgreSQL Database (Neon Cloud + Connection Pooling)
    ↓
☸️ Kubernetes Deployment (Google GKE)
    ↓
🔄 ArgoCD GitOps (Automated CI/CD)
    ↓
📈 Health Monitoring (Multi-platform status checks)`,
        achievements: [
            "🚀 Production deployment serving 17+ active users with 99.9% uptime",
            "🔐 JWT authentication with cross-service token validation and refresh",
            "👑 Role-based access control (User, Admin) with granular permissions",
            "📊 Real-time admin dashboard for comprehensive user management",
            "☸️ GitOps deployment with ArgoCD on Google Kubernetes Engine",
            "📚 Interactive Swagger documentation with live API testing",
            "🔒 Enterprise SSL/TLS security with Let's Encrypt certificates",
            "🔗 Seamless integration with Order Service and frontend application",
            "💾 PostgreSQL integration with async SQLAlchemy ORM",
            "👤 Complete user lifecycle: register → verify → login → profile → admin",
            "🩺 Comprehensive health monitoring across GKE, Heroku, Render platforms",
            "⚡ Sub-50ms response times with efficient async processing"
        ]
    },
    technicalFeatures: {
        authentication: {
            title: "🔐 Advanced Authentication System",
            features: [
                "JWT token-based authentication with refresh mechanism",
                "Password hashing with bcrypt and salt rounds",
                "Cross-service token validation for microservices",
                "Secure logout with token blacklisting",
                "Role-based access control (RBAC)"
            ]
        },
        adminDashboard: {
            title: "👑 Admin Management Dashboard",
            features: [
                "Real-time user statistics and analytics",
                "User role management and permissions",
                "Account activation/deactivation controls",
                "User profile editing and updates",
                "System health monitoring interface"
            ]
        },
        database: {
            title: "💾 Database & Performance",
            features: [
                "Neon PostgreSQL with global distribution",
                "Async SQLAlchemy ORM with connection pooling",
                "Database migrations with Alembic",
                "Optimized queries with indexing",
                "Data validation with Pydantic schemas"
            ]
        },
        deployment: {
            title: "🚀 Production Deployment",
            features: [
                "Google Kubernetes Engine (GKE) orchestration",
                "ArgoCD GitOps with automatic synchronization",
                "Docker containerization with Alpine Linux",
                "NGINX Ingress with Let's Encrypt SSL",
                "Horizontal pod autoscaling (HPA)"
            ]
        }
    },
    codeExamples: {
        fastapi: `# FastAPI Authentication Endpoint
@router.post("/auth", response_model=TokenResponse)
async def authenticate_user(
    credentials: UserCredentials,
    db: AsyncSession = Depends(get_database)
):
    user = await authenticate_user_service(db, credentials)
    if not user:
        raise HTTPException(
            status_code=401,
            detail="Invalid credentials"
        )
    
    access_token = create_access_token(
        data={"sub": user.email, "role": user.role}
    )
    return TokenResponse(
        access_token=access_token,
        token_type="bearer",
        user=UserResponse.from_orm(user)
    )`,
        kubernetes: `# Kubernetes Deployment
apiVersion: apps/v1
kind: Deployment
metadata:
  name: user-service
spec:
  replicas: 2
  selector:
    matchLabels:
      app: user-service
  template:
    spec:
      containers:
      - name: user-service
        image: kousaila/user-service:latest
        ports:
        - containerPort: 9090
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: user-service-secrets
              key: database-url`
    }
};

export default userServiceProject;