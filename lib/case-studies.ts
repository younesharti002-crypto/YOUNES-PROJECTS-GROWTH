export type CaseStudy = {
  slug: string;
  projectSlug: string;
  name: string;
  title: string;
  summary: string;
  status: string;
  context: string;
  problem: string;
  audience: string;
  solution: string;
  built: string[];
  workflows: { title: string; flow: string }[];
  stack: string[];
  verified: string[];
  notClaimed: string[];
  lessons: string[];
  nextSteps: string[];
  sourceUrl: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "prof-harti-academy",
    projectSlug: "prof-harti-academy",
    name: "PROF HARTI Academy",
    title: "كيفاش تبنات PROF HARTI Academy: من محتوى تعليمي لمنصة منظمة",
    summary:
      "Case Study موثقة على بناء نواة منصة تعليمية ثنائية اللغة للأستاذ والتلميذ: الولوج، المحتوى، الاشتراك، Live/Replays، التمارين والتتبع، مع فصل واضح بين ما تم بناؤه ومازال خاصو تحقق فعلي قبل أي ادعاء بالنتائج.",
    status: "Core MVP موثق كمنفذ وجاهز للإصدار على فرع mvp-content-workflow، مع بقاء تحقق Release بحسابات حقيقية قبل اعتبار الإطلاق مكتملاً.",
    context:
      "PROF HARTI Academy مشروع تعليمي رقمي كيتبنى كمرجع عملي لكيفاش نقدروا نحولو تجربة الأستاذ من محتوى متفرق إلى رحلة منظمة فيها ولوج، تعلم، متابعة وإدارة. المشروع ماشي مجرد Landing Page؛ النواة الموثقة فالمصدر كتجمع تجربة الطالب، الأستاذ والإدارة.",
    problem:
      "التحدي ما كانش غير عرض الدروس. المطلوب هو تنظيم من يقدر يدخل، شنو يقدر يشوف، كيفاش الأستاذ ينشر المحتوى، وكيفاش التلميذ يتابع الدروس والـLive والتمارين والتقدم ديالو داخل نفس النظام.",
    audience:
      "النسخة الحالية موجهة لتلاميذ الفيزياء والكيمياء المقبلين على الباك المغربي، مع فضاءات منفصلة للتلميذ والأستاذ والإدارة.",
    solution:
      "بناء Core تعليمية قابلة لإعادة الاستعمال: Authentication بواتساب وكلمة السر، صلاحيات وأدوار، اشتراكات وحالة الولوج، هيكلة Course → Chapter → Lesson، موارد Video/PDF، Live/Replays، Assessments، وتتبع التقدم والنتائج.",
    built: [
      "Landing Page ثنائية اللغة العربية/الفرنسية مع دعم RTL وLTR.",
      "تسجيل الدخول برقم WhatsApp وكلمة السر، بدون تسجيل عمومي مباشر للتلاميذ.",
      "أدوار STUDENT وTEACHER وADMIN، مع حالات اشتراك PENDING وACTIVE وSUSPENDED وEXPIRED.",
      "Teacher Content Studio بهيكلة Course → Chapter → Lesson.",
      "موارد الدرس: فيديو وPDF، مع Draft / Published / Archived workflow.",
      "Course Library للتلميذ مع فلترة حسب صلاحية الولوج والاشتراك.",
      "Lesson viewer وتتبع فعلي لتقدم الدرس.",
      "Live Classes وجدولة دورة حياتها، ثم Replay بعد انتهاء الحصة.",
      "Exercises وQuizzes مع تصحيح Server-side ومحاولات وScores.",
      "Student Dashboard كيعرض progress وLive وReplay وAssessment data.",
      "Admin password reset وإدارة أكاديمية، مع قيود ملكية المحتوى بالنسبة للأستاذ.",
    ],
    workflows: [
      {
        title: "مسار التلميذ",
        flow: "تأكيد الاشتراك → تفعيل الحساب → دخول WhatsApp + Password → Dashboard → Courses / Live / Replays / Exercises → Progress & Scores",
      },
      {
        title: "مسار الأستاذ",
        flow: "دخول الأستاذ → Studio → إنشاء Course → Chapters/Lessons → Publish → Schedule Live → Publish Replay → Create Quiz/Exercise",
      },
      {
        title: "مسار الإدارة",
        flow: "إدارة الهيكلة الأكاديمية والأمان والولوج، مع Reset Password ومراقبة الصلاحيات على مستوى المنصة.",
      },
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL on Neon",
      "Drizzle ORM",
      "Vercel",
      "Node.js 24",
    ],
    verified: [
      "Repository PROF-HARTI يوثق Core MVP كمنفذ، مع فرع mvp-content-workflow موصوف كجاهز للإصدار.",
      "الـRelease scope الموثق يشمل Student + Teacher/Admin core، المحتوى، الولوج، Live/Replays، Assessments والتتبع.",
      "المنصة مبنية على Core قابلة لإعادة الاستعمال لأساتذة آخرين عبر تغيير الهوية والمادة والمحتوى بدل إعادة بناء النظام.",
      "Release checklist موجود وكيشمل auth, subscriptions, academic, access, typecheck, lint وbuild قبل الإطلاق.",
    ],
    notClaimed: [
      "ما كنصرحوش بعدد تلاميذ مستعملين فعلياً إلا منين تكون عندنا بيانات موثقة.",
      "ما كنصرحوش بارتفاع النقط أو نتائج تعليمية بدون قياس حقيقي.",
      "ما كنصرحوش بمداخيل، Conversion Rate أو أرقام تجارية مازال ما توثقاتش.",
      "ما كنعتابروش Release production مكتملة حتى يدوز التحقق بحسابات حقيقية فالمسارات الأساسية.",
      "Parent experience وParent notifications مؤجلين عمداً للنسخة الموسعة، وكذلك توسعات PWA/Offline وقنوات إشعار إضافية.",
    ],
    lessons: [
      "المنصة التعليمية خاصها تخدم رحلة التعلم والولوج، ماشي غير تعرض الفيديوهات.",
      "الصلاحيات والاشتراك جزء من المنتج من البداية، ماشي إضافة تقنية من بعد.",
      "فصل Student / Teacher / Admin كيخلي كل مستخدم يشوف غير المسار اللي محتاجه.",
      "Core قابلة لإعادة الاستعمال كتقلل إعادة البناء: البراند والمادة والمحتوى يتغيرو، والنواة تبقى مستقرة.",
      "الفرق بين Build وResult مهم: نقدر نوثق شنو تبنى، ولكن النتائج التجارية والتعليمية خاصها بيانات حقيقية.",
    ],
    nextSteps: [
      "تشغيل Release verification كاملة على النسخة المرشحة للإطلاق.",
      "اختبار Student login والاشتراك وCourse access وLesson progress بحسابات Release حقيقية.",
      "اختبار Live visibility وReplay وQuiz grading وTeacher ownership وAdmin pages.",
      "التأكد أن Production ما فيها حتى Demo students/courses/lives/quizzes.",
      "من بعد الاستعمال الحقيقي، توثيق metrics وتجارب فعلية باش نطور هاد Case Study بنتائج قابلة للإثبات.",
    ],
    sourceUrl: "https://github.com/younesharti002-crypto/PROF-HARTI",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}

export function getCaseStudyForProject(projectSlug: string) {
  return caseStudies.find((caseStudy) => caseStudy.projectSlug === projectSlug);
}
