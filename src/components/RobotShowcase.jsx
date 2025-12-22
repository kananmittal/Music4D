import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import assets
import vid1 from '../assets/robot-video-1.mp4';
import vid2 from '../assets/robot-video-2.mp4';
import vid3 from '../assets/robot-video-3.mp4';
// import vid4 from '../assets/robot-video-4.mp4';
import vid5 from '../assets/robot-video-5.mp4';
// import vid6 from '../assets/robot-video-6.mp4';

const videos = [
    { id: 1, src: vid1, title: 'Simulation - 1' },
    { id: 2, src: vid2, title: 'Simulation - 2' },
    { id: 3, src: vid3, title: 'Simulation - 3' },
    // { id: 4, src: vid4, title: 'Simulation - 4' },
    { id: 5, src: vid5, title: 'Simulation - 4' },
    // { id: 6, src: vid6, title: 'Simulation - 6' },
];

const RobotShowcase = () => {
    const [activeVideo, setActiveVideo] = useState(videos[0]);

    return (
        <section className="py-20 bg-gray-900 text-white overflow-hidden border-y border-gray-800">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <span className="text-accent-blue font-bold tracking-widest uppercase text-sm mb-2 block">Technical Showcase</span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Meet The Music4D Robot</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Powered by the <span className="text-white font-semibold">NVIDIA Groot N1 platform</span>,
                        this robot is capable of complex movement, real-time emotion analysis, and adaptive musical interaction.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8 h-auto lg:h-[600px]">
                    {/* Main Player */}
                    <div className="lg:col-span-2 relative bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800 flex flex-col">
                        <div className="relative flex-grow">
                            <AnimatePresence mode="wait">
                                <motion.video
                                    key={activeVideo.id}
                                    src={activeVideo.src}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="absolute top-0 left-0 w-full h-full object-contain bg-black"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </AnimatePresence>
                        </div>

                        <div className="p-6 bg-gray-800/50 backdrop-blur-sm border-t border-gray-700">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1">{activeVideo.title}</h3>
                                    <p className="text-gray-400 text-sm">{activeVideo.desc}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                    <span className="text-xs font-mono text-red-500 uppercase">Live Feed</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Playlist */}
                    <div className="flex flex-col gap-3 overflow-y-auto pr-2 custom-scrollbar lg:h-full">
                        {videos.map((video) => (
                            <motion.button
                                key={video.id}
                                onClick={() => setActiveVideo(video)}
                                whileHover={{ scale: 1.02, backgroundColor: 'rgba(31, 41, 55, 0.8)' }}
                                whileTap={{ scale: 0.98 }}
                                className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-300 border text-left group ${activeVideo.id === video.id
                                    ? 'bg-gray-800 border-accent-blue shadow-[0_0_15px_rgba(0,123,255,0.2)]'
                                    : 'bg-transparent border-gray-800 hover:border-gray-600'
                                    }`}
                            >
                                <div className="w-24 h-16 bg-black rounded-lg overflow-hidden shrink-0 relative border border-gray-700">
                                    <video
                                        src={video.src}
                                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                                        muted
                                        preload="metadata"
                                    />
                                    {activeVideo.id === video.id && (
                                        <div className="absolute inset-0 bg-accent-blue/20 flex items-center justify-center">
                                            <div className="w-3 h-3 bg-white rounded-full shadow-lg" />
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <h4 className={`font-semibold text-sm transition-colors ${activeVideo.id === video.id ? 'text-accent-blue' : 'text-gray-300 group-hover:text-white'}`}>
                                        {video.title}
                                    </h4>
                                    <p className="text-xs text-gray-500 mt-1">Clip 0{video.id}</p>
                                </div>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RobotShowcase;
