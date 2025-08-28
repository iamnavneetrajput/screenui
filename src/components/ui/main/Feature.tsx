'use client';

import { useState, useEffect } from 'react';
import { clsx } from '@/lib/utils';
import { Heart } from 'lucide-react';

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsVisible(true), 50);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className=" bg-[hsl(var(--background))]">
            {/* Hero Section */}
            <section className="relative overflow-hidden" aria-labelledby="hero-heading">
                <div className="relative container mx-auto px-4 py-16 lg:py-24">
                    <div className={clsx(
                        'text-center transition-all duration-1000',
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    )}>
                        <h1 id="hero-heading" className="text-xl md:text-2xl text-[hsl(var(--foreground))] mb-4 max-w-4xl mx-auto leading-relaxed opacity-70">
                            <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-extrabold'>Designed for modern web applications</span>
                        </h1>
                        <p className="text-lg md:text-xl text-[hsl(var(--foreground))] max-w-3xl mx-auto opacity-60">
                            Everything you need to build modern, scalable applications with ease
                        </p>
                    </div>
                </div>
            </section>

            {/* Sponsor Section (compact) */}
            <section className="bg-[hsl(var(--background))]">
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
                            <div className="relative flex items-center justify-center gap-3 px-4 py-2 bg-white rounded-xl shadow-lg border border-gray-100">
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
