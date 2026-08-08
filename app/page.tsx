"use client";

import { useState } from "react";

function SocialIcon({ name }: { name: string }) {
  const common = { viewBox: "0 0 24 24", "aria-hidden": true } as const;

  if (name === "email") return <svg {...common}><path d="M3.5 6.5h17v11h-17z"/><path d="m4 7 8 6 8-6"/></svg>;
  if (name === "whatsapp") return <svg {...common}><circle cx="12" cy="12" r="8.5"/><path d="M8.7 8.1c.3-.5.7-.5 1-.1l1 1.8c.2.3.1.6-.2.9l-.7.7c.7 1.5 1.8 2.6 3.3 3.3l.7-.8c.3-.3.6-.3.9-.1l1.8 1c.4.2.4.7.1 1.1-.7 1-1.7 1.4-2.9 1.2-3.6-.6-6.3-3.3-6.9-6.9-.2-.8.2-1.6.9-2.1Z"/><path d="m7 18-1 3 3.2-1"/></svg>;
  if (name === "facebook") return <svg {...common} className="filled-icon"><path d="M13.8 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H17V4c-.7-.1-1.5-.2-2.3-.2-2.4 0-4 1.5-4 4.1V10H8v3h2.7v8h3.1Z"/></svg>;
  if (name === "instagram") return <svg {...common}><rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="12" cy="12" r="3.5"/><circle cx="17.4" cy="6.8" r=".8" className="filled-dot"/></svg>;
  if (name === "telegram") return <svg {...common} className="filled-icon"><path d="M21 4 3.7 10.7c-1.2.5-1.2 1.1-.2 1.4l4.4 1.4L18.2 7c.5-.3.9-.1.6.2l-8.3 7.5-.3 4.4c.5 0 .7-.2 1-.5l2.1-2 4.4 3.2c.8.5 1.4.2 1.6-.8L22 6c.3-1.2-.5-1.7-1-2Z"/></svg>;
  return <svg {...common}><path d="M12 3.2c-2.8 0-4.5 2.1-4.5 4.8 0 .7.1 1.5 0 2.2-.2.7-1.1 1.1-1.8 1.4-.5.2-.4.8.1 1 .5.2 1 .3 1.5.4.2.8-.4 1.8-1.5 2.1-.5.2-.5.8 0 1.1.8.4 1.7.4 2.5.4.6 0 .9.9 1.5 1.2.5.3 1.1-.1 1.7-.1s1.2.4 1.7.1c.6-.3.9-1.2 1.5-1.2.8 0 1.7 0 2.5-.4.5-.3.5-.9 0-1.1-1.1-.3-1.7-1.3-1.5-2.1.5-.1 1-.2 1.5-.4.5-.2.6-.8.1-1-.7-.3-1.6-.7-1.8-1.4-.1-.7 0-1.5 0-2.2 0-2.7-1.7-4.8-4.5-4.8Z"/></svg>;
}

