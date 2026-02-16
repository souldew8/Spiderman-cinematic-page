import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logoImg from '/src/assets/logo.png';

const links = [
    { name: 'Production', href: '#production' },
    { name: 'Villains', href: '#villains' },
    { name: 'History', href: '#history' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
            <div className="absolute inset-0 bg-spider-dark/0 backdrop-blur-none transition-all duration-500" />

            {/* Dynamic Glass Background on Scroll */}
            <div className={`absolute inset-0 transition-all duration-500 ${scrolled ? 'bg-black/60 backdrop-blur-md border-b border-white/5' : ''}`} />

            <div className="container mx-auto px-6 relative flex justify-between items-center text-white">
                {/* Logo */}
                <a href="#" className="font-cine text-xl md:text-2xl uppercase tracking-widest z-50 group flex items-center gap-2">
                    <img src={logoImg} alt="Spider-Man Logo" className="w-8 h-8 object-contain drop-shadow-[0_0_5px_rgba(255,0,51,0.5)]" />
                    <span>
                        <span className="text-white text-shadow-glow">Spider-Man:</span> <span className="text-spider-red text-glow-red group-hover:text-white transition-colors">Brand New Day</span>
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-bold uppercase tracking-widest hover:text-spider-red transition-colors relative group"
                        >
                            <span className="relative z-10">{link.name}</span>
                            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-spider-red transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                    <button
                        onClick={() => window.open('https://www.pvrcinemas.com/', '_blank')}
                        className="px-6 py-2 bg-spider-red text-white font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-spider-dark transition-all duration-300 transform hover:scale-105 border border-transparent hover:border-spider-red"
                    >
                        Book Now
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden z-50 text-white hover:text-spider-red transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden border-b border-white/10"
                    >
                        {links.map((link, i) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + (i * 0.1) }}
                                onClick={() => setIsOpen(false)}
                                className="font-cine text-4xl uppercase text-white hover:text-spider-red transition-colors"
                            >
                                {link.name}
                            </motion.a>
                        ))}
                        <motion.button
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            onClick={() => window.open('https://www.pvrcinemas.com/', '_blank')}
                            className="mt-8 px-10 py-4 bg-spider-red text-white font-bold uppercase tracking-widest"
                        >
                            Book Now
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
