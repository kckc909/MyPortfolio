import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
    return (
        <>
            <Navigation />
            <main className="relative">
                <Hero />
                <About />
                <TechStack />
                <Projects />
                <Contact />
            </main>
        </>
    );
}
