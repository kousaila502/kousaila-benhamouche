// src/app/projects/data/index.ts

// Import all project data
import userServiceProject from './user-service-microservice';
import orderServiceProject from './order-service-microservice';
import productsMicroserviceProject from './products-microservice';
import cartApiServiceProject from './cart-api-service';
import ecommerceMultiCloudProject from './ecommerce-microservices';
import eSocialAssistanceProject from './e-social-assistance';
import tourismApiProject from './tourism-api';
import enterprisePlatformProject from './enterprise-platform';
import devopsLabProject from './devops-lab';

// Project data array with strategic ordering
export const projectsData = [
    // Featured Production Microservices (Revenue & User generating)
    userServiceProject,
    orderServiceProject,
    productsMicroserviceProject,
    cartApiServiceProject,
    
    // Multi-Cloud Platform (Flagship project)
    ecommerceMultiCloudProject,
    
    // Social Impact Platform (Full-stack excellence)
    eSocialAssistanceProject,
    
    // Backend & DevOps Expertise
    tourismApiProject,
    enterprisePlatformProject,
    devopsLabProject
];

// Export individual projects for direct access
export {
    userServiceProject,
    orderServiceProject,
    productsMicroserviceProject,
    cartApiServiceProject,
    ecommerceMultiCloudProject,
    eSocialAssistanceProject,
    tourismApiProject,
    enterprisePlatformProject,
    devopsLabProject
};

// Project categories for filtering
export const projectCategories = {
    microservice: [
        userServiceProject, 
        orderServiceProject, 
        productsMicroserviceProject, 
        cartApiServiceProject
    ],
    platform: [ecommerceMultiCloudProject],
    fullstack: [eSocialAssistanceProject, enterprisePlatformProject],
    backend: [tourismApiProject],
    devops: [devopsLabProject]
};

// Featured projects (for homepage showcase)
export const featuredProjects = projectsData.filter(project => project.featured);

// Microservices specifically (for specialized showcase)
export const microservicesProjects = projectCategories.microservice;

// Project statistics
export const projectStats = {
    total: projectsData.length,
    featured: featuredProjects.length,
    microservices: microservicesProjects.length,
    categories: Object.keys(projectCategories).length,
    technologies: [...new Set(projectsData.flatMap(p => p.technologies))].length,
    liveProjects: projectsData.filter(p => p.liveUrl).length,
    productionMicroservices: microservicesProjects.filter(p => p.liveUrl).length
};

// Technology expertise mapping
export const technologyStack = {
    languages: ['Python', 'Java', 'JavaScript', 'TypeScript'],
    frameworks: ['FastAPI', 'Spring Boot', 'Express.js', 'React'],
    databases: ['PostgreSQL', 'MongoDB', 'Redis'],
    cloud: ['Kubernetes', 'Heroku', 'Vercel', 'Azure', 'GCP'],
    devops: ['Docker', 'ArgoCD', 'GitHub Actions', 'CI/CD']
};

// Helper function to get project by ID
export const getProjectById = (id: string) => {
    return projectsData.find(project => project.id === id);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category: string) => {
    return projectCategories[category as keyof typeof projectCategories] || [];
};

// Helper function to search projects
export const searchProjects = (query: string) => {
    const lowercaseQuery = query.toLowerCase();
    return projectsData.filter(project => 
        project.title.toLowerCase().includes(lowercaseQuery) ||
        project.description.toLowerCase().includes(lowercaseQuery) ||
        project.technologies.some(tech => tech.toLowerCase().includes(lowercaseQuery)) ||
        project.focus.toLowerCase().includes(lowercaseQuery)
    );
};

// Helper function to get microservices by technology
export const getMicroservicesByTechnology = (technology: string) => {
    return microservicesProjects.filter(project =>
        project.technologies.some(tech => 
            tech.toLowerCase().includes(technology.toLowerCase())
        )
    );
};

// Portfolio metrics for showcase
export const portfolioMetrics = {
    totalMicroservices: microservicesProjects.length,
    revenueGenerated: "$1,593.95", // From order service
    activeUsers: "17+", // From user service
    technologies: {
        backend: ['Python (FastAPI)', 'Java (Spring Boot)', 'Node.js (Express)'],
        databases: ['PostgreSQL', 'MongoDB Atlas', 'Redis'],
        deployment: ['Kubernetes', 'Heroku', 'Docker']
    },
    achievements: [
        '4 Production Microservices',
        'Revenue Generating Systems',
        'Multi-Cloud Deployment',
        '99.9% Uptime Achievement'
    ]
};

// Export types for TypeScript
export type Project = typeof userServiceProject;
export type ProjectCategory = keyof typeof projectCategories;
export type MicroserviceProject = typeof userServiceProject;

export default projectsData;