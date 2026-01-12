import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Project Overview', path: '/project-overview' },
        { name: 'Team', path: '/team' },
        { name: 'Publications', path: '/publications' },
        { name: 'Events', path: '/events' },
        {
            name: 'Demo',
            path: '/demo',
            dropdown: [
                { name: 'Tutti Bot', path: '/demo#tutti-bot' },
                { name: 'Emotion Detection', path: '/demo#emotion-detection' },
                { name: 'Robot Showcase', path: '/demo#robot-showcase' },
            ]
        },
        { name: 'Equipment', path: '/equipment' },
        { name: 'Contacts', path: '/contact' },
    ];

    // Helper to close menu
    const closeMenu = () => setIsOpen(false);

    // Scroll to hash if present in URL
    const handleLinkClick = (path) => {
        closeMenu();
        if (path.includes('#')) {
            const id = path.split('#')[1];
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            window.scrollTo(0, 0);
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="z-50 flex items-center gap-3" onClick={() => handleLinkClick('/')}>
                    <img src={logo} alt="HRC Music4D Logo" className="h-10 w-auto" />
                    <span className={`text-xl font-bold font-heading tracking-tight transition-colors duration-300 ${scrolled || location.pathname !== '/' ? 'text-text-heading' : 'text-white'}`}>
                        HRC Music4D
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <div key={item.name} className="relative group">
                            <Link
                                to={item.path}
                                onClick={() => handleLinkClick(item.path)}
                                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 flex items-center gap-1 ${location.pathname === item.path
                                    ? 'text-accent-blue'
                                    : 'text-text-secondary hover:text-text-main'
                                    }`}
                            >
                                {item.name}
                                {item.dropdown && <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />}
                                {location.pathname === item.path && !item.dropdown && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-blue rounded-full"
                                    />
                                )}
                            </Link>

                            {/* Dropdown Menu */}
                            {item.dropdown && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 hidden group-hover:block transition-all">
                                    <div className="bg-white/95 backdrop-blur-md shadow-lg rounded-xl border border-white/20 p-2 min-w-[200px] flex flex-col gap-1 ring-1 ring-black/5">
                                        {item.dropdown.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                to={subItem.path}
                                                onClick={() => handleLinkClick(subItem.path)}
                                                className="px-4 py-2 text-sm text-text-secondary hover:text-accent-blue hover:bg-blue-50/50 rounded-lg transition-colors whitespace-nowrap text-left"
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden z-50 p-2 text-text-heading focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="w-6 h-5 relative flex flex-col justify-between">
                        <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                        <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
                    </div>
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl md:hidden flex flex-col p-6 gap-4 max-h-[80vh] overflow-y-auto"
                        >
                            {navItems.map((item) => (
                                <div key={item.name} className="flex flex-col gap-2">
                                    <Link
                                        to={item.path}
                                        onClick={() => handleLinkClick(item.path)}
                                        className={`text-lg font-medium ${location.pathname === item.path
                                            ? 'text-accent-blue'
                                            : 'text-text-secondary'
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                    {/* Mobile Dropdown Items */}
                                    {item.dropdown && (
                                        <div className="pl-4 flex flex-col gap-3 border-l-2 border-slate-100 ml-1">
                                            {item.dropdown.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    to={subItem.path}
                                                    onClick={() => handleLinkClick(subItem.path)}
                                                    className="text-sm text-text-secondary hover:text-accent-blue"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div >
        </nav >
    );
};

export default Navbar;
