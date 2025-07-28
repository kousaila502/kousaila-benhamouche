import Link from 'next/link';

const projectsData = [
	{
		id: 'ecommerce-microservices',
		title: 'E-commerce Microservices Platform',
		subtitle: 'Scalable Backend Architecture with DevOps Pipeline',
		description:
			'Microservices-based e-commerce platform demonstrating modern backend architecture, containerization, and automated deployment workflows.',
		focus: 'Backend Architecture, Microservices, DevOps, Cloud Deployment',
		technologies: ['Python', 'Node.js', 'Java', 'Docker', 'Kubernetes', 'CI/CD'],
		details: {
			challenge:
				'Building scalable microservices architecture with automated deployment pipelines for e-commerce platform.',
			solution:
				'Implemented containerized microservices with Kubernetes orchestration and GitOps deployment methodology.',
			architecture:
				'6 microservices using Python, Node.js, and Java with Docker containers, deployed on Google Cloud Platform.',
			achievements: [
				'5.1x faster deployment times (175s vs 900s)',
				'Complete CI/CD automation with ArgoCD',
				'Multi-language microservices architecture',
				'Production-ready on Google Cloud Platform',
			],
		},
	},
	{
		id: 'tourism-api',
		title: 'Tourism REST API',
		subtitle: 'Production-Ready Backend Service',
		description:
			'Comprehensive REST API for Algerian tourism with advanced backend features including authentication, file handling, and role management.',
		focus: 'REST API Development, Authentication, Database Design',
		technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'API Documentation'],
		details: {
			challenge:
				'Creating comprehensive REST API for tourism platform with secure authentication and role management.',
			solution:
				'Built production-ready API with JWT authentication, file uploads, pagination, and role-based access control.',
			architecture:
				'Node.js backend with Express.js framework, MongoDB database, and comprehensive API documentation.',
			achievements: [
				'60% codebase reduction with unified architecture',
				'Complete authentication and authorization system',
				'File upload and processing capabilities',
				'Production-ready REST API with documentation',
			],
		},
	},
	{
		id: 'enterprise-platform',
		title: 'Enterprise Management Platform',
		subtitle: 'Fullstack Web Application',
		description:
			'Complete fullstack solution for enterprise management with modern frontend, robust backend API, and database integration.',
		focus: 'Fullstack Development, Frontend Integration, Database Management',
		technologies: ['Node.js', 'React', 'MySQL', 'Express.js'],
		details: {
			challenge:
				'Developing complete fullstack enterprise management solution with modern frontend and robust backend.',
			solution:
				'Created end-to-end application with React frontend, Node.js backend, and MySQL database integration.',
			architecture:
				'Fullstack architecture with React frontend, Express.js API, MySQL database, and JWT authentication.',
			achievements: [
				'Complete fullstack development solution',
				'Modern React frontend with responsive design',
				'Robust backend API with database integration',
				'Enterprise-scale architecture and security',
			],
		},
	},
	{
		id: 'devops-lab',
		title: 'DevOps Infrastructure Lab',
		subtitle: 'Cloud Infrastructure & Automation',
		description:
			'DevOps project demonstrating infrastructure automation, monitoring setup, and deployment optimization.',
		focus: 'DevOps, Infrastructure, Monitoring, Cloud Platforms',
		technologies: ['Kubernetes', 'Docker', 'Cloud Platforms', 'Monitoring Tools'],
		details: {
			challenge:
				'Optimizing deployment infrastructure and implementing comprehensive monitoring for DevOps workflows.',
			solution:
				'Built automated infrastructure with Kubernetes, monitoring setup, and cost optimization strategies.',
			architecture:
				'Cloud-native infrastructure with Kubernetes orchestration, Prometheus monitoring, and automated deployments.',
			achievements: [
				'80% infrastructure cost optimization ($383→$78/month)',
				'Comprehensive monitoring with Prometheus and Grafana',
				'Infrastructure-as-code implementation',
				"Master's thesis research with quantifiable results",
			],
		},
	},
];

export default function ProjectDetail({ params }: { params: { id: string } }) {
	const project = projectsData.find((p) => p.id === params.id);

	if (!project) {
		return <div>Project not found</div>;
	}

	return (
		<div className="min-h-screen bg-white">
			{/* Header */}
			<div className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
				<div className="max-w-4xl mx-auto px-4 py-16">
					<Link
						href="/#projects"
						className="text-blue-200 hover:text-white mb-4 inline-block"
					>
						← Back to Projects
					</Link>
					<h1 className="text-4xl md:text-5xl font-bold mb-4">
						{project.title}
					</h1>
					<p className="text-xl opacity-90">{project.subtitle}</p>
				</div>
			</div>

			{/* Content */}
			<div className="max-w-4xl mx-auto px-4 py-16 space-y-12">
				{/* Overview */}
				<section>
					<h2 className="text-3xl font-bold text-gray-800 mb-6">
						Project Overview
					</h2>
					<p className="text-lg text-gray-700 leading-relaxed mb-6">
						{project.description}
					</p>
					<div className="bg-blue-50 p-6 rounded-lg">
						<h3 className="text-lg font-semibold text-blue-800 mb-2">
							Technical Focus
						</h3>
						<p className="text-blue-700">{project.focus}</p>
					</div>
				</section>

				{/* Technology Stack */}
				<section>
					<h2 className="text-3xl font-bold text-gray-800 mb-6">
						Technology Stack
					</h2>
					<div className="flex flex-wrap gap-3">
						{project.technologies.map((tech, index) => (
							<span
								key={index}
								className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium text-lg"
							>
								{tech}
							</span>
						))}
					</div>
				</section>

				{/* Challenge & Solution */}
				<section className="grid md:grid-cols-2 gap-8">
					<div>
						<h2 className="text-3xl font-bold text-orange-600 mb-6">
							Challenge
						</h2>
						<p className="text-gray-700 leading-relaxed">
							{project.details.challenge}
						</p>
					</div>
					<div>
						<h2 className="text-3xl font-bold text-green-600 mb-6">
							Solution
						</h2>
						<p className="text-gray-700 leading-relaxed">
							{project.details.solution}
						</p>
					</div>
				</section>

				{/* Architecture */}
				<section>
					<h2 className="text-3xl font-bold text-purple-600 mb-6">
						Architecture
					</h2>
					<p className="text-gray-700 leading-relaxed">
						{project.details.architecture}
					</p>
				</section>

				{/* Achievements */}
				<section>
					<h2 className="text-3xl font-bold text-red-600 mb-6">
						Key Achievements
					</h2>
					<div className="grid md:grid-cols-2 gap-4">
						{project.details.achievements.map((achievement, index) => (
							<div
								key={index}
								className="flex items-start bg-green-50 p-4 rounded-lg"
							>
								<span className="text-green-500 text-xl mr-3">&#10003;</span>
								<span className="text-gray-700 font-medium">
									{achievement}
								</span>
							</div>
						))}
					</div>
				</section>

				{/* Action Buttons */}
				<section className="border-t pt-8">
					<div className="flex flex-wrap gap-4">
						<button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg">
							View Live Demo
						</button>
						<button className="px-8 py-4 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-medium text-lg">
							GitHub Repository
						</button>
						<button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-lg">
							Documentation
						</button>
					</div>
				</section>
			</div>
		</div>
	);
}