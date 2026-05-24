// Resume generator — opens a print-styled window with the résumé,
// user triggers Save as PDF from the print dialog.

window.generateResume = function(lang) {
  const isAr = lang === 'ar';
  const html = `
<!DOCTYPE html>
<html lang="${lang}" dir="${isAr ? 'rtl' : 'ltr'}">
<head>
<meta charset="UTF-8">
<title>${isAr ? 'السيرة الذاتية — عبدالرحمن السنوسي' : 'Résumé — Abdelrahman Alsanosy'}</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Manrope:wght@300;400;500;600&family=Amiri:ital,wght@0,400;0,700;1,400&family=Tajawal:wght@300;400;500;700&family=JetBrains+Mono:wght@400&display=swap');

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: ${isAr ? "'Tajawal'" : "'Manrope'"}, sans-serif;
  font-size: 11pt;
  line-height: 1.5;
  color: #1A1714;
  background: #F4EFE2;
  padding: 56pt 64pt;
  max-width: 8.5in;
  margin: 0 auto;
  font-weight: 300;
}
@page { size: A4; margin: 0; }

.serif { font-family: ${isAr ? "'Amiri'" : "'Cormorant Garamond'"}, serif; font-weight: 400; }
.mono { font-family: 'JetBrains Mono', monospace; }
.gold { color: #8E7842; }

.head { display: flex; justify-content: space-between; align-items: flex-end; padding-bottom: 18pt; border-bottom: 1pt solid #8E7842; margin-bottom: 24pt; }
.name { font-family: ${isAr ? "'Amiri'" : "'Cormorant Garamond'"}, serif; font-size: 42pt; line-height: 1; letter-spacing: -0.02em; font-weight: 400; }
.name em { font-style: italic; color: #8E7842; }
.contact { text-align: ${isAr ? 'left' : 'right'}; font-family: 'JetBrains Mono', monospace; font-size: 9pt; letter-spacing: 0.05em; line-height: 1.8; }
.contact a { color: inherit; text-decoration: none; }

.role { font-family: ${isAr ? "'Amiri'" : "'Cormorant Garamond'"}, serif; font-style: italic; font-size: 18pt; color: #8E7842; margin-bottom: 18pt; }

.summary { font-family: ${isAr ? "'Amiri'" : "'Cormorant Garamond'"}, serif; font-size: 13pt; line-height: 1.5; font-weight: 400; margin-bottom: 28pt; max-width: 92%; }
.summary em { color: #8E7842; font-style: italic; }

.section-h { font-family: 'JetBrains Mono', monospace; font-size: 9pt; letter-spacing: 0.25em; text-transform: uppercase; color: #8E7842; padding-bottom: 8pt; border-bottom: 0.5pt solid #BFB298; margin-bottom: 14pt; margin-top: 22pt; }

.skills-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16pt; }
.skill-cat-h { font-family: ${isAr ? "'Amiri'" : "'Cormorant Garamond'"}, serif; font-style: italic; font-size: 13pt; margin-bottom: 6pt; color: #1A1714; }
.skill-cat ul { list-style: none; }
.skill-cat li { font-size: 10pt; padding: 2pt 0; color: #44403B; }
.skill-cat li::before { content: "·"; color: #8E7842; margin-${isAr ? 'left' : 'right'}: 8pt; font-weight: 700; }

.project { margin-bottom: 18pt; page-break-inside: avoid; }
.project-h { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 4pt; }
.project-t { font-family: ${isAr ? "'Amiri'" : "'Cormorant Garamond'"}, serif; font-size: 16pt; font-weight: 500; }
.project-t em { font-style: italic; color: #8E7842; }
.project-meta { font-family: 'JetBrains Mono', monospace; font-size: 9pt; color: #8E7842; letter-spacing: 0.1em; }
.project-d { font-size: 10.5pt; color: #44403B; margin: 4pt 0 6pt; line-height: 1.4; }
.project-tags { font-family: 'JetBrains Mono', monospace; font-size: 8.5pt; color: #8E7842; letter-spacing: 0.08em; text-transform: uppercase; }

.foot { margin-top: 32pt; padding-top: 14pt; border-top: 0.5pt solid #BFB298; display: flex; justify-content: space-between; font-family: 'JetBrains Mono', monospace; font-size: 8.5pt; color: #7A746A; letter-spacing: 0.15em; text-transform: uppercase; }
</style>
</head>
<body>
  <div class="head">
    <div>
      <div class="name">${isAr ? 'عبدالرحمن<br><em>السنوسي</em>' : 'Abdelrahman<br><em>Alsanosy</em>'}</div>
    </div>
    <div class="contact">
      <div>${isAr ? 'القاهرة، مصر' : 'CAIRO · EGYPT'}</div>
      <div>abdoelsanosy1@gmail.com</div>
      <div>+20 109 752 5324</div>
      <div>github.com/abdelrahmanelsanosy</div>
      <div>/in/abdelrahman-alsanosy</div>
    </div>
  </div>

  <div class="role">${isAr ? 'مطور فول-ستاك بـ .NET' : 'Full-Stack .NET Developer'}</div>

  <div class="summary">
    ${isAr
      ? 'مطور فول-ستاك يركّز على .NET وReact. أبني تطبيقات منشورة — من صفحة عميل حية على نطاق <em>gharbia.net</em> إلى مشروع تخرج Meta لـAdvanced React وموقع سفر سينمائي وإعادة بناء دقيقة لأمازون.'
      : 'Full-stack developer with .NET on the server and React on the screen. I build things that ship — from a live client site at <em>gharbia.net</em> to a Meta Advanced React capstone, a cinematic travel platform, and a pixel-faithful Amazon recreation.'
    }
  </div>

  <div class="section-h">${isAr ? 'القدرات' : 'Capabilities'}</div>
  <div class="skills-grid">
    <div class="skill-cat">
      <div class="skill-cat-h">${isAr ? 'الواجهة الخلفية' : 'Backend & Core'}</div>
      <ul>
        <li>.NET / C#</li>
        <li>ASP.NET Core</li>
        <li>Entity Framework</li>
        <li>REST APIs</li>
        <li>SQL Server</li>
      </ul>
    </div>
    <div class="skill-cat">
      <div class="skill-cat-h">${isAr ? 'الواجهة الأمامية' : 'Frontend'}</div>
      <ul>
        <li>React (18)</li>
        <li>JavaScript ES6+</li>
        <li>HTML5 / CSS3</li>
        <li>SCSS / Tailwind</li>
        <li>Chakra UI</li>
      </ul>
    </div>
    <div class="skill-cat">
      <div class="skill-cat-h">${isAr ? 'الأدوات' : 'Tooling & Craft'}</div>
      <ul>
        <li>Git / GitHub</li>
        <li>Formik / Yup</li>
        <li>Responsive Design</li>
        <li>AOS / Motion</li>
        <li>Figma → Code</li>
      </ul>
    </div>
  </div>

  <div class="section-h">${isAr ? 'مشاريع مختارة' : 'Selected Work'}</div>

  <div class="project">
    <div class="project-h">
      <div class="project-t">${isAr ? 'شركة <em>غربية</em> — عمل عميل' : 'Gharbia <em>Company</em> — Client'}</div>
      <div class="project-meta">2024 · LIVE</div>
    </div>
    <div class="project-d">${isAr ? 'موقع عميل حر مُسلَّم لشركة غربية. صفحة هبوط واحدة بتصميم متجاوب، نشر على gharbia.net، مع روابط لتطبيق Play Store.' : 'Freelance landing page for Gharbia Company. Shipped live to gharbia.net with linked Play Store companion app. Mobile-first, instant load.'}</div>
    <div class="project-tags">HTML · CSS · FONTAWESOME · RESPONSIVE</div>
  </div>

  <div class="project">
    <div class="project-h">
      <div class="project-t">${isAr ? 'مشروع تخرج <em>Meta</em> — Advanced React' : 'Meta <em>Advanced React</em> Capstone'}</div>
      <div class="project-meta">2024</div>
    </div>
    <div class="project-d">${isAr ? 'بورتفوليو رياكت تفاعلي مع تحقق نماذج عبر Formik و Yup، تنقل متفاعل مع التمرير، ونظام تنبيهات بالـcontext.' : 'Interactive React portfolio with Formik+Yup form validation, scroll-aware navigation, and context-driven alert system. Passed peer review on first submission.'}</div>
    <div class="project-tags">REACT 18 · CHAKRA UI · FORMIK · YUP</div>
  </div>

  <div class="project">
    <div class="project-h">
      <div class="project-t">${isAr ? '<em>Wander</em> Atlas — موقع سفر' : '<em>Wander</em> Atlas — Travel Site'}</div>
      <div class="project-meta">2024</div>
    </div>
    <div class="project-d">${isAr ? 'موقع حجز سفر بهيرو فيديو، فلاتر بحث (وجهة/تاريخ/سعر), وشبكة وجهات بتسع مواقع متحركة عبر AOS.' : 'Cinematic travel booking with video hero, search filters (destination/date/price), and a 9-destination animated grid using AOS scroll triggers.'}</div>
    <div class="project-tags">REACT · SCSS · AOS · REACT-ICONS</div>
  </div>

  <div class="project">
    <div class="project-h">
      <div class="project-t">${isAr ? 'إعادة بناء <em>أمازون</em> مصر' : '<em>Amazon</em> Egypt Recreation'}</div>
      <div class="project-meta">2024</div>
    </div>
    <div class="project-d">${isAr ? 'إعادة بناء دقيقة لصفحة أمازون مصر بـ HTML/CSS بحت، مع قوائم منسدلة بـ:hover وشبكات بانر متجاوبة.' : 'Pixel-faithful Amazon.eg recreation in pure HTML/CSS — full header, category nav, hero slider, 4 banner sections with pure-CSS dropdowns.'}</div>
    <div class="project-tags">HTML5 · CSS3 · GRID · FLEXBOX</div>
  </div>

  <div class="section-h">${isAr ? 'التعليم' : 'Education & Credentials'}</div>
  <div class="project" style="margin-bottom: 6pt;">
    <div class="project-h">
      <div class="project-t" style="font-size: 14pt;">${isAr ? 'Meta — Advanced React' : 'Meta — Advanced React Certification'}</div>
      <div class="project-meta">2024</div>
    </div>
    <div class="project-d">${isAr ? 'إكمال شهادة Coursera مع مشروع تخرج.' : 'Completed Coursera specialization with capstone project.'}</div>
  </div>

  <div class="foot">
    <span>${isAr ? 'متاح للفرص — مايو ٢٠٢٦' : 'Available for roles — May 2026'}</span>
    <span>abdoelsanosy1@gmail.com</span>
  </div>

  <script>window.onload = () => setTimeout(() => window.print(), 300);</script>
</body>
</html>`;

  const w = window.open('', '_blank');
  w.document.write(html);
  w.document.close();
};
