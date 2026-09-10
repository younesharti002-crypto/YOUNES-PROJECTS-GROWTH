import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const title = "شكون أنا؟ | Younes | مشاريع ونمو";
const description =
  "قصة يونس من التعليم والعمل والتجربة في المشاريع إلى بناء مشاريع رقمية باستعمال الذكاء الاصطناعي، مع توثيق ما يتعلمه ويطبقه خطوة بخطوة.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    type: "profile",
    url: "/about",
    title,
    description,
    images: [{ url: "/assets/hero-ai.jpeg", alt: "Younes — مشاريع ونمو" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/hero-ai.jpeg"],
  },
};

const chapters = [
  {
    year: "2009 — 2017",
    title: "من السبورة بدات الحكاية",
    text: "من 2009 كنت كنعطي دروس الدعم، وأسست مدرسة الأحرار. سنوات وأنا كنشوف التلاميذ كيتقدمو، وكنتعلم كيفاش نعلّم، نسيّر ونبني مشروعاً عندو أثر. وبالتوازي، كنت إدارياً داخل Brink’s Maroc.",
    images: [
      ["/assets/teaching-new.jpeg", "يونس يشرح درساً على السبورة"],
      ["/assets/school-group.jpeg", "ذكرى جماعية من مرحلة مدرسة الأحرار"],
    ],
  },
  {
    year: "2017 — 2020",
    title: "القرار اللي بقي فيّ",
    text: "فـ2017 قلت مع راسي: باش ننجح، خاصني نركز على حاجة وحدة. وقفت مدرسة الأحرار واخترت المسار المهني داخل الشركة. القرار كان كيبان منطقياً، ولكن مع الوقت فهمت أنني تخليت على حاجة ناجحة بنيتها بيدي.",
    images: [["/assets/brinks-new.jpeg", "يونس خلال مرحلة العمل الإداري"]],
  },
  {
    year: "2020",
    title: "الاستقرار حتى هو ما كانش مضمون",
    text: "فـ2020 تعاودات هيكلة الشركة، ولقيت راسي خارجها. استثمرت تعويض نهاية الخدمة وفتحت مشروعاً للداند والوجبات السريعة. دخلت بالحلم كامل، ولكن من بعد ستة شهور تسدّ المشروع.",
    images: [
      ["/assets/shop-front.jpeg", "واجهة مشروع الداند والوجبات السريعة"],
      ["/assets/shop-display.jpeg", "منتجات مشروع المحل"],
    ],
  },
  {
    year: "من بعد المشروع",
    title: "ملي حسّيت أنني ضيّعت الطريق",
    text: "الخدمة ماشي عيب، ولكن الانتقال من أستاذ ومسيّر وإداري وصاحب مشروع إلى Magasinier كان قاسياً عليّ. ما كانش عندي حل جاهز؛ كان عندي غير قرار واحد: نقلب، نتعلم ونبدا من الزيرو.",
    images: [["/assets/warehouse.jpeg", "يونس خلال مرحلة العمل كمخزني"]],
  },
  {
    year: "اليوم",
    title: "ما لقيتش طريقاً مختصراً… لقيت بداية",
    text: "وأنا كنقلب فالإنترنت على مهارة نقدر نبني عليها مستقبلي، اكتشفت كيفاش نوظف الذكاء الاصطناعي فالمشاريع. ما بقيتش غير كنتفرج؛ بديت نطبق. وكان CLEANORA أول مشروع رجعت به للبناء.",
    images: [
      ["/assets/learning.jpeg", "يونس خلال مرحلة البحث والتعلم"],
      ["/assets/hero-ai.jpeg", "يونس يبني مشاريعه باستعمال الذكاء الاصطناعي"],
    ],
  },
] as const;

const siteUrl = "https://younes-projects-growth.vercel.app";
const profileData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: title,
  url: `${siteUrl}/about`,
  inLanguage: "ar-MA",
  mainEntity: {
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Younes",
    url: siteUrl,
  },
};

export default function AboutPage() {
  return (
    <main className="projects-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileData).replace(/</g, "\\u003c") }}
      />

      <header className="inner-header shell">
        <Link className="brand" href="/"><span className="brand-mark">Y</span><span>Younes | مشاريع ونمو</span></Link>
        <Link className="small-cta" href="/projects">المشاريع</Link>
      </header>

      <section className="shell project-detail-hero about-hero">
        <span className="eyebrow">بقلم Younes · تجربة شخصية موثقة</span>
        <h1>القصة اللي ورا<br />المشاريع.</h1>
        <p>أنا يونس. كنبني مشاريع رقمية، كنجرب، كنتعلم وكنوثق الطريق. ما عنديش قصة نجاح مكتملة نبيعها؛ عندي مراحل حقيقية، قرارات، أخطاء وبدايات جديدة هي اللي كتفسر علاش اليوم كنشارك شنو كنطبق وشنو كنتعلم.</p>
      </section>

      <section className="story-section section">
        <div className="shell">
          <div className="section-heading light-heading">
            <div><span className="kicker">المسار</span><h2>من التعليم للبناء من جديد</h2></div>
            <p>هاد الصفحة ماشي CV. هي توثيق للمراحل اللي شكلات الطريقة اللي كنشوف بها المشاريع اليوم: نتعلم، نطبق، نجرب، نصحح ونوثق.</p>
          </div>

          <p className="story-lead"><strong>البداية كانت فالتعليم والتسيير.</strong> من بعد جا قرار مهني، تجربة مشروع تسدّات، مرحلة إعادة بناء، ثم الرجوع للمشاريع باستعمال الأدوات الرقمية والذكاء الاصطناعي.</p>

          <div className="timeline">
            {chapters.map((chapter) => (
              <article className="chapter" key={chapter.year}>
                <div className={`chapter-images count-${chapter.images.length}`}>
                  {chapter.images.map(([src, alt]) => (
                    <div className="chapter-image" key={src}><Image src={src} alt={alt} fill sizes="(max-width: 900px) 100vw, 45vw" /></div>
                  ))}
                </div>
                <div className="chapter-copy"><span>{chapter.year}</span><h3>{chapter.title}</h3><p>{chapter.text}</p></div>
              </article>
            ))}
          </div>

          <blockquote className="truth">«اليوم ما كنبيعش ليك نجاحاً ما وصلتش ليه. كنشارك معاك الطريق كما هو: شنو تعلمت، شنو طبقت، فين غلطت، وكيفاش كنعاود نبني.»<small>Younes · كنتعلم · كنطبق · كنوثق النتائج</small></blockquote>
        </div>
      </section>

      <section className="shell final-cta">
        <span className="kicker">من القصة للتطبيق</span>
        <h2>شوف المشاريع اللي كنبني ونوثق</h2>
        <p>كل مشروع كيبين المشكل، الحل، المرحلة الحالية والدرس اللي خرج من التجربة بلا ادعاءات ولا نتائج مخترعة.</p>
        <Link className="primary-button" href="/projects">شوف جميع المشاريع</Link>
      </section>
    </main>
  );
}