// src/app/projects/data/tourism-api.ts

export const tourismApiProject = {
    id: 'tourism-api',
    title: "Tourism REST API",
    subtitle: "Production-Ready Backend Service for Algerian Tourism",
    description: "Comprehensive REST API for Algerian tourism platform featuring advanced backend capabilities including JWT authentication, file handling, role-based access control, and extensive tourism data management. Built with Node.js and Express.js for high performance and scalability.",
    focus: "REST API Development, Authentication, Database Design, Backend Architecture",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Multer", "Joi", "Swagger", "CORS", "Bcrypt"],
    liveUrl: null, // Not currently deployed
    githubUrl: "https://github.com/kousaila502/tourism-rest-api",
    apiDocsUrl: null, // Would be available when deployed
    featured: false,
    category: "backend",
    images: {
        main: "/projects/tourism-api.png",
        gallery: [
            {
                src: "/projects/tourism-api.png",
                alt: "Tourism REST API Architecture",
                caption: "Comprehensive backend service for Algerian tourism management"
            }
        ]
    },
    metrics: {
        endpoints: "20+",
        authentication: "JWT-based",
        fileHandling: "Image uploads",
        codeReduction: "60%",
        architecture: "Unified backend",
        documentation: "Complete API docs"
    },
    apiFeatures: {
        authentication: {
            title: "🔐 Authentication & Authorization",
            endpoints: [
                "POST /auth/register - User registration with email verification",
                "POST /auth/login - JWT token-based authentication",
                "POST /auth/refresh - Token refresh mechanism",
                "GET /auth/profile - User profile management",
                "PUT /auth/profile - Profile update with validation"
            ]
        },
        destinations: {
            title: "🏛️ Destination Management",
            endpoints: [
                "GET /destinations - List all destinations with pagination",
                "GET /destinations/:id - Get specific destination details",
                "POST /destinations - Create new destination (Admin only)",
                "PUT /destinations/:id - Update destination information",
                "DELETE /destinations/:id - Remove destination"
            ]
        },
        hotels: {
            title: "🏨 Hotel & Accommodation",
            endpoints: [
                "GET /hotels - Search hotels with filters",
                "GET /hotels/:id - Hotel details with amenities",
                "POST /hotels - Add new hotel (Partner/Admin)",
                "PUT /hotels/:id - Update hotel information",
                "GET /hotels/:id/rooms - Available rooms and pricing"
            ]
        },
        bookings: {
            title: "📅 Booking Management",
            endpoints: [
                "POST /bookings - Create new booking",
                "GET /bookings - User booking history",
                "GET /bookings/:id - Booking details",
                "PUT /bookings/:id - Modify booking",
                "DELETE /bookings/:id - Cancel booking"
            ]
        },
        reviews: {
            title: "⭐ Reviews & Ratings",
            endpoints: [
                "POST /reviews - Submit review and rating",
                "GET /reviews - Get reviews with filtering",
                "PUT /reviews/:id - Update user's review",
                "DELETE /reviews/:id - Delete review",
                "GET /destinations/:id/reviews - Destination-specific reviews"
            ]
        }
    },
    details: {
        challenge: "Creating a comprehensive REST API for Algerian tourism platform with secure authentication, role-based access control, file handling capabilities, and efficient data management while ensuring scalability and maintainability.",
        solution: "Built a production-ready API using Node.js and Express.js with MongoDB integration, implementing JWT authentication, file upload system with Multer, comprehensive input validation with Joi, and a unified architecture that reduced codebase complexity by 60%.",
        architecture: `Tourism REST API Architecture:

🌐 CLIENT APPLICATIONS
    ├── Web Frontend (React/Vue.js)
    ├── Mobile Apps (React Native/Flutter)
    └── Third-party integrations
                    ↓
🔗 API GATEWAY & ROUTING
    Express.js Router with middleware stack
    ├── CORS configuration for cross-origin requests
    ├── Rate limiting and security headers
    └── Request logging and monitoring
                    ↓
🔒 AUTHENTICATION MIDDLEWARE
    ├── JWT token verification and validation
    ├── Role-based access control (User, Partner, Admin)
    ├── Password hashing with bcrypt
    └── Session management and refresh tokens
                    ↓
📋 API ENDPOINTS LAYER
    ├── 🏛️ Destinations (CRUD operations)
    ├── 🏨 Hotels & Accommodations
    ├── 📅 Booking Management
    ├── ⭐ Reviews & Ratings
    ├── 👤 User Management
    └── 📁 File Upload (Images)
                    ↓
✅ VALIDATION LAYER
    Joi schema validation for:
    ├── Request body validation
    ├── Query parameter validation
    ├── File upload validation
    └── Data type enforcement
                    ↓
💾 DATABASE LAYER
    MongoDB with Mongoose ODM
    ├── Users Collection (Authentication data)
    ├── Destinations Collection (Tourism sites)
    ├── Hotels Collection (Accommodation data)
    ├── Bookings Collection (Reservation data)
    └── Reviews Collection (User feedback)
                    ↓
📁 FILE STORAGE
    Multer middleware for image uploads
    ├── Destination images
    ├── Hotel galleries
    ├── User profile pictures
    └── Document attachments`,
        achievements: [
            "🔧 60% codebase reduction through unified architecture and modular design",
            "🔐 Complete authentication and authorization system with JWT and role management",
            "📁 Advanced file upload and processing capabilities with image validation",
            "📚 Production-ready REST API with comprehensive endpoint documentation",
            "⚡ High-performance async operations with MongoDB integration",
            "🛡️ Robust security implementation with input validation and sanitization",
            "🔄 Scalable middleware architecture for easy feature extension",
            "📊 Efficient data modeling for tourism-specific use cases",
            "🌍 Algerian tourism focus with localized data and cultural considerations",
            "🔍 Advanced search and filtering capabilities for destinations and hotels",
            "📈 Pagination and sorting for large dataset management",
            "🎯 RESTful API design principles with consistent response formats"
        ]
    },
    technicalFeatures: {
        authentication: {
            title: "🔐 Advanced Authentication System",
            features: [
                "JWT token-based authentication with configurable expiration",
                "Password hashing using bcrypt with salt rounds",
                "Role-based access control (User, Partner, Admin)",
                "Token refresh mechanism for enhanced security",
                "Email verification for new user registration"
            ]
        },
        fileHandling: {
            title: "📁 File Upload & Management",
            features: [
                "Multer middleware for multipart form data handling",
                "Image validation (type, size, dimensions)",
                "Automatic file renaming and storage organization",
                "Support for multiple file uploads",
                "Integration with cloud storage services (configurable)"
            ]
        },
        validation: {
            title: "✅ Data Validation & Sanitization",
            features: [
                "Joi schema validation for all endpoints",
                "Request body and query parameter validation",
                "Custom validation rules for tourism-specific data",
                "Error handling with detailed validation messages",
                "Input sanitization to prevent injection attacks"
            ]
        },
        database: {
            title: "💾 Database Design & Optimization",
            features: [
                "MongoDB with Mongoose ODM for schema definition",
                "Optimized queries with indexing for performance",
                "Data relationships and population for complex queries",
                "Aggregation pipelines for analytics and reporting",
                "Database connection pooling and error handling"
            ]
        },
        apiDesign: {
            title: "🌐 RESTful API Design",
            features: [
                "Consistent HTTP status codes and response formats",
                "Resource-based URL structure following REST principles",
                "Pagination and sorting for list endpoints",
                "Filtering and search capabilities",
                "API versioning strategy for future updates"
            ]
        }
    },
    codeExamples: {
        authentication: `// JWT Authentication Middleware
const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Access token required'
      });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');
    
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid token'
      });
    }
    
    req.user = user;
    next();
  } catch (error) {
    res.status(403).json({
      success: false,
      message: 'Invalid or expired token'
    });
  }
};`,
        validation: `// Joi Validation Schema
const destinationSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  description: Joi.string().min(10).max(1000).required(),
  location: Joi.object({
    wilaya: Joi.string().required(),
    commune: Joi.string().required(),
    coordinates: Joi.object({
      latitude: Joi.number().min(-90).max(90).required(),
      longitude: Joi.number().min(-180).max(180).required()
    })
  }).required(),
  category: Joi.string().valid(
    'historical', 'natural', 'cultural', 'adventure', 'religious'
  ).required(),
  amenities: Joi.array().items(Joi.string()),
  visitingHours: Joi.object({
    open: Joi.string().pattern(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/),
    close: Joi.string().pattern(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)
  }),
  entryFee: Joi.number().min(0)
});`,
        fileUpload: `// File Upload Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, '../uploads', req.params.type);
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});`,
        crudOperations: `// Destination CRUD Operations
// Get all destinations with filtering and pagination
exports.getDestinations = async (req, res) => {
  try {
    const { page = 1, limit = 10, category, wilaya, search } = req.query;
    
    const filter = {};
    if (category) filter.category = category;
    if (wilaya) filter['location.wilaya'] = wilaya;
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }
    
    const destinations = await Destination.find(filter)
      .populate('reviews')
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);
    
    const total = await Destination.countDocuments(filter);
    
    res.json({
      success: true,
      data: destinations,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalItems: total
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching destinations',
      error: error.message
    });
  }
};`
    },
    algerianTourismFocus: {
        title: "🇩🇿 Algerian Tourism Specialization",
        features: [
            "48 Algerian wilayas (provinces) integration",
            "Historical sites: Roman ruins, Islamic architecture",
            "Natural attractions: Sahara Desert, Mediterranean coast",
            "Cultural destinations: Traditional crafts, festivals",
            "Adventure tourism: Desert expeditions, mountain hiking",
            "Religious sites: Mosques, zawiyas, pilgrimage routes",
            "Local cuisine and culinary tourism features",
            "Traditional accommodation: Riads, desert camps"
        ]
    },
    apiEndpoints: [
        {
            method: "POST",
            path: "/auth/register",
            description: "User registration with email verification",
            auth: "Public"
        },
        {
            method: "POST",
            path: "/auth/login",
            description: "JWT authentication",
            auth: "Public"
        },
        {
            method: "GET",
            path: "/destinations",
            description: "List destinations with filtering and pagination",
            auth: "Public"
        },
        {
            method: "POST",
            path: "/destinations",
            description: "Create new destination",
            auth: "Admin/Partner"
        },
        {
            method: "GET",
            path: "/hotels",
            description: "Search hotels with filters",
            auth: "Public"
        },
        {
            method: "POST",
            path: "/bookings",
            description: "Create booking reservation",
            auth: "Authenticated User"
        },
        {
            method: "POST",
            path: "/reviews",
            description: "Submit review and rating",
            auth: "Authenticated User"
        },
        {
            method: "POST",
            path: "/upload/images",
            description: "Upload destination/hotel images",
            auth: "Admin/Partner"
        }
    ],
    deploymentReadiness: {
        title: "🚀 Production Deployment Ready",
        features: [
            "Environment-based configuration management",
            "Docker containerization support",
            "Health check endpoints for monitoring",
            "Logging and error tracking integration",
            "API documentation with Swagger/OpenAPI",
            "Security headers and CORS configuration",
            "Rate limiting and DDoS protection",
            "Database connection pooling and optimization"
        ]
    },
    futureEnhancements: [
        "Integration with payment gateways (CIB, SATIM)",
        "Real-time notifications for booking updates",
        "Advanced analytics and reporting dashboard",
        "Machine learning for personalized recommendations",
        "Multi-language support (Arabic, French, English)",
        "Integration with government tourism databases",
        "Weather API integration for destinations",
        "Social media sharing and integration features"
    ]
};

export default tourismApiProject;