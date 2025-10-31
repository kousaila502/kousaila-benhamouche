'use client';

import { Menu, Moon, Sun, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Import Google Fonts (Gabriela Stencil for name, Inter for nav)
import { Gabriela, Inter, Pacifico } from 'next/font/google';

const gabriela = Gabriela({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});
const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
});

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const pastelBg = 'bg-gradient-to-r from-pink-50 via-blue-50 to-green-50';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // avoid SSR/hydration mismatch: determine real theme on mount
  const [dark, setDark] = useState(false);
  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored) {
        setDark(stored === 'dark');
        if (stored === 'dark') document.documentElement.classList.add('dark');
      } else if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        setDark(true);
        document.documentElement.classList.add('dark');
      }
    } catch {}
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      try {
        localStorage.setItem('theme', 'dark');
      } catch {}
    } else {
      document.documentElement.classList.remove('dark');
      try {
        localStorage.setItem('theme', 'light');
      } catch {}
    }
  }, [dark]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
                ${pastelBg}
                ${scrolled ? 'shadow-lg py-2' : 'shadow-sm py-4'}
                backdrop-blur-[8px] bg-opacity-80`}
      aria-label="Main Navigation"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo/Name */}
          <Link
            href="/"
            className={`${gabriela.className} text-lg md:text-xl tracking-wide text-gray-800 hover:text-blue-700 transition font-normal`}
            aria-label="Homepage"
            tabIndex={0}
            style={{ letterSpacing: '0.04em' }}
          >
            Kousaila Benhamouche
          </Link>

          {/* Desktop Navigation */}
          <nav
            className={`hidden md:flex gap-2 lg:gap-6 items-center ${inter.className}`}
            aria-label="Primary"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-3 py-2 font-semibold text-gray-700 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300
                                    after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-1 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-pink-400 after:to-blue-400 after:rounded-full after:transition-all after:duration-300
                                    hover:text-blue-500 hover:after:w-2/3 hover:after:h-0.5"
                tabIndex={0}
                aria-label={item.name}
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                {item.name}
              </Link>
            ))}
            {/* Light/Dark mode switcher */}
            <button
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="ml-2 p-2 rounded-full bg-white/70 hover:bg-blue-100 dark:bg-gray-900/70 dark:hover:bg-blue-900/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
              onClick={() => setDark((d) => !d)}
              tabIndex={0}
            >
              {dark ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-blue-400" />
              )}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 bg-white/80 shadow transition"
          >
            <span className="sr-only">
              {isMenuOpen ? 'Close menu' : 'Open menu'}
            </span>
            <span className="transition-transform duration-300">
              {isMenuOpen ? (
                <X className="w-7 h-7 text-pink-400" />
              ) : (
                <Menu className="w-7 h-7 text-blue-400" />
              )}
            </span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden fixed inset-0 z-40 bg-black/20 transition-all duration-300 ${
            isMenuOpen
              ? 'visible opacity-100'
              : 'invisible opacity-0 pointer-events-none'
          }`}
          aria-hidden={!isMenuOpen}
          tabIndex={-1}
          onClick={() => setIsMenuOpen(false)}
        >
          <nav
            className={`absolute top-0 right-0 w-4/5 max-w-xs h-full bg-gradient-to-br from-pink-50 via-blue-50 to-green-50 shadow-xl p-8 pt-24 transition-transform duration-300
                            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                        `}
            aria-label="Mobile"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className={`${inter.className} flex flex-col gap-6`}>
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block text-lg font-semibold text-gray-700 py-2 px-2 rounded hover:bg-blue-50 hover:text-blue-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
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
                  aria-label={
                    dark ? 'Switch to light mode' : 'Switch to dark mode'
                  }
                  className="mt-2 p-2 rounded-full bg-white/70 hover:bg-blue-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                  onClick={() => setDark((d) => !d)}
                  tabIndex={isMenuOpen ? 0 : -1}
                >
                  {dark ? (
                    <Sun className="w-5 h-5 text-yellow-400" />
                  ) : (
                    <Moon className="w-5 h-5 text-blue-400" />
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
