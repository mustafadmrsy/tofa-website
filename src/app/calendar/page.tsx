'use client';

import React from 'react';
import Image from 'next/image';
import { EventCard } from '@/components/EventCard';
import { PageLayout } from '@/components/PageLayout';

interface Event {
  id: number;
  title: string;
  date: string;
  gradient: string;
}

// Örnek etkinlik verileri
const events: Event[] = [
  {
    id: 1,
    title: 'Etkinlik 1',
    date: 'dd.mm.yyyy',
    gradient: 'from-[#FF9ECD] to-[#78D1F5]' // Pembe-Mavi dalga
  },
  {
    id: 2,
    title: 'Etkinlik 2',
    date: 'dd.mm.yyyy',
    gradient: 'from-[#7928CA] via-[#FF0080] to-[#4A0082]' // Mor-Pembe gece
  },
  {
    id: 3,
    title: 'Etkinlik 3',
    date: 'dd.mm.yyyy',
    gradient: 'from-[#FFD93D] to-[#1A1A1A]' // Sarı-Siyah
  },
  {
    id: 4,
    title: 'Etkinlik 4',
    date: 'dd.mm.yyyy',
    gradient: 'from-[#FF8A65] to-[#4A90E2]' // Somon-Mavi
  },
  {
    id: 5,
    title: 'Etkinlik 5',
    date: 'dd.mm.yyyy',
    gradient: 'from-[#FF9ECD] to-[#78D1F5]'
  },
  {
    id: 6,
    title: 'Etkinlik 6',
    date: 'dd.mm.yyyy',
    gradient: 'from-[#7928CA] via-[#FF0080] to-[#4A0082]'
  },
  {
    id: 7,
    title: 'Etkinlik 7',
    date: 'dd.mm.yyyy',
    gradient: 'from-[#FFD93D] to-[#1A1A1A]'
  },
  {
    id: 8,
    title: 'Etkinlik 8',
    date: 'dd.mm.yyyy',
    gradient: 'from-[#FF8A65] to-[#4A90E2]'
  }
];

export default function Events() {
  return (
    <PageLayout>
      <div className="container mx-auto py-32 px-4">
        {/* Hero Bölümü */}
        <div className="flex items-center justify-between mb-40">
          {/* Başlık */}
          <div className="w-1/2 pt-20">
            <h1 className="text-6xl font-bold text-white leading-tight tracking-tight">
              SİZİ BEKLEYEN
              <br />
              ETKİNLİKLERİMİZ
            </h1>
          </div>

          {/* İllüstrasyon */}
          <div className="w-1/2 h-[400px] flex items-center justify-center">
            <Image
              src="/images/illustrations/undraw_date-picker_qe47 1.svg"
              alt="Calendar illustration"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        </div>

        {/* Etkinlikler Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              date={event.date}
              gradient={event.gradient}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}; 