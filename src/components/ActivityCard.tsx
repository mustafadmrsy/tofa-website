'use client';

import React from 'react';

interface ActivityCardProps {
  title: string;
  date: string;
  gradient: string;
  id: number;
}

export const ActivityCard = ({ title, date, gradient, id }: ActivityCardProps) => {
  return (
    <div className="space-y-4">
      {/* Kart */}
      <div className="aspect-square rounded-2xl overflow-hidden cursor-pointer group">
        {/* Gradient Arka Plan */}
        <div 
          className={`w-full h-full bg-gradient-to-br ${gradient} transition-transform duration-500 group-hover:scale-110`}
          style={{
            backgroundImage: id === 2 ? `
              linear-gradient(45deg, 
                rgba(121, 40, 202, 0.8), 
                rgba(255, 0, 128, 0.8), 
                rgba(74, 0, 130, 0.8)
              ),
              url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='userSpaceOnUse' cx='50%25' cy='50%25' r='50%25'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='.3'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3C/svg%3E")
            ` : undefined
          }}
        ></div>
      </div>
      
      {/* Başlık ve Tarih */}
      <div className="px-1">
        <h3 className="text-white text-lg font-medium">{title}</h3>
        <div className="h-px bg-white/20 my-3"></div>
        <p className="text-gray-400 text-sm">{date}</p>
      </div>
    </div>
  );
}; 