function WorkVisual({ index }: { index: number }) {
  if (index === 0) return (
    <div className="work-art art-1" aria-hidden="true">
      <svg className="work-illustration" viewBox="0 0 520 290">
        <rect className="ui-shell" x="54" y="30" width="412" height="230" rx="24" />
        <rect className="ui-topbar" x="54" y="30" width="412" height="45" rx="24" />
        <circle className="ui-dot" cx="82" cy="52" r="5" /><circle className="ui-dot" cx="99" cy="52" r="5" /><circle className="ui-dot" cx="116" cy="52" r="5" />
        <rect className="ui-sidebar" x="74" y="94" width="94" height="145" rx="15" />
        <circle className="ui-avatar" cx="121" cy="126" r="20" />
        <rect className="ui-line" x="93" y="161" width="56" height="7" rx="4" /><rect className="ui-line" x="93" y="181" width="44" height="7" rx="4" />
        <g className="ui-modules">
          <rect x="188" y="94" width="76" height="62" rx="14" /><rect x="278" y="94" width="76" height="62" rx="14" /><rect x="368" y="94" width="76" height="62" rx="14" />
          <rect x="188" y="175" width="76" height="64" rx="14" /><rect x="278" y="175" width="76" height="64" rx="14" /><rect x="368" y="175" width="76" height="64" rx="14" />
        </g>
        <g className="ui-glyphs" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M210 126h32m-22-12v24" /><path d="M298 134l14-17 10 10 14-18" /><circle cx="406" cy="125" r="16" /><path d="M406 109v16l12 8" />
          <path d="M209 213h34m-28-13h22" /><path d="M300 213l10-11 9 7 14-18" /><path d="M392 208h28m-22-11h16m-19 22h22" />
        </g>
        <text className="visual-word" x="446" y="55" textAnchor="end">ODOO</text>
      </svg>
    </div>
  );

  if (index === 1) return (
    <div className="work-art art-2" aria-hidden="true">
      <svg className="work-illustration" viewBox="0 0 520 290">
        <rect className="dash-shell" x="48" y="28" width="424" height="234" rx="24" />
        <rect className="dash-card" x="72" y="54" width="112" height="65" rx="14" /><rect className="dash-card" x="204" y="54" width="112" height="65" rx="14" /><rect className="dash-card" x="336" y="54" width="112" height="65" rx="14" />
        <text className="dash-label" x="88" y="77">REVENUE</text><text className="dash-value" x="88" y="103">+24%</text>
        <text className="dash-label" x="220" y="77">ORDERS</text><text className="dash-value" x="220" y="103">1,248</text>
        <text className="dash-label" x="352" y="77">GROWTH</text><text className="dash-value" x="352" y="103">+18%</text>
        <rect className="dash-chart" x="72" y="139" width="240" height="96" rx="15" /><rect className="dash-chart" x="332" y="139" width="116" height="96" rx="15" />
        <g className="chart-bars"><rect x="95" y="191" width="19" height="27" rx="5" /><rect x="128" y="170" width="19" height="48" rx="5" /><rect x="161" y="181" width="19" height="37" rx="5" /><rect x="194" y="154" width="19" height="64" rx="5" /><rect x="227" y="166" width="19" height="52" rx="5" /><rect x="260" y="147" width="19" height="71" rx="5" /></g>
        <circle className="donut-back" cx="390" cy="187" r="29" fill="none" strokeWidth="15" /><circle className="donut-front" cx="390" cy="187" r="29" fill="none" strokeWidth="15" strokeDasharray="128 55" transform="rotate(-90 390 187)" />
        <text className="donut-text" x="390" y="192" textAnchor="middle">KPI</text>
      </svg>
    </div>
  );

  return (
    <div className="work-art art-3" aria-hidden="true">
      <svg className="work-illustration" viewBox="0 0 520 290">
        <g className="erp-links" fill="none"><path d="M260 145 148 86M260 145l112-59M260 145l-112 62M260 145l112 62" /></g>
        <g className="erp-node"><rect x="76" y="49" width="144" height="72" rx="18" /><rect x="300" y="49" width="144" height="72" rx="18" /><rect x="76" y="170" width="144" height="72" rx="18" /><rect x="300" y="170" width="144" height="72" rx="18" /></g>
        <g className="erp-icons" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M113 94h26m-20-12h14m-11-12h8" /><path d="M337 73h32v26h-32zM345 66v9m16-9v9" />
          <path d="M114 215h26l-3-24h-20zM121 191v-7h12v7" /><circle cx="352" cy="205" r="15" /><path d="M352 187v7m0 22v7m18-18h-7m-22 0h-7" />
        </g>
        <g className="erp-labels"><text x="173" y="91" textAnchor="end">FINANCE</text><text x="395" y="91" textAnchor="middle">SALES</text><text x="173" y="213" textAnchor="end">STOCK</text><text x="395" y="213" textAnchor="middle">OPERATIONS</text></g>
        <circle className="erp-core" cx="260" cy="145" r="62" /><circle className="erp-ring" cx="260" cy="145" r="48" fill="none" /><text className="erp-word" x="260" y="154" textAnchor="middle">ERP</text>
      </svg>
    </div>
  );
}

