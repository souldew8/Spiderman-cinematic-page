import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import posterImg from '/src/assets/poster.png';

const stats = [
    { label: "IMAX Cameras", value: "Verified" },
    { label: "Resolution", value: "8K HDR" },
    { label: "Audio", value: "Dolby Atmos" },
    { label: "Release", value: "Worldwide" },
];

export default function Production() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} className="min-h-screen relative flex items-center justify-center overflow-hidden py-20 bg-spider-panel">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-spider-red to-transparent opacity-50" />

            <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                {/* Left: Content */}
                <motion.div style={{ opacity }}>
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="font-cine text-5xl md:text-7xl mb-6 uppercase text-transparent bg-clip-text bg-gradient-to-b from-spider-red to-red-900 drop-shadow-[0_0_15px_rgba(255,0,51,0.6)] tracking-widest"
                    >
                        Cinematic <br /> <span className="text-white drop-shadow-none">Perfection</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-gray-400 text-lg md:text-xl max-w-md mb-12 font-body leading-relaxed"
                    >
                        Filmed entirely with IMAX digital cameras to capture every web-slinging detail. Experience the Spider-Verse like never before with expanded aspect ratio and immersive sound.
                    </motion.p>

                    <div className="grid grid-cols-2 gap-8">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + (i * 0.1), duration: 0.5 }}
                                viewport={{ once: true }}
                                className="border-l-2 border-spider-red pl-4"
                            >
                                <h3 className="text-white font-bold text-xl">{stat.value}</h3>
                                <p className="text-spider-blue text-xs uppercase tracking-wider">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right: Floating Element (Parallax) */}
                <motion.div style={{ y }} className="relative flex justify-center z-20">
                    <div className="relative w-full max-w-md aspect-[2/3] rounded-lg overflow-hidden shadow-2xl shadow-spider-blue/20 transform hover:scale-105 transition-transform duration-700">
                        <img
                            src={posterImg}
                            alt="Spider-Man: Brand New Day Official Poster"
                            className="w-full h-full object-cover"
                        />
                        {/* Gloss Reflection */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-50 pointer-events-none" />
                    </div>
                </motion.div>            </div>

            {/* Decorative Halo */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-spider-blue/10 blur-[100px] rounded-full pointer-events-none" />
        </section>
    );
}
