export type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  problem: string;
  audience: string;
  solution: string;
  status: string;
  lesson: string;
  url?: string;
  caseStudySlug?: string;
};

export const projects: Project[] = [
  {
    slug: "cleanora",
    name: "CLEANORA",
    category: "مشروع رقمي",
    summary: "أول مشروع رجع به يونس للبناء باستعمال الأدوات الرقمية والذكاء الاصطناعي.",
    problem: "تحديد عرض واضح وتحويل الفكرة إلى تجربة قابلة للاختبار.",
    audience: "العملاء اللي محتاجين حلاً منظماً وبسيطاً.",
    solution: "واجهة وعرض أولي لاختبار الفكرة وجمع الملاحظات.",
    status: "قيد التطوير والتوثيق",
    lesson: "البداية الصغيرة والواضحة كتسبق التوسع.",
  },
  {
    slug: "clinic-os-maroc",
    name: "ClinicOS Maroc",
    category: "إدارة العيادات",
    summary: "تصور لمنصة كتجمع العمليات اليومية للعيادة فمكان واحد.",
    problem: "تشتت تنظيم المواعيد والملفات والمتابعة داخل العيادات.",
    audience: "العيادات والمهنيون الصحيون بالمغرب.",
    solution: "نظام رقمي مبسط للتنظيم والمتابعة.",
    status: "قيد التوثيق",
    lesson: "فهم سير العمل الحقيقي ضروري قبل بناء الخصائص.",
  },
  {
    slug: "prof-harti-academy",
    name: "Prof Harti Academy",
    category: "تعليم رقمي",
    summary: "منصة تعليمية لتنظيم المحتوى، الدروس وتتبع التعلم.",
    problem: "الحاجة إلى تجربة تعلم منظمة وسهلة الولوج.",
    audience: "الأساتذة والمتعلمون.",
    solution: "فضاء للدروس، الفيديوهات والمتابعة.",
    status: "مشروع مستقل على Vercel",
    lesson: "المنصة خاصها تخدم رحلة المتعلم، ماشي غير تعرض المحتوى.",
    caseStudySlug: "prof-harti-academy",
  },
  {
    slug: "prof-anis-platform",
    name: "Prof Anis Platform",
    category: "تعليم رقمي",
    summary: "تجربة منصة رقمية موجهة لخدمة محتوى أستاذ ومجتمعه.",
    problem: "جمع المحتوى والتواصل التعليمي فواجهة موحدة.",
    audience: "الأستاذ والطلبة ديالو.",
    solution: "منصة شخصية للمحتوى والمسارات التعليمية.",
    status: "قيد التوثيق",
    lesson: "هوية الأستاذ وتجربة الطالب خاصهم يكونو منسجمين.",
  },
  {
    slug: "prof-philo",
    name: "Prof Philo",
    category: "تعليم رقمي",
    summary: "مشروع لتقديم محتوى الفلسفة بطريقة رقمية مرتبة.",
    problem: "تبسيط الوصول للمحتوى وتنظيم التعلم.",
    audience: "تلاميذ ومتعلمو الفلسفة.",
    solution: "مساحات واضحة للدروس والموارد.",
    status: "قيد التوثيق",
    lesson: "التنظيم البصري كيساعد المتعلم يفهم المسار.",
  },
  {
    slug: "markazos",
    name: "MarkazOS",
    category: "إدارة المراكز",
    summary: "تصور لنظام يساعد المراكز على تنظيم خدماتها وعملياتها.",
    problem: "العمليات المشتتة وصعوبة المتابعة داخل المركز.",
    audience: "المراكز التعليمية والخدماتية.",
    solution: "لوحة موحدة للإدارة والمتابعة.",
    status: "قيد التوثيق",
    lesson: "كل لوحة ناجحة كتبدأ من القرارات اليومية للمستخدم.",
  },
  {
    slug: "academia-pro",
    name: "Academia Pro / Growth Partner",
    category: "نمو وتسويق",
    summary: "عرض يربط الحل الرقمي بخطة عملية للنمو والمتابعة.",
    problem: "وجود أدوات بدون خطة واضحة لاكتساب العملاء والنمو.",
    audience: "المشاريع التعليمية والخدماتية.",
    solution: "مرافقة تجمع الاستراتيجية، التنفيذ وقياس النتائج.",
    status: "قيد التوثيق",
    lesson: "النمو خدمة مستمرة مبنية على التجربة والقياس.",
  },
  {
    slug: "h-digital-agency",
    name: "H Digital Agency",
    category: "وكالة رقمية",
    summary: "الذراع التنفيذي لبناء المواقع، الأتمتة ومساعدة المشاريع على النمو.",
    problem: "أصحاب المشاريع محتاجين تنفيذاً رقمياً متكاملاً وواضحاً.",
    audience: "المقاولات، الأساتذة وأصحاب الخدمات.",
    solution: "Build • Automate • Grow عبر خدمات تقنية وتسويقية.",
    status: "متوفر للعرض",
    lesson: "الثقة كتتبنى بالعمل الموثق والنتائج القابلة للقياس.",
    url: "https://h-digital-agency.vercel.app/",
  },
  {
    slug: "plan-b",
    name: "PLAN B",
    category: "استشارة وتعلم",
    summary: "مسار يبدأ باستشارة مجانية، تحليل وتقرير شخصي ثم تعلم ومتابعة.",
    problem: "كثرة الأفكار وغياب خطوة أولى واضحة وقابلة للتجربة.",
    audience: "أصحاب الأفكار والمشاريع في مرحلة البداية أو إعادة الانطلاق.",
    solution: "حساب، استمارة، تحليل، تقرير، دورات، فيديو ولقاءات مباشرة.",
    status: "نسخة تجريبية قيد البناء",
    lesson: "التوجيه خاصو ينطلق من واقع كل شخص، ماشي من وصفة عامة.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
