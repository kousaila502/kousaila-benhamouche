'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Sun, Moon } from 'lucide-react';

// Import Professional Google Fonts
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ 
   subsets: ['latin'], 
   weight: ['400', '500', '600'], 
   display: 'swap' 
});

const playfair = Playfair_Display({ 
   subsets: ['latin'], 
   weight: ['400', '500', '600'], 
   display: 'swap' 
});

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
   const [activeSection, setActiveSection] = useState('home');
   const [isDark, setIsDark] = useState(false);

   useEffect(() => {
       const handleScroll = () => {
           setScrolled(window.scrollY > 20);
           
           // Update active section based on scroll position
           const sections = navItems.map(item => item.href.substring(1));
           const current = sections.find(section => {
               const element = document.getElementById(section);
               if (element) {
                   const rect = element.getBoundingClientRect();
                   return rect.top <= 100 && rect.bottom >= 100;
               }
               return false;
           });
           
           if (current) setActiveSection(current);
       };

       window.addEventListener('scroll', handleScroll, { passive: true });
       return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   // Dark mode toggle
   useEffect(() => {
       if (isDark) {
           document.documentElement.classList.add('dark');
       } else {
           document.documentElement.classList.remove('dark');
       }
   }, [isDark]);

   const scrollToSection = (href: string) => {
       const element = document.getElementById(href.substring(1));
       if (element) {
           element.scrollIntoView({ behavior: 'smooth' });
       }
       setIsMenuOpen(false);
   };

   return (
       <header
           className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out
               ${scrolled 
                   ? 'py-3 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 shadow-lg shadow-slate-200/20 dark:shadow-slate-800/20' 
                   : 'py-6 backdrop-blur-sm bg-white/60 dark:bg-slate-900/60'
               }
               border-b border-slate-200/20 dark:border-slate-700/20`}
           aria-label="Main Navigation"
       >
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="flex justify-between items-center">
                   
                   {/* Premium Logo/Brand */}
                   <Link
                       href="/"
                       className={`${playfair.className} group relative`}
                       aria-label="Homepage"
                       onClick={(e) => {
                           e.preventDefault();
                           scrollToSection('#home');
                       }}
                   >
                       <div className="relative">
                           <h1 className={`text-xl md:text-2xl font-semibold tracking-wide
                               bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-800 
                               dark:from-slate-200 dark:via-blue-300 dark:to-indigo-300
                               bg-clip-text text-transparent
                               transition-all duration-300 ease-out
                               group-hover:from-blue-700 group-hover:via-indigo-700 group-hover:to-slate-800
                               dark:group-hover:from-blue-300 dark:group-hover:via-indigo-300 dark:group-hover:to-slate-200`}
                               style={{ letterSpacing: '0.02em' }}
                           >
                               KOUSAILA BENHAMOUCHE
                           </h1>
                           
                           {/* Subtle underline animation */}
                           <div className="absolute -bottom-1 left-0 w-0 h-0.5 
                               bg-gradient-to-r from-blue-600 to-indigo-600 
                               transition-all duration-500 ease-out
                               group-hover:w-full opacity-0 group-hover:opacity-100">
                           </div>
                       </div>
                   </Link>

                   {/* Desktop Navigation */}
                   <nav className={`hidden lg:flex items-center space-x-1 ${inter.className}`} 
                        aria-label="Primary Navigation">
                       {navItems.map((item) => (
                           <button
                               key={item.name}
                               onClick={() => scrollToSection(item.href)}
                               className={`relative px-4 py-2 text-sm font-medium rounded-lg
                                   transition-all duration-300 ease-out
                                   focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50
                                   ${activeSection === item.href.substring(1)
                                       ? 'text-blue-700 dark:text-blue-300 bg-blue-50/80 dark:bg-blue-900/30'
                                       : 'text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-slate-50/80 dark:hover:bg-slate-800/50'
                                   }`}
                           >
                               <span className="relative z-10">{item.name}</span>
                               
                               {/* Active indicator */}
                               {activeSection === item.href.substring(1) && (
                                   <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 
                                       bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full">
                                   </div>
                               )}
                               
                               {/* Hover effect */}
                               <div className="absolute inset-0 rounded-lg bg-gradient-to-r 
                                   from-blue-600/5 to-indigo-600/5 opacity-0 
                                   transition-opacity duration-300 hover:opacity-100">
                               </div>
                           </button>
                       ))}
                       
                       {/* Dark Mode Toggle */}
                       <button
                           onClick={() => setIsDark(!isDark)}
                           className="ml-6 p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/80 
                               hover:bg-slate-200/80 dark:hover:bg-slate-700/80
                               transition-all duration-300 ease-out
                               focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
                           aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                       >
                           {isDark ? (
                               <Sun className="w-4 h-4 text-amber-600 transition-transform duration-300 hover:rotate-12" />
                           ) : (
                               <Moon className="w-4 h-4 text-slate-600 transition-transform duration-300 hover:-rotate-12" />
                           )}
                       </button>
                   </nav>

                   {/* Mobile Menu Button */}
                   <button
                       onClick={() => setIsMenuOpen(!isMenuOpen)}
                       className="lg:hidden p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/80 
                           hover:bg-slate-200/80 dark:hover:bg-slate-700/80
                           transition-all duration-300 ease-out
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
                       aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                       aria-expanded={isMenuOpen}
                   >
                       <div className="relative w-5 h-5">
                           <Menu className={`absolute inset-0 w-5 h-5 text-slate-700 dark:text-slate-300 
                               transition-all duration-300 ease-out
                               ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} 
                           />
                           <X className={`absolute inset-0 w-5 h-5 text-slate-700 dark:text-slate-300 
                               transition-all duration-300 ease-out
                               ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} 
                           />
                       </div>
                   </button>
               </div>
           </div>

           {/* Mobile Navigation Menu */}
           <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ease-out
               ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
               
               {/* Backdrop */}
               <div 
                   className="absolute inset-0 bg-slate-900/20 dark:bg-slate-900/40 backdrop-blur-sm"
                   onClick={() => setIsMenuOpen(false)}
               />
               
               {/* Menu Panel */}
               <nav className={`absolute top-0 right-0 h-full w-80 max-w-[85vw]
                   bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl
                   shadow-2xl shadow-slate-900/10 dark:shadow-slate-900/40
                   border-l border-slate-200/50 dark:border-slate-700/50
                   transition-transform duration-500 ease-out
                   ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                   
                   <div className="p-8 pt-24">
                       {/* Mobile Brand */}
                       <div className={`${playfair.className} mb-12`}>
                           <h2 className="text-lg font-medium tracking-wide
                               bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-800 
                               dark:from-slate-200 dark:via-blue-300 dark:to-indigo-300
                               bg-clip-text text-transparent">
                               KOUSAILA BENHAMOUCHE
                           </h2>
                       </div>
                       
                       {/* Mobile Navigation Items */}
                       <div className={`${inter.className} space-y-3`}>
                           {navItems.map((item, index) => (
                               <button
                                   key={item.name}
                                   onClick={() => scrollToSection(item.href)}
                                   className={`w-full text-left px-6 py-4 rounded-xl text-base font-medium
                                       transition-all duration-300 ease-out
                                       transform hover:translate-x-2
                                       ${activeSection === item.href.substring(1)
                                           ? 'text-blue-700 dark:text-blue-300 bg-blue-50/80 dark:bg-blue-900/30'
                                           : 'text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-slate-50/80 dark:hover:bg-slate-800/50'
                                       }`}
                                   style={{ 
                                       animationDelay: `${index * 100}ms`,
                                       animation: isMenuOpen ? 'slideInRight 0.6s ease-out forwards' : 'none'
                                   }}
                               >
                                   <span className="relative">
                                       {item.name}
                                       {activeSection === item.href.substring(1) && (
                                           <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-6 
                                               bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full">
                                           </div>
                                       )}
                                   </span>
                               </button>
                           ))}
                           
                           {/* Mobile Dark Mode Toggle */}
                           <div className="pt-8 border-t border-slate-200/50 dark:border-slate-700/50">
                               <button
                                   onClick={() => setIsDark(!isDark)}
                                   className="flex items-center space-x-3 px-6 py-4 rounded-xl
                                       text-slate-700 dark:text-slate-300 
                                       hover:text-blue-700 dark:hover:text-blue-300 
                                       hover:bg-slate-50/80 dark:hover:bg-slate-800/50
                                       transition-all duration-300 ease-out"
                               >
                                   {isDark ? (
                                       <Sun className="w-5 h-5 text-amber-600" />
                                   ) : (
                                       <Moon className="w-5 h-5 text-slate-600" />
                                   )}
                                   <span className="text-base font-medium">
                                       {isDark ? 'Light Mode' : 'Dark Mode'}
                                   </span>
                               </button>
                           </div>
                       </div>
                   </div>
               </nav>
           </div>
       </header>
   );
};

export default Header;