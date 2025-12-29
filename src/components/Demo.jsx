import React from 'react';
import { motion } from 'framer-motion';
// import demoVideo from '../assets/GEM_AI_DEMO.mp4';
// Video file 'GEM_AI_DEMO.mp4' is too large (200MB+) for GitHub (limit 100MB).
// Please use a hosted video link (YouTube/Vimeo) or Git LFS.

const Demo = () => {
    return (
        <div className="py-20 max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-3xl font-bold text-text-heading mb-4">Live Demo</h1>
            <p className="text-text-secondary mb-12 max-w-2xl mx-auto">
                Watch the GEM AI in action.
            </p>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="rounded-xl shadow-lg overflow-hidden border border-gray-100 bg-gray-100 py-20"
            >
                <div className="text-gray-500">
                    <p className="mb-2">Demo Video Placeholder</p>
                    <p className="text-sm">(Video file excluded from repository due to size limits)</p>
                </div>
                {/* 
                <video
                    src={demoVideo}
                    controls
                    className="w-full h-auto max-h-[70vh]"
                    poster=""
                >
                    Your browser does not support the video tag.
                </video>
                 */}
            </motion.div>
        </div>
    );
};

export default Demo;
