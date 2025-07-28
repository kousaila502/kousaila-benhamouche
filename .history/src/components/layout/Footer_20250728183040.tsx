import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'GitHub',
            href: '#', // Will be updated with actual link later
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
            )
        },
        {
            name: 'LinkedIn',
            href: '#', // Will be updated with actual link later
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            )
        },
        {
            name: 'Email',
            href: 'mailto:contact@kousaila.dev',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-1.67.785-3.453 1.312-5.33 1.549 1.916-1.149 3.387-2.966 4.081-5.135-1.794 1.064-3.779 1.838-5.885 2.255-1.69-1.802-4.094-2.926-6.755-2.926-5.116 0-9.26 4.152-9.26 9.272 0 .726.082 1.433.238 2.11-7.693-.386-14.51-4.071-19.075-9.669-.795 1.367-1.252 2.957-1.252 4.654 0 3.218 1.637 6.058 4.125 7.719-1.52-.048-2.95-.466-4.2-1.161-.001.039-.001.078-.001.117 0 4.495 3.197 8.243 7.435 9.095-.777.212-1.595.324-2.44.324-.598 0-1.178-.059-1.744-.167 1.179 3.683 4.6 6.364 8.651 6.44-3.173 2.487-7.171 3.969-11.517 3.969-.748 0-1.487-.044-2.213-.13 4.106 2.632 8.984 4.166 14.221 4.166 17.065 0 26.396-14.144 26.396-26.394 0-.401-.01-.802-.027-1.2 1.814-1.309 3.388-2.943 4.633-4.806z" />
                </svg>
            )
        }
    ];

    return (
        <footer className="bg-secondary-900 text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-primary-400">Kousaila</h3>
                        <p className="text-secondary-300">
                            Backend Developer | DevOps Researcher
                        </p>
                        <p className="text-secondary-400 text-sm">
                            ESI-SBA Graduate • Problem Solver
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Quick Links</h4>
                        <nav className="flex flex-col space-y-2">
                            <a href="#about" className="text-secondary-300 hover:text-primary-400 transition-colors">About</a>
                            <a href="#projects" className="text-secondary-300 hover:text-primary-400 transition-colors">Projects</a>
                            <a href="#skills" className="text-secondary-300 hover:text-primary-400 transition-colors">Skills</a>
                            <a href="#contact" className="text-secondary-300 hover:text-primary-400 transition-colors">Contact</a>
                        </nav>
                    </div>

                    {/* Contact & Social */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Connect</h4>
                        <div className="flex space-x-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-secondary-400 hover:text-primary-400 transition-colors"
                                    aria-label={link.name}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                        <p className="text-secondary-400 text-sm">
                            kousaila.dev
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-secondary-800 mt-8 pt-8 text-center">
                    <p className="text-secondary-400 text-sm">
                        &copy; {currentYear} Kousaila. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;