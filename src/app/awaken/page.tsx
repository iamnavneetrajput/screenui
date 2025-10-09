"use client";
import React from 'react';
import IntroBanner from '@/components/ui/main/banner';
const AwakenPage: React.FC = () => {
  return (
    <main className="min-h-screen w-full pt-12">
      <IntroBanner
        title="Awaken – Starter Layout for ScreenUI"
        description="A minimal and customizable starter layout for building modern web applications with ScreenUI."
        buttonLabel='Get Started'
        buttonLink='/docs/awaken'
      />
      <div className="min-h-screen pt-4">
        <div className="mx-auto">
        </div>
      </div>

    </main>
  );
};

export default AwakenPage;