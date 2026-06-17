"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Eye, ChevronRight } from "lucide-react";

const cars = [
  {
    name: "Hyundai Sonata",
    year: "2023",
    price: "от 2 100 000 ₽",
    image: "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800",
    tag: "Популярный",
  },
  {
    name: "Kia Sorento",
    year: "2024",
    price: "от 3 200 000 ₽",
    image: "https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=800",
    tag: "Новинка",
  },
  {
    name: "Genesis G80",
    year: "2024",
    price: "от 5 500 000 ₽",
    image: "https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=800",
    tag: "Премиум",
  },
  {
    name: "Hyundai Tucson",
    year: "2023",
    price: "от 2 800 000 ₽",
    image: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800",
    tag: "Кроссовер",
  },
  {
    name: "Kia K5",
    year: "2024",
    price: "от 2 400 000 ₽",
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800",
    tag: "Седан",
  },
  {
    name: "Genesis GV70",
    year: "2024",
    price: "от 6 100 000 ₽",
    image: "https://images.pexels.com/photos/39855/lamborghini-countach-drive-automobile-39855.jpeg?auto=compress&cs=tinysrgb&w=800",
    tag: "Премиум",
  },
];

const tabs = ["Все", "Седан", "Кроссовер", "Премиум"];

export default function CatalogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("Все");

  const filtered = activeTab === "Все"
    ? cars
    : cars.filter((c) => c.tag === activeTab);

  return (
    <section id="catalog" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-red-500 text-sm font-semibold tracking-widest uppercase">
            Каталог
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3">
            Актуальные <span className="text-gradient">предложения</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Лучшие автомобили из Кореи с полным таможенным оформлением
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-2 mb-10 flex-wrap"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-red-600 text-white shadow-lg shadow-red-600/25"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Cars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((car, i) => (
            <motion.div
              key={car.name}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-red-600/30 transition-all duration-500"
            >
              <div className="relative h-52 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url('${car.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span className="absolute top-3 left-3 bg-red-600/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {car.tag}
                </span>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-white">{car.name}</h3>
                  <span className="text-gray-500 text-sm">{car.year}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-red-400 font-semibold">{car.price}</span>
                  <button className="text-gray-400 hover:text-red-400 transition-colors flex items-center gap-1 text-sm">
                    Подробнее <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-10"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-medium transition-colors"
          >
            Не нашли нужную модель? Подберем под ваш запрос
            <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
