'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from '../hooks/useTranslations';

export const Navigation = () => {
  const { t, language, changeLanguage } = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { key: 'home', href: '/' },
    { key: 'clubs', href: '/clubs' },
    { key: 'companies', href: '/companies' },
    { key: 'sponsors', href: '/sponsors' },
    { key: 'events', href: '/events' },
  ];

  const authItems = [
    { key: 'register', href: '/register' },
    { key: 'login', href: '/login' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="text-2xl font-bold text-blue-600">TOFA</div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t.nav[item.key as keyof typeof t.nav]}
              </Link>
            ))}
          </div>

          {/* Auth & Language Switcher */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Auth Links */}
            {authItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  item.key === 'register'
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'text-gray-700 hover:text-blue-600 border border-gray-300 hover:border-blue-600'
                }`}
              >
                {t.nav[item.key as keyof typeof t.nav]}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="flex items-center space-x-1 ml-4">
              <button
                onClick={() => changeLanguage('tr')}
                className={`px-2 py-1 text-sm font-medium rounded ${
                  language === 'tr'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                TR
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-2 py-1 text-sm font-medium rounded ${
                  language === 'en'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav[item.key as keyof typeof t.nav]}
                </Link>
              ))}
              <div className="border-t border-gray-200 pt-4">
                {authItems.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium mb-2 ${
                      item.key === 'register'
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 border border-gray-300'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t.nav[item.key as keyof typeof t.nav]}
                  </Link>
                ))}
                {/* Mobile Language Switcher */}
                <div className="flex space-x-2 px-3 py-2">
                  <button
                    onClick={() => changeLanguage('tr')}
                    className={`px-3 py-1 text-sm font-medium rounded ${
                      language === 'tr'
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 border border-gray-300'
                    }`}
                  >
                    Türkçe
                  </button>
                  <button
                    onClick={() => changeLanguage('en')}
                    className={`px-3 py-1 text-sm font-medium rounded ${
                      language === 'en'
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 border border-gray-300'
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}; 