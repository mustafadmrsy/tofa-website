'use client';

import React from 'react';
import Image from 'next/image';
import { AcademyCard } from '@/components/AcademyCard';
import { PageLayout } from '@/components/PageLayout';

interface Academy {
  id: number;
  name: string;
  imageUrl: string;
}

const academies: Academy[] = [
  { id: 1, name: 'Akademi Adı', imageUrl: '/assets/clubs/club-gradient.png' },
  { id: 2, name: 'Akademi Adı', imageUrl: '/assets/clubs/club-gradient.png' },
  { id: 3, name: 'Akademi Adı', imageUrl: '/assets/clubs/club-gradient.png' },
  { id: 4, name: 'Akademi Adı', imageUrl: '/assets/clubs/club-gradient.png' },
  { id: 5, name: 'Akademi Adı', imageUrl: '/assets/clubs/club-gradient.png' },
  { id: 6, name: 'Akademi Adı', imageUrl: '/assets/clubs/club-gradient.png' },
];

export default function AcademyPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-24">
          <h1 className="text-5xl font-bold leading-tight">
            Bizi Destekleyen
            <br />
            Akademi ve Okullar
          </h1>
          <div className="relative w-96 h-96">
            <Image
              src="/images/illustrations/undraw_connecting-teams_nnjy 1.svg"
              alt="Academy illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Academy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {academies.map((academy) => (
            <AcademyCard
              key={academy.id}
              name={academy.name}
              imageUrl={academy.imageUrl}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
} 