"use client";
import React, { useState } from 'react';

const content = {
  ar: {
    dir: 'rtl',
    lang: 'English',
    nav: 'AR',
    title: 'خارطة طريق التحول الرقمي والذكاء الاصطناعي',
    subtitle: 'استراتيجية شاملة لـ ٣٠ فرعاً في المدينة المنورة - مجموعة مجوهرات الرفاهية',
    pillars: [
      { 
        id: 1, 
        title: 'المحاسبة المتكاملة (الذكاء المالي)', 
        desc: 'أتمتة الفواتير والمصروفات، التنبؤ بالتدفقات النقدية، والالتزام الكامل بالمرحلة الثانية من "زاتكا".', 
        details: [
          'أتمتة إدخال البيانات بنسبة ٧٠٪ باستخدام OCR.',
          'لوحات معلومات لحظية بدلاً من ملفات إكسل.',
          'الامتثال الكامل لمتطلبات هيئة الزكاة والدخل.'
        ],
        icon: '📊' 
      },
      { 
        id: 2, 
        title: 'الموارد البشرية الذكية (HR 2.0)', 
        desc: 'ربط نظام "اكتفاء" بأداء المبيعات والتنبؤ باحتياجات التوظيف وتسرب الموظفين.', 
        details: [
          'تحسين الجدولة الذكية لـ ٣٠ فرعاً.',
          'تحليلات التنبؤ بالاستقالات قبل حدوثها.',
          'نظام تقييم أداء آلي مرتبط بالمبيعات.'
        ],
        icon: '👥' 
      },
      { 
        id: 3, 
        title: 'إدارة المبيعات و الـ O2O', 
        desc: 'دمج التجارة الإلكترونية مع الفروع الفعلية وحل مشاكل الشحن عبر نموذج الاستلام من الفرع.', 
        details: [
          'نموذج "اشتري أونلاين واستلم من فرع المدينة".',
          'التنبؤ بالطلب لكل صنف (SKU) لمنع النفاد.',
          'تجارب قياس المجوهرات الافتراضية (VTO).'
        ],
        icon: '💍' 
      },
      { 
        id: 4, 
        title: 'تمكين فريق تقنية المعلومات', 
        desc: 'تدريب مكثف لمدة ٤ أشهر لتحويل القسم من دعم فني إلى وحدة ابتكار وذكاء اصطناعي.', 
        details: [
          'إتقان هندسة الأوامر (Prompt Engineering).',
          'بناء أدوات أتمتة داخلية (n8n/Zapier).',
          'تطوير روبوتات دردشة لدعم الموظفين.'
        ],
        icon: '💻' 
      },
      { 
        id: 5, 
        title: 'إدارة المهام الموحدة (Comms)', 
        desc: 'إنهاء فوضى الواتساب واستبدالها بنظام مهام مهيكل يضمن عدم ضياع أي تعليمات.', 
        details: [
          'موجز صباحي آلي لكل مدير فرع.',
          'تتبع المهام اليومية مع تقارير الإنجاز.',
          'قنوات تواصل آمنة ومؤرشفة للرقابة.'
        ],
        icon: '✅' 
      }
    ],
    timeline: [
      { phase: 'المرحلة ١', task: 'التأسيس وربط الأنظمة (ZATCA)', date: 'الشهر ١' },
      { phase: 'المرحلة ٢', task: 'تفعيل الذكاء المالي والأتمتة', date: 'الشهر ٢-٣' },
      { phase: 'المرحلة ٣', task: 'إطلاق الـ O2O وتدريب الفريق', date: 'الشهر ٤-٦' }
    ],
    cta: 'ابدأ التحول الآن',
    vision: 'رؤية ٢٠٣٠'
  },
  en: {
    dir: 'ltr',
    lang: 'العربية',
    nav: 'EN',
    title: 'AI & Digital Transformation Roadmap',
    subtitle: 'Strategic Overhaul for 30+ Madinah Storefronts - Luxury Jewelry Group',
    pillars: [
      { 
        id: 1, 
        title: 'Integrated AI Accounting', 
        desc: 'Automating invoices, predicting cash flow, and full ZATCA Phase 2 compliance.', 
        details: [
          '70% reduction in data entry via OCR.',
          'Real-time dashboards replacing Excel.',
          'Full compliance with Zakat & Tax Authority.'
        ],
        icon: '📊' 
      },
      { 
        id: 2, 
        title: 'Smart HR Management', 
        desc: 'Linking Ektefa HRMS to sales performance and predicting staff attrition.', 
        details: [
          'Optimized scheduling for 30 locations.',
          'Predictive analytics for staff retention.',
          'Performance scoring tied to real revenue.'
        ],
        icon: '👥' 
      },
      { 
        id: 3, 
        title: 'O2O Sales & Inventory', 
        desc: 'Bridging E-commerce and physical stores via Click-and-Collect models.', 
        details: [
          'Buy online, pickup in Madinah branch.',
          'SKU-level demand forecasting.',
          'Virtual Try-On (VTO) integration.'
        ],
        icon: '💍' 
      },
      { 
        id: 4, 
        title: 'IT AI Empowerment', 
        desc: '4-month intensive curriculum to turn IT into an AI Enablement Unit.', 
        details: [
          'Prompt Engineering mastery.',
          'Internal automation builds (n8n/Zapier).',
          'AI Chatbots for employee support.'
        ],
        icon: '💻' 
      },
      { 
        id: 5, 
        title: 'Unified Task Management', 
        desc: 'Replacing WhatsApp chaos with structured, trackable task engines.', 
        details: [
          'Automated Morning Briefs for managers.',
          'Daily task tracking & audit trails.',
          'Structured communication channels.'
        ],
        icon: '✅' 
      }
    ],
    timeline: [
      { phase: 'Phase 1', task: 'Foundation & ZATCA Integration', date: 'Month 1' },
      { phase: 'Phase 2', task: 'Financial AI & Automation', date: 'Month 2-3' },
      { phase: 'Phase 3', task: 'O2O Launch & IT Certification', date: 'Month 4-6' }
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
      fontFamily: 'system-ui, -apple-system, sans-serif',
      paddingBottom: '100px'
    },
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '30px 5%',
      backgroundColor: 'rgba(0, 26, 51, 0.9)',
      borderBottom: '1px solid rgba(197, 160, 89, 0.2)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    },
    hero: {
      textAlign: 'center',
      padding: '80px 5%',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    title: {
      fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
      fontWeight: '900',
      color: '#c5a059',
      marginBottom: '20px',
      lineHeight: 1.1
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '30px',
      padding: '0 5%',
      maxWidth: '1400px',
      margin: '40px auto'
    },
    card: {
      backgroundColor: '#002b52',
      padding: '40px',
      borderRadius: '24px',
      border: '1px solid rgba(197, 160, 89, 0.1)',
      position: 'relative',
      transition: 'all 0.3s ease'
    },
    detailList: {
      marginTop: '20px',
      padding: 0,
      listStyleType: 'none',
      fontSize: '0.95rem',
      color: '#cbd5e1'
    },
    timeline: {
      padding: '60px 5%',
      maxWidth: '1000px',
      margin: '60px auto',
      backgroundColor: 'rgba(197, 160, 89, 0.05)',
      borderRadius: '32px'
    }
  };

  return (
    <div dir={t.dir} style={styles.container}>
      <nav style={styles.nav}>
        <div style={{fontWeight: '900', fontSize: '1.5rem', color: '#c5a059', letterSpacing: '-1px'}}>
          REMAT <span style={{color: 'white'}}>STRATEGY</span>
        </div>
        <button 
          onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
          style={{
            backgroundColor: 'transparent', 
            color: '#c5a059', 
            padding: '8px 20px', 
            borderRadius: '20px', 
            border: '2px solid #c5a059', 
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          {t.lang}
        </button>
      </nav>

      <header style={styles.hero}>
        <div style={{color: '#c5a059', fontWeight: 'bold', letterSpacing: '4px', marginBottom: '20px'}}>{t.vision}</div>
        <h1 style={styles.title}>{t.title}</h1>
        <p style={{fontSize: '1.4rem', color: '#94a3b8', maxWidth: '800px', margin: '0 auto'}}>{t.subtitle}</p>
      </header>

      <div style={styles.grid}>
        {t.pillars.map((p: any) => (
          <div key={p.id} style={styles.card}>
            <div style={{fontSize: '3.5rem', marginBottom: '20px'}}>{p.icon}</div>
            <h3 style={{fontSize: '1.8rem', color: '#c5a059', marginBottom: '15px'}}>{p.title}</h3>
            <p style={{lineHeight: 1.6, color: '#e2e8f0'}}>{p.desc}</p>
            <ul style={styles.detailList}>
              {p.details.map((d: string, i: number) => (
                <li key={i} style={{marginBottom: '10px', display: 'flex', gap: '10px'}}>
                  <span style={{color: '#c5a059'}}>•</span> {d}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={styles.timeline}>
        <h2 style={{textAlign: 'center', fontSize: '2.5rem', color: '#c5a059', marginBottom: '40px'}}>
          {lang === 'ar' ? 'خارطة الطريق' : 'Implementation Roadmap'}
        </h2>
        {t.timeline.map((item: any, i: number) => (
          <div key={i} style={{
            display: 'flex', 
            justifyContent: 'space-between', 
            padding: '20px', 
            borderBottom: i === 2 ? 'none' : '1px solid rgba(197, 160, 89, 0.2)',
            alignItems: 'center'
          }}>
            <div style={{fontWeight: 'bold', color: '#c5a059'}}>{item.phase}</div>
            <div style={{flex: 1, margin: '0 20px'}}>{item.task}</div>
            <div style={{color: '#94a3b8'}}>{item.date}</div>
          </div>
        ))}
      </div>

      <footer style={{textAlign: 'center', marginTop: '80px', color: '#64748b'}}>
        &copy; 2026 REMAT STRATEGIC SOLUTIONS | MADINAH RETAIL GROUP | VERSION 1.5
      </footer>
    </div>
  );
}
