'use client';

import { useState, useEffect } from 'react';
import {
    Check,
    Rocket,
    Lightbulb,
    Settings,
    Heart
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/main/card';
import clsx from 'clsx';

type Feature = {
    icon: React.ElementType;
    title: string;
    description: string;
};

const features: Feature[] = [
    {
        icon: Check,
        title: '10+ Customizable Components',
        description: 'Extensive library of pre-built components ready to use in your projects.'
    },
    {
        icon: Rocket,
        title: 'Instant Setup via CLI',
        description: 'Get started in seconds with our powerful command-line interface.'
    },
    {
        icon: Lightbulb,
        title: 'TypeScript & JavaScript',
        description: 'Full support for both TypeScript and JavaScript development.'
    },
    {
        icon: Settings,
        title: 'Fully Customizable',
        description: 'Tailor every component to match your brand and design requirements.'
    }
];

const FeatureCard = ({ icon: Icon, title, description, delay, isVisible }: Feature & { delay: number; isVisible: boolean }) => (
    <Card
        className={clsx(
            'bg-[hsl(var(--background))] group relative overflow-hidden border border-[hsl(var(--foreground)/0.1)] shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        )}
        style={{ transitionDelay: `${delay}ms` }}
    >
        <CardContent className="p-12 text-center relative">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[hsl(var(--foreground)/0.1)] mb-6 shadow group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-5 h-5 text-[hsl(var(--foreground))]" />
            </div>
            <h3 className="text-xl font-bold text-[hsl(var(--foreground))] mb-4 transition-colors duration-300">
                {title}
            </h3>
            <p className="text-[hsl(var(--foreground))] opacity-60 leading-relaxed">
                {description}
            </p>
            <div className="absolute inset-0 bg-[hsl(var(--foreground)/0.03)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </CardContent>
    </Card>
);

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsVisible(true), 50);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="min-h-screen bg-[hsl(var(--background))]">
            {/* Hero Section */}
            <section className="relative overflow-hidden" aria-labelledby="hero-heading">
                <div className="relative container mx-auto px-4 py-16 lg:py-24">
                    <div className={clsx(
                        'text-center transition-all duration-1000',
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    )}>
                        <h1 id="hero-heading" className="text-2xl md:text-5xl lg:text-6xl font-bold text-[hsl(var(--foreground))] leading-tight mb-6">
                            Discover our collection of premium,<br />
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                customizable components
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-[hsl(var(--foreground))] mb-4 max-w-4xl mx-auto leading-relaxed opacity-70">
                            designed for modern web applications
                        </p>
                        <p className="text-lg md:text-xl text-[hsl(var(--foreground))] max-w-3xl mx-auto opacity-60">
                            Everything you need to build modern, scalable applications with ease
                        </p>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-8 lg:py-12 bg-[hsl(var(--background))]" aria-labelledby="features-heading">
                <div className="container mx-auto px-4">
                    <h2 id="features-heading" className="sr-only">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <FeatureCard
                                key={index}
                                {...feature}
                                delay={index * 100}
                                isVisible={isVisible}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Sponsor Section (compact) */}
            <section className="py-12 lg:py-16 bg-[hsl(var(--background))]">
                <div className="container mx-auto px-4 text-center">
                    <div className={clsx(
                        'transition-all duration-1000',
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    )}>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[hsl(var(--foreground))] mb-4">
                            Become Our Sponsor
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Support our open-source mission and help us build amazing tools for developers.
                        </p>

                        <div className="relative inline-block">
                            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 rounded-full blur-xl opacity-30 animate-pulse" />
                            <div className="relative flex items-center justify-center gap-3 px-8 py-6 bg-white rounded-xl shadow-lg border border-gray-100">
                                <div className="relative">
                                    <Heart className="w-8 h-8 text-red-500 fill-current animate-pulse" />
                                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-ping opacity-75" />
                                </div>
                                <div className="text-left">
                                    <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                                        available soon
                                    </p>
                                    <p className="text-gray-500 text-xs mt-1">
                                        Stay tuned for updates
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
