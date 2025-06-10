'use client';

import Image from 'next/image';

interface SponsorCardProps {
  name: string;
  imageUrl: string;
}

export const SponsorCard = ({ name, imageUrl }: SponsorCardProps) => {
  return (
    <div className="flex flex-col items-center group">
      <div className="relative w-64 h-64 mb-4 rounded-full overflow-hidden 
                    transform transition-all duration-300 
                    hover:scale-105 hover:shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-blue-400 to-purple-500 
                      opacity-80 mix-blend-multiply"></div>
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-xl text-gray-300 group-hover:text-white transition-colors">{name}</h3>
    </div>
  );
}; 