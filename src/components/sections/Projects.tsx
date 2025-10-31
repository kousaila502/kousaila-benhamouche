'use client';

import { motion } from 'framer-motion';
import {
  Activity,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  DollarSign,
  ExternalLink,
  Gauge,
  GitBranch,
  Layers,
  PlayCircle,
  Server,
  Shield,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {
  SiDocker,
  SiExpress,
  SiFastapi,
  SiGithub,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';

// Enhanced technology icons mapping
const techIconMap: Record<string, { icon: React.ReactNode; color: string }> = {
  Python: { icon: <SiPython />, color: 'text-yellow-500' },
  FastAPI: { icon: <SiFastapi />, color: 'text-green-500' },
  'Node.js': { icon: <SiNodedotjs />, color: 'text-green-600' },
  'Express.js': { icon: <SiExpress />, color: 'text-gray-700' },
  Java: {
    icon: <span className="font-bold">☕</span>,
    color: 'text-orange-600',
  },
  'Spring Boot': { icon: <SiSpringboot />, color: 'text-green-600' },
  React: { icon: <SiReact />, color: 'text-blue-500' },
  TypeScript: { icon: <SiTypescript />, color: 'text-blue-600' },
  PostgreSQL: { icon: <SiPostgresql />, color: 'text-blue-700' },
  MongoDB: { icon: <SiMongodb />, color: 'text-green-500' },
  MySQL: { icon: <SiMysql />, color: 'text-blue-600' },
  Docker: { icon: <SiDocker />, color: 'text-blue-500' },
  Kubernetes: { icon: <SiKubernetes />, color: 'text-blue-600' },
  JWT: { icon: <Shield />, color: 'text-purple-500' },
  'JWT Auth': { icon: <Shield />, color: 'text-purple-500' },
  'Tailwind CSS': { icon: <SiTailwindcss />, color: 'text-cyan-500' },
  Vite: { icon: <SiVercel />, color: 'text-purple-500' },
  ArgoCD: { icon: <GitBranch />, color: 'text-orange-500' },
  Redis: { icon: <Database />, color: 'text-red-500' },
  Elasticsearch: { icon: <Database />, color: 'text-yellow-600' },
  Grafana: { icon: <Activity />, color: 'text-orange-500' },
  'CI/CD': { icon: <GitBranch />, color: 'text-blue-500' },
  Neon: { icon: <Zap />, color: 'text-green-400' },
  SQLAlchemy: { icon: <Database />, color: 'text-red-600' },
  'Business Analytics': { icon: <TrendingUp />, color: 'text-purple-600' },
  'Cloud Platforms': { icon: <Cloud />, color: 'text-blue-400' },
  'Monitoring Tools': { icon: <Gauge />, color: 'text-green-500' },
  Terraform: { icon: <Server />, color: 'text-purple-600' },
  Prometheus: { icon: <Activity />, color: 'text-orange-600' },
};

const Projects = () => {
  // 🚀 PRODUCTION MICROSERVICES - Your crown jewels
  const productionMicroservices = [
    {
      id: 'user-service-microservice',
      title: 'FastAPI-powered User Authentication & Access Control Service',
      subtitle: 'Role-Based Authentication System',
      description:
        'Secure authentication and authorization service with role-based access control, token management, and user registration APIs built for scalable web applications.',
      technologies: [
        'Python',
        'FastAPI',
        'PostgreSQL',
        'JWT',
        'Kubernetes',
        'Docker',
        'ArgoCD',
        'Neon',
        'SQLAlchemy',
      ],
      metrics: {
        Endpoints: '26',
        Database: 'PostgreSQL',
        deployment: 'ArgoCD · GKE (GCP)',
        responseTime: '<50ms',
      },
      links: {
        live: 'https://34.95.5.30.nip.io/user/docs',
        github: 'https://github.com/kousaila502/user-service-microservice',
        health: 'https://34.95.5.30.nip.io/user/health',
      },
      image: '/projects/user-service-microservice/swagger-user-service.PNG',
      gradient: 'from-purple-600 to-blue-600',
    },
    {
      id: 'order-service-microservice',
      title: 'Node.js Service for Order Processing and Payment Workflow',
      subtitle: 'E-Commerce Order & Checkout System',
      description:
        'Handles order creation, checkout workflows, and payment integration with robust error handling and asynchronous processing for e-commerce platforms.',
      technologies: [
        'Python',
        'FastAPI',
        'PostgreSQL',
        'SQLAlchemy',
        'Kubernetes',
        'Docker',
        'ArgoCD',
        'Redis',
        'Business Analytics',
      ],
      metrics: {
        Endpoints: '11',
        Database: 'PostgreSQL',
        deployment: 'ArgoCD · GKE (GCP)',
        responseTime: '<60ms',
      },
      links: {
        live: 'https://34.95.5.30.nip.io/docs',
        github: 'https://github.com/kousaila502/order-service-microservice',
        health: 'https://34.95.5.30.nip.io/orders/health',
      },
      image: '/projects/order-service-microservice/admin-order-stats.PNG',
      gradient: 'from-green-600 to-blue-600',
    },
    {
      id: 'products-microservice',
      title: 'Express-based Microservice for Managing Products and Stock',
      subtitle: 'E-Commerce Product Management API',
      description:
        'RESTful API for managing products, categories, and inventory updates, supporting efficient data access and seamless integration with client applications.',
      technologies: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'Mongoose',
        'Heroku',
        'Docker',
        'JWT',
        'Swagger',
        'CI/CD',
      ],
      metrics: {
        endpoints: '25',
        database: 'MongoDB Atlas',
        deployment: 'Heroku',
        responseTime: '<150ms',
      },
      links: {
        live: 'https://ecommerce-product-service-56575270905a.herokuapp.com/api-docs',
        github: 'https://github.com/kousaila502/products-microservice',
        health:
          'https://ecommerce-product-service-56575270905a.herokuapp.com/health',
      },
      image: '/projects/products-microservice/api-docs.PNG',
      gradient: 'from-orange-600 to-red-600',
    },
    {
      id: 'cart-api-service',
      title: 'Reactive Java Spring Boot Service for Cart Persistence and Sync',
      subtitle: 'E-Commerce Shopping Cart Service',
      description:
        'Manages shopping cart sessions, product synchronization, and real-time updates across multiple devices using a reactive architecture for smooth user experience.',
      technologies: [
        'Java',
        'Spring Boot',
        'WebFlux',
        'Redis',
        'Upstash',
        'Heroku',
        'JWT',
        'Reactive Programming',
      ],
      metrics: {
        Endpoints: '15',
        Database: 'Redis',
        deployment: 'Heroku',
        responseTime: '<100ms',
      },
      links: {
        live: 'https://ecommerce-cart-service-f2a908c60d8a.herokuapp.com/swagger-ui.html',
        github: 'https://github.com/kousaila502/Cart-API-Service',
        health:
          'https://ecommerce-cart-service-f2a908c60d8a.herokuapp.com/health',
      },
      image: '/projects/cart-api-service/swagger-ui.PNG',
      gradient: 'from-blue-600 to-purple-600',
    },
  ];

  // 🌐 FULL-STACK PLATFORMS
  const fullStackProjects = [
    {
      id: 'e-social-assistance',
      title: 'E-Social-Assistance Platform',
      subtitle: 'Digital Social Welfare Management System',
      description:
        'A complete web platform designed for public and private institutions to manage social welfare programs efficiently. Includes secure role-based access, budget tracking, and automated payment workflows tailored for Algerian administrative processes.',
      technologies: [
        'React',
        'TypeScript',
        'Node.js',
        'Express.js',
        'MongoDB',
        'JWT Auth',
        'Tailwind CSS',
        'Vite',
      ],
      features: [
        '4 User Roles',
        '8-Step Approval Workflow',
        'Real-time Data Synchronization',
        'Localized Interface for Algerian Standards',
      ],
      links: {
        live: 'https://enterprise-social-platform.vercel.app',
        github: 'https://github.com/kousaila502/enterprise-social-platform',
        docs: 'https://enterprise-social-platform.onrender.com/api-docs',
      },
      image: '/projects/esocial.PNG',
      badge: 'Production Ready',
    },
    {
      id: 'ecommerce-microservices',
      title: 'E-Commerce DevOps Automation Platform',
      subtitle: 'Scalable CI/CD and GitOps Infrastructure for Online Stores',
      description:
        'A production-ready DevOps platform tailored for eCommerce systems, integrating GitOps principles for continuous deployment and scalability. Built using Kubernetes and ArgoCD to ensure automated rollouts, seamless updates, and cloud-native reliability across multiple environments.',
      technologies: [
        'React',
        'Python',
        'Node.js',
        'Java',
        'Docker',
        'Kubernetes',
        'ArgoCD',
        'Grafana',
      ],
      features: [
        'Full CI/CD Workflow (GitHub Actions + ArgoCD)',
        'Kubernetes-Based Deployment on GCP',
        'Containerized Microservices Architecture',
        'Optimized for Scalable eCommerce Operations',
      ],
      links: {
        live: 'https://ecommerce-app-omega-two-64.vercel.app',
        github:
          'https://github.com/kousaila502/ecommerce-microservices-platform',
        gateway: 'https://34.95.5.30.nip.io',
      },
      image: '/projects/ecommerce.PNG',
      badge: 'Research Platform',
    },
  ];

  // ⚙️ BACKEND & API PROJECTS
  const backendProjects = [
    {
      id: 'tourism-api',
      title: 'Tourism REST API',
      subtitle: 'Comprehensive Backend Service',
      description:
        'Production-ready REST API for Algerian tourism with authentication, file handling, and role management.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Swagger'],
      features: [
        '60% Code Reduction',
        'Complete Auth System',
        'File Uploads',
        'API Documentation',
      ],
      links: {
        github: 'https://github.com/kousaila502/tourism-rest-api',
      },
      image: '/projects/tourism-api.png',
      status: 'Portfolio',
    },
    {
      id: 'enterprise-platform',
      title: 'Enterprise Management Platform',
      subtitle: 'Full-Stack Business Solution',
      description:
        'Complete enterprise management solution with React frontend, Node.js backend, and MySQL integration.',
      technologies: ['React', 'Node.js', 'MySQL', 'Express.js'],
      features: [
        'Full-Stack Solution',
        'Enterprise Architecture',
        'Database Integration',
        'Modern UI/UX',
      ],
      links: {
        github: 'https://github.com/kousaila502/enterprise-management-platform',
      },
      image: '/projects/enterprise-platform.png',
      status: 'Development',
    },
  ];

  // 🏗️ DEVOPS & INFRASTRUCTURE
  const devopsProjects = [
    {
      id: 'devops-lab',
      title: 'DevOps Infrastructure Lab',
      subtitle: '80% Cost Optimization Research',
      description:
        'Advanced infrastructure automation achieving $3,660 annual savings through intelligent resource management.',
      technologies: [
        'Kubernetes',
        'Docker',
        'Terraform',
        'Prometheus',
        'Grafana',
        'Cloud Platforms',
      ],
      features: [
        '80% Cost Reduction',
        '95% Automation',
        'Multi-Cloud',
        'Research Thesis',
      ],
      links: {
        github: 'https://github.com/kousaila502/devops-infrastructure-lab',
      },
      image: '/projects/devops-lab.png',
      status: 'Research',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  const heroVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 -right-32 w-64 h-64 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-20 blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 -left-32 w-96 h-96 bg-gradient-to-tr from-green-200 to-purple-200 rounded-full opacity-15 blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section Header */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants} // uses your existing variant
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-sm font-semibold">
              <Layers className="w-4 h-4" />
              Portfolio Showcase
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants} // uses your existing variant
            className="text-5xl md:text-7xl font-black bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6"
          >
            Full-Stack & DevOps Engineering
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              for Modern Teams
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants} // uses your existing variant
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            I build scalable web applications and cloud-native infrastructures
            that combine clean design with reliable engineering. From
            production-ready APIs to automated CI/CD deployments, I help teams
            turn ideas into maintainable, production-grade software.
          </motion.p>
        </motion.div>

        {/* 🚀 Production Microservices */}
        <motion.div
          className="mb-20 relative"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full font-bold text-lg shadow-lg mb-4">
              <Zap className="w-5 h-5" />
              Production Microservices
              <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
            </div>

            <h2 className="text-4xl font-black text-gray-900 mb-3">
              Production Microservices
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A showcase of live, production-ready backend systems designed for
              scalability, reliability, and automation.
            </p>
          </motion.div>

          {/* Horizontal Scroll Wrapper */}
          <div className="relative group">
            {/* Scroll Buttons */}
            <button
              onClick={() => {
                const el = document.getElementById('microScroll');
                if (el) el.scrollBy({ left: -450, behavior: 'smooth' });
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-gradient-to-r from-white/70 to-transparent shadow-xl backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105"
            >
              <ChevronLeft className="w-7 h-7 text-gray-700" />
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('microScroll');
                if (el) el.scrollBy({ left: 450, behavior: 'smooth' });
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-gradient-to-l from-white/70 to-transparent shadow-xl backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105"
            >
              <ChevronRight className="w-7 h-7 text-gray-700" />
            </button>

            {/* Scrollable Cards */}
            <div
              id="microScroll"
              className="flex overflow-x-auto gap-6 px-4 pb-6 scroll-smooth snap-x snap-mandatory"
              style={{
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {productionMicroservices.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={heroVariants}
                  className="relative snap-center flex-shrink-0 w-[440px] h-auto bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden group hover:shadow-3xl transition-all duration-400"
                  whileHover={{ y: -6, transition: { duration: 0.28 } }}
                >
                  {/* Live badge */}
                  {project.links?.live && (
                    <div className="absolute top-4 right-4 z-20">
                      <div className="flex items-center gap-2 px-3 py-1 bg-green-500 text-white rounded-full text-xs font-bold shadow-lg">
                        <div className="w-2 h-2 bg-green-200 rounded-full animate-pulse" />
                        LIVE
                      </div>
                    </div>
                  )}

                  {/* Gradient Header */}
                  <div
                    className={`h-20 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="absolute top-3 left-3">
                      <Code2 className="w-7 h-7 text-white/85" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight">
                        {project.subtitle}
                      </h3>
                      <p className="text-blue-600 font-semibold mb-3 text-sm uppercase tracking-wide">
                        {project.title}
                      </p>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-4">
                        {project.description}
                      </p>
                    </div>

                    {/* Metrics */}
                    {project.metrics && (
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        {Object.entries(project.metrics)
                          .slice(0, 4)
                          .map(([key, value]) => (
                            <div
                              key={key}
                              className="bg-gray-50 rounded-xl p-2 text-center"
                            >
                              <div className="text-sm font-semibold text-gray-900">
                                {value}
                              </div>
                              <div className="text-[10px] text-gray-500 capitalize">
                                {key.replace(/([A-Z])/g, ' $1')}
                              </div>
                            </div>
                          ))}
                      </div>
                    )}

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies
                        .slice(0, 6)
                        .map((tech, techIndex) => {
                          const techInfo = techIconMap[tech];
                          return (
                            <span
                              key={techIndex}
                              className="flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                            >
                              {techInfo && (
                                <span className={`${techInfo.color}`}>
                                  {techInfo.icon}
                                </span>
                              )}
                              {tech}
                            </span>
                          );
                        })}
                      {project.technologies.length > 6 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                          +{project.technologies.length - 6} more
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-2">
                      {project.links?.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-sm hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow"
                        >
                          <BookOpen className="w-4 h-4" />
                          API Docs
                        </a>
                      )}
                      {project.links?.health && (
                        <a
                          href={project.links.health}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 bg-green-600 text-white rounded-lg font-semibold text-sm hover:bg-green-700 transition-colors duration-200"
                        >
                          <Activity className="w-4 h-4" />
                          Health
                        </a>
                      )}
                      <Link
                        href={`/projects/${project.id}`}
                        className="flex items-center gap-2 px-3 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold text-sm hover:bg-gray-50 transition-colors"
                      >
                        Details
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 🌐 FULL-STACK PLATFORMS */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold text-lg shadow-lg mb-4">
              <Layers className="w-5 h-5" />
              🌐 Full-Stack Platforms
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-3">
              Complete Digital Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end platforms with modern architecture and real-world
              impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {fullStackProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 group hover:shadow-2xl transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/70 text-white rounded-full text-xs font-bold backdrop-blur-sm">
                      {project.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-purple-600 font-semibold mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {project.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 5).map((tech, techIndex) => {
                      const techInfo = techIconMap[tech];
                      return (
                        <span
                          key={techIndex}
                          className="flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium"
                        >
                          {techInfo && (
                            <span className={`text-sm ${techInfo.color}`}>
                              {techInfo.icon}
                            </span>
                          )}
                          {tech}
                        </span>
                      );
                    })}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-2">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-2 bg-purple-600 text-white rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors"
                      >
                        <PlayCircle className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    <Link
                      href={`/projects/${project.id}`}
                      className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ⚙️ BACKEND & 🏗️ DEVOPS - Combined Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-bold text-lg shadow-lg mb-4">
              <Server className="w-5 h-5" />
              ⚙️ Backend & 🏗️ Infrastructure
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-3">
              Technical Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Backend APIs, DevOps automation, and infrastructure optimization
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...backendProjects, ...devopsProjects].map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 group hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                {/* Compact image */}
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2">
                    <span className="px-2 py-1 bg-black/70 text-white rounded text-xs font-medium backdrop-blur-sm">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Compact content */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-orange-600 font-semibold mb-2 text-sm">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Compact features */}
                  <div className="grid grid-cols-2 gap-1 mb-3">
                    {project.features.slice(0, 4).map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1 text-xs text-gray-600"
                      >
                        <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Compact tech stack */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => {
                      const techInfo = techIconMap[tech];
                      return (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>

                  {/* Compact actions */}
                  <div className="flex gap-2">
                    <Link
                      href={`/projects/${project.id}`}
                      className="flex-1 px-3 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium text-center hover:bg-gray-800 transition-colors"
                    >
                      View Details
                    </Link>
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors"
                      >
                        <SiGithub className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 🔥 CALL TO ACTION - Revenue Highlight */}
        <motion.div
          className="mt-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={heroVariants}
        >
          <div className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white/5 to-transparent rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-bold mb-6"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <DollarSign className="w-4 h-4" />
                Revenue Generating
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </motion.div>

              <h3 className="text-3xl md:text-5xl font-black text-white mb-6">
                Production Systems
                <br />
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Generating Real Revenue
                </span>
              </h3>

              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Experience{' '}
                <span className="font-bold text-green-400">
                  4 live microservices
                </span>{' '}
                processing{' '}
                <span className="font-bold text-green-400">$1,593.95</span> in
                actual revenue, serving{' '}
                <span className="font-bold text-blue-400">
                  17+ active users
                </span>{' '}
                with
                <span className="font-bold text-purple-400">
                  {' '}
                  99.9% uptime
                </span>{' '}
                across multiple technologies.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                <div className="text-center">
                  <div className="text-3xl font-black text-green-400 mb-2">
                    $1,593.95
                  </div>
                  <div className="text-sm text-gray-400">Revenue Processed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-blue-400 mb-2">
                    17+
                  </div>
                  <div className="text-sm text-gray-400">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-purple-400 mb-2">
                    99.9%
                  </div>
                  <div className="text-sm text-gray-400">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-orange-400 mb-2">
                    60%
                  </div>
                  <div className="text-sm text-gray-400">Cost Reduction</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://34.95.5.30.nip.io/user/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-bold text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200 shadow-2xl group"
                >
                  <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  User API
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="https://34.95.5.30.nip.io/orders/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl font-bold text-lg hover:from-green-600 hover:to-blue-600 transition-all duration-200 shadow-2xl group"
                >
                  <DollarSign className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Order API
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="https://ecommerce-product-service-56575270905a.herokuapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-2xl group"
                >
                  <Server className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Product API
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="https://ecommerce-cart-service-f2a908c60d8a.herokuapp.com/swagger-ui.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-bold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-2xl group"
                >
                  <Database className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Cart API
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Tech Stack Showcase */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-gray-400 text-sm mb-4">
                  Powered by modern technology stack
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  {[
                    {
                      name: 'FastAPI',
                      icon: <SiFastapi />,
                      color: 'text-green-400',
                    },
                    {
                      name: 'Spring Boot',
                      icon: <SiSpringboot />,
                      color: 'text-green-500',
                    },
                    {
                      name: 'Node.js',
                      icon: <SiNodedotjs />,
                      color: 'text-green-600',
                    },
                    {
                      name: 'React',
                      icon: <SiReact />,
                      color: 'text-blue-400',
                    },
                    {
                      name: 'Kubernetes',
                      icon: <SiKubernetes />,
                      color: 'text-blue-500',
                    },
                    {
                      name: 'Docker',
                      icon: <SiDocker />,
                      color: 'text-blue-400',
                    },
                    {
                      name: 'PostgreSQL',
                      icon: <SiPostgresql />,
                      color: 'text-blue-600',
                    },
                    {
                      name: 'MongoDB',
                      icon: <SiMongodb />,
                      color: 'text-green-500',
                    },
                  ].map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      className="flex items-center gap-2 text-gray-300 text-sm"
                      whileHover={{ scale: 1.1, color: '#ffffff' }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className={`text-xl ${tech.color}`}>
                        {tech.icon}
                      </span>
                      {tech.name}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 🎯 PORTFOLIO CTA */}
        <motion.div
          className="mt-16 text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
        >
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🚀 Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              From microservices to full-stack platforms, I create
              production-ready solutions that deliver real business value. Let's
              turn your ideas into reality.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg"
              >
                <Users className="w-5 h-5" />
                Let's Collaborate
              </Link>
              <a
                href="https://github.com/kousaila502"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200"
              >
                <SiGithub className="w-5 h-5" />
                View All Projects
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
