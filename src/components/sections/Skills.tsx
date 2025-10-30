'use client';

import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import {
  SiArgo,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiGit,
  SiGithubactions,
  SiGooglecloud,
  SiGraphql,
  SiHtml5,
  SiIced,
  SiJavascript,
  SiKubernetes,
  SiLinux,
  SiMicrodotblog,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiPrometheus,
  SiPython,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

// Images for card backgrounds
const categoryImages = {
  'Backend Development': '/images/skills-backend.jpg',
  'Cloud & DevOps': '/images/skills-devops.jpg',
  'Frontend Development': '/images/skills-frontend.jpg',
  'Tools & Practices': '/images/skills-tools.jpg',
};

// Skill categories (cards)
const skillCategories = [
  {
    title: 'Backend Development',
    color: 'from-blue-500 to-blue-700',
    skills: [
      'Node.js',
      'Python',
      'Java',
      'Express.js',
      'FastAPI',
      'Spring Boot',
      'REST APIs',
      'GraphQL',
      'MongoDB',
      'MySQL',
      'PostgreSQL',
    ],
  },
  {
    title: 'Cloud & DevOps',
    color: 'from-green-500 to-green-700',
    skills: [
      'Docker',
      'Kubernetes',
      'Google Cloud Platform (GKE, Cloud Run)',
      'CI/CD',
      'GitOps',
      'ArgoCD',
      'Monitoring (Prometheus, Grafana)',
    ],
  },
  {
    title: 'Frontend Development',
    color: 'from-purple-500 to-pink-500',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Tools & Practices',
    color: 'from-gray-400 to-gray-600',
    skills: [
      'Git',
      'GitHub Actions',
      'Linux',
      'Nginx',
      'Microservices Architecture',
    ],
  },
];

// Framer Motion variants
const sectionVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.42, 0, 0.58, 1] as [number, number, number, number],
    },
  },
};
const pillVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.42, 0, 0.58, 1] as [number, number, number, number],
    },
  },
};

// Map skill names to icons
const skillIconMap: Record<
  string,
  { icon: React.ReactNode; color: string; label: string }
> = {
  'Node.js': {
    icon: <SiNodedotjs />,
    color: 'text-blue-600',
    label: 'Node.js',
  },
  Python: { icon: <SiPython />, color: 'text-blue-600', label: 'Python' },
  Java: { icon: <SiIced />, color: 'text-blue-600', label: 'Java' },
  'Express.js': {
    icon: <SiExpress />,
    color: 'text-blue-600',
    label: 'Express.js',
  },
  FastAPI: { icon: <SiFastapi />, color: 'text-blue-600', label: 'FastAPI' },
  'Spring Boot': {
    icon: <SiSpringboot />,
    color: 'text-blue-600',
    label: 'Spring Boot',
  },
  'REST APIs': {
    icon: <SiGraphql />,
    color: 'text-blue-600',
    label: 'REST APIs',
  },
  GraphQL: { icon: <SiGraphql />, color: 'text-blue-600', label: 'GraphQL' },
  MongoDB: { icon: <SiMongodb />, color: 'text-blue-600', label: 'MongoDB' },
  MySQL: { icon: <SiMysql />, color: 'text-blue-600', label: 'MySQL' },
  PostgreSQL: {
    icon: <SiPostgresql />,
    color: 'text-blue-600',
    label: 'PostgreSQL',
  },
  Docker: { icon: <SiDocker />, color: 'text-green-600', label: 'Docker' },
  Kubernetes: {
    icon: <SiKubernetes />,
    color: 'text-green-600',
    label: 'Kubernetes',
  },
  'Google Cloud Platform (GKE, Cloud Run)': {
    icon: <SiGooglecloud />,
    color: 'text-green-600',
    label: 'Google Cloud',
  },
  'CI/CD': {
    icon: <SiGithubactions />,
    color: 'text-green-600',
    label: 'CI/CD',
  },
  GitOps: { icon: <SiGit />, color: 'text-green-600', label: 'GitOps' },
  ArgoCD: { icon: <SiArgo />, color: 'text-green-600', label: 'ArgoCD' },
  'Monitoring (Prometheus, Grafana)': {
    icon: <SiPrometheus />,
    color: 'text-green-600',
    label: 'Prometheus & Grafana',
  },
  React: { icon: <SiReact />, color: 'text-purple-600', label: 'React' },
  'Next.js': {
    icon: <SiNextdotjs />,
    color: 'text-purple-600',
    label: 'Next.js',
  },
  TypeScript: {
    icon: <SiTypescript />,
    color: 'text-purple-600',
    label: 'TypeScript',
  },
  JavaScript: {
    icon: <SiJavascript />,
    color: 'text-purple-600',
    label: 'JavaScript',
  },
  HTML5: { icon: <SiHtml5 />, color: 'text-purple-600', label: 'HTML5' },
  CSS3: { icon: <SiCss3 />, color: 'text-purple-600', label: 'CSS3' },
  'Tailwind CSS': {
    icon: <SiTailwindcss />,
    color: 'text-purple-600',
    label: 'Tailwind',
  },
  Git: { icon: <SiGit />, color: 'text-gray-800', label: 'Git' },
  'GitHub Actions': {
    icon: <SiGithubactions />,
    color: 'text-gray-800',
    label: 'GitHub Actions',
  },
  Linux: { icon: <SiLinux />, color: 'text-gray-800', label: 'Linux' },
  Nginx: { icon: <SiNginx />, color: 'text-gray-800', label: 'Nginx' },
  'Microservices Architecture': {
    icon: <SiMicrodotblog />,
    color: 'text-gray-800',
    label: 'Microservices',
  },
};

