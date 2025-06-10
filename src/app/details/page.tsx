'use client';

import React from 'react';
import Image from 'next/image';
import { PrivilegeCard } from '@/components/PrivilegeCard';
import { PageLayout } from '@/components/PageLayout';

interface Privilege {
  id: number;
  title: string;
}

const privileges: Privilege[] = [
  { id: 1, title: 'AYRICALIK 1' },
  { id: 2, title: 'AYRICALIK 1' },
  { id: 3, title: 'AYRICALIK 1' },
  { id: 4, title: 'AYRICALIK 1' },
  { id: 5, title: 'AYRICALIK 1' },
  { id: 6, title: 'AYRICALIK 1' },
  { id: 7, title: 'AYRICALIK 1' },
  { id: 8, title: 'AYRICALIK 1' },
];

export default function DetailsPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Bölümü */}
        <div className="flex items-center justify-between mb-32">
          <div className="w-1/2">
            <h1 className="text-6xl font-bold text-white leading-tight">
              Bize Katılmanın
              <br />
              Avantaj ve
              <br />
              Ayrıcalıkları
            </h1>
          </div>
          
          <div className="w-1/2 h-[400px] relative">
            <Image
              src="/images/illustrations/undraw_job-hunt_5umi 1.svg"
              alt="Details illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Ayrıcalıklar Grid */}
        <div className="grid grid-cols-4 gap-x-8 gap-y-12">
          {privileges.map((privilege) => (
            <PrivilegeCard
              key={privilege.id}
              title={privilege.title}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
} 