'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Hero() {
    // Generate particles only on client side to avoid hydration mismatch
    const [particles, setParticles] = useState<Array<{
        id: number;
        left: number;
        top: number;
        duration: number;
        delay: number;
    }>>([]);

    useEffect(() => {
        // Generate particles only on client after mount
        setParticles(
            Array.from({ length: 20 }, (_, i) => ({
                id: i,
                left: Math.random() * 100,
                top: Math.random() * 100,
                duration: 3 + Math.random() * 2,
                delay: Math.random() * 2,
            }))
        );
    }, []);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute w-2 h-2 bg-neon-cyan rounded-full"
                        style={{
                            left: `${particle.left}%`,
                            top: `${particle.top}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 1, 0.2],
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            delay: particle.delay,
                        }}
                    />
                ))}
            </div>

            <div className="max-w-6xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Decorative symbols */}
                    <motion.div
                        className="text-4xl md:text-6xl mb-4"
                        animate={{ rotate: [0, 10, 0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                    >
                        ✨
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 glow-text"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        MINH
                    </motion.h1>

                    <motion.div
                        className="text-4xl md:text-6xl mb-4"
                        animate={{ rotate: [0, -10, 0, 10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                    >
                        ✨
                    </motion.div>

                    {/* Subtitle */}
                    <motion.h2
                        className="text-2xl md:text-4xl mb-4 font-light text-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        Chu Đức Minh
                    </motion.h2>

                    {/* Title */}
                    <motion.p
                        className="text-xl md:text-3xl mb-8 glow-violet font-semibold"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        Aspiring Full-stack Developer
                    </motion.p>

                    {/* Description */}
                    <motion.p
                        className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                    >
                        Passionate about building modern web applications with cutting-edge technologies.
                        <br />
                        Specializing in Backend, AI Automation, and creating seamless user experiences.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1 }}
                    >
                        <Link
                            href="#projects"
                            className="cyber-button px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-transform"
                        >
                            <span>View Projects</span>
                        </Link>
                        <Link
                            href="#contact"
                            className="px-8 py-4 rounded-lg text-lg font-semibold border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all"
                        >
                            Contact Me
                        </Link>
                    </motion.div>

                    {/* Scroll indicator */}
                    <motion.div
                        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center">
                            <motion.div
                                className="w-2 h-2 bg-neon-cyan rounded-full mt-2"
                                animate={{ y: [0, 16, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
