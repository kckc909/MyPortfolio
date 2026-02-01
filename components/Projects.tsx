'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface Project {
    title: string;
    description: string;
    tech: string[];
    icon: string;
    highlights: string[];
}

const projects: Project[] = [
    {
        title: 'LMS Marketplace',
        description: 'A comprehensive online learning platform with full features for Students, Instructors, and Admins',
        tech: ['NestJS', 'Prisma', 'MySQL', 'React', 'TypeScript'],
        icon: '🎓',
        highlights: [
            '3-role permission system (Student/Instructor/Admin)',
            'Course management, lessons, and video content',
            'Payment integration & Analytics dashboard',
            'Real-time notifications & Reviews system',
        ],
    },
    {
        title: 'AI Chatbot Assistant',
        description: 'Intelligent chatbot powered by AI for automated customer support and natural language processing',
        tech: ['Python', 'OpenAI API', 'FastAPI', 'React', 'WebSocket'],
        icon: '🤖',
        highlights: [
            'Natural language understanding with GPT models',
            'Real-time conversation with WebSocket',
            'Context-aware responses and memory',
            'Multi-language support and sentiment analysis',
        ],
    },
];

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20" ref={ref}>
            <div className="max-w-7xl mx-auto w-full">
                <motion.h2
                    className="text-5xl md:text-7xl font-bold mb-16 text-center glow-text"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Featured Projects
                </motion.h2>

                <motion.div
                    className="grid md:grid-cols-2 gap-8"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.3,
                            },
                        },
                    }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            className="cyber-card p-8 rounded-2xl group"
                            variants={{
                                hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            whileHover={{ y: -10 }}
                        >
                            {/* Icon */}
                            <motion.div
                                className="text-6xl mb-4"
                                animate={{
                                    rotate: [0, 10, -10, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: index * 0.5,
                                }}
                            >
                                {project.icon}
                            </motion.div>

                            {/* Title */}
                            <h3 className="text-3xl font-bold mb-4 text-neon-cyan group-hover:text-neon-violet transition-colors">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-300 mb-6 text-lg">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 bg-neon-cyan/10 border border-neon-cyan/30 rounded-full text-sm text-neon-cyan"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Highlights */}
                            <div className="space-y-3">
                                <h4 className="text-lg font-semibold text-neon-violet">Key Features:</h4>
                                <ul className="space-y-2">
                                    {project.highlights.map((highlight, idx) => (
                                        <motion.li
                                            key={idx}
                                            className="flex items-start gap-2 text-gray-400"
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ delay: 0.5 + idx * 0.1 }}
                                        >
                                            <span className="text-neon-cyan mt-1">▹</span>
                                            <span>{highlight}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            {/* Glow effect on hover */}
                            <motion.div
                                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-cyan to-neon-violet opacity-0 group-hover:opacity-10 -z-10 blur-2xl"
                                initial={false}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* More projects coming soon */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1 }}
                >
                    <p className="text-xl text-gray-400 mb-4">
                        More exciting projects coming soon... 🚧
                    </p>
                    <div className="flex justify-center gap-2">
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="w-3 h-3 bg-neon-violet rounded-full"
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
