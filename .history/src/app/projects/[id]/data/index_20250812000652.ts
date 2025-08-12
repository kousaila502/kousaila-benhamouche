// src/app/projects/data/index.ts

// Import all project data
import userServiceProject from './user-service-microservice';
import orderServiceProject from './order-service-microservice';
import ecommerceMultiCloudProject from './ecommerce-microservices';
import eSocialAssistanceProject from './e-social-assistance';
import tourismApiProject from './tourism-api';
import enterprisePlatformProject from './enterprise-platform';
import devopsLabProject from './devops-lab';

// Project data array with strategic ordering
export const projectsData = [
    // Featured Microservices (Production & Revenue-generating)
    userServiceProject,
    orderServiceProject,
    
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
    ecommerceMultiCloudProject,
    eSocialAssistanceProject,
    tourismApiProject,
    enterprisePlatformProject,
    devopsLabProject
};

// Project categories for filtering
export const projectCategories = {
    microservice: [userServiceProject, orderServiceProject],
    platform: [ecommerceMultiCloudProject],
    fullstack: [eSocialAssistanceProject, enterprisePlatformProject],
    backend: [tourismApiProject],
    devops: [devopsLabProject]
};

// Featured projects (for homepage showcase)
export const featuredProjects = projectsData.filter(project => project.featured);

// Project statistics
export const projectStats = {
    total: projectsData.length,
    featured: featuredProjects.length,
    categories: Object.keys(projectCategories).length,
    technologies: [...new Set(projectsData.flatMap(p => p.technologies))].length,
    liveProjects: projectsData.filter(p => p.liveUrl).length
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

// Export types for TypeScript
export type Project = typeof userServiceProject;
export type ProjectCategory = keyof typeof projectCategories;

export default projectsData;