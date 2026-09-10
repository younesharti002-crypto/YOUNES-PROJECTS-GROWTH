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
        <p>هنا كنوثق الفكرة، المشكل، الحل والمرحلة الحالية ديال كل مشروع. التفاصيل كتزاد مع تقدم العمل والنتائج.</p>
      </section>
      <section className="shell projects-grid" aria-label="لائحة المشاريع">
        {projects.map((project, index) => (
          <article className="project-card" key={project.slug}>
            <div className="project-card-top"><span>{String(index + 1).padStart(2, "0")}</span><small>{project.category}</small></div>
            <h2>{project.name}</h2>
            <p>{project.summary}</p>
            <div className="project-status">{project.status}</div>
            <Link href={`/projects/${project.slug}`}>شوف تفاصيل المشروع ←</Link>
          </article>
        ))}
      </section>
      <section className="shell directory-cta"><h2>بغيتي تبدأ المشروع ديالك؟</h2><p>PLAN B كيبدا من معلوماتك وكيعاونك ترتب أول خطوة.</p><Link className="primary-button" href="/platform">بدا التجربة المجانية</Link></section>
    </main>
  );
}
