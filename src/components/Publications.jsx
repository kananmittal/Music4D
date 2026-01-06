import React from 'react';
import { motion } from 'framer-motion';
import certRashmi from '../assets/IEEECH_Certificate_of_Participation_Rashmi_Chawla.pdf';

const Publications = () => {
    const pubs = [
        {
            title: "Exploring Multi-Agent Human-Robot Teaming Dynamics in a Musical Orchestral Context",
            authors: "Chawla, R., Pupo, F., & Fortino, G.",
            journal: "2025 IEEE 5th International Conference on Human-Machine Systems (ICHMS)",
            year: "May 2025",
            pages: "pp. 356-361",
            publisher: "IEEE",
            link: "https://ieeexplore.ieee.org/abstract/document/11154360"
        },
        {
            title: "EAC-HRC: Emotion-Aware Communication for Human-Robot Collaboration in a Music Orchestra System",
            authors: "Chawla, R., Longo, R., Pupo, F., Fortino, G.",
            journal: "2025 IEEE International Conference on Cyber Humanities",
            year: "Sept. 8 – 10, 2025 Florence, Italy",
            pages: "",
            publisher: "IEEE",
            link: certRashmi,
            linkText: "Certificate"
        }
    ];

    return (
        <div className="py-20 max-w-4xl mx-auto px-6">
            <h1 className="text-3xl font-bold text-center text-text-heading mb-12">Publications</h1>
            <ul className="space-y-6">
                {pubs.map((pub, idx) => (
                    <motion.li
                        key={idx}
                        initial={{ opacity: 1, scale: 1 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="pb-6 border-b border-gray-100 last:border-0"
                    >
                        <h3 className="text-xl font-medium text-text-heading mb-1">
                            {pub.link ? (
                                <a href={pub.link} target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors">
                                    {pub.title}
                                </a>
                            ) : (
                                pub.title
                            )}
                        </h3>
                        <p className="text-text-main mb-1">{pub.authors}</p>
                        <p className="text-text-secondary italic text-sm mb-2">{pub.journal}, {pub.year} {pub.pages && `(${pub.pages})`}</p>
                        {pub.link && (
                            <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-sm text-accent-blue hover:text-blue-700 underline decoration-1 underline-offset-2">
                                {pub.linkText || "View Publication"}
                            </a>
                        )}
                    </motion.li>
                ))}
            </ul>
        </div>
    );
};

export default Publications;
