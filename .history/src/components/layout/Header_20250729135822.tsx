'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Inter, Raleway, DM_Serif_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '600'], display: 'swap' });
const raleway = Raleway({ subsets: ['latin'], weight: ['700'], display: 'swap' });
const dmSerif = DM_Serif_Display({ subsets: ['latin'], weight: '400', display: 'swap' });

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
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (dark) document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
    }, [dark]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
                bg-white/80 dark:bg-gray-950/80
                ${scrolled ? "shadow-lg py-2" : "shadow-sm py-4"}
                backdrop-blur-[10px] border-b border-blue-100 dark:border-gray-800`}
            aria-label="Main Navigation"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Brand/Logo */}
                    <Link
                        href="/"
                        className={`${dmSerif.className} text-xl tracking-widest uppercase text-blue-900 dark:text-blue-200 font-semibold select-none transition hover:opacity-90`}
                        aria-label="Homepage"
                        tabIndex={0}
                        style={{ letterSpacing: '0.12em' }}
                    >
                        Kousaila Benhamouche
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className={`hidden md:flex gap-2 lg:gap-6 items-center ${inter.className}`} aria-label="Primary">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="relative px-3 py-2 font-semibold text-gray-700 dark:text-gray-200 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300
                                    after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-1 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-teal-400 after:rounded-full after:transition-all after:duration-300
                                    hover:text-blue-700 dark:hover:text-blue-300
                                    hover:after:w-2/3 hover:after:h-0.5"
                                tabIndex={0}
                                aria-label={item.name}
                                style={{ WebkitTapHighlightColor: "transparent" }}
                            >
                                {item.name}
                            </Link>
                        ))}
                        {/* Light/Dark mode switcher */}
                        <button
                            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
                            className="ml-2 p-2 rounded-full bg-white/70 hover:bg-blue-100 dark:bg-gray-900/70 dark:hover:bg-blue-900/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                            onClick={() => setDark(d => !d)}
                            tabIndex={0}
                        >
                            {dark ? (
                                <Sun className="w-5 h-5 text-blue-400" />
                            ) : (
                                <Moon className="w-5 h-5 text-blue-700" />
                            )}
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen((open) => !open)}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu"
                        className="md:hidden flex items-center justify-center w-10 h-10 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 bg-white/80 shadow transition"
                    >
                        <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
                        <span className="transition-transform duration-300">
                            {isMenuOpen ? (
                                <X className="w-7 h-7 text-blue-900" />
                            ) : (
                                <Menu className="w-7 h-7 text-blue-700" />
                            )}
                        </span>
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                <div
                    id="mobile-menu"
                    className={`md:hidden fixed inset-0 z-40 bg-black/20 transition-all duration-300 ${isMenuOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"}`}
                    aria-hidden={!isMenuOpen}
                    tabIndex={-1}
                    onClick={() => setIsMenuOpen(false)}
                >
                    <nav
                        className={`absolute top-0 right-0 w-4/5 max-w-xs h-full bg-white/95 dark:bg-gray-950/95 shadow-xl p-8 pt-24 transition-transform duration-300
                            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
                        `}
                        aria-label="Mobile"
                        onClick={e => e.stopPropagation()}
                    >
                        <ul className={`${raleway.className} flex flex-col gap-6`}>
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="block text-lg font-semibold text-blue-900 dark:text-blue-200 py-2 px-2 rounded hover:bg-blue-50 dark:hover:bg-blue-900/40 hover:text-blue-700 dark:hover:text-blue-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                                        tabIndex={isMenuOpen ? 0 : -1}
                                        aria-label={item.name}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <button
                                    aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
                                    className="mt-2 p-2 rounded-full bg-white/70 hover:bg-blue-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                                    onClick={() => setDark(d => !d)}
                                    tabIndex={isMenuOpen ? 0 : -1}
                                >
                                    {dark ? (
                                        <Sun className="w-5 h-5 text-blue-400" />
                                    ) : (
                                        <Moon className="w-5 h-5 text-blue-700" />
                                    )}
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;