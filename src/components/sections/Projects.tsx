'use client';

import { motion } from 'framer-motion';
import {
  Activity,
  BookOpen,
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
      title: 'User Service Microservice',
      subtitle: 'Production FastAPI Authentication System',
      description:
        'Enterprise-grade authentication microservice serving 17+ active users with JWT, role-based access control, and real-time admin dashboard.',
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
        users: '17+',
        uptime: '99.9%',
        responseTime: '<50ms',
        deployment: 'Kubernetes',
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
      title: 'Order Service Microservice',
      subtitle: 'Revenue-Generating Order Management',
      description:
        'Comprehensive order processing system with real-time analytics. Currently processing $1,593.95 in revenue with 9 completed orders.',
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
        revenue: '$1,593.95',
        orders: '9',
        uptime: '99.9%',
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
      title: 'Product Service Microservice',
      subtitle: 'Node.js Product Management System',
      description:
        'Comprehensive product catalog management with MongoDB Atlas, advanced search, inventory tracking, and deals management for e-commerce platform.',
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
        endpoints: '20+',
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
      title: 'Cart Service Microservice',
      subtitle: 'Reactive Java Spring Boot Cart System',
      description:
        'High-performance reactive cart management with Spring WebFlux, Redis session storage, real-time synchronization, and seamless checkout integration.',
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
        performance: 'Reactive',
        storage: 'Redis',
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
      subtitle: 'Enterprise Social Welfare Management',
      description:
        'Complete digital platform for managing social welfare programs with role-based access control, budget allocation, and payment processing.',
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
        '8-Stage Workflow',
        'Real-time Updates',
        'Algerian Localization',
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
      title: 'Multi-Cloud GitOps Platform',
      subtitle: '5-Cloud Architecture with Cost Optimization',
      description:
        "World's first systematic multi-cloud GitOps orchestration achieving 60% cost reduction and 100% automation.",
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
        '5 Cloud Providers',
        '60% Cost Reduction',
        '100% GitOps',
        'Real Users',
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

        {/* 🚀 PRODUCTION MICROSERVICES - Hero Section */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full font-bold text-lg shadow-lg mb-4">
              <Zap className="w-5 h-5" />
              🚀 Production Microservices
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-3">
              Scalable Backend Systems
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A suite of backend microservices designed for authentication,
              orders, product management, and more — built with performance and
              maintainability in mind.
            </p>
          </motion.div>

          {/* Horizontal Scrollable List */}
          <div className="flex overflow-x-auto gap-6 pb-4 px-2 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-300">
            {productionMicroservices.map((project) => (
              <motion.div
                key={project.id}
                variants={heroVariants}
                className="relative min-w-[340px] max-w-[360px] flex-shrink-0 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 group snap-center hover:shadow-2xl transition-all duration-500"
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                {/* Gradient header */}
                <div
                  className={`h-28 bg-gradient-to-br ${project.gradient} relative`}
                >
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute top-4 left-4">
                    <Code2 className="w-8 h-8 text-white/80" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Reworded title/subtitle */}
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {project.subtitle}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3 text-sm uppercase tracking-wide">
                    {project.title}
                  </p>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Simplified metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div>
                      <span className="font-semibold text-gray-700">
                        Endpoints:
                      </span>{' '}
                      12
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">
                        Deployment:
                      </span>{' '}
                      GCP (Cloud Run)
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">
                        Database:
                      </span>{' '}
                      PostgreSQL
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">
                        Performance:
                      </span>{' '}
                      200+ RPS
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.slice(0, 5).map((tech, techIndex) => {
                      const techInfo = techIconMap[tech];
                      return (
                        <span
                          key={techIndex}
                          className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-xs font-medium"
                        >
                          {techInfo?.icon}
                          {tech}
                        </span>
                      );
                    })}
                  </div>

                  {/* Single button */}
                  <div className="flex">
                    <Link
                      href={`/projects/${project.id}`}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
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
