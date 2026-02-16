import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
    const textY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

    return (
        <section ref={targetRef} className="relative h-screen w-full overflow-hidden bg-spider-dark">
            {/* Background with Parallax */}
            <motion.div
                style={{ scale, opacity }}
                className="absolute inset-0 z-0 bg-cover bg-center"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-spider-dark via-transparent to-transparent z-10" />
                <div className="absolute inset-0 bg-black/40 z-10" />

                {/* Placeholder for Hero Image - User to replace */}
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center filter brightness-50" />
            </motion.div>

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-spider-red font-bold tracking-[0.5em] text-sm md:text-lg mb-4 uppercase"
                >
                    Marvel Studios Presents
                </motion.p>

                <motion.h1
                    className="font-cine text-6xl md:text-9xl uppercase tracking-tighter text-white text-shadow-glow"
                    style={{ y: textY }}
                >
                    <motion.span
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                        className="block"
                    >
                        Spider-Man
                    </motion.span>
                    <motion.span
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                        className="block text-transparent bg-clip-text bg-gradient-to-r from-spider-red to-spider-blue"
                    >
                        Brand New Day
                    </motion.span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="mt-12 flex gap-6"
                >
                    <button
                        onClick={() => window.open('https://youtu.be/QOdF1zK4ZkY?si=2Xsg0wUfV_xa09Y3', '_blank')}
                        className="px-8 py-3 bg-spider-red text-white font-bold uppercase tracking-widest hover:bg-red-700 transition-all duration-300 transform hover:scale-105 border border-red-500 shadow-[0_0_20px_rgba(255,0,51,0.5)]"
                    >
                        Watch Trailer
                    </button>
                    <button
                        onClick={() => window.open('https://www.pvrcinemas.com/', '_blank')}
                        className="px-8 py-3 bg-transparent text-white font-bold uppercase tracking-widest border border-white/30 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                    >
                        Book Tickets
                    </button>
                </motion.div>
            </div>

            {/* Decorations */}
            <div className="absolute bottom-10 left-0 w-full flex justify-center animate-bounce z-20">
                <p className="text-white/50 text-xs tracking-widest uppercase">Scroll to Explore</p>
            </div>
        </section>
    );
}
