const Projects = () => {
  const projects = [
    {
      title: "E-commerce Microservices Platform",
      subtitle: "Scalable Backend Architecture with DevOps Pipeline",
      description: "Microservices-based e-commerce platform demonstrating modern backend architecture, containerization, and automated deployment workflows.",
      focus: "Backend Architecture, Microservices, DevOps, Cloud Deployment",
      technologies: ["Python", "Node.js", "Java", "Docker", "Kubernetes", "CI/CD"],
      status: { demo: "Coming Soon", github: "GitHub", docs: "Documentation" }
    },
    {
      title: "Tourism REST API",
      subtitle: "Production-Ready Backend Service",
      description: "Comprehensive REST API for Algerian tourism with advanced backend features including authentication, file handling, and role management.",
      focus: "REST API Development, Authentication, Database Design",
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "API Documentation"],
      status: { demo: "Swagger Docs", github: "GitHub", docs: "API Demo" }
    },
    {
      title: "Enterprise Management Platform",
      subtitle: "Fullstack Web Application",
      description: "Complete fullstack solution for enterprise management with modern frontend, robust backend API, and database integration.",
      focus: "Fullstack Development, Frontend Integration, Database Management",
      technologies: ["Node.js", "React", "MySQL", "Express.js"],
      status: { demo: "Coming Soon", github: "GitHub", docs: "Screenshots" }
    },
    {
      title: "DevOps Infrastructure Lab",
      subtitle: "Cloud Infrastructure & Automation",
      description: "DevOps project demonstrating infrastructure automation, monitoring setup, and deployment optimization.",
      focus: "DevOps, Infrastructure, Monitoring, Cloud Platforms",
      technologies: ["Kubernetes", "Docker", "Cloud Platforms", "Monitoring Tools"],
      status: { demo: "Documentation", github: "GitHub", docs: "Infrastructure Diagrams" }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing fullstack development, backend architecture, and DevOps expertise through real-world projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
            >
              {/* Title & Subtitle */}
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-blue-600 font-semibold mb-4">{project.subtitle}</p>
              
              {/* Description */}
              <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
              
              {/* Focus Areas */}
              <p className="text-sm font-medium text-green-600 mb-6">{project.focus}</p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium">
                  {project.status.demo}
                </button>
                <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all duration-200 font-medium">
                  {project.status.github}
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 font-medium">
                  {project.status.docs}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;