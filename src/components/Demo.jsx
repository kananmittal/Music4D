import React from 'react';
import { motion } from 'framer-motion';

const Demo = () => {
    return (
        <div className="py-20 max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-3xl font-bold text-text-heading mb-4">Live Demo</h1>
            <p className="text-text-secondary mb-12 max-w-2xl mx-auto">
                Experience the real-time emotion detection system.
                (This is a placeholder for the Gradio interface integration).
            </p>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="border-2 border-dashed border-gray-200 rounded-xl h-[500px] flex items-center justify-center bg-gray-50 relative overflow-hidden"
            >
                <div className="z-10 text-center">
                    <p className="text-gray-500 mb-6 font-medium">Gradio Interface Loading...</p>
                    <button className="px-6 py-2.5 bg-accent-blue text-white font-medium rounded-lg hover:bg-blue-600 transition-colors shadow-sm">
                        Start Camera
                    </button>
                </div>

                {/* Decorative background circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 z-0"></div>
            </motion.div>
        </div>
    );
};

export default Demo;
