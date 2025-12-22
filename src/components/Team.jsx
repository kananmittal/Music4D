import React from 'react';
import { motion } from 'framer-motion';

import imgFortino from '../assets/Fortino-3.jpg';
import imgPupo from '../assets/Pupo-1.jpeg';
import imgMolinaro from '../assets/Molinaro-768x768.jpeg';
import imgKhan from '../assets/Khan-264x300-2-150x150.jpg';
import imgPresta from '../assets/MattiaPresta.png';
import imgChawla from '../assets/Chwalla-768x768.jpeg';
import imgPerri from '../assets/Perri.png';

// Department Logos
import logoDimes from '../assets/logo_dimes_Q.png';
import badgeSpeme from '../assets/HCR-Ribbon_Social_215x335_ForInstitutions-193x300.png';

const Team = () => {
    // Grouping team members for hierarchy
    const tier1 = [
        { name: 'Giancarlo Fortino', role: 'Professor / Researcher', linkedin: 'https://projects.dimes.unical.it/music4d/il-team/', image: imgFortino, affiliation: "Full Professor at University of Calabria & CEO at Sensyscal S.r.l. & IEEE Fellow" }
    ];

    const tier2 = [
        { name: 'Francesco Pupo', role: 'Researcher', linkedin: 'https://projects.dimes.unical.it/music4d/il-team/', image: imgPupo, affiliation: "Associate Professor at University of Calabria" },
        { name: 'Rashmi Chawla', role: 'Team Member', linkedin: 'https://www.linkedin.com/in/rashmi-chawla-710348128/', image: imgChawla, affiliation: "Associate Professor at JC Bose University, India & Coordinator at Institution’s Innovation Council, University of Calabria" }
    ];

    const tier3 = [
        { name: 'Caterina Perri', role: 'Team Member', linkedin: null, image: imgPerri, affiliation: "Ph. D, Post doc at University of Calabria" },
        { name: 'Pasquale Molinaro', role: 'Team Member', linkedin: 'https://www.linkedin.com/in/pasquale-molinaro-8654021aa/', image: imgMolinaro, affiliation: "Generative AI and Machine Learning Engineer Specialist & Research fellow at University of Calabria" },
        { name: 'Akhtar Khan', role: 'Team Member', linkedin: null, image: imgKhan, affiliation: "Ph. D at University of Calabria" },
        { name: 'Mattia Presta', role: 'Team Member', linkedin: 'https://www.linkedin.com/in/mattia-presta-66488939a/', image: imgPresta, affiliation: "Generative AI and Machine Learning Engineer Specialist & Research fellow at University of Calabria" }
    ];

    const MemberCard = ({ member, size = "md" }) => {
        const isLarge = size === "lg";
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300 ${isLarge ? 'p-8 max-w-lg mx-auto' : 'p-6'}`}
            >
                <div className={`${isLarge ? 'w-48 h-48 border-4' : 'w-32 h-32 border-2'} mb-4 rounded-full overflow-hidden border-gray-100 p-1`}>
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>
                <h3 className={`${isLarge ? 'text-2xl' : 'text-lg'} font-bold text-gray-900 mb-1`}>{member.name}</h3>
                <p className={`${isLarge ? 'text-sm' : 'text-xs'} text-accent-blue font-bold uppercase tracking-wider mb-2`}>{member.role}</p>
                <p className="text-secondary text-xs text-gray-500 mb-4 italic">{member.affiliation}</p>

                {member.linkedin && (
                    <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pt-4 border-t border-gray-100 w-full text-sm text-gray-500 hover:text-[#0077b5] font-medium transition-colors"
                    >
                        LinkedIn Profile
                    </a>
                )}
            </motion.div>
        );
    };

    return (
        <div className="py-20 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A multidisciplinary group of researchers and engineers from the University of Calabria.
                    </p>
                </div>

                {/* DIMES Department (Primary) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-white p-10 rounded-2xl shadow-sm border-l-4 border-l-[#be1622] border-gray-100 mb-12 flex flex-col md:flex-row items-center gap-10"
                >
                    <div className="w-full md:w-1/3 flex justify-center">
                        <img src={logoDimes} alt="DIMES Logo" className="max-w-[250px]" />
                    </div>
                    <div className="w-full md:w-2/3 text-left">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">DIMES Department</h2>
                        <h3 className="text-xl text-gray-500 mb-6">University of Calabria</h3>
                        <p className="text-gray-600 leading-relaxed mb-6 text-justify">
                            The DIMES (Department of Computer Engineering, Modeling, Electronics, and System Engineering) was established in 2013. It includes 78 professors and researchers and promotes research in computer engineering, modeling, electronics, and telecommunications.
                        </p>
                        <a href="https://www2.dimes.unical.it/" target="_blank" rel="noopener noreferrer" className="text-[#be1622] font-semibold hover:underline inline-flex items-center">
                            Visit DIMES <span className="ml-1">→</span>
                        </a>
                    </div>
                </motion.div>

                {/* SPEME Lab (Secondary) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-20 flex flex-col md:flex-row-reverse items-center gap-10"
                >
                    <div className="w-full md:w-1/4 flex justify-center">
                        <img src={badgeSpeme} alt="Highly Cited Researchers" className="max-w-[120px]" />
                    </div>
                    <div className="w-full md:w-3/4">
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">SPEME Lab at work</h2>
                        <p className="text-gray-600 leading-relaxed mb-4 text-justify">
                            The SPEME (Smart, PErvasive and Mobile systems Engineering) Lab focuses on trustworthy, distributed, intelligent, and multi-sensorial systems. Steps into Internet of Things and Smart Systems of Systems domains.
                        </p>
                        <a href="https://labs.dimes.unical.it/speme/" target="_blank" rel="noopener noreferrer" className="text-accent-blue font-semibold hover:underline inline-flex items-center">
                            Visit SPEME Lab <span className="ml-1">→</span>
                        </a>
                    </div>
                </motion.div>

                {/* Team Hierarchy */}
                <div className="space-y-12">
                    {/* Tier 1: Lead */}
                    <div className="flex justify-center">
                        {tier1.map((member, idx) => <MemberCard key={idx} member={member} size="lg" />)}
                    </div>

                    {/* Tier 2: Key Researchers */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {tier2.map((member, idx) => <MemberCard key={idx} member={member} />)}
                    </div>

                    {/* Tier 3: Team Members */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {tier3.map((member, idx) => <MemberCard key={idx} member={member} />)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
