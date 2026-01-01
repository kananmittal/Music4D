import React from 'react';
import { motion } from 'framer-motion';

// Importing images
import image1_1 from '../assets/image1_1.png';
import image1_2 from '../assets/image1_2.png';
import image1_3 from '../assets/image1_3.png';
import image1_4 from '../assets/image1_4.png';

import image2_1 from '../assets/image2_1.png';
import image2_2 from '../assets/image2_2.png';

import image3_1 from '../assets/image3_1.png';
import image3_2 from '../assets/image3_2.png';
import image3_3 from '../assets/image3_3.png';

const Events = () => {
    const events = [
        {
            id: 1,
            title: 'Palermo: International Meeting "Extended Partnerships"',
            date: 'Oct 21–22, 2025',
            description: 'Presented our research at the international meeting "Partenariati Estesi: Dallo Stato dell’Arte alle Strategie per il Futuro", an event promoted by the MUSIC 4D project (funded by PNRR) to innovate the AFAM system through digitalization and AI.',
            keyPresentation: 'I delivered a talk titled "Towards the Cyber Symbiotic Orchestra: Architecture and Methodologies for Human-Robot Emotional Teaming", showcasing a video summary of our work on human-robot interaction.',
            keyOutcomes: 'The presentation highlighted our methodologies for the emotional analysis of visual communication between conductors, musicians, and the audience. Furthermore, I introduced the structure of the upcoming WP3 course: "Digital Music, Cybernetics, Generative AI, and Emotional Collaboration". The event fostered crucial dialogue between Italian and international institutions to strengthen Southern Italy\'s role as a hub for cultural and technological experimentation.',
            images: [image1_1, image1_2, image1_3, image1_4]
        },
        {
            id: 2,
            title: 'Salzburg: AEC Congress and General Assembly',
            date: 'Nov 2025',
            description: 'The Music 4D project achieved significant international visibility at the Association Européenne des Conservatoires (AEC) Congress.',
            keyAchievements: 'Our research and the WP3 course, "Digital Music, Cybernetics, Generative AI, and Emotional Collaboration", were presented to an audience of over 400 Directors and Executives from prestigious music institutions across the EU, China, Australia, and the Americas.',
            impact: 'The presentation received great enthusiasm, confirming global institutional interest in our work on emotional collaboration and emerging technologies in music education.',
            images: [image2_1, image2_2]
        },
        {
            id: 3,
            title: 'New York – Unical: Real-Time Transatlantic Emotion Analysis',
            date: 'Dec 2025',
            description: 'We successfully implemented a high-performance technical pipeline for the remote, real-time analysis of emotional dynamics between New York and the University of Calabria (Italy).',
            technicalFramework: 'Using a ZeroTier Software Defined Network (SDN) and a custom FFmpeg/UDP streaming protocol, we established a secure, low-latency "virtual LAN" across the Atlantic. This allowed our GPU-accelerated servers in Italy to process live visual data from New York as if it were local.',
            keyOutcomes: 'By employing advanced Vision Language Models (VLM), we were able to analyze micro-expressions and "emotional contagion" during live performances in real-time. This framework demonstrates the project’s ability to apply cutting-edge AI and high-fidelity signal processing to study non-verbal communication in world-class musical contexts.',
            images: [image3_1, image3_2, image3_3]
        }
    ];

    return (
        <section className="min-h-screen bg-primary-bg py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold font-heading text-text-heading mb-6 tracking-tight">
                        Recent Events <span className="text-accent-blue">& Milestones</span>
                    </h2>
                    <div className="h-1 w-24 bg-accent-blue mx-auto rounded-full" />
                </motion.div>

                <div className="space-y-24">
                    {events.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 overflow-hidden shadow-2xl"
                        >
                            <div className="flex flex-col lg:flex-row gap-12">
                                {/* Content Section */}
                                <div className="lg:w-1/2 flex flex-col justify-center">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="px-4 py-1.5 rounded-full bg-accent-blue/10 text-accent-blue text-sm font-semibold border border-accent-blue/20">
                                            {event.date}
                                        </span>
                                    </div>

                                    <h3 className="text-3xl font-bold text-text-heading mb-6 leading-tight">
                                        {event.title}
                                    </h3>

                                    <div className="space-y-6 text-text-secondary leading-relaxed">
                                        <p>{event.description}</p>

                                        {event.keyPresentation && (
                                            <div>
                                                <h4 className="text-text-main font-semibold mb-2">Key Presentation</h4>
                                                <p>{event.keyPresentation}</p>
                                            </div>
                                        )}

                                        {event.keyAchievements && (
                                            <div>
                                                <h4 className="text-text-main font-semibold mb-2">Key Achievements</h4>
                                                <p>{event.keyAchievements}</p>
                                            </div>
                                        )}

                                        {event.technicalFramework && (
                                            <div>
                                                <h4 className="text-text-main font-semibold mb-2">Technical Framework</h4>
                                                <p>{event.technicalFramework}</p>
                                            </div>
                                        )}

                                        {event.keyOutcomes && (
                                            <div>
                                                <h4 className="text-text-main font-semibold mb-2">Key Outcomes</h4>
                                                <p>{event.keyOutcomes}</p>
                                            </div>
                                        )}

                                        {event.impact && (
                                            <div>
                                                <h4 className="text-text-main font-semibold mb-2">Impact</h4>
                                                <p>{event.impact}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Image Gallery Section */}
                                <div className="lg:w-1/2">
                                    <div className="grid grid-cols-2 gap-4 h-full content-center items-center">
                                        {event.images.map((img, imgIndex) => {
                                            const isThreeImages = event.images.length === 3;
                                            const isTopImage = isThreeImages && imgIndex === 0;
                                            const isVerticalImage = isThreeImages && imgIndex === 2;

                                            // Layout Logic:
                                            // 3 images: Index 0 spans 2 (top). Index 1 & 2 span 1 (bottom row).
                                            // Odd images (not 3): Last one spans 2.
                                            let spanClass = '';
                                            if (isThreeImages) {
                                                if (isTopImage) spanClass = 'col-span-2';
                                            } else {
                                                if (event.images.length % 2 !== 0 && imgIndex === event.images.length - 1) {
                                                    spanClass = 'col-span-2';
                                                }
                                            }

                                            return (
                                                <motion.div
                                                    key={imgIndex}
                                                    whileHover={{ scale: 1.05 }}
                                                    transition={{ duration: 0.3 }}
                                                    className={`relative rounded-xl overflow-hidden shadow-lg ${spanClass}`}
                                                    style={{
                                                        maxHeight: isTopImage ? '500px' : 'none'
                                                    }}
                                                >
                                                    <img
                                                        src={img}
                                                        alt={`${event.title} image ${imgIndex + 1}`}
                                                        className={`w-full h-full ${isVerticalImage ? 'object-contain' : 'object-cover'}`}
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
