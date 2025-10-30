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
        <div className="relative flex justify-center items-center overflow-hidden h-[420px]">
          {skillCategories.map((category, i) => {
            const offset =
              (i - index + skillCategories.length) % skillCategories.length;
            const xOffset =
              offset === 0
                ? 0
                : offset === 1
                ? 250
                : offset === skillCategories.length - 1
                ? -250
                : 0;
            const scale = offset === 0 ? 1 : 0.8;
            const opacity = offset === 0 ? 1 : 0.6;

            return (
              <motion.div
                key={category.title}
                className="absolute w-[340px] h-[440px] rounded-2xl shadow-xl border border-gray-100 bg-white/90 backdrop-blur-md overflow-hidden flex flex-col"
                animate={{ x: xOffset, scale, opacity }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              >
                <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
                  <Image
                    src={
                      categoryImages[
                        category.title as keyof typeof categoryImages
                      ]
                    }
                    alt={`${category.title} illustration`}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full opacity-25 blur-[1px]"
                    priority={false}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-25`}
                  />
                </div>
                <div className="relative z-10 p-6 flex flex-col h-full">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {category.title}
                  </h3>
                  <div className="grid grid-cols-3 gap-3 mt-auto">
                    {category.skills.map((skill) => {
                      const iconData = skillIconMap[skill];
                      return (
                        <div
                          key={skill}
                          className="flex flex-col items-center text-center"
                        >
                          <span
                            className={`text-2xl ${
                              iconData?.color || 'text-gray-700'
                            }`}
                          >
                            {iconData?.icon}
                          </span>
                          <span className="text-xs mt-1 text-gray-700">
                            {iconData?.label || skill}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
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
