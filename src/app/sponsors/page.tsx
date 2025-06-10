'use client';

import React from 'react';
import Image from 'next/image';
import { SponsorCard } from '@/components/SponsorCard';
import { PageLayout } from '@/components/PageLayout';

interface Sponsor {
  id: number;
  name: string;
  imageUrl: string;
}

const sponsors: Sponsor[] = [
  { id: 1, name: 'Şirket Adı', imageUrl: '/assets/sponsors/sponsor-gradient.png' },
  { id: 2, name: 'Şirket Adı', imageUrl: '/assets/sponsors/sponsor-gradient.png' },
  { id: 3, name: 'Şirket Adı', imageUrl: '/assets/sponsors/sponsor-gradient.png' },
  { id: 4, name: 'Şirket Adı', imageUrl: '/assets/sponsors/sponsor-gradient.png' },
  { id: 5, name: 'Şirket Adı', imageUrl: '/assets/sponsors/sponsor-gradient.png' },
  { id: 6, name: 'Şirket Adı', imageUrl: '/assets/sponsors/sponsor-gradient.png' },
];

export default function SponsorsPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-24">
          <h1 className="text-5xl font-bold leading-tight">
            Bizi Destekleyen
            <br />
            Şirketlerimiz
          </h1>
          <div className="relative w-96 h-96">
            <Image
              src="/images/illustrations/undraw_connecting-teams_nnjy 1.svg"
              alt="Sponsors illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {sponsors.map((sponsor) => (
            <SponsorCard
              key={sponsor.id}
              name={sponsor.name}
              imageUrl={sponsor.imageUrl}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
} 