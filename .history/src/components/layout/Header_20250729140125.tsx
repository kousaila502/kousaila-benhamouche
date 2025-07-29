'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Inter, Raleway, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '600'], display: 'swap' });
const raleway = Raleway({ subsets: ['latin'], weight: ['600', '700'], display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['600'], display: 'swap' });

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
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [dark]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        bg-white/80 dark:bg-gray-950/90
        ${scrolled ? 'shadow-md py-2' : 'shadow-sm py-4'}
        backdrop-blur border-b border-blue-100 dark:border-gray-800`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Full Name Brand */}
          <Link
            href="/"
            className={`${playfair.className} text-lg text-blue-900 dark:text-blue-200 tracking-wide font-semibold transition hover:opacity-90 select-none`}
          >
            Kousaila Benhamouche
          </Link>

          {/* Desktop Nav */}
          <nav className={`hidden md:flex items-center gap-6 ${inter.className}`}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-2 py-1 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-300 font-medium transition-colors
                  after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all hover:after:w-2/3"
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => setDark((d) => !d)}
              aria-label="Toggle theme"
              className="ml-2 p-2 rounded-full bg-white/70 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition"
            >
              {dark ? <Sun className="w-5 h-5 text-blue-400" /> : <Moon className="w-5 h-5 text-blue-800" />}
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen((open) => !open)}
            className="md:hidden p-2 rounded bg-white/70 shadow hover:bg-blue-100 transition"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="w-6 h-6 text-blue-800" /> : <Menu className="w-6 h-6 text-blue-800" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-black/20 z-40 transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          <nav
            onClick={(e) => e.stopPropagation()}
            className={`absolute right-0 top-0 w-4/5 max-w-xs h-full bg-white dark:bg-gray-950 shadow-xl p-8 pt-24 transition-transform duration-300
              ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <ul className={`${raleway.className} flex flex-col gap-6`}>
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block text-lg font-semibold text-blue-900 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-800/50 rounded px-3 py-2 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setDark((d) => !d)}
                  aria-label="Toggle theme"
                  className="mt-4 p-2 rounded-full bg-white dark:bg-gray-900 hover:bg-blue-100 dark:hover:bg-blue-800/50 transition"
                >
                  {dark ? <Sun className="w-5 h-5 text-blue-400" /> : <Moon className="w-5 h-5 text-blue-800" />}
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
