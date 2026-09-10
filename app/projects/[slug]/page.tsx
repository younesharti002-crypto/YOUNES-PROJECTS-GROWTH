import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const title = `${project.name} | مشاريع يونس`;
  const canonical = `/projects/${project.slug}`;

  return {
    title,
    description: project.summary,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description: project.summary,
      images: [
        {
          url: "/assets/hero-ai.jpeg",
          alt: `${project.name} — مشروع موثق ضمن Younes | مشاريع ونمو`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.summary,
      images: ["/assets/hero-ai.jpeg"],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const details = [
    ["المشكل", project.problem],
    ["الفئة المستهدفة", project.audience],
    ["الحل", project.solution],
    ["المرحلة الحالية", project.status],
    ["الدرس", project.lesson],
  ];

  return (
    <main className="project-detail-page">
      <header className="inner-header shell">
        <Link className="brand" href="/"><span className="brand-mark">Y</span><span>Younes | مشاريع ونمو</span></Link>
        <Link className="small-cta" href="/projects">جميع المشاريع</Link>
      </header>
      <section className="shell project-detail-hero">
        <span className="eyebrow">{project.category}</span>
        <h1>{project.name}</h1>
        <p>{project.summary}</p>
        {project.url && <a className="primary-button" href={project.url} target="_blank" rel="noopener noreferrer">فتح المشروع ↗</a>}
      </section>
      <section className="shell project-detail-grid">
        {details.map(([label, value]) => <article key={label}><span>{label}</span><p>{value}</p></article>)}
      </section>
      <section className="shell project-note"><strong>ملاحظة التوثيق</strong><p>هاد الصفحة كتتعمر وتتحدّث مع تقدم المشروع. النتائج، الصور والفيديوهات غادي يتزادو منين يكونو موثقين.</p></section>
    </main>
  );
}
