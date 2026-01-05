import React from 'react';
import { motion } from 'framer-motion';
import RobotShowcase from './RobotShowcase';
import demoVideo from '../assets/GEM_AI_DEMO.mp4';

const Demo = () => {
    return (
        <div className="min-h-screen bg-primary-bg">
            <div className="pt-28 pb-12 max-w-7xl mx-auto px-6 text-center">
                <h1 className="text-2xl md:text-4xl font-bold font-heading text-text-heading mb-10 tracking-tight uppercase">
                    EMOTION DETECTION REAL TIME DEMO – POWERED BY GENERATIVE AI MODEL “Paligemma”
                </h1>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/50 backdrop-blur-sm"
                >
                    <iframe
                        src="https://baubab4-vlm-wordpress.hf.space"
                        width="100%"
                        height="600"
                        allow="camera; microphone; clipboard-read; clipboard-write;"
                        style={{ border: 'none' }}
                        title="Paligemma Emotion Detection"
                    />
                </motion.div>
            </div>

            <RobotShowcase />

            <div className="py-20 max-w-5xl mx-auto px-6 text-center">
                <h1 className="text-3xl font-bold text-text-heading mb-4">Demo</h1>
                <p className="text-text-secondary mb-12 max-w-2xl mx-auto">
                    Watch the GEM AI in action.
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="rounded-xl shadow-lg overflow-hidden border border-gray-100 bg-black"
                >
                    <video
                        src={demoVideo}
                        controls
                        className="w-full h-auto max-h-[70vh]"
                        poster=""
                    >
                        Your browser does not support the video tag.
                    </video>
                </motion.div>
            </div>
        </div>
    );
};

export default Demo;
