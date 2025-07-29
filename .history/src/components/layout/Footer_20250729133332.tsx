'use client';

import Link from 'next/link';
import { Mail, Phone, Github, Linkedin, Instagram, Facebook } from 'lucide-react';

const currentYear = new Date().getFullYear();

const socialLinks = [
    {
        name: 'GitHub',
        href: 'https://github.com/kousaila502',
        icon: <Github className="w-5 h-5" aria-label="GitHub" />,
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/kousaila-benhamouche',
        icon: <Linkedin className="w-5 h-5" aria-label="LinkedIn" />,
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/k0uss4il4/',
        icon: <Instagram className="w-5 h-5" aria-label="Instagram" />,
    },
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/kokoXxXx/',
        icon: <Facebook className="w-5 h-5" aria-label="Facebook" />,
    }
];

const contactItems = [
    {
        label: 'Email',
        value: 'k.benhamouche@esi-sba.dz',
        href: 'mailto:k.benhamouche@esi-sba.dz',
        icon: <Mail className="w-5 h-5 text-blue-400" aria-label="Email" />,
    },
    {
        label: 'Phone',
        value: '+213 662942408',
        href: 'tel:+213662942408',
        icon: <Phone className="w-5 h-5 text-green-400" aria-label="Phone" />,
    }
];

const Footer = () => (
    <footer className="bg-gray-950 text-gray-200 border-t border-blue-900 shadow-[0_-2px_24px_0_rgba(59,130,246,0.08)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Brand/About */}
                <div className="flex flex-col items-center md:items-start gap-4">
                    <h3 className="text-2xl font-extrabold text-blue-400 tracking-tight">Kousaila</h3>
                    <p className="text-gray-300 text-base font-medium">
                        Backend Developer <span className="mx-1 text-blue-500">|</span> DevOps Researcher
                    </p>
                    <p className="text-gray-400 text-sm">ESI-SBA Graduate • Problem Solver</p>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col items-center md:items-center gap-4">
                    <h4 className="text-lg font-semibold text-blue-300 mb-1">Quick Links</h4>
                    <nav className="flex flex-col gap-2">
                        <Link href="#about" className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors font-medium">
                            About
                        </Link>
                        <Link href="#projects" className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors font-medium">
                            Projects
                        </Link>
                        <Link href="#skills" className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors font-medium">
                            Skills
                        </Link>
                        <Link href="#contact" className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors font-medium">
                            Contact
                        </Link>
                    </nav>
                </div>

                {/* Contact & Social */}
                <div className="flex flex-col items-center md:items-end gap-4">
                    <h4 className="text-lg font-semibold text-blue-300 mb-1">Contact</h4>
                    <div className="flex flex-col gap-2 w-full">
                        {contactItems.map(item => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors font-medium group"
                                aria-label={item.label}
                            >
                                <span className="transition-transform group-hover:scale-110">{item.icon}</span>
                                <span>{item.value}</span>
                            </a>
                        ))}
                    </div>
                    <div className="flex gap-4 mt-3">
                        {socialLinks.map(link => (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.name}
                                className="rounded-full bg-gray-900/70 p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-900/30 transition-all duration-200 shadow-sm focus:ring-2 focus:ring-blue-400"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                    <span className="text-xs text-gray-500 mt-2">kousaila.dev</span>
                </div>
            </div>
            {/* Bottom Bar */}
            <div className="border-t border-gray-800 mt-10 pt-8 text-center">
                <p className="text-gray-500 text-sm tracking-wide">
                    © {currentYear} Kousaila. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
);

export default Footer;