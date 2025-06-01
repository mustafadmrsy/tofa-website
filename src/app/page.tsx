'use client';

import React from 'react';
import { useTranslations } from '../hooks/useTranslations';
import Link from 'next/link';

export default function Home() {
  const { t } = useTranslations();

  const features = [
    {
      icon: '🏢',
      titleKey: 'companies',
      href: '/companies'
    },
    {
      icon: '🎯',
      titleKey: 'sponsors', 
      href: '/sponsors'
    },
    {
      icon: '🎓',
      titleKey: 'clubs',
      href: '/clubs'
    },
    {
      icon: '🚀',
      titleKey: 'events',
      href: '/events'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              {t.home.title}
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-blue-100">
              {t.home.subtitle}
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              {t.home.description}
            </p>
            <p className="text-lg mb-12 text-blue-200">
              {t.home.heroText}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors inline-block"
              >
                {t.home.joinButton}
              </Link>
              <Link
                href="/events"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors inline-block"
              >
                {t.home.learnMoreButton}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                href={feature.href}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {t.nav[feature.titleKey as keyof typeof t.nav]}
                </h3>
                <div className="mt-4 text-blue-600 font-medium">
                  {t.home.learnMoreButton} →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              {t.home.aboutTitle}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              {t.home.aboutText}
            </p>
            
            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Katılımcı</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Şirket</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
                <div className="text-gray-600">Kulüp</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Geleceği Birlikte Şekillendirelim!
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            TOFA'ya katılın ve teknoloji dünyasındaki yerinizi alın.
          </p>
          <Link
            href="/register"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors inline-block"
          >
            {t.home.joinButton}
          </Link>
        </div>
      </section>
    </div>
  );
} 