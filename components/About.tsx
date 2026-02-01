'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20" ref={ref}>
            <motion.div
                className="max-w-6xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.h2
                    className="text-5xl md:text-7xl font-bold mb-12 text-center glow-text"
                    variants={itemVariants}
                >
                    About Me
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Profile Image Placeholder */}
                    <motion.div
                        className="flex items-center justify-center"
                        variants={itemVariants}
                    >
                        <div className="relative">
                            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-neon-cyan via-neon-violet to-purple-600 p-1">
                                <div className="w-full h-full rounded-full bg-cyber-dark flex items-center justify-center text-8xl">
                                    👨‍💻
                                </div>
                            </div>
                            <motion.div
                                className="absolute -inset-4 rounded-full bg-gradient-to-r from-neon-cyan to-neon-violet opacity-20 blur-xl"
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.2, 0.3, 0.2],
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                        </div>
                    </motion.div>

                    {/* About Content */}
                    <motion.div className="flex flex-col justify-center space-y-6" variants={itemVariants}>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                            Hello! I&apos;m <span className="text-neon-cyan font-semibold">Chu Đức Minh</span>,
                            a developer on the journey to becoming a Full-stack Developer.
                        </p>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-neon-violet">Interests & Expertise:</h3>

                            <div className="space-y-3">
                                <motion.div
                                    className="cyber-card p-4 rounded-lg"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <h4 className="text-xl font-semibold text-neon-cyan mb-2">💎 Frontend Development</h4>
                                    <p className="text-gray-400">
                                        Creating responsive and interactive user interfaces with React, Next.js, and modern CSS frameworks like Tailwind CSS.
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="cyber-card p-4 rounded-lg"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <h4 className="text-xl font-semibold text-neon-cyan mb-2">🚀 Backend Development</h4>
                                    <p className="text-gray-400">
                                        Building robust APIs with NestJS and Prisma, working with databases like MySQL, PostgreSQL, and SQL Server.
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="cyber-card p-4 rounded-lg"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <h4 className="text-xl font-semibold text-neon-cyan mb-2">🤖 AI Automation</h4>
                                    <p className="text-gray-400">
                                        Passionate about researching and applying AI to automate processes and optimize performance.
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="cyber-card p-4 rounded-lg"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <h4 className="text-xl font-semibold text-neon-cyan mb-2">📚 English Linguistics</h4>
                                    <p className="text-gray-400">
                                        Actively improving English and Chinese proficiency to enhance technical communication and documentation reading, driven by a deep interest in linguistics.                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
