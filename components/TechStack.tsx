'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface TechItem {
    name: string;
    slug: string;
    color: string;
    url: string;
    iconType?: 'simple' | 'devicon'; // simple = simpleicons, devicon = devicon
}

const techStack: TechItem[] = [
    { name: 'ReactJS', slug: 'react', color: '61DAFB', url: 'https://react.dev' },
    { name: 'Next.js', slug: 'nextdotjs', color: 'ffffff', url: 'https://nextjs.org' },
    { name: 'NestJS', slug: 'nestjs', color: 'E0234E', url: 'https://nestjs.com' },
    { name: '.NET', slug: 'dotnet', color: '512BD4', url: 'https://dotnet.microsoft.com' },
    { name: 'Prisma', slug: 'prisma', color: '2D3748', url: 'https://prisma.io' },
    { name: 'MySQL', slug: 'mysql', color: '4479A1', url: 'https://mysql.com' },
    { name: 'SQL Server', slug: 'microsoftsqlserver', color: 'CC2927', url: 'https://www.microsoft.com/sql-server', iconType: 'devicon' },
    { name: 'PostgreSQL', slug: 'postgresql', color: '4169E1', url: 'https://postgresql.org' },
    { name: 'Firebase', slug: 'firebase', color: 'FFCA28', url: 'https://firebase.google.com' },
    { name: 'Tailwind CSS', slug: 'tailwindcss', color: '06B6D4', url: 'https://tailwindcss.com' },
    { name: 'JavaScript', slug: 'javascript', color: 'F7DF1E', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'TypeScript', slug: 'typescript', color: '3178C6', url: 'https://typescriptlang.org' },
];

export default function TechStack() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="tech" className="min-h-screen flex items-center justify-center px-4 py-20" ref={ref}>
            <div className="max-w-7xl mx-auto w-full">
                <motion.h2
                    className="text-5xl md:text-7xl font-bold mb-16 text-center glow-violet"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Tech Stack
                </motion.h2>

                <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                >
                    {techStack.map((tech, index) => (
                        <a
                            key={tech.name}
                            href={tech.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <motion.div
                                className="cyber-card p-6 rounded-xl flex flex-col items-center justify-center gap-4 group cursor-pointer"
                                variants={{
                                    hidden: { opacity: 0, scale: 0.8 },
                                    visible: { opacity: 1, scale: 1 },
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    rotate: [0, -2, 2, 0],
                                    transition: { duration: 0.3 },
                                }}
                            >
                                {/* Icon */}
                                <motion.div
                                    className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center"
                                    animate={{
                                        y: [0, -5, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: index * 0.1,
                                    }}
                                >
                                    <img
                                        src={
                                            tech.iconType === 'devicon'
                                                ? `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.slug}/${tech.slug}-plain.svg`
                                                : `https://cdn.simpleicons.org/${tech.slug}/${tech.color}`
                                        }
                                        alt={tech.name}
                                        className="w-full h-full object-contain"
                                    />
                                </motion.div>

                                {/* Name */}
                                <h3 className="text-lg md:text-xl font-semibold text-center group-hover:text-neon-cyan transition-colors">
                                    {tech.name}
                                </h3>

                                {/* Animated border */}
                                <motion.div
                                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 -z-10 blur-xl"
                                    style={{
                                        background: `linear-gradient(135deg, #${tech.color}, #${tech.color}88)`,
                                    }}
                                    initial={false}
                                    whileHover={{ scale: 1.1 }}
                                />
                            </motion.div>
                        </a>
                    ))}
                </motion.div>

                {/* Additional Info */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1 }}
                >
                    <p className="text-xl text-gray-400">
                        And continuously learning new technologies every day! 🚀
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
