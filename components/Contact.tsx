'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';
import { HiMail } from 'react-icons/hi';

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [copied, setCopied] = useState(false);

    const email = "chuducminh253261@gmail.com";

    const handleEmailClick = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/kckc909',
            icon: <FaGithub className="w-8 h-8" />,
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/kckc909/',
            icon: <FaLinkedin className="w-8 h-8" />,
        },
        {
            name: 'Facebook',
            url: 'https://www.facebook.com/minh.chu.612600',
            icon: <FaFacebook className="w-8 h-8" />,
        },
        {
            name: 'Zalo',
            url: 'https://zalo.me/0934206983',
            icon: <SiZalo className="w-8 h-8" />,
        },
    ];

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20" ref={ref}>
            <div className="max-w-6xl mx-auto w-full">
                <motion.h2
                    className="text-5xl md:text-7xl font-bold mb-16 text-center glow-violet"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Get In Touch
                </motion.h2>

                <motion.div
                    className="max-w-2xl mx-auto text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 }}
                >
                    <p className="text-xl md:text-2xl text-gray-300 mb-12">
                        I'm always ready to connect and discuss new projects, collaboration opportunities,
                        or simply chat about technology! 🚀
                    </p>

                    {/* Email Button */}
                    <motion.button
                        className="cyber-button px-10 py-5 rounded-lg text-xl font-semibold mb-12 relative"
                        onClick={handleEmailClick}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="flex items-center gap-3">
                            <HiMail className="w-6 h-6" />
                            {copied ? 'Email Copied!' : 'Copy Email'}
                        </span>
                    </motion.button>

                    {/* Social Links */}
                    <div className="flex justify-center gap-8 mb-16">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cyber-card p-4 rounded-lg hover:border-neon-violet transition-colors"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="text-neon-cyan hover:text-neon-violet transition-colors">
                                    {social.icon}
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Footer */}
                    <motion.div
                        className="border-t border-gray-800 pt-8"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.8 }}
                    >
                        <p className="text-gray-500">
                            Designed & Built by <span className="text-neon-cyan">Chu Đức Minh</span>
                        </p>
                        <p className="text-gray-600 mt-2">
                            © 2026 - Made with Next.js, Tailwind CSS & Framer Motion
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
