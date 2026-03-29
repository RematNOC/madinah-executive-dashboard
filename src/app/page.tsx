"use client";
import React, { useState } from 'react';

const content = {
  ar: {
    dir: 'rtl',
    lang: 'English',
    nav: 'AR',
    brand: 'استراتيجية إدارة العمليات',
    summaryTitle: 'الملخص التنفيذي',
    summaryText: 'من خلال تنفيذ هذه الاستراتيجية، سنقوم بتحويل كل موظف إلى ما يعادل ٥ موظفين في موظف واحد. سنعمل على تعظيم الأرباح في المواقع الحالية ونكون مستعدين للتوسع في مشاريع جديدة بنظام محسن تم تصميمه لتحقيق أقصى قدر من الكفاءة والعائد على الاستثمار.',
    title: 'خارطة طريق التحول الرقمي والذكاء الاصطناعي',
    subtitle: 'استراتيجية شاملة لـ +٣٠ فرعاً في المدينة المنورة - مجموعة مجوهرات الرفاهية',
    pillars: [
      { 
        id: 1, 
        title: 'التطور المالي (جسر إكسل إلى الذكاء الاصطناعي)', 
        desc: 'الانتقال المنهجي من الجداول اليدوية إلى منظومة مالية مستقلة بالكامل، مع تفعيل "جسر ربط" في المرحلة الانتقالية لضمان استمرارية العمل والالتزام بـ "زاتكا".', 
        target: 'الهدف: تقليل العمل اليدوي بنسبة ٥٠٪ (مرحلياً) وصولاً للأتمتة الكاملة.',
        details: [
          'المرحلة الانتقالية: "جسر آلي" لربط ملفات إكسل الحالية بنظام أودو لتقليل الخطأ البشري.',
          'الرؤية المستقبلية: الاستبدال الكامل لإكسل بسير عمل ذكي يعالج البيانات بشكل تلقائي ولحظي.',
          'بنية تحتية دائمة للامتثال للمرحلة الثانية من هيئة الزكاة والدخل.'
        ],
        icon: '📊' 
      },
      { 
        id: 2, 
        title: 'الموارد البشرية الذكية (HR 2.0)', 
        desc: 'نظام "الإنذار المبكر" للتنبؤ بتسرب الموظفين وتحسين الجدولة بناءً على أداء المبيعات.', 
        target: 'الهدف: أتمتة تقييم الأداء بنسبة ١٠٠٪.',
        details: [
          'تحليل "إشارات الاحتراق الوظيفي" (تغيرات الحضور، تراجع الأداء).',
          'درجة "مخاطر المغادرة" (Flight Risk Score) لكل موظف أساسي.',
          'توصيات آلية للمكافآت أو فترات الراحة لمنع استقالة المبدعين.'
        ],
        icon: '👥' 
      },
      { 
        id: 3, 
        title: 'إدارة المبيعات و الـ O2O', 
        desc: 'دمج التجارة الإلكترونية مع الفروع الفعلية وحل مشاكل الشحن عبر نموذج الاستلام من الفرع.', 
        target: 'الهدف: تحويل ٢٠٪ من متصفحي الإنترنت إلى مشترين من الفرع.',
        details: [
          'نموذج "اشتري أونلاين واستلم من فرع المدينة".',
          'جمع بيانات العملاء (الهاتف/الإيميل) للمتابعة والبيع المستقبلي.',
          'تنبؤ ذكي بالطلب لمنع نفاد المخزون بنسبة ٤٠٪.'
        ],
        icon: '💍' 
      },
      { 
        id: 4, 
        title: 'استراتيجيات أداء المبيعات و KPIs', 
        desc: 'منهجية تحليلية لتعظيم الإيرادات وتحسين كفاءة الفروع باستخدام مؤشرات الأداء الرئيسية.', 
        target: 'الهدف: زيادة متوسط قيمة الطلب (AOV) بنسبة ١٥٪.',
        details: [
          'تتبع معدل التحويل (Conversion Rate) لكل موظف.',
          'استراتيجيات البيع الإضافي (Upselling) المدعومة بالبيانات.',
          'لوحة مؤشرات أداء لحظية للأهداف المحققة.'
        ],
        icon: '📈' 
      },
      { 
        id: 5, 
        title: 'تمكين فريق تقنية المعلومات', 
        desc: 'تدريب مكثف لمدة ٤ أشهر لتحويل القسم من دعم فني إلى وحدة ابتكار وذكاء اصطناعي.', 
        target: 'الهدف: اكتفاء ذاتي تقني بنسبة ١٠٠٪.',
        details: [
          'إتقان هندسة الأوامر (Prompt Engineering).',
          'بناء أدوات أتمتة داخلية (n8n/Zapier).',
          'تطوير روبوتات دردشة لدعم الموظفين.'
        ],
        icon: '💻' 
      },
      { 
        id: 6, 
        title: 'إدارة المهام الموحدة (Comms)', 
        desc: 'إنهاء فوضى الواتساب واستبدالها بنظام مهام مهيكل يضمن عدم ضياع أي تعليمات.', 
        target: 'الهدف: تقليل المهام المفقودة إلى صفر٪.',
        details: [
          'موجز صباحي آلي لكل مدير فرع.',
          'تتبع المهام اليومية مع تقارير الإنجاز.',
          'قنوات تواصل آمنة ومؤرشفة للرقابة.'
        ],
        icon: '✅' 
      }
    ],
    governanceTitle: 'إدارة التغيير والتبني',
    governanceItems: [
      { title: 'التحول المرحلي المدروس', desc: 'استخدام "جسر إكسل" في المرحلة الأولى لتسهيل التبني، مع التوجه نحو الاستغناء الكامل عن الجداول اليدوية مستقبلاً.' },
      { title: 'الحوافز المرتبطة بالأداء', desc: 'ربط المكافآت الشهرية بإكمال المهام وتحديث البيانات في النظام.' }
    ],
    expansionTitle: 'جاهزية التوسع المستقبلي',
    expansionText: 'هذا النظام مصمم ليكون "البنية التحتية الأساسية" لنمو المجموعة. بعد نجاح نموذج المجوهرات، يمكن تعميم هذا النظام فوراً على قطاعات المقاهي، المطاعم، الفنادق، و"the concept" التابعة للمجموعة لضمان وحدة الإدارة وجودة الأداء.',
    timeline: [
      { phase: 'المرحلة ١', task: 'التأسيس، ربط زاتكا، وتفعيل جسر إكسل', date: 'الشهر ١' },
      { phase: 'المرحلة ٢', task: 'تفعيل الذكاء المالي وبدء الاستغناء عن الجداول', date: 'الشهر ٢-٣' },
      { phase: 'المرحلة ٣', task: 'الأتمتة الكاملة، إطلاق الـ O2O وتدريب الفريق', date: 'الشهر ٤-٦' }
    ],
    cta: 'ابدأ التحول الآن',
    vision: 'رؤية ٢٠٣٠'
  },
  en: {
    dir: 'ltr',
    lang: 'العربية',
    nav: 'EN',
    brand: 'OPERATIONS MANAGEMENT STRATEGY',
    summaryTitle: 'Executive Summary',
    summaryText: 'By executing this strategy we will turn every employee into 5 employees in one. We will maximize profits in current locations and be ready for expansion into new ventures with an optimized system that’s been crafted for maximum efficiency and return on investment.',
    title: 'AI & Digital Transformation Roadmap',
    subtitle: 'Strategic Overhaul for 30+ Madinah Storefronts - Luxury Jewelry Group',
    pillars: [
      { 
        id: 1, 
        title: 'Financial Evolution (Excel-to-AI Bridge)', 
        desc: 'A systematic transition from manual spreadsheets to a fully autonomous AI financial ecosystem, utilizing a "Smart Bridge" during the transition for ZATCA compliance.', 
        target: 'Target: 50% phased reduction in manual work, moving toward 100% automation.',
        details: [
          'Transitional Phase: Automated bridge to sync current Excel workflows with Odoo.',
          'Long-term Vision: Full replacement of Excel with autonomous, real-time AI accounting.',
          'Permanent infrastructure for full Zakat & Tax Authority (ZATCA) Phase 2 compliance.'
        ],
        icon: '📊' 
      },
      { 
        id: 2, 
        title: 'Smart HR Management', 
        desc: 'Early-warning system to predict staff attrition and optimize scheduling based on sales performance.', 
        target: 'Target: 100% automated performance scoring.',
        details: [
          'Analysis of "Burnout Signals" (attendance drift, performance plateau).',
          'Predictive "Flight Risk Score" for every key employee.',
          'Automated retention nudges (bonuses/breaks) for star performers.'
        ],
        icon: '👥' 
      },
      { 
        id: 3, 
        title: 'O2O Sales & Inventory', 
        desc: 'Bridging E-commerce and physical stores via Click-and-Collect models.', 
        target: 'Target: 20% conversion of online browsers to in-store buyers.',
        details: [
          'Buy online, pickup in Madinah branch model.',
          'Capture contact info for follow-ups and future sales tactics.',
          'Predictive demand forecasting to cut stockouts by 40%.'
        ],
        icon: '💍' 
      },
      { 
        id: 4, 
        title: 'Sales Performance & KPIs', 
        desc: 'Analytical methodology to maximize revenue and store efficiency using key performance indicators.', 
        target: 'Target: 15% increase in Average Order Value (AOV).',
        details: [
          'Track conversion rates per employee/branch.',
          'Data-driven upselling and cross-selling tactics.',
          'Real-time KPI dashboard linking targets to actuals.'
        ],
        icon: '📈' 
      },
      { 
        id: 5, 
        title: 'IT AI Empowerment', 
        desc: '4-month intensive curriculum to turn IT into an AI Enablement Unit.', 
        target: 'Target: 100% technical self-sufficiency.',
        details: [
          'Prompt Engineering mastery for business.',
          'Internal automation builds (n8n/Zapier).',
          'AI Chatbots for instant employee support.'
        ],
        icon: '💻' 
      },
      { 
        id: 6, 
        title: 'Unified Task Management', 
        desc: 'Replacing WhatsApp chaos with structured, trackable task engines.', 
        target: 'Target: 0% task loss across 30+ stores.',
        details: [
          'Automated Morning Briefs for managers.',
          'Daily task tracking & audit trails.',
          'Structured communication channels.'
        ],
        icon: '✅' 
      }
    ],
    governanceTitle: 'Change Management & Adoption',
    governanceItems: [
      { title: 'Phased Migration', desc: 'Focusing on the "Excel Bridge" to ensure zero disruption before moving to full Excel replacement.' },
      { title: 'Incentive Alignment', desc: 'Staff bonuses linked directly to system task completion and data accuracy.' }
    ],
    expansionTitle: 'Future Expansion Readiness',
    expansionText: 'This system is built as the "Core Infrastructure" for group growth. Once the Jewelry model is proven, it can be instantly replicated across the cafe, restaurant, hotel, and the concept sectors to ensure unified management and ROI.',
    timeline: [
      { phase: 'Phase 1', task: 'ZATCA Integration & Excel Bridge Activation', date: 'Month 1' },
      { phase: 'Phase 2', task: 'Financial AI Launch & Phasing out Manual Sheets', date: 'Month 2-3' },
      { phase: 'Phase 3', task: 'Full AI Autonomy, O2O Launch & IT Certification', date: 'Month 4-6' }
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
      padding: '80px 5% 40px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    summaryBox: {
      backgroundColor: 'rgba(197, 160, 89, 0.1)',
      border: '1px solid #c5a059',
      borderRadius: '24px',
      padding: '40px',
      margin: '0 5% 60px',
      maxWidth: '1200px',
      marginLeft: 'auto',
      marginRight: 'auto',
      boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
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
    targetLine: {
      backgroundColor: 'rgba(197, 160, 89, 0.15)',
      color: '#c5a059',
      padding: '8px 15px',
      borderRadius: '10px',
      fontSize: '0.9rem',
      fontWeight: 'bold',
      marginTop: '15px',
      display: 'inline-block'
    },
    detailList: {
      marginTop: '20px',
      padding: 0,
      listStyleType: 'none',
      fontSize: '0.95rem',
      color: '#cbd5e1'
    },
    sectionTitle: {
      textAlign: 'center',
      fontSize: '2.5rem',
      color: '#c5a059',
      marginTop: '100px',
      marginBottom: '40px'
    },
    governanceGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px',
      padding: '0 5%',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    governanceCard: {
      padding: '30px',
      border: '1px dashed #c5a059',
      borderRadius: '20px',
      backgroundColor: 'rgba(255,255,255,0.02)'
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
        <div style={{fontWeight: '900', fontSize: '1.2rem', color: '#c5a059', letterSpacing: '1px', textTransform: 'uppercase'}}>
          {t.brand}
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

      <div style={styles.summaryBox}>
        <h2 style={{color: '#c5a059', marginBottom: '20px', fontSize: '2rem'}}>{t.summaryTitle}</h2>
        <p style={{fontSize: '1.5rem', lineHeight: 1.6, color: 'white', fontWeight: '500'}}>
          {t.summaryText}
        </p>
      </div>

      <div style={styles.grid}>
        {t.pillars.map((p: any) => (
          <div key={p.id} style={styles.card}>
            <div style={{fontSize: '3.5rem', marginBottom: '20px'}}>{p.icon}</div>
            <h3 style={{fontSize: '1.8rem', color: '#c5a059', marginBottom: '5px'}}>{p.title}</h3>
            <div style={styles.targetLine}>{p.target}</div>
            <p style={{lineHeight: 1.6, color: '#e2e8f0', marginTop: '15px'}}>{p.desc}</p>
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

      <h2 style={styles.sectionTitle}>{t.governanceTitle}</h2>
      <div style={styles.governanceGrid}>
        {t.governanceItems.map((item: any, i: number) => (
          <div key={i} style={styles.governanceCard}>
            <h4 style={{color: '#c5a059', fontSize: '1.2rem', marginBottom: '10px'}}>{item.title}</h4>
            <p style={{color: '#94a3b8'}}>{item.desc}</p>
          </div>
        ))}
      </div>

      <div style={{...styles.summaryBox, marginTop: '100px', borderStyle: 'dashed'}}>
        <h2 style={{color: '#c5a059', marginBottom: '20px', fontSize: '2rem'}}>{t.expansionTitle}</h2>
        <p style={{fontSize: '1.3rem', lineHeight: 1.6, color: '#cbd5e1'}}>
          {t.expansionText}
        </p>
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
        &copy; 2026 REMAT STRATEGIC SOLUTIONS | MADINAH RETAIL GROUP | VERSION 3.2
      </footer>
    </div>
  );
}
