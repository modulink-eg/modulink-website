"use client";

import { useState } from "react";

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
          <img src="/modulink-logo.jpeg" alt="Modulink Solutions" />
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
            <article key={title}><div className={`work-art art-${index + 1}`}><span>0{index + 1}</span></div><h3>{title}</h3><p>{description}</p>{link && <a className="work-link" href={link} target="_blank" rel="noreferrer">{t.appLink} <span>↗</span></a>}</article>
          ))}
        </div>
      </section>

      <section id="contact" className="section cta">
        <div><span className="kicker light">MODULINK SOLUTIONS</span><h2>{t.ctaTitle}</h2><p>{t.ctaText}</p></div>
        <a className="button gold" href="https://wa.me/201099023501" target="_blank" rel="noreferrer">{t.contact}<span>01099023501</span></a>
      </section>

      <footer>
        <img src="/modulink-logo.jpeg" alt="Modulink Solutions" />
        <p>{t.footer}</p>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </main>
  );
}
