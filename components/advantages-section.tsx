"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Clock,
  Globe,
  Banknote,
  Car,
  MapPin,
  Headphones,
} from "lucide-react";

const advantages = [
  {
    icon: Globe,
    title: "Прямые контакты в Корее",
    description: "Собственные представители в Сеуле и Пусане. Работаем без посредников.",
  },
  {
    icon: Banknote,
    title: "Фиксированная комиссия",
    description: "Полная прозрачность цен. Никаких скрытых платежей и доплат.",
  },
  {
    icon: Clock,
    title: "Быстрые сроки",
    description: "Доставка от 14 до 30 дней в зависимости от маршрута и региона.",
  },
  {
    icon: Car,
    title: "500+ моделей",
    description: "Доступ к аукционам и дилерским центрам Кореи — любой бренд и комплектация.",
  },
  {
    icon: MapPin,
    title: "Доставка по всей России",
    description: "От Владивостока до Калининграда. Организуем доставку в любой город.",
  },
  {
    icon: Headphones,
    title: "Поддержка 24/7",
    description: "Персональный менеджер на каждом этапе. Онлайн-трекинг вашего автомобиля.",
  },
];

export default function AdvantagesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="advantages" className="relative py-24 lg:py-32 bg-black overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent" />

      {/* Decorative red glow */}
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-red-500 text-sm font-semibold tracking-widest uppercase">
              Почему мы
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 leading-tight">
              Надежность,<br />
              проверенная <span className="text-gradient">временем</span>
            </h2>
            <p className="text-gray-400 mt-6 text-lg leading-relaxed">
              За 8 лет мы выстроили безупречную цепочку экспорта автомобилей
              из Кореи. Каждый этап контролируется нашими специалистами
              напрямую — без делегирования третьим лицам.
            </p>

            {/* Counter stats */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { value: "8+", label: "лет на рынке" },
                { value: "2500+", label: "довольных клиентов" },
                { value: "<30", label: "дней доставка" },
                { value: "0", label: "скрытых платежей" },
              ].map((stat) => (
                <div key={stat.label} className="border border-white/[0.06] rounded-xl p-4 bg-white/[0.02]">
                  <div className="text-2xl font-bold text-red-500">{stat.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {advantages.map((adv, i) => (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="group p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-red-600/30 hover:bg-red-600/[0.03] transition-all duration-500"
              >
                <adv.icon className="w-8 h-8 text-red-500 mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-white font-semibold mb-2 group-hover:text-red-400 transition-colors">
                  {adv.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {adv.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
