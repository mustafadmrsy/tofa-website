'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from '../hooks/useTranslations';
import { RegisterModal } from './RegisterModal';

export const Navigation = () => {
  const { t } = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const navItems = [
    { key: 'calendar', href: '/calendar', label: 'TAKVIM' },
    { key: 'clubs', href: '/clubs', label: 'KLUBLER' },
    { key: 'sponsors', href: '/sponsors', label: 'SIRKETLER' },
    { key: 'activities', href: '/activities', label: 'ETKINLIKLER' },
    { key: 'details', href: '/details', label: 'AYRICALIKLAR' },
    { key: 'academy', href: '/academy', label: 'AKADEMI VE OKULLAR' },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-transparent">
        <div className="max-w-[1920px] mx-auto px-8 lg:px-16">
          <div className="flex justify-between h-24 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/calendar" className="flex items-center">
                <div className="relative w-[200px] h-[65px]">
                  <Image
                    src="/images/tofa-logo.png"
                    alt="TOFA Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1 px-16">
              <div className="flex space-x-6">
                {navItems.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className="text-gray-300 hover:text-white px-2 py-1 text-[12px] font-light tracking-wider transition-colors uppercase"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Join Button */}
            <div className="hidden md:block">
              <button
                onClick={() => setIsRegisterModalOpen(true)}
                className="px-8 py-2.5 rounded-full text-sm font-medium bg-white/10 text-white hover:bg-white/20 transition-colors uppercase tracking-wide"
              >
                Aramıza Katıl
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsRegisterModalOpen(true);
                }}
                className="w-full text-left text-gray-300 hover:text-white px-3 py-2 text-base font-medium"
              >
                Aramıza Katıl
              </button>
            </div>
          </div>
        )}
      </nav>

      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
      />
    </>
  );
}; 