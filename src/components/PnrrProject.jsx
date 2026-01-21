import React from 'react';
import { motion } from 'framer-motion';
import m4dSymbol from '../assets/M4D_simbolo.png';

const PnrrProject = () => {
    const partners = [
        "Conservatory of Music “Luigi Canepa” of Sassari",
        "Conservatory “Giovanni Pierluigi da Palestrina” of Cagliari",
        "State Conservatory of Music “V. Bellini” of Caltanissetta",
        "State Conservatory of Music “A. Toscanini” of Ribera",
        "State Conservatory of Music “V.Bellini” of Catania",
        "Conservatory of Music “Arcangelo Corelli” of Messina",
        "Conservatory of Music “Antonio Scontrino” of Trapani",
        "University of Palermo",
        "University of Calabria"
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-primary-bg min-h-screen">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100/30 rounded-full blur-3xl" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-100/30 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-text-heading mb-6 tracking-tight">
                        The PNRR <span className="text-accent-blue">MUSIC4D</span> Project
                    </h1>
                    <h2 className="text-xl md:text-2xl text-text-secondary font-light max-w-4xl mx-auto leading-relaxed">
                        Music, Entrepreneurship, Creativity, and the Digital Revolution:
                        The Future of the Performing Arts in the AFAM-MUSIC4D System
                    </h2>
                </motion.div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">

                    {/* Text Abstract */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold font-heading text-text-heading mb-6">Overview</h3>
                        <p className="text-lg text-text-secondary leading-relaxed mb-6 text-justify">
                            The fusion of arts and sciences and the exceptional development of technological research applied to music have represented a disruptive innovation in recent years. MUSIC4D recognizes that traditional artistic domains are overtaken by a new concept of "multisensory," in which data collection, Augmented Reality, Virtual Reality, Extended Reality, and all real-world representation models converge.
                        </p>
                        <p className="text-lg text-text-secondary leading-relaxed mb-6 text-justify">
                            While it is increasingly clear that the presence of virtual environments has become the future of music and the arts and, most likely, the means by which artists will support themselves, higher education institutions are struggling to keep pace with and intercept the demands of the EU Digital Compass 2020 and 2030 action plan on education.
                        </p>
                        <p className="text-lg text-text-secondary leading-relaxed text-justify">
                            The proposal, which includes all the AFAM Music Conservatories of Sicily and Sardinia and the digital advanced departments of the University of Palermo and the University of Calabria, aims to promote knowledge of the musical heritage of Southern Italy by developing an internationalization process within the AFAM consortium, also reducing the ecological impact of musical creation and performance.
                        </p>
                    </motion.div>

                    {/* Image / Link */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col items-center justify-center h-full"
                    >
                        <div className="glass-card p-8 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-2xl hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 transform hover:-translate-y-2">
                            <a href="https://www.music4d.it" target="_blank" rel="noopener noreferrer" className="block text-center group">
                                <img
                                    src={m4dSymbol}
                                    alt="Music4D Symbol"
                                    className="w-full max-w-sm mx-auto h-auto mb-6 transition-transform duration-500 group-hover:scale-105"
                                />
                                <span className="inline-flex items-center gap-2 text-accent-blue font-bold text-lg group-hover:text-blue-700 transition-colors">
                                    Visit Official Website
                                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                </span>
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Partners List */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h3 className="text-2xl font-bold font-heading text-text-heading text-center mb-10">Our Partners</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {partners.map((partner, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="glass-card p-4 rounded-xl flex items-center gap-3 border border-white/30 hover:bg-white/50 transition-colors"
                            >
                                <div className="w-2 h-2 rounded-full bg-accent-blue" />
                                <span className="text-text-secondary font-medium">{partner}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default PnrrProject;
