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
  companies: 'Şirketler',
  sponsors: 'Sponsorlar',
  events: 'Etkinlikler',
  register: 'Kayıt Ol',
  login: 'Giriş Yap'
};

// Home Page
export const home = {
  title: 'TOFA',
  subtitle: 'Kayseri Teknoloji Zirvesi',
  description: 'Teknoloji, inovasyon ve geleceğin bir araya geldiği zirvede biz de varız!',
  heroText: 'Kayseri\'nin en büyük teknoloji etkinliği',
  aboutTitle: 'TOFA Hakkında',
  aboutText: 'TOFA (Kayseri Teknoloji Zirvesi), teknoloji meraklıları, öğrenciler, profesyoneller ve şirketleri bir araya getiren Kayseri\'nin en büyük teknoloji etkinliğidir.',
  joinButton: 'Bize Katıl',
  learnMoreButton: 'Daha Fazla Öğren'
};

// Clubs Page
export const clubs = {
  title: 'Kulüpler',
  subtitle: 'TOFA\'ya katılan öğrenci kulüpleri',
  description: 'Kayseri\'deki üniversitelerin teknoloji odaklı kulüpleri TOFA\'da bir araya geliyor.'
};

// Companies Page
export const companies = {
  title: 'Şirketler',
  subtitle: 'TOFA\'ya destek veren teknoloji şirketleri',
  description: 'Yerel ve ulusal teknoloji şirketleri deneyimlerini TOFA\'da paylaşıyor.'
};

// Sponsors Page
export const sponsors = {
  title: 'Sponsorlar',
  subtitle: 'TOFA\'nın değerli sponsorları',
  description: 'Etkinliğimizi destekleyen ve teknolojinin gelişimine katkı sağlayan sponsorlarımız.'
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
  subtitle: 'TOFA\'ya katılmak için kayıt olun',
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