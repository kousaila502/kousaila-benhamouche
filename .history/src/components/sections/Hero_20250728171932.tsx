const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Kousaila
          </h1>
          
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-semibold text-primary-600 mb-6">
            Backend Developer | DevOps Researcher | Problem Solver
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-4 leading-relaxed">
            Building scalable systems and optimizing deployment pipelines.
          </p>
          
          {/* Education */}
          <p className="text-lg text-gray-500 mb-12">
            Currently completing my Master's in Information Systems Engineering at ESI-SBA.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
            >
              View Projects
            </a>
            
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-colors shadow-lg hover:shadow-xl"
            >
              Download Resume
            </a>
            
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent-600 text-white font-semibold rounded-lg hover:bg-accent-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Contact Me
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;