const featured = [
  'Full-Stack Web Development',
  'Cloud & Infrastructure Automation',
  'CI/CD Pipeline Design',
  'Microservices & API Architecture',
  'Containerization with Docker & Kubernetes',
];

const Skills = () => {
  const [index, setIndex] = React.useState(0);
  const controls = useAnimation();

  // Auto-rotate carousel
  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % skillCategories.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="skills" className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Animated Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0.5, scale: 0.9 }}
          animate={{ opacity: [0.5, 0.7, 0.5], scale: [0.9, 1.1, 0.9] }}
          transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
          className="absolute left-1/2 top-1/2 w-[700px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-blue-300 via-purple-200 to-green-200 opacity-30 blur-3xl rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          variants={sectionVariants}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            variants={cardVariants}
          >
            Skills &amp; Technologies
          </motion.h2>
          <motion.div
            variants={cardVariants}
            className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 shadow-lg animate-pulse mb-6"
          />
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={cardVariants}
          >
            A comprehensive toolkit for building scalable backend systems,
            automating DevOps workflows, and crafting efficient full-stack web
            applications.
          </motion.p>
        </motion.div>

        {/* Carousel Section */}
        <div className="relative flex justify-center items-center h-[500px] mb-12">
          {skillCategories.map((category, i) => {
            const offset =
              (i - index + skillCategories.length) % skillCategories.length;

            // Calculate positions and visibility
            let xOffset = 0;
            let scale = 0.75;
            let opacity = 0;
            let zIndex = 0;
            let rotateY = 0;

            if (offset === 0) {
              // Center card - main focus
              xOffset = 0;
              scale = 1;
              opacity = 1;
              zIndex = 30;
              rotateY = 0;
            } else if (offset === 1) {
              // Right card
              xOffset = 380;
              scale = 0.85;
              opacity = 0.5;
              zIndex = 20;
              rotateY = -15;
            } else if (offset === skillCategories.length - 1) {
              // Left card
              xOffset = -380;
              scale = 0.85;
              opacity = 0.5;
              zIndex = 20;
              rotateY = 15;
            } else {
              // Hidden cards
              opacity = 0;
              zIndex = 10;
            }

            return (
              <motion.div
                key={category.title}
                className="absolute w-[360px] cursor-pointer"
                style={{ zIndex }}
                animate={{
                  x: xOffset,
                  scale,
                  opacity,
                  rotateY,
                }}
                transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
                onClick={() => setIndex(i)}
              >
                <div className="relative rounded-2xl shadow-2xl overflow-hidden bg-white border border-gray-200 h-[450px]">
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={
                        categoryImages[
                          category.title as keyof typeof categoryImages
                        ]
                      }
                      alt={category.title}
                      fill
                      className="object-cover opacity-50"
                      priority={offset === 0}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0`}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col p-6">
                    {/* Header */}
                    <div className="mb-6">
                      <div
                        className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${category.color} text-white text-sm font-semibold mb-3`}
                      >
                        {category.title.split(' ')[0]}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills Grid - Fills remaining space */}
                    <div className="flex-1 overflow-hidden">
                      <div className="grid grid-cols-3 gap-4 h-full content-start">
                        {category.skills.map((skill) => {
                          const iconData = skillIconMap[skill];
                          return (
                            <motion.div
                              key={skill}
                              className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200"
                              whileHover={{ scale: 1.05, y: -2 }}
                            >
                              <span
                                className={`text-3xl mb-2 ${
                                  iconData?.color || 'text-gray-700'
                                }`}
                              >
                                {iconData?.icon}
                              </span>
                              <span className="text-xs font-medium text-gray-800 text-center leading-tight">
                                {iconData?.label || skill}
                              </span>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mb-12">
          {skillCategories.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index
                  ? 'bg-blue-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Specialized In */}
        <motion.div
          className="mt-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionVariants}
        >
          <motion.h3
            className="text-2xl font-bold mb-6 text-center text-gray-900"
            variants={cardVariants}
          >
            Specialized In
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-4">
            {featured.map((specialty, _) => (
              <motion.span
                key={specialty}
                className="px-6 py-3 rounded-full text-lg font-medium shadow-md backdrop-blur-md bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:scale-105 transition-all"
                variants={pillVariants}
              >
                {specialty}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Core Tech Stack */}
        <motion.div
          className="mt-20 text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionVariants}
        >
          <motion.h3
            className="text-2xl font-bold mb-6 text-gray-900"
            variants={cardVariants}
          >
            Core Tech Stack
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-6 text-lg text-gray-700">
            {[
              'Node.js',
              'React & Next.js',
              'Docker & Kubernetes',
              'CI/CD Automation',
              'Cloud Infrastructure',
            ].map((tech) => (
              <span
                key={tech}
                className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 font-medium shadow"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
