import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/projects";

const title = "المشاريع | Younes";
const description =
  "مشاريع يونس الرقمية والتعليمية وتجارب البناء والنمو: الفكرة، المشكل، الحل، المرحلة الحالية والدروس العملية من كل مشروع.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/projects" },
  openGraph: {
    type: "website",
    url: "/projects",
    title: "المشاريع | Younes | مشاريع ونمو",
    description,
    images: [
      {
        url: "/assets/hero-ai.jpeg",
        alt: "مشاريع Younes الرقمية وتجارب البناء والنمو",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "المشاريع | Younes | مشاريع ونمو",
    description,
    images: ["/assets/hero-ai.jpeg"],
  },
};

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <header className="inner-header shell">
        <Link className="brand" href="/"><span className="brand-mark">Y</span><span>Younes | مشاريع ونمو</span></Link>
        <Link className="small-cta" href="/platform">دخول المنصة</Link>
      </header>
      <section className="shell projects-hero">
        <span className="eyebrow">مشاريع حقيقية · مراحل موثقة</span>
        <h1>كل المشاريع<br /><span>فمكان واحد.</span></h1>
        <p>هنا كنوثق شنو كنبني فعلاً: المشكل اللي كنحاول نحل، الحل اللي كنختبر، المرحلة اللي وصل ليها المشروع، والدرس اللي خرج من التجربة. النتائج كتزاد غير منين تكون موثقة.</p>
      </section>
      <section className="shell projects-grid" aria-label="لائحة المشاريع">
        {projects.map((project, index) => (
          <article className="project-card" key={project.slug}>
            <div className="project-card-top"><span>{String(index + 1).padStart(2, "0")}</span><small>{project.category}</small></div>
            <h2>{project.name}</h2>
            <p>{project.summary}</p>
            <div className="project-card-facts">
              <p><strong>المشكل:</strong> {project.problem}</p>
              <p><strong>الحل:</strong> {project.solution}</p>
              <p><strong>الدرس:</strong> {project.lesson}</p>
            </div>
            <div className="project-status">{project.status}</div>
            <Link href={`/projects/${project.slug}`}>شوف تفاصيل المشروع ←</Link>
          </article>
        ))}
      </section>
      <section className="shell directory-cta">
        <span className="kicker">التوثيق قبل الادعاء</span>
        <h2>كل مشروع كيتطور مع التجربة</h2>
        <p>منين كتتوثق تجربة جديدة، مشكل، تصحيح أو نتيجة حقيقية، كتزاد فصفحة المشروع. الهدف هو تشوف المسار كما هو، ماشي غير النسخة النهائية.</p>
        <div className="card-actions directory-actions">
          <Link className="primary-button" href="/about">تعرف على Younes</Link>
          <Link className="text-link" href="/platform">جرب PLAN B ←</Link>
        </div>
      </section>
    </main>
  );
}