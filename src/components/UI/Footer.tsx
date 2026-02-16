import { motion } from 'framer-motion';
import { BiLogoGmail } from 'react-icons/bi';
import { IoLogoLinkedin, IoLogoInstagram } from 'react-icons/io5';
import { BsGithub } from 'react-icons/bs';
import logoImg from '/src/assets/logo.png';

export default function Footer() {
    return (
        <footer className="bg-black py-16 border-t border-white/10 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-spider-red to-transparent opacity-50" />

            <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 text-center md:text-left">

                {/* Brand / Logo */}
                <div className="md:col-span-1 flex flex-col items-center md:items-start">
                    <img src={logoImg} alt="Spider-Man Logo" className="w-20 h-20 mb-6 drop-shadow-[0_0_15px_rgba(255,0,51,0.5)]" />
                    <h3 className="font-cine text-2xl text-white uppercase tracking-widest mb-2">Spider-Man</h3>
                    <p className="text-gray-500 text-xs tracking-wider uppercase">Brand New Day</p>
                </div>

                {/* Links */}
                <div className="md:col-span-2 flex flex-col md:flex-row justify-center gap-12 uppercase tracking-widest text-sm text-gray-400 font-bold">
                    <a href="#hero" className="hover:text-spider-red transition-colors">Home</a>
                    <a href="#production" className="hover:text-spider-red transition-colors">Movie</a>
                    <a href="#villains" className="hover:text-spider-red transition-colors">Villains</a>
                    <a href="#history" className="hover:text-spider-red transition-colors">Legacy</a>
                </div>

                {/* Socials */}
                <div className="md:col-span-1 flex justify-center md:justify-end gap-6">
                    {[
                        { Icon: BiLogoGmail, link: "https://mail.google.com/mail/?view=cm&fs=1&to=manishprajapati@gmail.com" },
                        { Icon: IoLogoLinkedin, link: "https://www.linkedin.com/in/manish-prajapati1232" },
                        { Icon: IoLogoInstagram, link: "https://instagram.com/manish_prajapati1232" },
                        { Icon: BsGithub, link: "https://github.com/souldew8" }
                    ].map(({ Icon, link }, i) => (
                        <motion.a
                            key={i}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, color: '#ff0033' }}
                            className="text-white/50 transition-colors"
                        >
                            <Icon size={24} />
                        </motion.a>
                    ))}
                </div>
            </div>

            <div className="mt-16 text-center text-gray-600 text-xs uppercase tracking-widest">
                &copy; 2026 Created By Manish Prajapati. All Rights Reserved.
            </div>
        </footer>
    );
}
