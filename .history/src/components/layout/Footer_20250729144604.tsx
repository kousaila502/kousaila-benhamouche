'use client';

import Link from 'next/link';
import { Mail, Phone, Github, Linkedin, Instagram, Facebook, MapPin, ArrowUpRight } from 'lucide-react';

const currentYear = new Date().getFullYear();

const socialLinks = [
    {
        name: 'GitHub',
        href: 'https://github.com/kousaila502',
        icon: Github,
        hoverColor: 'hover:bg-gray-800 hover:text-white',
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/kousaila-benhamouche',
        icon: Linkedin,
        hoverColor: 'hover:bg-blue-600 hover:text-white',
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/k0uss4il4/',
        icon: Instagram,
        hoverColor: 'hover:bg-pink-500 hover:text-white',
    },
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/kokoXxXx/',
        icon: Facebook,
        hoverColor: 'hover:bg-blue-700 hover:text-white',
    }
];

const contactItems = [
    {
        label: 'Email',
        value: 'k.benhamouche@esi-sba.dz',
        href: 'mailto:k.benhamouche@esi-sba.dz',
        icon: Mail,
    },
    {
        label: 'Phone',
        value: '+213 662 942 408',
        href: 'tel:+213662942408',
        icon: Phone,
    },
    {
        label: 'Location',
        value: 'Oran, Algeria',
        href: '#',
        icon: MapPin,
    }
];

const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
];

const Footer = () => {
    return (
        <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
            </div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
                    {/* Brand Section */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="space-y-4">
                            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
                                Kousaila Benhamouche
                            </h3>
                            <div className="space-y-2">
                                <p className="text-lg text-slate-300 font-medium">
                                    Backend Developer & DevOps Researcher
                                </p>
                                <div className="flex items-center gap-2 text-slate-400">
                                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                    <span>Available for opportunities</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="space-y-3">
                            <p className="text-slate-300 leading-relaxed">
                                Crafting scalable backend systems and optimizing deployment pipelines. 
                                Currently mastering GitOps methodologies at ESI-SBA.
                            </p>
                            <div className="flex items-center gap-2 text-sm text-slate-400">
                                <div className="w-1 h-1 bg-teal-400 rounded-full"></div>
                                <span>Master's in Information Systems Engineering</span>
                            </div>
                        </div>
                        
                        {/* Social Links */}
                        <div className="space-y-4">
                            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                                Connect with me
                            </h4>
                            <div className="flex gap-3">
                                {socialLinks.map((link) => {
                                    const IconComponent = link.icon;
                                    return (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`group relative p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 
                                                backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg 
                                                hover:shadow-blue-500/20 ${link.hoverColor}`}
                                            aria-label={link.name}
                                        >
                                            <div className="relative z-10">
                                                <IconComponent className="w-5 h-5" />
                                            </div>
                                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 
                                                opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    
                    {/* Quick Links */}
                    <div className="lg:col-span-3 space-y-6">
                        <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                            Quick Links
                        </h4>
                        <nav className="space-y-3">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="group flex items-center gap-3 text-slate-300 hover:text-white 
                                        transition-all duration-300 hover:translate-x-2"
                                >
                                    <div className="w-1.5 h-1.5 bg-slate-600 rounded-full group-hover:bg-teal-400 
                                        transition-colors duration-300"></div>
                                    <span className="font-medium">{link.name}</span>
                                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 
                                        transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </Link>
                            ))}
                        </nav>
                    </div>
                    
                    {/* Contact Info */}
                    <div className="lg:col-span-4 space-y-6">
                        <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                            Get in touch
                        </h4>
                        <div className="space-y-4">
                            {contactItems.map((item) => {
                                const IconComponent = item.icon;
                                return (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        className="group flex items-center gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30 
                                            hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-300 hover:scale-105"
                                    >
                                        <div className="flex-shrink-0 p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-teal-500/20 
                                            text-blue-400 group-hover:from-blue-500/30 group-hover:to-teal-500/30 
                                            group-hover:text-blue-300 transition-all duration-300">
                                            <IconComponent className="w-4 h-4" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                                                {item.label}
                                            </p>
                                            <p className="text-slate-300 font-medium group-hover:text-white transition-colors duration-300">
                                                {item.value}
                                            </p>
                                        </div>
                                        <ArrowUpRight className="w-4 h-4 text-slate-500 opacity-0 group-hover:opacity-100 
                                            transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </a>
                                );
                            })}
                        </div>
                        
                        {/* Domain Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                            bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20">
                            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                            <span className="text-sm text-teal-300 font-medium">kousaila.dev</span>
                        </div>
                    </div>
                </div>
                
                {/* Bottom Section */}
                <div className="mt-16 pt-8 border-t border-slate-700/50">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-6">
                            <p className="text-slate-400 text-sm">
                                © {currentYear} Kousaila Benhamouche. All rights reserved.
                            </p>
                            <div className="hidden md:flex items-center gap-2 text-xs text-slate-500">
                                <span>Built with</span>
                                <span className="text-blue-400">Next.js</span>
                                <span>•</span>
                                <span className="text-teal-400">Tailwind CSS</span>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                            <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
                            <span>Open to new opportunities</span>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-l from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-r from-teal-500/5 to-transparent rounded-full blur-3xl"></div>
        </footer>
    );
};

export default Footer;