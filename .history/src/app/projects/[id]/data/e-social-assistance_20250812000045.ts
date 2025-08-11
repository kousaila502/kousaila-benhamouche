// src/app/projects/data/e-social-assistance.ts

export const eSocialAssistanceProject = {
    id: 'e-social-assistance',
    title: "E-Social-Assistance Platform",
    subtitle: "Enterprise-Grade Social Welfare Management System",
    description: "Comprehensive digital platform for managing social welfare programs, assistance requests, budget allocation, and payment processing. Built with modern web technologies to streamline social services administration and improve citizen access to government assistance.",
    focus: "Full-Stack Development, Enterprise Architecture, Social Impact Technology",
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Tailwind CSS", "Vite", "Swagger", "CORS"],
    liveUrl: "https://enterprise-social-platform.vercel.app",
    githubUrl: "https://github.com/kousaila502/enterprise-social-platform",
    apiDocsUrl: "https://enterprise-social-platform.onrender.com/api-docs",
    featured: true,
    category: "fullstack",
    images: {
        main: "/projects/e-social-assistance.png",
        gallery: [
            {
                src: "/projects/e-social-assistance.png",
                alt: "E-Social-Assistance Platform Overview",
                caption: "Complete social welfare management system with role-based access control"
            }
        ]
    },
    metrics: {
        users: "Multi-role",
        features: "25+ API endpoints",
        roles: "4 distinct roles",
        workflow: "8 status transitions",
        deployment: "Production ready",
        localization: "Algeria-focused"
    },
    platformFeatures: {
        adminDashboard: {
            title: "👑 Admin Dashboard",
            features: [
                "Complete system oversight and configuration",
                "User management with role assignment",
                "Budget pool creation and allocation",
                "System-wide analytics and reporting",
                "Application workflow configuration"
            ]
        },
        caseWorkerTools: {
            title: "👨‍💼 Case Worker Interface",
            features: [
                "Request review and eligibility assessment",
                "Document verification and validation",
                "Interview scheduling and management",
                "Approval workflow with status updates",
                "Case history and progress tracking"
            ]
        },
        financeManagement: {
            title: "💰 Finance Management",
            features: [
                "Payment processing and disbursement",
                "Budget allocation and tracking",
                "Financial reporting and analytics",
                "Transaction history and audit trails",
                "Multi-currency support (DZD focus)"
            ]
        },
        userPortal: {
            title: "👤 Citizen Portal",
            features: [
                "Assistance request submission",
                "Real-time application status tracking",
                "Document upload and management",
                "Profile management and updates",
                "Notification system for updates"
            ]
        }
    },
    workflowStates: [
        { status: "submitted", description: "Initial application submission" },
        { status: "under_review", description: "Case worker reviewing application" },
        { status: "pending_documents", description: "Waiting for additional documentation" },
        { status: "interview_scheduled", description: "Interview appointment set" },
        { status: "approved", description: "Application approved for assistance" },
        { status: "payment_processing", description: "Payment being processed" },
        { status: "completed", description: "Assistance successfully provided" },
        { status: "rejected", description: "Application denied with reason" }
    ],
    details: {
        challenge: "Creating a comprehensive digital solution for social welfare organizations to manage assistance programs, track requests, allocate budgets, and process payments efficiently while ensuring security, compliance, and accessibility for citizens in need.",
        solution: "Developed a full-stack enterprise platform with sophisticated role-based access control, automated workflows, real-time analytics, and secure payment processing. Implemented cross-origin authentication, production-ready deployment, and Algerian localization with wilaya integration.",
        architecture: `E-Social-Assistance Full-Stack Architecture:

🌐 FRONTEND LAYER (Vercel)
    React + TypeScript + Tailwind CSS + Vite
    └── https://enterprise-social-platform.vercel.app
                    ↓
🔗 CROSS-ORIGIN AUTHENTICATION
    JWT with HTTP-only cookies + CORS configuration
                    ↓
🖥️ BACKEND API LAYER (Render)
    Node.js + Express.js + Swagger Documentation
    └── https://enterprise-social-platform.onrender.com
                    ↓
💾 DATABASE LAYER
    MongoDB Atlas (Global clusters + Auto-scaling)
    ├── Users Collection (Role-based access)
    ├── Applications Collection (Workflow states)
    ├── Budget Pools Collection (Financial tracking)
    └── Transactions Collection (Payment history)
                    ↓
🔒 SECURITY LAYER
    ├── JWT Authentication with refresh tokens
    ├── Password hashing with bcrypt
    ├── Role-based authorization middleware
    └── Input validation with Joi schemas
                    ↓
🌍 LOCALIZATION LAYER
    Algerian Wilaya integration + DZD currency + Arabic/French support`,
        achievements: [
            "🏛️ Complete role-based access control: Admin, Case Worker, Finance Manager, Applicant",
            "🔄 Sophisticated request management workflow with 8 distinct status transitions",
            "🔒 Secure cross-origin authentication using JWT with HTTP-only cookies",
            "💰 Comprehensive budget pool management with real-time allocation tracking",
            "🚀 Production deployment: Vercel frontend + Render backend + MongoDB Atlas",
            "📚 Complete API documentation with 25+ endpoints and interactive Swagger UI",
            "📱 Responsive design with Tailwind CSS and modern UI/UX principles",
            "🇩🇿 Algerian localization: Wilaya integration, DZD currency, cultural adaptation",
            "⚡ Real-time status updates and notification system for all stakeholders",
            "📊 Advanced analytics dashboard with financial and operational reporting",
            "🔍 Document management system with secure file upload and verification",
            "🎯 Social impact focus: Streamlining government assistance for citizens in need"
        ]
    },
    technicalFeatures: {
        authentication: {
            title: "🔐 Advanced Authentication System",
            features: [
                "JWT token-based authentication with refresh mechanism",
                "HTTP-only cookies for enhanced security",
                "Cross-origin authentication (frontend-backend separation)",
                "Role-based access control with granular permissions",
                "Password security with bcrypt hashing and salt rounds"
            ]
        },
        workflow: {
            title: "🔄 Assistance Request Workflow",
            features: [
                "8-stage application lifecycle management",
                "Automated status transitions based on actions",
                "Email notifications for status changes",
                "Document upload and verification system",
                "Interview scheduling and management"
            ]
        },
        budgetManagement: {
            title: "💰 Budget & Finance System",
            features: [
                "Budget pool creation with allocation limits",
                "Real-time budget tracking and utilization",
                "Payment processing with transaction history",
                "Financial reporting and analytics",
                "Multi-currency support with DZD focus"
            ]
        },
        userInterface: {
            title: "🎨 Modern User Experience",
            features: [
                "Responsive design with Tailwind CSS",
                "Role-specific dashboards and interfaces",
                "Real-time data updates without page refresh",
                "Intuitive navigation with breadcrumbs",
                "Accessibility features for government compliance"
            ]
        },
        localization: {
            title: "🌍 Algerian Localization",
            features: [
                "48 Algerian wilayas (provinces) integration",
                "DZD (Algerian Dinar) currency formatting",
                "Cultural adaptation for government workflows",
                "Arabic and French language considerations",
                "Local business rules and compliance"
            ]
        }
    },
    codeExamples: {
        roleBasedAuth: `// Role-based middleware
const requireRole = (roles) => {
  return async (req, res, next) => {
    try {
      const token = req.cookies.token;
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id);
      
      if (!roles.includes(user.role)) {
        return res.status(403).json({
          error: 'Insufficient permissions'
        });
      }
      
      req.user = user;
      next();
    } catch (error) {
      res.status(401).json({ error: 'Unauthorized' });
    }
  };
};

// Usage
router.get('/admin/budget-pools', 
  requireRole(['admin']), 
  getBudgetPools
);`,
        workflowManagement: `// Application status workflow
const updateApplicationStatus = async (req, res) => {
  const { applicationId, newStatus, notes } = req.body;
  
  const application = await Application.findById(applicationId);
  const validTransitions = getValidTransitions(application.status);
  
  if (!validTransitions.includes(newStatus)) {
    return res.status(400).json({
      error: 'Invalid status transition'
    });
  }
  
  // Update application with history tracking
  application.status = newStatus;
  application.statusHistory.push({
    status: newStatus,
    updatedBy: req.user.id,
    updatedAt: new Date(),
    notes: notes
  });
  
  await application.save();
  
  // Send notification to applicant
  await sendStatusUpdateNotification(application);
  
  res.json({ application });
};`,
        budgetTracking: `// Budget allocation system
const allocateBudget = async (req, res) => {
  const { poolId, amount, applicationId } = req.body;
  
  const budgetPool = await BudgetPool.findById(poolId);
  
  if (budgetPool.allocated + amount > budgetPool.totalAmount) {
    return res.status(400).json({
      error: 'Insufficient budget remaining'
    });
  }
  
  // Create transaction record
  const transaction = new Transaction({
    budgetPool: poolId,
    application: applicationId,
    amount: amount,
    type: 'allocation',
    processedBy: req.user.id,
    status: 'pending'
  });
  
  // Update budget pool
  budgetPool.allocated += amount;
  budgetPool.transactions.push(transaction._id);
  
  await Promise.all([
    transaction.save(),
    budgetPool.save()
  ]);
  
  res.json({ transaction, remainingBudget: budgetPool.totalAmount - budgetPool.allocated });
};`
    },
    apiEndpoints: [
        {
            method: "POST",
            path: "/auth/login",
            description: "User authentication with role assignment",
            auth: "Public"
        },
        {
            method: "GET",
            path: "/applications",
            description: "Get user's applications or all applications (admin)",
            auth: "JWT Token Required"
        },
        {
            method: "POST",
            path: "/applications",
            description: "Submit new assistance application",
            auth: "Applicant Role"
        },
        {
            method: "PUT",
            path: "/applications/:id/status",
            description: "Update application status",
            auth: "Case Worker/Admin"
        },
        {
            method: "GET",
            path: "/budget-pools",
            description: "Get budget pools and allocation status",
            auth: "Finance Manager/Admin"
        },
        {
            method: "POST",
            path: "/budget-pools",
            description: "Create new budget pool",
            auth: "Admin Role"
        },
        {
            method: "POST",
            path: "/transactions",
            description: "Process payment/allocation",
            auth: "Finance Manager"
        },
        {
            method: "GET",
            path: "/analytics/dashboard",
            description: "Get dashboard analytics",
            auth: "Admin/Manager Roles"
        },
        {
            method: "GET",
            path: "/users",
            description: "User management",
            auth: "Admin Role"
        },
        {
            method: "POST",
            path: "/documents/upload",
            description: "Upload supporting documents",
            auth: "Authenticated User"
        }
    ],
    socialImpact: {
        title: "🎯 Social Impact & Government Benefits",
        benefits: [
            "Streamlined access to government assistance programs",
            "Reduced bureaucracy and processing time for citizens",
            "Transparent workflow with real-time status tracking",
            "Improved budget allocation and financial oversight",
            "Enhanced case worker productivity and efficiency",
            "Digital transformation of traditional government processes",
            "Better data collection for policy making and analysis",
            "Reduced corruption through transparent digital processes"
        ]
    },
    deploymentDetails: {
        frontend: {
            platform: "Vercel",
            features: ["Automatic deployments", "Global CDN", "HTTPS by default"],
            url: "https://enterprise-social-platform.vercel.app"
        },
        backend: {
            platform: "Render",
            features: ["Auto-scaling", "Health checks", "Automatic SSL"],
            url: "https://enterprise-social-platform.onrender.com"
        },
        database: {
            platform: "MongoDB Atlas",
            features: ["Global clusters", "Automatic backups", "Built-in security"],
            collections: ["users", "applications", "budgetPools", "transactions"]
        }
    },
    futureEnhancements: [
        "Mobile application for citizens and case workers",
        "Integration with existing government databases",
        "Advanced analytics with machine learning insights",
        "Multi-language support (Arabic, French, Berber)",
        "Blockchain integration for transparency and audit trails",
        "AI-powered eligibility assessment automation",
        "SMS and email notification system",
        "Integration with national ID verification systems"
    ]
};

export default eSocialAssistanceProject;