'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.42, 0, 0.58, 1] as [number, number, number, number],
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1] as [number, number, number, number],
    },
  },
};

const academicBoxVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.42, 0, 0.58, 1] as [number, number, number, number],
      delay: 0.2,
    },
  },
};

const skills = [
  {
    img: '/images/frontend.jpg',
    title: 'Frontend',
    description:
      'Modern UI/UX, React, Tailwind, and delightful user experiences.',
  },
  {
    img: '/images/backend.jpg',
    title: 'Backend',
    description: 'Robust APIs, scalable systems, and clean architecture.',
  },
  {
    img: '/images/devops.jpg',
    title: 'DevOps',
    description: 'CI/CD, automation, cloud, and infrastructure as code.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            variants={fadeUp}
          >
            About Me
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 shadow-lg animate-pulse"
          />
        </motion.div>

        {/* Profile + Story with image embedded top-left */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <div className="relative">
            {/* Desktop: float image left, text wraps; Mobile: stack */}
            <div className="block md:hidden mb-6 flex justify-center">
              <motion.div variants={fadeUp}>
                <Image
                  src="/images/profile.jpg"
                  alt="Profile"
                  width={144}
                  height={144}
                  className="w-36 h-36 rounded-full object-cover shadow-xl border-4 border-white"
                  style={{
                    background:
                      'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
                  }}
                  loading="eager"
                  priority
                />
              </motion.div>
            </div>
            <div className="hidden md:block float-left mr-8 mb-4">
              <motion.div variants={fadeUp}>
                <Image
                  src="/images/profile.jpg"
                  alt="Profile"
                  width={144}
                  height={144}
                  className="w-36 h-36 rounded-full object-cover shadow-xl border-4 border-white"
                  style={{
                    background:
                      'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
                  }}
                  loading="eager"
                  priority
                />
              </motion.div>
            </div>
            <motion.div
              className="space-y-6 text-lg text-gray-700 leading-relaxed"
              variants={containerVariants}
            >
              <motion.p variants={fadeUp}>
                I’m a{' '}
                <span className="font-semibold text-blue-600">
                  Software Engineer
                </span>{' '}
                specializing in full-stack web development and DevOps
                automation. I build robust, scalable, and cloud-ready
                applications with technologies like{' '}
                <span className="font-semibold">
                  Node.js, React, Docker, and Kubernetes
                </span>
                .
              </motion.p>

              <motion.p variants={fadeUp}>
                My experience spans backend architecture, CI/CD pipelines, and
                cloud deployments on{' '}
                <span className="font-semibold">Google Cloud</span> and{' '}
                <span className="font-semibold">AWS</span>. I focus on designing
                systems that are efficient, maintainable, and optimized for
                real-world performance.
              </motion.p>

              <motion.p variants={fadeUp}>
                I’ve contributed to projects ranging from{' '}
                <span className="font-semibold">e-commerce platforms</span> and{' '}
                <span className="font-semibold">IoT solutions</span> to{' '}
                <span className="font-semibold">
                  microservices-based systems
                </span>
                , combining solid engineering principles with modern DevOps
                practices.
              </motion.p>

              <motion.p variants={fadeUp}>
                I’m always looking to collaborate on innovative projects—helping
                teams transform ideas into reliable, production-grade software.
              </motion.p>
            </motion.div>

            {/* Clear float for following content */}
            <div className="clear-both" />
          </div>
        </motion.div>

        {/* Skills Overview - Isometric 3D Cards */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h3
            className="text-3xl font-bold text-gray-900 mb-12 text-center"
            variants={fadeUp}
          >
            Skills Overview
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
            {skills.map((skill) => (
              <motion.div
                key={skill.title}
                className="group flex flex-col bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100
                   min-h-[360px] cursor-pointer
                   transition-all duration-300
                   hover:shadow-2xl"
                variants={cardVariants}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  rotateX: 6,
                  rotateY: 6,
                  transition: { duration: 0.4, ease: 'easeOut' },
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* === TOP: Full-Width Isometric Image === */}
                <div className="relative w-full h-[60%] overflow-hidden">
                  <Image
                    src={skill.img}
                    alt={skill.title}
                    fill
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>

                {/* === Optional Separator === */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                {/* === BOTTOM: Title + Description === */}
                <div className="flex flex-col justify-center items-center p-6 text-center flex-1 bg-white">
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">
                    {skill.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Passion & Vision */}
        <motion.div
          className="mt-16 max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          variants={containerVariants}
        >
          <motion.h3
            className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2"
            variants={fadeUp}
          >
            Passion &amp; Vision
          </motion.h3>
          <motion.p
            className="text-lg text-gray-700 leading-relaxed"
            variants={fadeUp}
          >
            I thrive at the intersection of software engineering and
            infrastructure. I enjoy crafting systems that are clean, efficient,
            and easy to maintain. Driven by curiosity, performance metrics, and
            a love for elegant automation, I take pride in building tools that
            empower others.
          </motion.p>
        </motion.div>

        {/* What's Next */}
        <motion.div
          className="mt-16 max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          variants={containerVariants}
        >
          <motion.h3
            className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2"
            variants={fadeUp}
          >
            What’s Next?
          </motion.h3>
          <motion.p
            className="text-lg text-gray-700 leading-relaxed"
            variants={fadeUp}
          >
            I’m actively seeking roles or collaborations where I can contribute
            to backend architecture, platform engineering, or developer
            experience (DevEx). My goal is to work alongside passionate teams
            and keep learning every single day.
          </motion.p>
        </motion.div>

        {/* Professional Highlight */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-8 shadow-xl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={academicBoxVariants}
          animate={{
            boxShadow: [
              '0 8px 32px 0 rgba(139,92,246,0.10)',
              '0 12px 40px 0 rgba(139,92,246,0.18)',
              '0 8px 32px 0 rgba(139,92,246,0.10)',
            ],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Professional Focus
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Software Engineer specialized in Full-Stack Development and DevOps
            </p>
            <p className="text-blue-600 font-semibold text-xl">
              Building scalable applications and automating cloud infrastructure
            </p>
            <p className="text-gray-600 mt-2">
              Open to freelance and collaborative projects
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
