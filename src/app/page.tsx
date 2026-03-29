"use client";
import React, { useState } from 'react';

const content = {
  ar: {
    dir: 'rtl',
    lang: 'English',
    nav: 'AR',
    title: 'التحول الرقمي والذكاء الاصطناعي',
    subtitle: 'خارطة الطريق لـ ٣٠ متجراً في المدينة المنورة',
    pillars: [
      { id: 1, title: 'المحاسبة بالذكاء الاصطناعي', desc: 'الانتقال من إكسل إلى أتمتة "أودو" الكاملة والامتثال لهيئة الزكاة والدخل (ZATCA).', icon: '📊' },
      { id: 2, title: 'الموارد البشرية الذكية', desc: 'تحسين الجدولة والتنبؤ بتسرب الموظفين عبر فروع المدينة.', icon: '👥' },
      { id: 3, title: 'المبيعات والتجارة الإلكترونية', desc: 'حل مشكلة الشحن عبر نموذج "الشراء أونلاين والاستلام من الفرع".', icon: '💍' },
      { id: 4, title: 'تمكين فريق تقنية المعلومات', desc: 'منهج تدريبي لمدة ٤ أشهر لتحويل القسم إلى وحدة تمكين بالذكاء الاصطناعي.', icon: '💻' },
      { id: 5, title: 'إدارة المهام الموحدة', desc: 'استبدال فوضى "واتساب" بنظام مهام مهيكل مع موجز صباحي مؤتمت.', icon: '✅' }
    ],
    cta: 'ابدأ التحول الآن',
    vision: 'رؤية ٢٠٣٠'
  },
  en: {
    dir: 'ltr',
    lang: 'العربية',
    nav: 'EN',
    title: 'AI & Digital Transformation',
    subtitle: 'Strategic Roadmap for 30+ Madinah Storefronts',
    pillars: [
      { id: 1, title: 'AI-Integrated Accounting', desc: 'Transition from Excel to 100% Odoo automation and ZATCA compliance.', icon: '📊' },
      { id: 2, title: 'Smart HR Management', desc: 'Predicting attrition and optimizing scheduling across all locations.', icon: '👥' },
      { id: 3, title: 'O2O Sales & E-commerce', desc: 'Solving shipping challenges with a Click-and-Collect model.', icon: '💍' },
      { id: 4, title: 'IT Team AI Empowerment', 4: '4-month curriculum to turn IT into an AI Enablement Unit.', icon: '💻' },
      { id: 5, title: 'Unified Task Management', desc: 'Moving from WhatsApp chaos to structured task tracking.', icon: '✅' }
    ],
    cta: 'Start Transformation',
    vision: 'Vision 2030'
  }
};

export default function PresentationPage() {
  const [lang, setLang] = useState('ar');
  const t = content[lang];

  return (
    <div dir={t.dir} className={`min-h-screen bg-[#001a33] text-white font-sans selection:bg-[#c5a059] selection:text-[#001a33]`}>
      {/* Header / Nav */}
      <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-black tracking-tighter text-[#c5a059]">REMAT<span className="text-white">CONSULTING</span></div>
        <button 
          onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
          className="border border-[#c5a059] px-4 py-2 rounded-full hover:bg-[#c5a059] hover:text-[#001a33] transition-all font-bold"
        >
          {t.lang}
        </button>
      </nav>

      {/* Hero Section */}
      <header className="py-20 px-6 text-center max-w-4xl mx-auto">
        <div className="inline-block bg-[#c5a059]/10 text-[#c5a059] px-4 py-1 rounded-full text-sm font-bold mb-6 tracking-widest uppercase">
          {t.vision}
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-white via-[#c5a059] to-white bg-clip-text text-transparent leading-tight">
          {t.title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-12">
          {t.subtitle}
        </p>
        <button className="bg-[#c5a059] text-[#001a33] px-8 py-4 rounded-xl font-black text-lg hover:scale-105 active:scale-95 transition-transform shadow-2xl shadow-[#c5a059]/20">
          {t.cta}
        </button>
      </header>

      {/* Pillars Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.pillars.map((pillar) => (
            <div key={pillar.id} className="bg-[#002b52] p-8 rounded-3xl border border-white/5 hover:border-[#c5a059]/50 transition-all group relative overflow-hidden">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{pillar.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-[#c5a059]">{pillar.title}</h3>
              <p className="text-gray-400 leading-relaxed">{pillar.desc}</p>
              <div className="absolute -bottom-10 -right-10 text-9xl text-white/5 font-black group-hover:text-white/10 transition-all select-none">{pillar.id}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center text-gray-500 text-sm">
        &copy; 2026 REMAT STRATEGIC SOLUTIONS | MADINAH RETAIL GROUP | VERSION 1.2
      </footer>
    </div>
  );
}
