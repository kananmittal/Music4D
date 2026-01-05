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

// Importing new images for Special Session
import fortinoImg from '../assets/Fortino-3.jpg';
import chawlaImg from '../assets/Chwalla-768x768.jpeg';
import pupoImg from '../assets/Pupo-1.jpeg';
import ichmsImg from '../assets/ichms.png';
import ichms25_1 from '../assets/1748262269515.jpeg';
import ichms25_2 from '../assets/1748262274664.jpeg';
import ichms25_3 from '../assets/1748262274977.jpeg';

const Events = () => {
    const events = [
        {
            id: 4,
            title: 'Special Session @ IEEE ICHMS 2026',
            date: '1st July – 3rd July 2026',
            description: 'We are organizing a Special Session on "Synergizing Generative AI, Human–Robot Collaboration, and High-Fidelity Digital Twins" under the MUSIC4D Framework.',
            venue: 'NTU, Singapore',
            about: 'This Special Session explores how Generative AI, Human–Robot Collaboration (HRC), and High-Fidelity Digital Twins converge to shape the next generation of human-centric intelligent systems. Aligned with the IEEE ICHMS 2026 theme “Beyond Interaction”, the session highlights the MUSIC4D paradigm, where intelligent systems do more than respond—they perceive, interpret, and synchronize with human intent through multimodal sensing and real-time digital representations. The focus is on bi-directional physical–virtual loops, enabling humans and robots to operate as cohesive teammates rather than tools, particularly in creative, industrial, and cyber-physical environments.',
            topics: [
                'Generative AI for Adaptive Behavior in Human-Robot Collaboration.',
                'High-Fidelity Digital Twins for Real-time Physical-Virtual Synchronization.',
                'Human-Robot Teaming (HRT): Models for Cohesion and "Entitativity."',
                'Multi-Agent Architectures within the MUSIC4D Framework.',
                'Edge-Driven Intelligence for Low-Latency Robotic Interaction.',
                'Multi-Modal Intent and Emotion Recognition via Wearable Sensors.',
                'Cyber-Symbiotic Orchestration in Creative and Performing Arts.',
                'Trust and Explainability in Generative Human-Machine Systems.',
                'Interoperability Standards for Pervasive Intelligent Environments.',
                'Ethical Governance of Autonomous Agents in Shared Workspaces.'
            ],
            organizers: [
                'Prof. Giancarlo Fortino, University of Calabria, Italy',
                'Dr. Rashmi Chawla, J.C. Bose University of Science & Technology, India',
                'Dr. Francesco Pupo, University of Calabria, Italy'
            ],
            callForPapers: {
                details: 'Open to global researchers in AI, Robotics, Cybernetics, and Human–Machine Systems. Standard IEEE 6-page format · Peer-reviewed.',
                deadline: '31 Jan 2026'
            },
            images: [ichmsImg, fortinoImg, chawlaImg, pupoImg]
        },
        {
            id: 3,
            title: 'New York – Unical: Real-Time Transatlantic Emotion Analysis',
            date: 'Dec 2025',
            description: 'We successfully implemented a high-performance technical pipeline for the remote, real-time analysis of emotional dynamics between New York and the University of Calabria (Italy).',
            technicalFramework: 'Using a ZeroTier Software Defined Network (SDN) and a custom FFmpeg/UDP streaming protocol, we established a secure, low-latency "virtual LAN" across the Atlantic. This allowed our GPU-accelerated servers in Italy to process live visual data from New York as if it were local.',
            keyOutcomes: 'By employing advanced Vision Language Models (VLM), we were able to analyze micro-expressions and "emotional contagion" during live performances in real-time. This framework demonstrates the project’s ability to apply cutting-edge AI and high-fidelity signal processing to study non-verbal communication in world-class musical contexts.',
            images: [image3_1, image3_2, image3_3]
        },
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
            id: 5,
            title: 'IEEE ICHMS 2025: Transforming Human-Machine Interactions',
            date: 'May 2025',
            venue: 'Marriott Downtown, Abu Dhabi',
            description: 'Participated in the 5th IEEE International Conference on Human-Machine Systems (ICHMS 2025), organized by Moayad Aloqaily and sponsored by the IEEE SMC Society.',
            about: 'This conference series was founded in 2020 based on the proposal by Prof. Giancarlo Fortino, who also organized the online 2020 edition. The event serves as a premier forum for research on human-machine systems.',
            keyAchievements: 'Presented two significant papers from the SPEME Lab: "Analyzing the Fusion of Federated Learning and Large Language Model" (by Dipanwita Thakur, Antonella Guzzo, Giancarlo Fortino) and "Exploring Multi-Agent Human-Robot Teaming Dynamics in a Musical Orchestral Context" (by Rashmi Chawla, Francesco Pupo, Giancarlo Fortino).',
            impact: 'Chaired the Special Session "Community-oriented wearable computing systems for healthcare in the continuum", fostering discussions on future wearable technologies.',
            images: [ichms25_1, ichms25_2, ichms25_3]
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
                                        {event.venue && (
                                            <span className="px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-sm font-semibold border border-purple-500/20">
                                                {event.venue}
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-3xl font-bold text-text-heading mb-6 leading-tight">
                                        {event.title}
                                    </h3>

                                    <div className="space-y-6 text-text-secondary leading-relaxed">
                                        <p>{event.description}</p>

                                        {event.about && (
                                            <div>
                                                <h4 className="text-text-main font-semibold mb-2">What it’s about</h4>
                                                <p>{event.about}</p>
                                            </div>
                                        )}

                                        {event.topics && (
                                            <div>
                                                <h4 className="text-text-main font-semibold mb-2">List of Topics</h4>
                                                <ul className="list-disc list-inside space-y-1 ml-2">
                                                    {event.topics.map((topic, idx) => (
                                                        <li key={idx}>{topic}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {event.organizers && (
                                            <div>
                                                <h4 className="text-text-main font-semibold mb-2">Organizers</h4>
                                                <ul className="list-none space-y-1">
                                                    {event.organizers.map((org, idx) => (
                                                        <li key={idx} className="flex items-start gap-2">
                                                            <span>•</span> <span>{org}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {event.callForPapers && (
                                            <div className="bg-white/5 p-4 rounded-xl border border-white/10 mt-4">
                                                <h4 className="text-accent-blue font-bold mb-2 flex items-center gap-2">
                                                    Call for Papers
                                                </h4>
                                                <p className="mb-2">{event.callForPapers.details}</p>
                                                <div className="text-sm font-semibold text-text-heading mb-2">
                                                    Submission Deadline: {event.callForPapers.deadline}
                                                </div>
                                                <div className="text-sm text-text-secondary">
                                                    For queries <a href="mailto:giancarlo.fortino@unical.it" className="text-accent-blue hover:underline">contact us</a>
                                                </div>
                                            </div>
                                        )}

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
