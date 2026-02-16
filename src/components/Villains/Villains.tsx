import { motion } from 'framer-motion';

import greenGoblinImg from '/src/assets/villains/green_goblin.png';
import docOckImg from '/src/assets/villains/doc_ock.png';
import venomImg from '/src/assets/villains/venom.png';
import electroImg from '/src/assets/villains/electro.png';
import sandmanImg from '/src/assets/villains/sandman.png';
import mysterioImg from '/src/assets/villains/mysterio.png';

const villains = [
    { id: 1, name: "Green Goblin", color: "from-green-500", text: "text-green-500", shadow: "drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]", image: greenGoblinImg, desc: "Godspeed, Spider-Man." },
    { id: 2, name: "Doctor Octopus", color: "from-red-600", text: "text-red-500", shadow: "drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]", image: docOckImg, desc: "The power of the sun... in the palm of my hand." },
    { id: 3, name: "Venom", color: "from-gray-100", text: "text-gray-200", shadow: "drop-shadow-[0_0_10px_rgba(229,231,235,0.8)]", image: venomImg, desc: "We are Venom." },
    { id: 4, name: "Electro", color: "from-blue-400", text: "text-blue-400", shadow: "drop-shadow-[0_0_10px_rgba(96,165,250,0.8)]", image: electroImg, desc: "A world without Spider-Man." },
    { id: 5, name: "Sandman", color: "from-yellow-600", text: "text-yellow-500", shadow: "drop-shadow-[0_0_10px_rgba(234,179,8,0.8)]", image: sandmanImg, desc: "I'm not a bad person. Just had bad luck." },
    { id: 6, name: "Mysterio", color: "from-purple-500", text: "text-purple-500", shadow: "drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]", image: mysterioImg, desc: "People need to believe. And nowadays, they'll believe anything." },
];

export default function Villains() {
    return (
        <section className="min-h-screen py-20 bg-spider-dark relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="text-center font-cine text-6xl md:text-8xl mb-20 text-transparent bg-clip-text bg-gradient-to-b from-spider-red to-red-900 drop-shadow-[0_0_15px_rgba(255,0,51,0.6)] uppercase tracking-widest"
                >
                    Sinister Six
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {villains.map((villain, i) => (
                        <motion.div
                            key={villain.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative h-[600px] bg-spider-panel border border-white/10 overflow-hidden cursor-pointer rounded-xl transform hover:scale-[1.02] transition-all duration-500"
                        >
                            {/* Image Background */}
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${villain.image})` }} />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors duration-500" />

                            <div className={`absolute inset-0 bg-gradient-to-t ${villain.color} to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 mix-blend-multiply`} />

                            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 z-10">
                                <h3 className={`font-cine text-5xl mb-2 transition-all uppercase leading-none ${villain.text} ${villain.shadow}`}>{villain.name}</h3>
                                <div className={`h-1 w-12 bg-current mb-4 transition-all duration-300 group-hover:w-full ${villain.text}`} />
                                <p className={`text-sm font-bold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 ${villain.text} drop-shadow-md`}>"{villain.desc}"</p>
                            </div>

                            {/* Glitch Overlay on Hover */}
                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-20 pointer-events-none mix-blend-overlay animate-pulse" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
