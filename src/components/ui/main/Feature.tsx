'use client';

import { useState, useEffect } from 'react';
import { clsx } from '@/lib/utils';
import Stargazers from './Stargazers';

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
                        <h1 id="hero-heading" className="text-xl md:text-2xl mb-4 max-w-4xl mx-auto leading-relaxed opacity-70">
                            <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-extrabold'>Designed for modern web applications</span>
                        </h1>
                        <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-60">
                            Everything you need to build modern, scalable applications with ease
                        </p>
                    </div>
                </div>
            </section>

            <Stargazers />
        </div>
    );
}
