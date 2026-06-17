"use client";

import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";

const footerLinks = [
  {
    title: "Услуги",
    links: [
      { label: "Подбор авто", href: "#services" },
      { label: "Доставка", href: "#services" },
      { label: "Таможенное оформление", href: "#services" },
      { label: "Диагностика", href: "#services" },
    ],
  },
  {
    title: "Компания",
    links: [
      { label: "О нас", href: "#advantages" },
      { label: "Как мы работаем", href: "#process" },
      { label: "Каталог", href: "#catalog" },
      { label: "Контакты", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#hero" className="flex items-center gap-3 mb-4">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-red-600 rounded-md rotate-45" />
                <span className="relative font-bold text-white text-xs">HE</span>
              </div>
              <span className="text-lg font-bold text-white tracking-wider">
                HAN<span className="text-red-500"> EXPORT</span>
              </span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed">
              Прямой экспорт автомобилей из Южной Кореи в Россию. Надежность,
              прозрачность и качество сервиса с 2016 года.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-white font-semibold mb-4">{group.title}</h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-500 hover:text-red-400 text-sm transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-500 text-sm">
                <Phone className="w-4 h-4 text-red-500/70" />
                +7 (900) 127-80-47
              </li>
              <li className="flex items-center gap-2 text-gray-500 text-sm">
                <Mail className="w-4 h-4 text-red-500/70" />
                info@hanexport.ru
              </li>
              <li className="flex items-center gap-2 text-gray-500 text-sm">
                <MapPin className="w-4 h-4 text-red-500/70" />
                Korea, ул. korean 57
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} HAN EXPORT. Все права защищены.
          </p>
          <a
            href="#hero"
            className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-500 hover:text-red-400 hover:border-red-600/30 transition-all duration-300"
          >
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
