// Site configuration
export const SITE = {
  title: 'Физиотерапевтичен Център "Вита" - Бургас',
  description: 'Специализиран център за физиотерапия, рехабилитация и естетична медицина в град Бургас. От 2001 г. предлагаме най-високите стандарти за лечение и индивидуална грижа.',
  url: 'https://vitaburgas.com',
  author: 'Вита Бургас',
  phone: '0898 516 561',
  email: 'vitaburgas@gmail.com',
  address: 'жк Лазур, ул. "Батак" 46, партер (вход срещу ул. "Карлово" 25)',
} as const;

export const NAVIGATION = [
  { name: 'Начало', href: '/' },
  { name: 'За нас', href: '/about' },
  { name: 'Процедури', href: '/procedures' },
  { name: 'Заболявания', href: '/diseases' },
  { name: 'Телемедицина', href: '/telemedicine' },
  { name: 'Ново', href: '/news' },
  { name: 'Контакти', href: '/contact' },
] as const;

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/BurgasVita/',
  instagram: 'https://www.instagram.com/vitaburgas/',
  youtube: 'https://www.youtube.com/channel/UCsf5iSgzA-NOax42y7OF4mg',
} as const;