const content = {
  ar: {
    nav: ["الرئيسية", "من نحن", "خدماتنا", "أعمالنا", "تواصل معنا"],
    badge: "خبرة مالية • حلول تقنية • نتائج قابلة للقياس",
    title: "نربط الخبرة المالية بالتكنولوجيا لنطوّر أعمالك",
    intro: "تقدم Modulink Solutions استشارات مالية ومراجعة متخصصة، إلى جانب تنفيذ أنظمة ERP وتدريب فرق العمل على استخدامها بكفاءة.",
    primary: "اطلب استشارة",
    secondary: "اكتشف خدماتنا",
    stat1: "حلول متكاملة",
    stat2: "تنفيذ وتدريب",
    stat3: "دعم مستمر",
    aboutKicker: "من نحن",
    aboutTitle: "شريكك المالي والتقني في رحلة النمو",
    about: "نساعد المؤسسات على تحسين إجراءاتها ورفع كفاءتها وتحويل احتياجاتها المالية والتشغيلية إلى حلول عملية ومتكاملة. نجمع بين الفهم المحاسبي العميق والخبرة في تطبيق أنظمة تخطيط موارد المؤسسات.",
    servicesKicker: "خدماتنا",
    servicesTitle: "خبرة تبدأ من الأرقام وتمتد إلى التشغيل",
    services: [
      ["01", "الاستشارات المالية", "حلول مالية ومحاسبية تدعم اتخاذ القرار وتساعد على تحسين الأداء والربحية."],
      ["02", "المراجعة والرقابة", "مراجعة الإجراءات وتحسين أنظمة الرقابة الداخلية وتقليل المخاطر التشغيلية."],
      ["03", "تنفيذ أنظمة ERP", "تحليل العمليات وتهيئة النظام وتخصيص حلول Odoo بما يناسب طبيعة نشاطك."],
      ["04", "التدريب والدعم", "تدريب المستخدمين وفرق العمل مع دعم مستمر لضمان أفضل استفادة من النظام."],
    ],
    processKicker: "منهجية العمل",
    processTitle: "من الاحتياج إلى نتيجة قابلة للقياس",
    steps: [
      ["01", "نفهم", "نستمع إلى تحدياتك ونحلل الوضع الحالي."],
      ["02", "نخطط", "نضع نطاقًا واضحًا وخطة تنفيذ عملية."],
      ["03", "ننفذ", "نطبق الحل وندرب فريقك خطوة بخطوة."],
      ["04", "نطوّر", "نتابع الأداء ونحسن الحل مع نمو أعمالك."],
    ],
    workKicker: "أعمالنا",
    workTitle: "حلول مصممة لعمليات حقيقية",
    appLink: "عرض أعمالنا على Odoo Apps",
    work: [
      ["حلولنا على Odoo", "استعرض تطبيقات وحلول Modulink Egypt المنشورة على متجر Odoo Apps لتطوير العمليات المالية والتشغيلية.", "https://apps.odoo.com/apps/modules/browse?author=Modulink%20Egypt"],
      ["لوحات المعلومات والتقارير", "مؤشرات وتقارير مالية وتشغيلية تساعد الإدارة على اتخاذ القرار."],
      ["حلول ERP مخصصة", "تخصيصات عملية تربط الإدارات والبيانات داخل منصة واحدة."],
    ],
    partnersKicker: "شركاؤنا",
    partnersTitle: "شراكات تدعم حلولًا أكثر تكاملًا",
    partnersText: "نتعاون مع منصات وشركات تقنية موثوقة لتقديم حلول عملية ومستدامة لعملائنا.",
    ctaTitle: "هل تحتاج إلى تطوير نظامك المالي أو التشغيلي؟",
    ctaText: "تحدث معنا عن احتياجاتك وسنساعدك في اختيار الحل الأنسب.",
    contact: "تواصل عبر واتساب",
    footer: "Modulink Solutions — Financial & ERP Consulting",
  },
  en: {
    nav: ["Home", "About", "Services", "Work", "Contact"],
    badge: "Financial expertise • Technology solutions • Measurable results",
    title: "Connecting financial expertise with technology to move your business forward",
    intro: "Modulink Solutions provides financial consulting and audit services, ERP implementation, and practical training that helps teams work with confidence.",
    primary: "Request a consultation",
    secondary: "Explore our services",
    stat1: "Integrated solutions",
    stat2: "Implementation & training",
    stat3: "Continuous support",
    aboutKicker: "About us",
    aboutTitle: "Your financial and technology partner for growth",
    about: "We help organizations improve processes, increase efficiency, and transform financial and operational needs into practical, integrated solutions. Our approach combines strong accounting knowledge with hands-on ERP implementation experience.",
    servicesKicker: "Our services",
    servicesTitle: "Expertise that starts with numbers and extends to operations",
    services: [
      ["01", "Financial consulting", "Financial and accounting solutions that support better decisions, performance, and profitability."],
      ["02", "Audit & controls", "Process reviews, stronger internal controls, and reduced operational risk."],
      ["03", "ERP implementation", "Process analysis, system configuration, and Odoo solutions tailored to your business."],
      ["04", "Training & support", "Practical user training and ongoing support to maximize the value of your system."],
    ],
    processKicker: "How we work",
    processTitle: "From business need to measurable outcome",
    steps: [
      ["01", "Discover", "We listen to your challenges and assess the current state."],
      ["02", "Plan", "We define a clear scope and a practical delivery roadmap."],
      ["03", "Deliver", "We implement the solution and train your team step by step."],
      ["04", "Improve", "We monitor results and evolve the solution as you grow."],
    ],
    workKicker: "Selected work",
    workTitle: "Solutions designed for real operations",
    appLink: "Explore our Odoo Apps",
    work: [
      ["Our Odoo Solutions", "Explore Modulink Egypt applications and solutions published on the Odoo Apps Store for better financial and operational processes.", "https://apps.odoo.com/apps/modules/browse?author=Modulink%20Egypt"],
      ["Dashboards & reporting", "Financial and operational insights that support management decisions."],
      ["Tailored ERP solutions", "Practical customizations that connect teams and data in one platform."],
    ],
    partnersKicker: "Our Partners",
    partnersTitle: "Partnerships that enable integrated solutions",
    partnersText: "We collaborate with trusted technology platforms and companies to deliver practical, sustainable solutions for our clients.",
    ctaTitle: "Ready to improve your financial or operational system?",
    ctaText: "Tell us what you need and we will help you choose the right solution.",
    contact: "Chat on WhatsApp",
    footer: "Modulink Solutions — Financial & ERP Consulting",
  },
};

