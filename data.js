// Project data with full bilingual case studies
// EN + AR translations baked in

window.PROJECTS = [
  {
    id: "advancedreact",
    num: "01",
    year: "2024",
    type: { en: "React Application", ar: "تطبيق رياكت" },
    name: { en: ["Advanced", "React"], ar: ["رياكت", "المتقدم"] },
    nameItalic: 1,
    tagline: {
      en: "A production-grade personal portfolio with form validation, scroll-aware navigation, and a polished component system.",
      ar: "بورتفوليو شخصي بمستوى إنتاجي مع تحقق من النماذج، تنقل متفاعل مع التمرير، ونظام مكونات مصقول."
    },
    tags: ["React", "Chakra UI", "Formik", "Yup"],
    role: { en: "Frontend Developer", ar: "مطور واجهات" },
    duration: { en: "Meta Capstone", ar: "مشروع تخرج Meta" },
    stack: "React 18 · Chakra · Formik",
    repo: "github.com/abdelrahmanelsanosy/advancedreact",
    chapters: [
      {
        label: { en: "The Brief", ar: "المهمة" },
        body: {
          en: "<p>The capstone for Meta's <strong>Advanced React</strong> course — build a complete portfolio site that demonstrates mastery of hooks, context, form state, and accessibility. Not a static page. An interactive, validated, responsive product.</p><p>The shape was given. The execution had to prove I could ship.</p>",
          ar: "<p>مشروع التخرج لمساق <strong>Advanced React</strong> من Meta — بناء موقع بورتفوليو كامل يثبت إتقان الـ hooks والـ context وحالة النماذج وإمكانية الوصول. ليس صفحة ثابتة، بل منتجاً تفاعلياً متجاوباً.</p><p>الشكل كان محدداً. التنفيذ كان عليه أن يثبت أنني أستطيع التسليم.</p>"
        }
      },
      {
        label: { en: "Approach", ar: "النهج" },
        body: {
          en: "<p>I built around <strong>Chakra UI</strong> for the component primitives, layering custom logic on top:</p><ul><li>A scroll-aware header that hides on scroll-down and reveals on scroll-up, driven by a <strong>useRef</strong> + scroll listener</li><li><strong>Formik + Yup</strong> for the contact form — typed validation, error states, async submit simulation</li><li>A global <strong>alertContext</strong> for toast-style feedback after form submission</li><li>FontAwesome icons composed with Chakra's HStack for the social bar</li></ul>",
          ar: "<p>بنيت كل شيء حول <strong>Chakra UI</strong> للمكونات الأساسية، مع طبقة منطق مخصص فوقها:</p><ul><li>هيدر متفاعل مع التمرير يختفي عند النزول ويظهر عند الصعود</li><li><strong>Formik و Yup</strong> لنموذج التواصل — تحقق مكتوب وحالات أخطاء</li><li>سياق <strong>alertContext</strong> عام لتغذية راجعة على شكل توست</li><li>أيقونات FontAwesome مع HStack من Chakra لشريط التواصل</li></ul>"
        }
      },
      {
        label: { en: "Code", ar: "الكود" },
        code: {
          file: "ContactMeSection.js",
          lines: [
            { html: '<span class="kw">const</span> <span class="fn">formik</span> = <span class="fn">useFormik</span>({' },
            { html: '  <span class="pn">initialValues</span>: { <span class="pn">firstName</span>: <span class="str">""</span>, <span class="pn">email</span>: <span class="str">""</span>, <span class="pn">type</span>: <span class="str">"hireMe"</span>, <span class="pn">comment</span>: <span class="str">""</span> },' },
            { html: '  <span class="pn">onSubmit</span>: (<span class="pn">values</span>) => <span class="fn">submit</span>(<span class="str">"/api"</span>, <span class="pn">values</span>),' },
            { html: '  <span class="pn">validationSchema</span>: <span class="fn">Yup</span>.<span class="fn">object</span>({' },
            { html: '    <span class="pn">firstName</span>: <span class="fn">Yup</span>.<span class="fn">string</span>().<span class="fn">required</span>(<span class="str">"Required"</span>),' },
            { html: '    <span class="pn">email</span>: <span class="fn">Yup</span>.<span class="fn">string</span>().<span class="fn">email</span>().<span class="fn">required</span>(),' },
            { html: '    <span class="pn">comment</span>: <span class="fn">Yup</span>.<span class="fn">string</span>().<span class="fn">min</span>(<span class="str">25</span>).<span class="fn">required</span>(),' },
            { html: '  }),' },
            { html: '});' }
          ]
        }
      },
      {
        label: { en: "Outcome", ar: "النتيجة" },
        body: {
          en: "<p>Passed peer review on the first submission. The patterns from this project — <strong>context for global UI state</strong>, <strong>custom hooks for async</strong>, and <strong>scroll-driven animations without libraries</strong> — became the foundation for every React project that followed.</p>",
          ar: "<p>اجتاز المراجعة من النظراء في التسليم الأول. الأنماط من هذا المشروع أصبحت الأساس لكل مشروع رياكت تلاه.</p>"
        }
      }
    ]
  },

  {
    id: "tour",
    num: "02",
    year: "2024",
    type: { en: "Travel Booking Site", ar: "موقع حجز سياحي" },
    name: { en: ["Wander", "Atlas"], ar: ["أطلس", "الرحلات"] },
    nameItalic: 0,
    tagline: {
      en: "A cinematic travel-discovery experience with video-backed search, animated destination grid, and immersive scroll choreography.",
      ar: "تجربة اكتشاف سفر سينمائية مع بحث مدعوم بالفيديو وشبكة وجهات متحركة."
    },
    tags: ["React", "SCSS", "AOS", "react-icons"],
    role: { en: "Frontend Developer", ar: "مطور واجهات" },
    duration: { en: "Self-initiated", ar: "مشروع شخصي" },
    stack: "React · SCSS · AOS",
    repo: "github.com/abdelrahmanelsanosy/tour",
    chapters: [
      {
        label: { en: "The Brief", ar: "المهمة" },
        body: {
          en: "<p>Take the conventions of a travel-booking landing page — video hero, search filters, destination grid — and make them feel like a luxury brochure rather than a Skyscanner clone.</p><p>The win condition: a first-frame that makes the user want to stay and a grid that animates with intent, not noise.</p>",
          ar: "<p>أخذ تقاليد صفحة هبوط حجز السفر وجعلها تشبه كتيب فاخر لا نسخة عادية.</p><p>شرط النجاح: لقطة أولى تجعل المستخدم يريد البقاء، وشبكة تتحرك بقصد لا بضوضاء.</p>"
        }
      },
      {
        label: { en: "Approach", ar: "النهج" },
        body: {
          en: "<p>I composed the experience in four parts: a <strong>Navbar</strong>, a <strong>Home</strong> hero with autoplaying muted video plus a glass-card search panel, a <strong>Main</strong> destination grid with nine hand-picked locations (Bora Bora, Machu Picchu, Pyramids of Giza, and more), and a <strong>Footer</strong> with newsletter capture.</p><ul><li>Styled with <strong>SCSS</strong> using nested selectors and variables for the warm earthy palette</li><li>Motion via <strong>AOS</strong> — fade-up triggers tuned per-section for staggered reveals</li><li>Iconography from <strong>react-icons</strong> with consistent stroke weight across families</li><li>Responsive grid that collapses gracefully from 3-up to single column</li></ul>",
          ar: "<p>كوّنت التجربة من أربعة أجزاء: شريط التنقل، هيرو بفيديو مع بطاقة بحث، شبكة وجهات بتسع مواقع مختارة، وفوتر. التنسيق بـ SCSS والحركة عبر AOS.</p>"
        }
      },
      {
        label: { en: "Detail", ar: "تفصيل" },
        body: {
          en: "<p>The hero is the whole pitch. A muted full-bleed video loops behind a centered <em>Search Your Holiday</em> headline. Below it sits a four-cell control: <strong>destination</strong>, <strong>date</strong>, <strong>max price</strong> (range slider, $1k–$5k), and <strong>filters</strong>. Each cell animates in with a staggered <code>fade-up</code>.</p><p>The destination grid uses a data-driven map over a <code>Data</code> array, rendering each card with image, title, location pin, grade chip, fee, description, and a <em>Details</em> CTA.</p>",
          ar: "<p>الهيرو هو العرض كله. فيديو صامت يملأ الشاشة خلف عنوان مركزي، وتحكم رباعي للوجهة والتاريخ والسعر والفلاتر.</p>"
        }
      },
      {
        label: { en: "Outcome", ar: "النتيجة" },
        body: {
          en: "<p>Shipped as a portfolio piece. The component decomposition became my <strong>standard React architecture</strong> for any single-page marketing site since.</p>",
          ar: "<p>تم تسليمه كقطعة بورتفوليو. تقسيم المكونات أصبح معماري الافتراضي.</p>"
        }
      }
    ]
  },

  {
    id: "amazon",
    num: "03",
    year: "2024",
    type: { en: "E-commerce Recreation", ar: "إعادة بناء متجر" },
    name: { en: ["Amazon", "Egypt"], ar: ["أمازون", "مصر"] },
    nameItalic: 1,
    tagline: {
      en: "Pixel-faithful recreation of Amazon.eg — header navigation, category nav, hero slider, and four banner sections — built with vanilla HTML and CSS.",
      ar: "إعادة بناء دقيقة لصفحة أمازون مصر بـ HTML و CSS فقط."
    },
    tags: ["HTML", "CSS", "Responsive", "Vanilla"],
    role: { en: "Frontend Developer", ar: "مطور واجهات" },
    duration: { en: "Practice", ar: "تدريب" },
    stack: "HTML5 · CSS3",
    repo: "github.com/abdelrahmanelsanosy/e-commerce-website",
    chapters: [
      {
        label: { en: "The Brief", ar: "المهمة" },
        body: {
          en: "<p>Recreate Amazon Egypt's home page from memory and reference — no frameworks, no libraries, just <strong>HTML and CSS</strong>. The exercise wasn't about novelty. It was about <em>fidelity discipline</em>: matching spacing, type hierarchy, color, dropdown behavior, grid alignment of an interface most users see daily.</p>",
          ar: "<p>إعادة بناء صفحة أمازون مصر الرئيسية بـ <strong>HTML و CSS</strong> فقط. التمرين كان عن <em>انضباط الدقة</em>: مطابقة المسافات والألوان والسلوك.</p>"
        }
      },
      {
        label: { en: "Approach", ar: "النهج" },
        body: {
          en: "<p>I structured the page into six layout regions, each with its own CSS scope:</p><ul><li><strong>Header</strong> — logo, location, search bar with category select, language dropdown, account dropdown, cart with badge</li><li><strong>Categories nav</strong> — horizontal scroll list</li><li><strong>Hero banner</strong> — slider with prev/next chevrons</li><li><strong>Banner section</strong> — four cards in a responsive grid</li><li><strong>Footer</strong></li></ul><p>Every dropdown is a pure-CSS <code>:hover</code> reveal — no JS. The hardest part was the <strong>category card grid</strong>: a 2-up of 2×2 image grids, each with a label below the image, all aligned to a baseline.</p>",
          ar: "<p>قسّمت الصفحة لست مناطق تخطيط: الهيدر، تنقل الفئات، بانر الهيرو، قسم البانر بأربع بطاقات، والفوتر. كل قائمة منسدلة هي :hover من CSS بحت — بلا JS.</p>"
        }
      },
      {
        label: { en: "Outcome", ar: "النتيجة" },
        body: {
          en: "<p>Forty-plus hours, twenty-two images, one stylesheet at ~9.5KB. What I took from it: <strong>CSS Grid for the macro layout, Flexbox for the row alignment, no shortcuts on responsiveness</strong>.</p>",
          ar: "<p>أكثر من أربعين ساعة وورقة تنسيق بحجم ~9.5KB. ما خرجت به: <strong>CSS Grid للتخطيط الكلي، Flexbox لمحاذاة الصفوف</strong>.</p>"
        }
      }
    ]
  },

  {
    id: "gharbia",
    num: "04",
    year: "2024",
    type: { en: "Client Work · Live Site", ar: "عمل عميل · موقع منشور" },
    name: { en: ["Gharbia", "Company"], ar: ["شركة", "غربية"] },
    nameItalic: 0,
    tagline: {
      en: "A delivered freelance portfolio for Attia Mohamed at Gharbia Company — single-page, served as gharbia.net with a companion Play Store app linked from the same surface.",
      ar: "بورتفوليو حر مُسلَّم لعطية محمد في شركة غربية — صفحة واحدة منشورة على gharbia.net."
    },
    tags: ["HTML", "CSS", "Client", "Shipped"],
    role: { en: "Designer + Developer", ar: "مصمم + مطور" },
    duration: { en: "Delivered 2024", ar: "سُلِّم 2024" },
    stack: "HTML5 · CSS3 · FontAwesome",
    repo: "github.com/abdelrahmanelsanosy/Portfolio",
    chapters: [
      {
        label: { en: "The Brief", ar: "المهمة" },
        body: {
          en: "<p>The client is an admin secretary at Gharbia Company, in Beheira. He needed a clean, mobile-first single-pager that introduced him, displayed contact channels prominently (WhatsApp, Facebook, phone, email, location pin), and linked to the company's existing site and Play Store app.</p><p>Constraint: it had to load instantly on Egyptian mobile networks and look <em>trustworthy</em>, not flashy.</p>",
          ar: "<p>العميل سكرتير إداري في شركة غربية، في البحيرة. احتاج موقعاً مرتباً بصفحة واحدة يعرض قنوات التواصل بوضوح ويربط بموقع الشركة وتطبيقها.</p>"
        }
      },
      {
        label: { en: "Approach", ar: "النهج" },
        body: {
          en: "<p>One HTML file, one CSS file, one hero image. Three sections: a fixed header with logo + nav anchors, a full-bleed hero with the company building behind <em>Hello, I'm ATTIA MOHAMED — Admin Secretary, Gharbia Company</em>, a contact card row (location / phone / mail), and a services row with two clickable tiles — website + mobile app.</p><ul><li>Blue accent <code>#3a6cf4</code> picked to match the company's existing brand</li><li>Poppins for everything — single typeface keeps the file light</li><li>Three media queries: 1023px, 641px, 300px</li><li>FontAwesome 6 via CDN for the icon set</li></ul>",
          ar: "<p>ملف HTML واحد، ملف CSS واحد، صورة هيرو واحدة. ثلاثة أقسام: هيدر ثابت، هيرو يملأ الشاشة، صف بطاقات تواصل، وصف خدمات بمربعين قابلين للنقر.</p>"
        }
      },
      {
        label: { en: "Outcome", ar: "النتيجة" },
        body: {
          en: "<p>Shipped to <strong>gharbia.net</strong>. The client could send one link and prospects could call, message, navigate, or download the app from a single screen.</p><p>This was the project that taught me <strong>boring requirements don't need boring code</strong>.</p>",
          ar: "<p>سُلِّم على <strong>gharbia.net</strong>. هذا المشروع علّمني أن <strong>المتطلبات المملة لا تحتاج كوداً مملاً</strong>.</p>"
        }
      }
    ]
  }
];

window.SKILLS = [
  {
    cat: { en: "Backend & Core", ar: "الواجهة الخلفية" },
    items: [
      { name: ".NET / C#", w: "90%" },
      { name: "ASP.NET Core", w: "85%" },
      { name: "Entity Framework", w: "82%" },
      { name: "REST APIs", w: "88%" },
      { name: "SQL Server", w: "80%" }
    ]
  },
  {
    cat: { en: "Frontend", ar: "الواجهة الأمامية" },
    items: [
      { name: "React", w: "92%" },
      { name: "JavaScript ES6+", w: "90%" },
      { name: "HTML5 / CSS3", w: "95%" },
      { name: "SCSS / Tailwind", w: "85%" },
      { name: "Chakra UI", w: "80%" }
    ]
  },
  {
    cat: { en: "Tooling & Craft", ar: "الأدوات والمهارة" },
    items: [
      { name: "Git / GitHub", w: "88%" },
      { name: "Formik / Yup", w: "82%" },
      { name: "Responsive Design", w: "94%" },
      { name: "AOS / Motion", w: "78%" },
      { name: "REST · MSSQL", w: "80%" }
    ]
  }
];
