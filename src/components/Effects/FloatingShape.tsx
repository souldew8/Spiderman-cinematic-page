import { motion, useScroll, useTransform } from 'framer-motion';

export default function FloatingShape() {
    const { scrollYProgress } = useScroll();

    const y = useTransform(scrollYProgress, [0, 1], [0, 500]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 0.5]);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <motion.div
                style={{ y, rotate, scale }}
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-spider-red/20 to-spider-blue/20 blur-[100px] rounded-full mix-blend-screen"
                animate={{
                    x: [0, 100, -100, 0],
                    y: [0, -100, 100, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />

            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, -300]) }}
                className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-spider-blue/10 blur-[80px] rounded-full mix-blend-screen"
                animate={{
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </div>
    );
}
