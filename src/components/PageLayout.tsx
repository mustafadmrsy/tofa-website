'use client';

import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="relative min-h-screen">
      {/* Gradient Arka Plan */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050508] via-[#0f0520] to-[#070b15] -z-10"></div>
      
      {/* Dekoratif Işık Efektleri */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/5 rounded-full blur-[150px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/5 rounded-full blur-[130px] -z-10 animate-pulse"></div>
      
      {children}
    </div>
  );
}; 