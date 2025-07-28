'use client';

interface ProjectModalProps {
  project: {
    title: string;
    subtitle: string;
    description: string;
    focus: string;
    technologies: string[];
    details: {
      challenge: string;
      solution: string;
      architecture: string;
      achievements: string[];
    };
  };
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
          <h2 className="text-3xl font-bold text-gray-800">{project.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Overview */}
          <div>
            <h3 className="text-xl font-bold text-blue-600 mb-3">Project Overview</h3>
            <p className="text-lg text-gray-600 mb-4">{project.subtitle}</p>
            <p className="text-gray-700 leading-relaxed">{project.description}</p>
          </div>

          {/* Focus Areas */}
          <div>
            <h3 className="text-xl font-bold text-green-600 mb-3">Technical Focus</h3>
            <p className="text-gray-700">{project.focus}</p>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xl font-bold text-purple-600 mb-3">Technology Stack</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Technical Details */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-orange-600 mb-3">Challenge</h3>
              <p className="text-gray-700">{project.details.challenge}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-600 mb-3">Solution</h3>
              <p className="text-gray-700">{project.details.solution}</p>
            </div>
          </div>

          {/* Architecture */}
          <div>
            <h3 className="text-xl font-bold text-indigo-600 mb-3">Architecture</h3>
            <p className="text-gray-700">{project.details.architecture}</p>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-xl font-bold text-red-600 mb-3">Key Achievements</h3>
            <ul className="space-y-2">
              {project.details.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-6 border-t">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              View Live Demo
            </button>
            <button className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-medium">
              GitHub Repository
            </button>
            <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
              Documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;