export default function Home() {
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const t = content[lang];
  const rtl = lang === "ar";

  return (
    <main dir={rtl ? "rtl" : "ltr"} className={rtl ? "rtl" : "ltr"}>
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Modulink Solutions home">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-name"><b>Modulink</b><small>Solutions</small></span>
        </a>
        <nav aria-label="Main navigation">
          {t.nav.map((item, index) => (
            <a key={item} href={["#home", "#about", "#services", "#work", "#contact"][index]}>{item}</a>
          ))}
        </nav>
        <button className="lang" onClick={() => setLang(rtl ? "en" : "ar")} aria-label="Change language">
          {rtl ? "EN" : "عربي"}
        </button>
      </header>

      <section id="home" className="hero">
        <div className="hero-copy">
          <span className="eyebrow">{t.badge}</span>
          <h1>{t.title}</h1>
          <p>{t.intro}</p>
          <div className="actions">
            <a className="button primary" href="https://wa.me/201099023501" target="_blank" rel="noreferrer">{t.primary}</a>
            <a className="button secondary" href="#services">{t.secondary}</a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="mark"><span>M</span><small>MODULINK</small></div>
          <div className="floating-card card-a"><strong>ERP</strong><span>Connected operations</span></div>
          <div className="floating-card card-b"><strong>360°</strong><span>Financial insight</span></div>
        </div>
        <div className="stats">
          {[t.stat1, t.stat2, t.stat3].map((item, index) => <div key={item}><b>0{index + 1}</b><span>{item}</span></div>)}
        </div>
      </section>

      <section id="about" className="split section">
        <div><span className="kicker">{t.aboutKicker}</span><h2>{t.aboutTitle}</h2></div>
        <p className="lead">{t.about}</p>
      </section>

      <section id="services" className="section services">
        <span className="kicker">{t.servicesKicker}</span>
        <h2>{t.servicesTitle}</h2>
        <div className="service-grid">
          {t.services.map(([number, title, description]) => (
            <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p><i>↗</i></article>
          ))}
        </div>
      </section>

      <section className="section process">
        <span className="kicker light">{t.processKicker}</span>
        <h2>{t.processTitle}</h2>
        <div className="steps">
          {t.steps.map(([number, title, description]) => (
            <article key={number}><b>{number}</b><h3>{title}</h3><p>{description}</p></article>
          ))}
        </div>
      </section>

      <section id="work" className="section work">
        <span className="kicker">{t.workKicker}</span>
        <h2>{t.workTitle}</h2>
        <div className="work-grid">
          {t.work.map(([title, description, link], index) => (
            <article key={title}><WorkVisual index={index} /><div className="work-copy"><h3>{title}</h3><p>{description}</p>{link && <a className="work-link" href={link} target="_blank" rel="noreferrer">{t.appLink} <span>↗</span></a>}</div></article>
          ))}
        </div>
      </section>

      <section className="section partners" aria-labelledby="partners-title">
        <div className="partners-heading">
          <div><span className="kicker">{t.partnersKicker}</span><h2 id="partners-title">{t.partnersTitle}</h2></div>
          <p>{t.partnersText}</p>
        </div>
        <div className="partner-grid">
          <div className="partner-logo partner-odoo"><img src="/partner-odoo.png" alt="Odoo" /></div>
          <div className="partner-logo partner-anevex"><img src="/partner-anevex.png" alt="Anevex" /></div>
        </div>
      </section>

      <section id="contact" className="section cta">
        <div><span className="kicker light">MODULINK SOLUTIONS</span><h2>{t.ctaTitle}</h2><p>{t.ctaText}</p></div>
        <a className="button whatsapp-cta" href="https://wa.me/201099023501" target="_blank" rel="noreferrer" aria-label={t.contact}>
          <SocialIcon name="whatsapp" />
          <span>{t.contact}</span>
        </a>
      </section>

      <footer>
        <div className="footer-brand">
          <span className="footer-logo" role="img" aria-label="Modulink Solutions" />
          <p>{t.footer}</p>
        </div>
        <div className="social-links" aria-label="Social media links">
          <a className="social-email" href="mailto:Modulink-eg@hotmail.com" aria-label="Email" title="Email"><SocialIcon name="email" /></a>
          <a className="social-whatsapp" href="https://wa.me/201099023501" target="_blank" rel="noreferrer" aria-label="WhatsApp" title="WhatsApp"><SocialIcon name="whatsapp" /></a>
          <a className="social-facebook" href="https://www.facebook.com/Mrdulink" target="_blank" rel="noreferrer" aria-label="Facebook" title="Facebook"><SocialIcon name="facebook" /></a>
          <a className="social-instagram" href="https://www.instagram.com/modulink1?igsh=MThkeTltZno1NW9meg==" target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram"><SocialIcon name="instagram" /></a>
          <a className="social-telegram" href="https://t.me/Modulinkeg" target="_blank" rel="noreferrer" aria-label="Telegram" title="Telegram"><SocialIcon name="telegram" /></a>
          <a className="social-snapchat" href="https://www.snapchat.com/@modulink?sender_web_id=e3d9cda1-b1aa-4395-858a-cc3cb839f779&amp;device_type=desktop&amp;is_copy_url=true" target="_blank" rel="noreferrer" aria-label="Snapchat" title="Snapchat"><SocialIcon name="snapchat" /></a>
        </div>
        <span className="footer-copyright">© {new Date().getFullYear()} Modulink Solutions</span>
      </footer>
    </main>
  );
}
