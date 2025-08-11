// src/app/projects/data/enterprise-platform.ts

export const enterprisePlatformProject = {
    id: 'enterprise-platform',
    title: "Enterprise Management Platform",
    subtitle: "Full-Stack Web Application for Business Operations",
    description: "Complete full-stack enterprise solution for business management featuring modern React frontend, robust Node.js backend API, and MySQL database integration. Designed to streamline business operations with user management, inventory tracking, financial reporting, and analytics dashboard.",
    focus: "Full-Stack Development, Frontend Integration, Database Management, Enterprise Architecture",
    technologies: ["React", "Node.js", "Express.js", "MySQL", "JWT", "Redux", "Material-UI", "REST API", "Sequelize"],
    liveUrl: null, // Not currently deployed
    githubUrl: "https://github.com/kousaila502/enterprise-management-platform",
    apiDocsUrl: null, // Would be available when deployed
    featured: false,
    category: "fullstack",
    images: {
        main: "/projects/enterprise-platform.png",
        gallery: [
            {
                src: "/projects/enterprise-platform.png",
                alt: "Enterprise Management Platform Dashboard",
                caption: "Modern full-stack application with React frontend and Node.js backend"
            }
        ]
    },
    metrics: {
        frontend: "React + Redux",
        backend: "Node.js + Express",
        database: "MySQL + Sequelize",
        architecture: "RESTful API",
        authentication: "JWT-based",
        deployment: "Full-stack ready"
    },
    platformModules: {
        userManagement: {
            title: "👥 User Management System",
            features: [
                "User registration and authentication",
                "Role-based access control (Admin, Manager, Employee)",
                "Profile management with avatar uploads",
                "Department and team assignment",
                "Employee hierarchy and reporting structure"
            ]
        },
        inventoryManagement: {
            title: "📦 Inventory & Product Management",
            features: [
                "Product catalog with categories and SKUs",
                "Real-time inventory tracking and alerts",
                "Supplier management and purchase orders",
                "Stock movement history and analytics",
                "Automated reorder point calculations"
            ]
        },
        financialReporting: {
            title: "💰 Financial Management",
            features: [
                "Revenue and expense tracking",
                "Invoice generation and management",
                "Payment processing and reconciliation",
                "Financial reports and analytics",
                "Budget planning and variance analysis"
            ]
        },
        analytics: {
            title: "📊 Business Analytics Dashboard",
            features: [
                "Real-time business metrics visualization",
                "Sales performance tracking",
                "Inventory turnover analysis",
                "User activity and engagement metrics",
                "Customizable dashboard widgets"
            ]
        },
        projectManagement: {
            title: "🎯 Project & Task Management",
            features: [
                "Project creation and milestone tracking",
                "Task assignment and progress monitoring",
                "Team collaboration tools",
                "Gantt charts and timeline visualization",
                "Resource allocation and capacity planning"
            ]
        }
    },
    details: {
        challenge: "Developing a comprehensive full-stack enterprise management solution that integrates modern frontend technologies with a robust backend architecture, providing seamless user experience while managing complex business operations and data relationships.",
        solution: "Created an end-to-end application using React for the frontend with Redux state management, Node.js/Express backend with RESTful API design, and MySQL database with Sequelize ORM. Implemented JWT authentication, real-time updates, and responsive design for enterprise-scale operations.",
        architecture: `Enterprise Management Platform Architecture:

🖥️ FRONTEND LAYER (React)
    ├── React Components with hooks and context
    ├── Redux for global state management
    ├── Material-UI for modern, responsive design
    ├── Axios for API communication
    └── React Router for navigation
                    ↓
🌐 API COMMUNICATION LAYER
    ├── RESTful API endpoints
    ├── JWT token-based authentication
    ├── Request/Response interceptors
    ├── Error handling and retry logic
    └── Real-time updates with WebSocket
                    ↓
⚙️ BACKEND LAYER (Node.js + Express)
    ├── Express.js server with middleware stack
    ├── JWT authentication and authorization
    ├── Input validation and sanitization
    ├── Business logic and service layer
    ├── File upload handling with Multer
    └── API rate limiting and security headers
                    ↓
🗄️ DATABASE LAYER (MySQL)
    ├── Sequelize ORM with model definitions
    ├── Database migrations and seeders
    ├── Relationships and associations
    ├── Indexes for query optimization
    └── Connection pooling and transactions
                    ↓
📊 DATA MODELS
    ├── Users (Authentication and profiles)
    ├── Products (Inventory management)
    ├── Orders (Sales and purchasing)
    ├── Projects (Task and project tracking)
    ├── Financial Records (Accounting data)
    └── Audit Logs (Activity tracking)`,
        achievements: [
            "🔧 Complete full-stack development solution with modern technology stack",
            "🎨 Modern React frontend with responsive Material-UI design",
            "⚡ Robust backend API with Express.js and comprehensive middleware",
            "🔒 Enterprise-scale authentication and authorization system",
            "💾 Efficient database design with MySQL and Sequelize ORM",
            "📊 Real-time dashboard with business analytics and reporting",
            "🔄 State management with Redux for complex application state",
            "📱 Responsive design ensuring compatibility across all devices",
            "🛡️ Security best practices with input validation and JWT tokens",
            "📈 Scalable architecture supporting enterprise-level operations",
            "🔍 Advanced search and filtering capabilities",
            "📋 Comprehensive CRUD operations for all business entities"
        ]
    },
    technicalFeatures: {
        frontend: {
            title: "🎨 Modern React Frontend",
            features: [
                "React functional components with hooks (useState, useEffect, useContext)",
                "Redux Toolkit for efficient state management",
                "Material-UI component library for consistent design",
                "React Router for client-side routing and navigation",
                "Form handling with validation using Formik and Yup"
            ]
        },
        backend: {
            title: "⚙️ Robust Node.js Backend",
            features: [
                "Express.js server with modular route structure",
                "Middleware for authentication, logging, and error handling",
                "RESTful API design with consistent response formats",
                "Input validation using Joi or express-validator",
                "File upload handling with Multer middleware"
            ]
        },
        database: {
            title: "🗄️ MySQL Database Design",
            features: [
                "Sequelize ORM for database operations and migrations",
                "Normalized database schema with proper relationships",
                "Indexes and constraints for data integrity",
                "Connection pooling for optimal performance",
                "Database transactions for complex operations"
            ]
        },
        security: {
            title: "🔒 Enterprise Security",
            features: [
                "JWT authentication with refresh token mechanism",
                "Password hashing using bcrypt with salt rounds",
                "Role-based access control with middleware protection",
                "Input sanitization and SQL injection prevention",
                "CORS configuration and security headers"
            ]
        },
        performance: {
            title: "⚡ Performance Optimization",
            features: [
                "Frontend code splitting and lazy loading",
                "API response caching and optimization",
                "Database query optimization with proper indexing",
                "Image compression and optimization for uploads",
                "Pagination for large datasets"
            ]
        }
    },
    codeExamples: {
        reactComponent: `// React Component with Hooks and Material-UI
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Card, CardContent, Typography, Button,
  Grid, Paper, CircularProgress
} from '@material-ui/core';
import { fetchProducts, createProduct } from '../store/slices/productSlice';

const ProductDashboard = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(state => state.products);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleCreateProduct = async (productData) => {
    try {
      await dispatch(createProduct(productData)).unwrap();
      // Show success notification
    } catch (error) {
      // Handle error
    }
  };

  if (loading) return <CircularProgress />;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Product Management
        </Typography>
      </Grid>
      {products.map(product => (
        <Grid item xs={12} md={6} lg={4} key={product.id}>
          <Card>
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography color="textSecondary">
                Stock: {product.quantity}
              </Typography>
              <Button 
                onClick={() => setSelectedProduct(product)}
                variant="contained" 
                color="primary"
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};`,
        expressApi: `// Express.js API with Sequelize
const express = require('express');
const { Product, Category } = require('../models');
const { authenticateToken, requireRole } = require('../middleware/auth');
const { validateProduct } = require('../middleware/validation');

const router = express.Router();

// Get all products with pagination and filtering
router.get('/products', async (req, res) => {
  try {
    const { page = 1, limit = 10, category, search } = req.query;
    
    const whereClause = {};
    if (category) whereClause.categoryId = category;
    if (search) {
      whereClause[Op.or] = [
        { name: { [Op.iLike]: \`%\${search}%\` } },
        { description: { [Op.iLike]: \`%\${search}%\` } }
      ];
    }

    const products = await Product.findAndCountAll({
      where: whereClause,
      include: [{ model: Category, as: 'category' }],
      limit: parseInt(limit),
      offset: (page - 1) * limit,
      order: [['createdAt', 'DESC']]
    });

    res.json({
      success: true,
      data: products.rows,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(products.count / limit),
        totalItems: products.count
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching products',
      error: error.message
    });
  }
});

// Create new product
router.post('/products', 
  authenticateToken, 
  requireRole(['admin', 'manager']),
  validateProduct,
  async (req, res) => {
    try {
      const product = await Product.create({
        ...req.body,
        createdBy: req.user.id
      });

      res.status(201).json({
        success: true,
        data: product,
        message: 'Product created successfully'
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Error creating product',
        error: error.message
      });
    }
  }
);`,
        sequelizeModel: `// Sequelize Model Definition
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [2, 255]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sku: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true
      }
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        min: 0
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0
      }
    },
    categoryId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Categories',
        key: 'id'
      }
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    indexes: [
      { fields: ['sku'] },
      { fields: ['categoryId'] },
      { fields: ['name'] }
    ]
  });

  Product.associate = (models) => {
    Product.belongsTo(models.Category, {
      foreignKey: 'categoryId',
      as: 'category'
    });
    Product.belongsTo(models.User, {
      foreignKey: 'createdBy',
      as: 'creator'
    });
  };

  return Product;
};`
    },
    businessModules: [
        {
            module: "User Management",
            description: "Complete user lifecycle with roles and permissions",
            features: ["Registration/Login", "Profile Management", "Role Assignment", "Department Structure"]
        },
        {
            module: "Inventory Management",
            description: "Comprehensive product and stock management",
            features: ["Product Catalog", "Stock Tracking", "Supplier Management", "Purchase Orders"]
        },
        {
            module: "Financial Management",
            description: "Business financial operations and reporting",
            features: ["Invoice Generation", "Payment Tracking", "Expense Management", "Financial Reports"]
        },
        {
            module: "Project Management",
            description: "Task and project tracking system",
            features: ["Project Creation", "Task Assignment", "Progress Tracking", "Team Collaboration"]
        },
        {
            module: "Analytics Dashboard",
            description: "Business intelligence and reporting",
            features: ["Real-time Metrics", "Custom Reports", "Data Visualization", "Performance KPIs"]
        }
    ],
    apiEndpoints: [
        {
            method: "POST",
            path: "/auth/login",
            description: "User authentication with JWT",
            auth: "Public"
        },
        {
            method: "GET",
            path: "/users",
            description: "Get users with pagination and filtering",
            auth: "Admin/Manager"
        },
        {
            method: "GET",
            path: "/products",
            description: "Get products with search and filtering",
            auth: "Authenticated"
        },
        {
            method: "POST",
            path: "/products",
            description: "Create new product",
            auth: "Admin/Manager"
        },
        {
            method: "GET",
            path: "/orders",
            description: "Get orders with status filtering",
            auth: "Authenticated"
        },
        {
            method: "POST",
            path: "/invoices",
            description: "Generate new invoice",
            auth: "Admin/Manager"
        },
        {
            method: "GET",
            path: "/analytics/dashboard",
            description: "Get dashboard analytics",
            auth: "Manager/Admin"
        },
        {
            method: "GET",
            path: "/projects",
            description: "Get projects with team filtering",
            auth: "Authenticated"
        }
    ],
    deploymentReadiness: {
        title: "🚀 Production Deployment Configuration",
        frontend: [
            "React build optimization with code splitting",
            "Environment-based configuration management",
            "Static asset optimization and compression",
            "Progressive Web App (PWA) capabilities",
            "SEO optimization and meta tag management"
        ],
        backend: [
            "Production environment configuration",
            "Database connection pooling and optimization",
            "Error logging and monitoring integration",
            "API rate limiting and security headers",
            "Health check endpoints for load balancers"
        ],
        database: [
            "Database migration scripts and seeders",
            "Backup and recovery procedures",
            "Performance indexing and optimization",
            "Connection security and encryption",
            "Data validation and integrity constraints"
        ]
    },
    futureEnhancements: [
        "Real-time notifications with WebSocket integration",
        "Advanced analytics with machine learning insights",
        "Mobile application with React Native",
        "Integration with third-party services (payment gateways, CRM)",
        "Advanced reporting with PDF generation",
        "Multi-tenant architecture for SaaS deployment",
        "Internationalization and multi-language support",
        "Advanced workflow automation and approval processes"
    ]
};

export default enterprisePlatformProject;