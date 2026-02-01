import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    weight: ['300', '400', '500', '600', '700', '800'],
    variable: '--font-inter',
});

export const metadata: Metadata = {
    title: "✨ Minh ✨ | Full-stack Developer Portfolio",
    description: "Portfolio của Chu Đức Minh - Trying to Become Full-stack Developer. Chuyên về Next.js, React, NestJS, và AI Automation.",
    keywords: ["Full-stack Developer", "Next.js", "React", "NestJS", "Prisma", "Portfolio", "Chu Đức Minh"],
    authors: [{ name: "Chu Đức Minh" }],
    openGraph: {
        title: "✨ Minh ✨ | Full-stack Developer Portfolio",
        description: "Portfolio của Chu Đức Minh - Trying to Become Full-stack Developer",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="vi" className="scroll-smooth">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body className={`${inter.variable} antialiased`}>
                <div className="fixed inset-0 cyber-grid -z-10 opacity-30" />
                <div className="fixed inset-0 bg-gradient-to-br from-cyber-darker via-cyber-dark to-purple-900/20 -z-20" />
                {children}
            </body>
        </html>
    );
}
