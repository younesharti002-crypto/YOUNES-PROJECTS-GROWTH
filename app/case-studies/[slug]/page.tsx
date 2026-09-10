import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";

const siteUrl = "https://younes-projects-growth.vercel.app";
type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) return {};

  const canonical = `/case-studies/${caseStudy.slug}`;
  return {
    title: `${caseStudy.name} Case Study | Younes`,
    description: caseStudy.summary,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      title: caseStudy.title,
      description: caseStudy.summary,
      images: [
        {
          url: "/assets/hero-ai.jpeg",
          alt: `${caseStudy.name} — Case Study موثقة ضمن Younes | مشاريع ونمو`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: caseStudy.title,
      description: caseStudy.summary,
      images: ["/assets/hero-ai.jpeg"],
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) notFound();

  const url = `${siteUrl}/case-studies/${caseStudy.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: caseStudy.title,
        description: caseStudy.summary,
        inLanguage: "ar-MA",
        author: { "@id": `${siteUrl}/#person` },
        about: {
          "@type": "SoftwareApplication",
          name: caseStudy.name,
          applicationCategory: "EducationalApplication",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Younes | مشاريع ونمو", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "المشاريع", item: `${siteUrl}/projects` },
          { "@type": "ListItem", position: 3, name: caseStudy.name, item: `${siteUrl}/projects/${caseStudy.projectSlug}` },
          { "@type": "ListItem", position: 4, name: "Case Study", item: url },
        ],
      },
    ],
  };

  return (
    <main className="project-detail-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />

      <header className="inner-header shell">
        <Link className="brand" href="/"><span className="brand-mark">Y</span><span>Younes | مشاريع ونمو</span></Link>
        <Link className="small-cta" href={`/projects/${caseStudy.projectSlug}`}>صفحة المشروع</Link>
      </header>

      <section className="shell project-detail-hero">
        <span className="eyebrow">Case Study · مشروع حقيقي موثق</span>
        <h1>{caseStudy.name}</h1>
        <p>{caseStudy.summary}</p>
        <div className="card-actions">
          <Link className="primary-button" href={`/projects/${caseStudy.projectSlug}`}>رجع لصفحة المشروع</Link>
          <a className="text-link" href={caseStudy.sourceUrl} target="_blank" rel="noopener noreferrer">شوف المصدر التقني على GitHub ↗</a>
        </div>
      </section>

      <section className="shell section">
        <div className="section-heading">
          <div><span className="kicker">01 — السياق</span><h2>علاش تبنات هاد المنصة؟</h2></div>
          <p>{caseStudy.context}</p>
        </div>
        <div className="project-detail-grid">
          <article><span>المشكل</span><p>{caseStudy.problem}</p></article>
          <article><span>الفئة المستهدفة</span><p>{caseStudy.audience}</p></article>
          <article><span>الحل</span><p>{caseStudy.solution}</p></article>
          <article><span>الحالة الموثقة</span><p>{caseStudy.status}</p></article>
        </div>
      </section>

      <section className="shell section">
        <div className="section-heading">
          <div><span className="kicker">02 — Build</span><h2>شنو تبنى فعلياً؟</h2></div>
          <p>هاد اللائحة مبنية على الـmodules الموثقة فـRepository ديال PROF HARTI، وما كتضيف حتى Result تجاري أو تعليمي ما عندناش عليه دليل.</p>
        </div>
        <div className="work-grid">
          {caseStudy.built.map((item, index) => (
            <article key={item}><span>{String(index + 1).padStart(2, "0")}</span><h3>{index === 0 ? "النواة" : `جزء ${index + 1}`}</h3><p>{item}</p></article>
          ))}
        </div>
      </section>

      <section className="shell section">
        <div className="section-heading">
          <div><span className="kicker">03 — Journeys</span><h2>كيفاش كيدوز الاستعمال؟</h2></div>
          <p>بناء المنصة بدا من المسارات الأساسية للمستخدمين: التلميذ، الأستاذ والإدارة.</p>
        </div>
        <div className="project-detail-grid">
          {caseStudy.workflows.map((workflow) => (
            <article key={workflow.title}><span>{workflow.title}</span><p>{workflow.flow}</p></article>
          ))}
        </div>
      </section>

      <section className="shell section">
        <div className="section-heading">
          <div><span className="kicker">04 — Stack</span><h2>الأدوات والتقنيات</h2></div>
          <p>الـStack موثقة فالمصدر التقني الحالي للمشروع.</p>
        </div>
        <div className="rhythm-grid">
          {caseStudy.stack.map((item) => <div key={item}><b>{item}</b><span>جزء من الـCore التقنية</span></div>)}
        </div>
      </section>

      <section className="shell section">
        <div className="section-heading">
          <div><span className="kicker">05 — Verification</span><h2>شنو نقدروا نقولو بثقة؟</h2></div>
          <p>كنفرقو هنا بين تنفيذ الـProduct وبين النتائج اللي خاصها استعمال وقياس حقيقي.</p>
        </div>
        <div className="project-detail-grid">
          {caseStudy.verified.map((item) => <article key={item}><span>موثق</span><p>{item}</p></article>)}
        </div>
      </section>

      <section className="shell section">
        <div className="section-heading">
          <div><span className="kicker">06 — بدون ادعاءات</span><h2>شنو مازال ما ندعيوش؟</h2></div>
          <p>هاد الجزء مهم فطريقة التوثيق ديالي: إذا النتيجة ما تقاستش أو ما توثقاتش، ما كنحولهاش لقصة نجاح.</p>
        </div>
        <div className="project-detail-grid">
          {caseStudy.notClaimed.map((item) => <article key={item}><span>خاص التحقق</span><p>{item}</p></article>)}
        </div>
      </section>

      <section className="shell section">
        <div className="section-heading">
          <div><span className="kicker">07 — Lessons</span><h2>شنو تعلمت من المشروع؟</h2></div>
          <p>الدروس هنا مرتبطة بطريقة بناء المنتج، ماشي بأرقام نجاح مازال ما توثقاتش.</p>
        </div>
        <div className="work-grid">
          {caseStudy.lessons.map((item, index) => (
            <article key={item}><span>{String(index + 1).padStart(2, "0")}</span><h3>درس {index + 1}</h3><p>{item}</p></article>
          ))}
        </div>
      </section>

      <section className="shell section">
        <div className="section-heading">
          <div><span className="kicker">08 — Next Step</span><h2>شنو الخطوة الجاية؟</h2></div>
          <p>المرحلة الجاية ماشي إضافة Features عشوائياً؛ هي Release validation حقيقية ثم استعمال حقيقي وتوثيق النتائج.</p>
        </div>
        <div className="project-detail-grid">
          {caseStudy.nextSteps.map((item) => <article key={item}><span>التالي</span><p>{item}</p></article>)}
        </div>
      </section>

      <section className="shell project-note">
        <strong>قاعدة التوثيق</strong>
        <p>هاد الـCase Study غادي تتحدّث غير منين تكون عندنا معلومات جديدة موثقة من المشروع: اختبارات Release، استعمال حقيقي، Screenshots أو Metrics قابلة للإثبات.</p>
      </section>
    </main>
  );
}
