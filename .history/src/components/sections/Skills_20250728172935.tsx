const Skills = () => {
    const skillCategories = [
        {
            title: "Backend",
            color: "bg-blue-100 text-blue-800 border-blue-200",
            skills: [
                "Node.js",
                "Python",
                "Java",
                "Express.js",
                "FastAPI",
                "Spring Boot",
                "REST APIs",
                "GraphQL",
                "MongoDB",
                "MySQL",
                "PostgreSQL"
            ]
        },
        {
            title: "DevOps & Cloud",
            color: "bg-green-100 text-green-800 border-green-200",
            skills: [
                "Docker",
                "Kubernetes",
                "Google Cloud Platform (GKE, Cloud Run)",
                "CI/CD",
                "GitOps",
                "ArgoCD",
                "Monitoring (Prometheus, Grafana)"
            ]
        },
        {
            title: "Frontend",
            color: "bg-purple-100 text-purple-800 border-purple-200",
            skills: [
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "HTML5",
                "CSS3",
                "Tailwind CSS"
            ]
        },
        {
            title: "Tools & Other",
            color: "bg-gray-100 text-gray-800 border-gray-200",
            skills: [
                "Git",
                "GitHub Actions",
                "Linux",
                "Nginx",
                "Microservices Architecture"
            ]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Skills & Technologies
                    </h2>
                    <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        A comprehensive toolkit for building scalable backend systems, optimizing DevOps workflows,
                        and creating efficient full-stack solutions.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <div
                            key={categoryIndex}
                            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
                        >
                            {/* Category Title */}
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                <span className={`w-4 h-4 rounded-full mr-3 ${category.color.split(' ')[0]}`}></span>
                                {category.title}
                            </h3>

                            {/* Skills Tags */}
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 hover:scale-110 hover:shadow-md cursor-default ${category.color}`}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Featured Technologies */}
                <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-4">
                            Specialized In
                        </h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                "GitOps Implementation",
                                "CI/CD Pipeline Optimization",
                                "Google Cloud Platform",
                                "Microservices Architecture",
                                "Performance Engineering"
                            ].map((specialty, index) => (
                                <span
                                    key={index}
                                    className="px-6 py-3 bg-white bg-opacity-20 rounded-full text-lg font-medium backdrop-blur-sm hover:bg-opacity-30 transition-all duration-200 cursor-default"
                                >
                                    {specialty}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <div className="text-4xl font-bold text-blue-600 mb-2">5.1x</div>
                        <div className="text-gray-600">Performance Improvement</div>
                    </div>
                    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <div className="text-4xl font-bold text-green-600 mb-2">80%</div>
                        <div className="text-gray-600">Cost Optimization</div>
                    </div>
                    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <div className="text-4xl font-bold text-gray-800 mb-2">4+</div>
                        <div className="text-gray-600">Production Applications</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;