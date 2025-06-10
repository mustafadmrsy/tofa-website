'use client';

import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="w-full bg-transparent">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Sol Kısım - Biz Kimiz? */}
          <div className="w-full md:w-1/4">
            <h2 className="text-3xl font-bold text-white">
              Biz
              <br />
              Kimiz ?
            </h2>
          </div>

          {/* Orta Kısım - Açıklama */}
          <div className="w-full md:w-2/4 text-base text-white/80 leading-relaxed tracking-wide font-light mb-6 text-center">
            TOFA, Türkiye'nin önde gelen üniversitelerinin öğrencileri tarafından kurulan dinamik bir topluluktur. Teknoloji ve inovasyon alanında gençleri bir araya getirerek, onların potansiyellerini en üst düzeye çıkarmayı hedefler.
          </div>

          {/* Sağ Kısım - İletişim */}
          <div className="w-full md:w-1/4 md:text-right">
            <h2 className="text-xl font-medium text-white mb-6">İLETİŞİM</h2>
            <nav className="flex flex-col space-y-3 items-start md:items-end">
              <Link 
                href="https://facebook.com" 
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Facebook
              </Link>
              <Link 
                href="https://instagram.com" 
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Instagram
              </Link>
              <Link 
                href="https://twitter.com" 
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Twitter
              </Link>
              <Link 
                href="mailto:contact@tofa.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Email
              </Link>
            </nav>
          </div>
        </div>

        {/* Alt Kısım - Copyright */}
        <div className="mt-8 pt-4 border-b-2 border-white/30">
          <p className="text-gray-500 text-right pb-4">TOFA 2025</p>
        </div>
      </div>
    </footer>
  );
}; 