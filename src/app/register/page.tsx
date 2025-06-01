'use client';

import React from 'react';
import { useTranslations } from '../../hooks/useTranslations';

export default function RegisterPage() {
  const { t } = useTranslations();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            {t.register.title}
          </h1>
        </div>
      </div>
    </div>
  );
} 