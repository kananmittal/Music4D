import React from "react";
import frameworkImg from '../assets/framework.png';

const ProjectOverview = () => {
    return (
        <section id="project-overview" className="py-16 px-6 md:px-20 bg-white">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                    Project Overview
                </h2>

                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    This project investigates <strong>Multi-Agent Human–Robot Teaming (MA-HRT)</strong>
                    in a musical orchestral environment, representing a paradigm shift from
                    traditional Human–Robot Interaction (HRI) and Human–Robot Collaboration (HRC)
                    toward robots functioning as equal teammates.
                    The orchestral domain serves as a rich, unstructured, and expressive setting
                    to study coordination, communication, control, and collective creativity
                    between humans and robots.
                </p>

                <div className="mb-10 text-center">
                    <img
                        src={frameworkImg}
                        alt="MA-HRT Orchestra Framework"
                        className="rounded-xl shadow-lg border border-gray-100 mx-auto max-h-[500px] object-contain"
                    />
                    <p className="mt-4 text-sm text-gray-500 italic">Fig 1. Proposed MA-HRT Orchestra Framework</p>
                </div>

                <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                    Aligned with the vision of <strong>Industry 5.0</strong>, the framework promotes
                    human-centric, intelligent, and collaborative systems where human ingenuity
                    and machine intelligence coexist and co-evolve.
                    The project systematically organizes MA-HRT through four foundational dimensions,
                    referred to as the <strong>4C’s</strong>.
                </p>

                {/* Point 1 */}
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                        1. Coexistence — Team Structure and Presence
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        Coexistence defines the composition and structure of the human–robot team.
                        The framework supports heterogeneous and homogeneous multi-agent teams,
                        involving multiple humans and multiple robots sharing the same workspace.
                        In an orchestral setting, this enables robots and musicians to co-presence
                        as coordinated performers, influencing perception, roles, and emotional
                        responses within the team.
                    </p>
                </div>

                {/* Point 2 */}
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                        2. Collaboration — Multimodal Interaction and Coordination
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        Collaboration focuses on how agents communicate and synchronize actions.
                        The project incorporates multimodal interaction channels including
                        visual cues, auditory signals, gestures, and sensor fusion.
                        Centralized and distributed control strategies enable real-time coordination
                        between human musicians and robotic agents, supporting shared goals such as
                        rhythm alignment, tempo control, and musical improvisation.
                    </p>
                </div>

                {/* Point 3 */}
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                        3. Control — Sensor-Driven Leadership and Safety
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        Control addresses decision-making, safety, and execution within the team.
                        A sophisticated sensor ecosystem—integrating visual, auditory, and
                        communication sensors—enables robots to perceive the environment,
                        monitor human actions, and adapt behavior accordingly.
                        In the orchestral framework, this allows robotic conductors or performers
                        to guide tempo, dynamics, and coordination while maintaining safe
                        and efficient human–robot interaction.
                    </p>
                </div>

                {/* Point 4 */}
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                        4. Cooperation — Emotional Awareness and Collective Performance
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        Cooperation represents the highest level of teaming, where agents share
                        situational awareness, intent, and emotional understanding.
                        The framework incorporates emotion recognition and expressive behaviors
                        to enable robots to respond to musicians and audience feedback.
                        This supports collective virtuosity, allowing the team to achieve
                        synchronized, expressive performances and enhanced audience engagement
                        through real-time adaptive interaction.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProjectOverview;
