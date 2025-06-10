'use client';

import React from 'react';

interface PrivilegeCardProps {
  title: string;
}

export const PrivilegeCard = ({ title }: PrivilegeCardProps) => {
  return (
    <div className="group relative">
      <div className="w-40 h-40 relative rounded-3xl overflow-hidden 
                    backdrop-blur-md bg-white/5
                    transition-all duration-500
                    before:absolute before:inset-0 
                    before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
                    before:-translate-x-full before:animate-[shimmer_0s_infinite]
                    before:opacity-0 before:group-hover:opacity-100
                    before:group-hover:animate-[shimmer_2s_infinite]
                    after:absolute after:inset-0
                    after:bg-gradient-to-r after:from-transparent after:via-white/10 after:to-transparent
                    after:translate-x-full after:animate-[shimmer_0s_infinite]
                    after:opacity-0 after:group-hover:opacity-100
                    after:group-hover:animate-[shimmer_2s_infinite_500ms]
                    hover:bg-white/10">
        <div className="absolute inset-0 flex flex-col items-center justify-end p-4 pb-6">
          <span className="text-white/60 text-sm font-medium text-center group-hover:text-white transition-colors duration-300">
            {title}
          </span>
        </div>
      </div>
    </div>
  );
}; 