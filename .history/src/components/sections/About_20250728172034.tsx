const About = () => {
  const achievements = [
    {
      icon: "🚀",
      title: "5.1x Performance Improvement",
      description: "Deployment speed optimization (175s vs 900s)"
    },
    {
      icon: "💰",
      title: "80% Cost Optimization",
      description: "Infrastructure costs reduced ($383→$78/month)"
    },
    {
      icon: "📊",
      title: "60% Codebase Reduction",
      description: "Maintained functionality with cleaner code"
    },
    {
      icon: "🎓",
      title: "Master's Thesis Research",
      description: "Quantifiable results with real-world impact"
    },
    {
      icon: "🏗️",
      title: "4+ Production Apps",
      description: "Built and deployed production-ready applications"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Story Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a 5th-year Computer Science student at <span className="font-semibold text-primary-600">École Supérieure d'Informatique (ESI-SBA)</span>, 
              specializing in Information Systems Engineering with a focus on backend development and DevOps practices.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Currently completing my master's thesis on <span className="font-semibold">"Leveraging GitOps for Scalable and Maintainable CI/CD Pipelines,"</span> 
              where I achieved quantifiable <span className="font-bold text-accent-600">5.1x performance improvements</span> through 
              real-world research on Google Cloud Platform.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              My journey spans from building production-ready REST APIs and enterprise platforms to optimizing 
              infrastructure costs by <span className="font-bold text-accent-600">80%</span> and implementing automated deployment pipelines. 
              I'm passionate about creating efficient, scalable systems and solving complex technical challenges.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="font-semibold text-primary-600">Graduating in September 2025</span>, I'm eager to apply my research-backed expertise in backend development 
              and DevOps practices to contribute to innovative projects and teams.
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Achievements</h3>
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span className="text-2xl flex-shrink-0">{achievement.icon}</span>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Highlight */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Academic Excellence</h3>
            <p className="text-lg text-gray-700 mb-4">
              Master's in Information Systems Engineering
            </p>
            <p className="text-primary-600 font-semibold text-xl">
              École Supérieure d'Informatique (ESI-SBA)
            </p>
            <p className="text-gray-600 mt-2">
              Graduating September 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;