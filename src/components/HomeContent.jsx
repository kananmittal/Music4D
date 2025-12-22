import React from 'react';
import { motion } from 'framer-motion';
import RobotShowcase from './RobotShowcase';

const Article = ({ date, title, children, delay = 0 }) => (
    <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true, margin: "-50px" }}
        className="mb-24 last:mb-0"
    >
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="md:w-1/4 shrink-0">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-accent-blue text-xs font-bold uppercase tracking-widest mb-4 md:mb-0">
                    {date}
                </span>
            </div>
            <div className="md:w-3/4">
                <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-8 leading-tight">{title}</h2>
                <div className="text-lg text-text-main leading-relaxed space-y-6 text-justify">
                    {children}
                </div>
            </div>
        </div>
    </motion.article>
);

const HomeContent = () => {
    return (
        <div className="bg-white border-t border-gray-100">

            {/* Full Width Robot Showcase - Moved to Top */}
            <div id="project-overview">
                <RobotShowcase />
            </div>

            <div className="py-24 max-w-6xl mx-auto px-6">

                {/* Article 1: From Soloists to Symphony */}
                <Article date="17 Dicembre 2025" title="From Soloists to Symphony: The Evolution of Human-Robot Teaming">
                    <p>
                        <strong className="text-text-heading">SPEME Lab</strong> is proud to share its latest research contribution,
                        which pushes the boundaries of how humans and machines operate together.
                    </p>
                    <p className="italic text-text-secondary pl-6 border-l-4 border-gray-200">
                        "The traversing of Human Robot Interaction (HRI) to Human Robot Teaming (HRT) has seen huge transformation
                        from human-robots working in collaboration to working as teammates. The progress in automation, network connectivity,
                        and HRI represent a transformative shift to embrace Industry 5.0 by integrating advanced technologies like AI, robotics,
                        and IoT to create a symbiotic ecosystem where human ingenuity and machine intelligence converge."
                    </p>

                    <h3 className="text-xl font-bold text-text-heading mt-8 mb-2">Why an Orchestra?</h3>
                    <p>
                        The authors identify the musical orchestra as the ultimate testbed for complex dynamics. In this setting,
                        precision isn't enough; the system requires <strong className="text-accent-blue">"entitativity"</strong> —
                        the state where individual agents (human and robotic) feel and act as a single, cohesive unit.
                    </p>
                    <p>
                        Authored by <strong>Rashmi Chawla, Francesco Pupo, and Giancarlo Fortino</strong>, the paper proposes a conceptual review
                        that defines HRT through the framework of the "4Cs":
                    </p>

                    {/* Updated 4Cs Styling to match Technical Vision (Dark Theme) */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                        {[
                            { label: 'Communication', desc: 'Multimodal sensory modalities (visual, auditory, tactile).', color: 'bg-blue-900' },
                            { label: 'Coordination', desc: 'Syncing actions in real-time.', color: 'bg-gray-900' },
                            { label: 'Cooperation', desc: 'Working towards a shared goal.', color: 'bg-gray-900' },
                            { label: 'Command/Control', desc: 'Dynamic leadership fluidly shifting.', color: 'bg-blue-900' }
                        ].map((c, i) => (
                            <li key={i} className={`${c.color} p-5 rounded-xl border border-gray-700 shadow-lg text-white transform hover:-translate-y-1 transition-transform duration-300`}>
                                <span className="block font-bold text-blue-300 mb-2 tracking-wide uppercase text-sm">{c.label}</span>
                                <span className="text-base text-gray-300 leading-snug">{c.desc}</span>
                            </li>
                        ))}
                    </ul>
                </Article>

                <hr className="my-20 border-gray-200" />

                {/* Article 2: MUSIC4D Project */}
                <Article date="7 Maggio 2025" title="MUSIC4D: When Music Meets Artificial Intelligence in the Heart of the Mediterranean">
                    <p>
                        The <strong>MUSIC4D</strong> project, approved within the framework of the "Notice for the granting of funding for the internationalisation
                        of AFAM institutions," represents a global initiative that achieved first place in score and order of funding among
                        the projects approved by the Ministry of University and Research.
                    </p>
                    <p>
                        Coordinated by the <strong>Palermo Conservatory</strong>, the consortium involves all AFAM
                        institutions in Sicily (Agrigento, Catania, Caltanissetta, Messina, Trapani) and Sardinia (Cagliari and Sassari), along with the University of Palermo and the University of Calabria,
                        for a total of <strong>13 partners and nearly 6 million euros in funding</strong>.
                    </p>
                    <p>
                        The project, named <em>"Music, Entrepreneurship, Creativity, and Digital Revolution: The Future of Performing Arts in the AFAM system"</em>,
                        aims to promote and enhance the popular musical culture of Southern Italy internationally, using advanced digital tools to create
                        multi-sensory environments and innovative artistic platforms.
                    </p>

                    <h3 className="text-xl font-bold text-text-heading mt-8 mb-2">Technical Vision</h3>
                    <p>
                        The project aims to develop an integrated system that combines large-scale deep learning models, advanced sensory capabilities,
                        and a high-performance robotic platform. Central to this vision is the use of a robot capable of analyzing and processing,
                        in real-time, complex signals from the surrounding environment, such as facial expressions, body movements, postures,
                        environmental parameters, and other emotional indicators.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mt-6">
                        <div className="bg-blue-900 text-white p-6 rounded-xl shadow-lg border border-gray-700">
                            <h4 className="text-lg font-bold text-blue-300 mb-3 tracking-wide uppercase">Robotic Platform</h4>
                            <p className="text-blue-100 text-base leading-relaxed">
                                From a hardware perspective, the <strong className="text-white">NVIDIA Groot N1 platform</strong> will be utilized, allowing for advanced
                                management of movement, perception, and autonomous control. The integration involves collecting data from
                                vision, posture, sound, and environmental sensors.
                            </p>
                        </div>
                        <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg border border-gray-700">
                            <h4 className="text-lg font-bold text-blue-300 mb-3 tracking-wide uppercase">AI Models</h4>
                            <p className="text-gray-300 text-base leading-relaxed">
                                The computational component is based on models of <strong className="text-white">7-8 billion parameters</strong>, designed to ensure
                                a balance between processing power and adaptability. These models continuously learn to capture
                                emotional and behavioral nuances in a performative context.
                            </p>
                        </div>
                    </div>
                </Article>

            </div>
        </div>
    );
};

export default HomeContent;
