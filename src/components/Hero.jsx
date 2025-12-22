import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import carousel images
import heroBg1 from '../assets/carousal.jpeg';
import heroBg2 from '../assets/Carousal_1.jpeg';
import heroBg3 from '../assets/carousal_0.png';

const backgrounds = [heroBg1, heroBg2, heroBg3];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-[600px] md:h-[800px] w-full overflow-hidden bg-gray-900">
            {/* Background Image Carousel */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${backgrounds[currentIndex]})`,
                    }}
                />
            </AnimatePresence>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

            <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
                <div className="max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                    >
                        MUSIC<span className="text-accent-blue">4D</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed"
                    >
                        The artificial intelligence who "hear" your emotions
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="mt-10"
                    >
                        <a
                            href="#project-overview"
                            className="inline-block px-8 py-3 bg-accent-blue hover:bg-blue-600 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25"
                        >
                            Explore Project
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
