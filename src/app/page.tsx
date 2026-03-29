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
      { id: 4, title: 'IT Team AI Empowerment', desc: '4-month curriculum to turn IT into an AI Enablement Unit.', icon: '💻' },
      { id: 5, title: 'Unified Task Management', desc: 'Moving from WhatsApp chaos to structured task tracking.', icon: '✅' }
    ],
    cta: 'Start Transformation',
    vision: 'Vision 2030'
  }
};

export default function PresentationPage() {
  const [lang, setLang] = useState('ar');
  const t = (content as any)[lang];

  const styles: {[key: string]: React.CSSProperties} = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#001a33',
      color: 'white',
      fontFamily: 'sans-serif',
      padding: '20px'
    },
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#c5a059',
      textAlign: 'center'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px',
      marginTop: '40px'
    },
    card: {
      backgroundColor: '#002b52',
      padding: '20px',
      borderRadius: '15px',
      border: '1px solid #c5a059'
    }
  };

  return (
    <div dir={t.dir} style={styles.container}>
      <nav style={styles.nav}>
        <div style={{fontWeight: '900', color: '#c5a059'}}>REMAT CONSULTING</div>
        <button 
          onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
          style={{backgroundColor: '#c5a059', color: '#001a33', padding: '10px 20px', borderRadius: '20px', border: 'none', cursor: 'pointer'}}
        >
          {t.lang}
        </button>
      </nav>

      <div style={{textAlign: 'center', marginTop: '60px'}}>
        <h1 style={styles.title}>{t.title}</h1>
        <p style={{fontSize: '1.2rem', color: '#ccc'}}>{t.subtitle}</p>
      </div>

      <div style={styles.grid}>
        {t.pillars.map((p: any) => (
          <div key={p.id} style={styles.card}>
            <div style={{fontSize: '3rem'}}>{p.icon}</div>
            <h3 style={{color: '#c5a059'}}>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
