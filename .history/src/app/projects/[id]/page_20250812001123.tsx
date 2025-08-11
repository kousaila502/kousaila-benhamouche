import Link from 'next/link';
import Image from 'next/image';
import { getProjectById } from './data';

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function ProjectDetail({ params }: PageProps) {
    const { id } = await params;
    const project = getProjectById(id);

    if (!project) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Project Not Found</h1>
                    <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
                    <Link href="/#projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        ← Back to Projects
                    </Link>
                </div>
            </div>
        );
    }

    const isMicroservice = project.category === 'microservice';
    const isPlatform = project.category === 'platform';
    const isFullstack = project.category === 'fullstack';

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className={`bg-gradient-to-r ${
                project.featured
                    ? isMicroservice 
                        ? 'from-purple-600 via-blue-600 to-green-600' 
                        : isPlatform
                        ? 'from-blue-600 via-purple-600 to-indigo-600'
                        : 'from-blue-600 via-purple-600 to-green-600'
                    : 'from-blue-600 to-green-600'
                } text-white`}>
                <div className="max-w-4xl mx-auto px-4 py-16">
                    <Link href="/#projects" className="text-blue-200 hover:text-white mb-4 inline-block">
                        ← Back to Projects
                    </Link>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                        {project.featured && (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-400 text-yellow-900">
                                ⭐ Featured Project
                            </span>
                        )}
                        {isMicroservice && (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-400 text-green-900">
                                🚀 Production Microservice
                            </span>
                        )}
                        {isPlatform && (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-400 text-purple-900">
                                ☁️ Multi-Cloud Platform
                            </span>
                        )}
                        {isFullstack && (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-400 text-blue-900">
                                🔧 Full-Stack Solution
                            </span>
                        )}
                        {project.category === 'backend' && (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-400 text-orange-900">
                                ⚙️ Backend API
                            </span>
                        )}
                        {project.category === 'devops' && (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-400 text-red-900">
                                🏗️ DevOps Infrastructure
                            </span>
                        )}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
                    <p className="text-xl opacity-90">{project.subtitle}</p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 py-16 space-y-12">

                {/* Live Microservice Banner */}
                {isMicroservice && project.liveUrl && (
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
                        <div className="flex items-center mb-4">
                            <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                            <span className="text-green-700 font-medium">Live Production Microservice</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">FastAPI Service Documentation</h3>
                        <p className="text-gray-600 mb-4">
                            Interactive Swagger documentation with live API testing, health monitoring, and production metrics.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {project.apiDocsUrl && (
                                <a
                                    href={project.apiDocsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    📚 Interactive API Docs
                                </a>
                            )}
                            {'healthUrl' in project && project.healthUrl && (
                                <a
                                    href={project.healthUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                                >
                                    ❤️ Health Monitor
                                </a>
                            )}
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                                >
                                    📱 Source Code
                                </a>
                            )}
                        </div>
                    </div>
                )}

                {/* Multi-Cloud Platform Banner */}
                {isPlatform && (
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6">
                        <div className="flex items-center mb-4">
                            <div className="w-3 h-3 bg-purple-500 rounded-full mr-2 animate-pulse"></div>
                            <span className="text-purple-700 font-medium">Multi-Cloud Production Platform</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Complete GitOps Ecosystem</h3>
                        <p className="text-gray-600 mb-4">
                            5-cloud architecture with 17 active users, $1,593.95 revenue, and 100% GitOps automation.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                                >
                                    🌐 Live Platform
                                </a>
                            )}
                            <a
                                href="https://34.95.5.30.nip.io/user/docs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                👤 User API
                            </a>
                            <a
                                href="https://34.95.5.30.nip.io/orders/docs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                            >
                                📋 Order API
                            </a>
                        </div>
                    </div>
                )}

                {/* Live Demo Banner for E-Social-Assistance */}
                {project.id === 'e-social-assistance' && (
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
                        <div className="flex items-center mb-4">
                            <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                            <span className="text-green-700 font-medium">Live & Production Ready</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Experience the Full Platform</h3>
                        <p className="text-gray-600 mb-4">
                            Complete social welfare management system with real-time data, secure authentication, and production-grade features.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    🚀 Live Demo
                                </a>
                            )}
                            {project.apiDocsUrl && (
                                <a
                                    href={project.apiDocsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                                >
                                    📚 API Docs
                                </a>
                            )}
                        </div>
                    </div>
                )}

                {/* Production Metrics for Microservices */}
                {isMicroservice && 'metrics' in project && project.metrics && (
                    <section className="bg-gray-50 p-6 rounded-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">🔥 Production Metrics</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            {'activeUsers' in project.metrics && (
                                <div className="bg-white p-4 rounded-lg border">
                                    <div className="text-2xl font-bold text-blue-600">{project.metrics.activeUsers}</div>
                                    <div className="text-sm text-gray-600">Active Users</div>
                                </div>
                            )}
                            {'uptime' in project.metrics && (
                                <div className="bg-white p-4 rounded-lg border">
                                    <div className="text-2xl font-bold text-green-600">{project.metrics.uptime}</div>
                                    <div className="text-sm text-gray-600">Uptime</div>
                                </div>
                            )}
                            {'responseTime' in project.metrics && (
                                <div className="bg-white p-4 rounded-lg border">
                                    <div className="text-2xl font-bold text-purple-600">{project.metrics.responseTime}</div>
                                    <div className="text-sm text-gray-600">Response Time</div>
                                </div>
                            )}
                        </div>
                        {project.id === 'order-service-microservice' && 'businessMetrics' in project && project.businessMetrics && (
                            <div className="mt-4 grid md:grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-lg border">
                                    <div className="text-2xl font-bold text-yellow-600">${project.businessMetrics.totalRevenue}</div>
                                    <div className="text-sm text-gray-600">Revenue Processed</div>
                                </div>
                                <div className="bg-white p-4 rounded-lg border">
                                    <div className="text-2xl font-bold text-red-600">{project.businessMetrics.totalOrders}</div>
                                    <div className="text-sm text-gray-600">Orders Completed</div>
                                </div>
                            </div>
                        )}
                    </section>
                )}

                {/* Cost Optimization Metrics for Platform/DevOps */}
                {(isPlatform || project.category === 'devops') && 'metrics' in project && project.metrics && (
                    <section className="bg-gray-50 p-6 rounded-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">💰 Cost Optimization Results</h2>
                        <div className="grid md:grid-cols-4 gap-4">
                            {'costReduction' in project.metrics && (
                                <div className="bg-white p-4 rounded-lg border">
                                    <div className="text-2xl font-bold text-green-600">{project.metrics.costReduction}</div>
                                    <div className="text-sm text-gray-600">Cost Reduction</div>
                                </div>
                            )}
                            {'automation' in project.metrics && (
                                <div className="bg-white p-4 rounded-lg border">
                                    <div className="text-2xl font-bold text-blue-600">{project.metrics.automation}</div>
                                    <div className="text-sm text-gray-600">Automation</div>
                                </div>
                            )}
                            {'uptime' in project.metrics && (
                                <div className="bg-white p-4 rounded-lg border">
                                    <div className="text-2xl font-bold text-purple-600">{project.metrics.uptime}</div>
                                    <div className="text-sm text-gray-600">Uptime</div>
                                </div>
                            )}
                            {'cloudProviders' in project.metrics && (
                                <div className="bg-white p-4 rounded-lg border">
                                    <div className="text-2xl font-bold text-orange-600">{project.metrics.cloudProviders}</div>
                                    <div className="text-sm text-gray-600">Cloud Providers</div>
                                </div>
                            )}
                        </div>
                    </section>
                )}

                {/* Overview */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Project Overview</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">{project.description}</p>
                    <div className="bg-blue-50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-blue-800 mb-2">Technical Focus</h3>
                        <p className="text-blue-700">{project.focus}</p>
                    </div>
                </section>

                {/* Technology Stack */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Technology Stack</h2>
                    <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, index) => (
                            <span
                                key={index}
                                className={`px-4 py-2 rounded-full font-medium text-lg ${
                                    isMicroservice 
                                        ? 'bg-purple-100 text-purple-800' 
                                        : isPlatform
                                        ? 'bg-indigo-100 text-indigo-800'
                                        : 'bg-blue-100 text-blue-800'
                                }`}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Screenshots Gallery for Microservices */}
                {isMicroservice && 'images' in project && project.images?.gallery && (
                    <section>
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">📸 Production Screenshots</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {project.images.gallery.slice(0, 4).map((image, index) => (
                                <div key={index} className="space-y-2">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={600}
                                        height={400}
                                        className="rounded-lg border shadow-lg"
                                    />
                                    <p className="text-sm text-gray-600 text-center">{image.caption}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Challenge & Solution */}
                <section className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-3xl font-bold text-orange-600 mb-6">Challenge</h2>
                        <p className="text-gray-700 leading-relaxed">{project.details.challenge}</p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-green-600 mb-6">Solution</h2>
                        <p className="text-gray-700 leading-relaxed">{project.details.solution}</p>
                    </div>
                </section>

                {/* Architecture */}
                <section>
                    <h2 className="text-3xl font-bold text-purple-600 mb-6">Technical Architecture</h2>
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <pre className="text-gray-700 leading-relaxed whitespace-pre-wrap font-mono text-sm">
                            {project.details.architecture}
                        </pre>
                    </div>
                </section>

                {/* Achievements */}
                <section>
                    <h2 className="text-3xl font-bold text-red-600 mb-6">Key Achievements</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {project.details.achievements.map((achievement, index) => (
                            <div key={index} className="flex items-start bg-green-50 p-4 rounded-lg">
                                <span className="text-green-500 text-xl mr-3">✓</span>
                                <span className="text-gray-700 font-medium">{achievement}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Special Features for E-Social-Assistance */}
                {project.id === 'e-social-assistance' && 'platformFeatures' in project && project.platformFeatures && (
                    <section className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
                        <h2 className="text-3xl font-bold text-purple-600 mb-6">Platform Features</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {Object.entries(project.platformFeatures).map(([key, feature]) => (
                                <div key={key}>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                                    <ul className="text-gray-600 space-y-1">
                                        {feature.features.map((item, index) => (
                                            <li key={index}>• {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Action Buttons */}
                <section className="border-t pt-8">
                    <div className="flex flex-wrap gap-4">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
                            >
                                🚀 View Live Demo
                            </a>
                        )}
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-medium text-lg"
                            >
                                📱 GitHub Repository
                            </a>
                        )}
                        {project.apiDocsUrl && (
                            <a
                                href={project.apiDocsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-lg"
                            >
                                📚 API Documentation
                            </a>
                        )}
                    </div>
                </section>

                {/* Portfolio Impact Statement */}
                {project.featured && (
                    <section className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-yellow-800 mb-2">🎯 Portfolio Impact</h3>
                        <p className="text-yellow-700">
                            {isMicroservice && "Demonstrates production-level FastAPI development, enterprise security implementation, and real-world system deployment with actual users and performance metrics."}
                            {isPlatform && "Showcases advanced multi-cloud architecture, GitOps expertise, and cost optimization skills valuable for enterprise DevOps and cloud engineering roles."}
                            {isFullstack && "Highlights comprehensive full-stack development capabilities, enterprise architecture design, and ability to create complete business solutions with social impact."}
                        </p>
                    </section>
                )}
            </div>
        </div>
    );
}