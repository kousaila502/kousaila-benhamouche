'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
                ${scrolled
                    ? "backdrop-blur-xl bg-white/80 dark:bg-gray-950/80 shadow-lg py-2"
                    : "backdrop-blur-md bg-white/60 dark:bg-gray-950/60 shadow-sm py-4"
                }`}
            aria-label="Main Navigation"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center transition-all duration-300">
                    {/* Logo/Name */}
                    <Link
                        href="/"
                        className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white hover:opacity-90 transition"
                        aria-label="Homepage"
                        tabIndex={0}
                    >
                        Kousaila Benhamouche
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-2 lg:space-x-6 items-center" aria-label="Primary">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="relative px-3 py-2 font-medium text-gray-700 dark:text-gray-200 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400
                                    after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-1 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-purple-400 after:rounded-full after:transition-all after:duration-300
                                    hover:text-blue-700 dark:hover:text-blue-300
                                    hover:after:w-2/3 hover:after:h-0.5"
                                tabIndex={0}
                                aria-label={item.name}
                                style={{ WebkitTapHighlightColor: "transparent" }}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen((open) => !open)}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu"
                        className="md:hidden flex items-center justify-center w-10 h-10 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 bg-white/70 dark:bg-gray-900/70 shadow transition"
                    >
                        <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
                        <span className="transition-transform duration-300">
                            {isMenuOpen ? (
                                <X className="w-7 h-7 text-gray-900 dark:text-white" />
                            ) : (
                                <Menu className="w-7 h-7 text-gray-900 dark:text-white" />
                            )}
                        </span>
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                <div
                    id="mobile-menu"
                    className={`md:hidden fixed inset-0 z-40 bg-black/40 dark:bg-black/60 transition-all duration-300 ${isMenuOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"}`}
                    aria-hidden={!isMenuOpen}
                    tabIndex={-1}
                    onClick={() => setIsMenuOpen(false)}
                >
                    <nav
                        className={`absolute top-0 right-0 w-4/5 max-w-xs h-full bg-white dark:bg-gray-950 shadow-xl p-8 pt-24 transition-transform duration-300
                            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
                        `}
                        aria-label="Mobile"
                        onClick={e => e.stopPropagation()}
                    >
                        <ul className="flex flex-col gap-6">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="block text-lg font-semibold text-gray-800 dark:text-gray-100 py-2 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-900/40 hover:text-blue-700 dark:hover:text-blue-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                                        tabIndex={isMenuOpen ? 0 : -1}
                                        aria-label={item.name}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;