'use client';

import React from 'react';

interface EventCardProps {
  title: string;
  date: string;
  gradient: string;
}

export const EventCard = ({ title, date, gradient }: EventCardProps) => {
  return (
    <div className="space-y-4">
      {/* Kart */}
      <div className="aspect-square rounded-2xl overflow-hidden cursor-pointer group">
        {/* Gradient Arka Plan */}
        <div 
          className={`w-full h-full bg-gradient-to-br ${gradient} transition-transform duration-500 group-hover:scale-110`}
        ></div>
      </div>
      
      {/* Başlık ve Tarih - Kartın altında */}
      <div className="px-1">
        <h3 className="text-white text-lg font-medium">{title}</h3>
        <div className="h-px bg-white/20 my-3"></div>
        <p className="text-gray-400 text-sm">{date}</p>
      </div>
    </div>
  );
}; 