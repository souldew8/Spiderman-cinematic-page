import { motion } from 'framer-motion';

import img2002 from '/src/assets/2002.jpg';
import img2004 from '/src/assets/2004.jpg';
import img2007 from '/src/assets/2007.jpg';
import img2012 from '/src/assets/2012.jpg';
import img2014 from '/src/assets/2014.jpg';
import img2017 from '/src/assets/2017.jpg';
import img2019 from '/src/assets/2019.jpg';
import img2021 from '/src/assets/2021.jpg';
import img2026 from '/src/assets/2026.jpg';

const timelineData = [
    { year: "2002", title: "The Origin", image: img2002, desc: "With great power comes great responsibility." },
    { year: "2004", title: "No More", image: img2004, desc: "Spider-Man no more." },
    { year: "2007", title: "Venom", image: img2007, desc: "The black suit takes over." },
    { year: "2012", title: "Amazing", image: img2012, desc: "A new universe unfolds." },
    { year: "2014", title: "Electro", image: img2014, desc: "No good deed goes unpunished." },
    { year: "2017", title: "Homecoming", image: img2017, desc: "The avenger joins the fight." },
    { year: "2019", title: "Far From Home", image: img2019, desc: "Uneasy lies the head." },
    { year: "2021", title: "No Way Home", image: img2021, desc: "The multiverse verified." },
    { year: "2026", title: "Brand New Day", image: img2026, desc: "The webs are rewritten." },
];

const timeline = [...timelineData, ...timelineData];

export default function History() {
    return (
        <section className="relative min-h-[60vh] bg-neutral-900 py-24 overflow-hidden flex flex-col justify-center">
            <div className="container mx-auto px-4 mb-12 text-center">
                <h2 className="text-white font-cine text-6xl uppercase leading-none">
                    The <span className="text-spider-red">Legacy</span>
                </h2>
                <p className="text-gray-400 mt-4">A never-ending journey.</p>
            </div>

            <div className="flex overflow-hidden">
                <motion.div
                    className="flex gap-8 px-8"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        ease: "linear",
                        duration: 50,
                        repeat: Infinity
                    }}
                >
                    {timeline.map((item, index) => (
                        <div key={`${item.year}-${index}`} className="flex-shrink-0 w-[350px] aspect-square bg-spider-panel border border-white/10 relative group overflow-hidden rounded-xl hover:border-spider-red transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,0,51,0.2)]">
                            {/* Background Image */}
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${item.image})` }} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 z-10" />

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 scale-50 group-hover:scale-100">
                                <span className="font-cine text-6xl text-white bg-spider-red px-6 py-2 shadow-[0_0_50px_rgba(255,0,51,1)] tracking-widest transform -skew-x-12 border-2 border-white">
                                    {item.year}
                                </span>
                            </div>

                            <div className="absolute bottom-6 left-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <h4 className="text-3xl font-cine text-white mb-1 relative group-hover:text-spider-blue transition-colors text-shadow-glow">{item.title}</h4>
                                <p className="text-gray-300 font-mono text-xs uppercase tracking-widest">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
