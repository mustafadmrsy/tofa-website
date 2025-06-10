import { tr } from './tr';
import { en } from './en';

export const translations = {
  tr,
  en
};

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.en;

// Navigation
export const nav = {
  home: 'Ana Sayfa',
  clubs: 'Kulüpler',
  sponsors: 'Sponsorlar',
  events: 'Etkinlikler',
  register: 'Kayıt Ol',
  login: 'Giriş Yap'
};

// Home Page
export const home = {
  title: 'TOFA',
  subtitle: 'Kayseri Teknoloji Zirvesi',
  description: 'Teknoloji, inovasyon ve geleceğin buluştuğu zirvede bizde varız!',
  heroText: 'Kayserinin en büyük teknoloji etkinliği',
  aboutTitle: 'TOFA Hakkında',
  aboutText: 'TOFA (Kayseri Teknoloji Zirvesi), teknoloji meraklılarını, öğrencileri, profesyonelleri ve sponsorları bir araya getiren Kayserinin en büyük teknoloji etkinliğidir.',
  joinButton: 'Bize Katıl',
  learnMoreButton: 'Daha Fazla Bilgi',
  stats: {
    participants: 'Katılımcı',
    clubs: 'Kulüp',
    sponsors: 'Sponsor'
  },
  cta: {
    title: 'Geleceği Birlikte Şekillendirelim!',
    description: 'TOFAya katılın ve teknoloji dünyasında yerinizi alın.'
  }
};

// Clubs Page
export const clubs = {
  title: 'Kulüpler',
  subtitle: 'TOFAya katılan öğrenci kulüpleri',
  description: 'Kayserideki üniversitelerin teknoloji odaklı kulüpleri TOFAda buluşuyor.'
};

// Sponsors Page
export const sponsors = {
  title: 'Sponsorlar',
  subtitle: 'TOFAnın değerli sponsorları',
  description: 'Etkinliğimize destek veren ve teknolojinin gelişimine katkı sağlayan sponsorlarımız.'
};

// Events Page
export const events = {
  title: 'Etkinlikler',
  subtitle: 'TOFA kapsamında düzenlenecek etkinlikler',
  description: 'Konferanslar, workshoplar, panel oturumları ve networking etkinlikleri.'
};

// Register Page
export const register = {
  title: 'Kayıt Ol',
  subtitle: 'TOFAya katılmak için kayıt olun',
  nameLabel: 'Ad Soyad',
  emailLabel: 'E-posta',
  phoneLabel: 'Telefon',
  universityLabel: 'Üniversite',
  departmentLabel: 'Bölüm',
  submitButton: 'Kayıt Ol'
};

// Login Page
export const login = {
  title: 'Giriş Yap',
  subtitle: 'Hesabınıza giriş yapın',
  emailLabel: 'E-posta',
  passwordLabel: 'Şifre',
  submitButton: 'Giriş Yap',
  registerLink: 'Hesabınız yok mu? Kayıt olun'
};

// Footer
export const footer = {
  description: 'Kayseri Teknoloji Zirvesi - Geleceği Birlikte Şekillendiriyoruz',
  contact: 'İletişim',
  quickLinks: 'Hızlı Bağlantılar',
  followUs: 'Bizi Takip Edin'
}; 