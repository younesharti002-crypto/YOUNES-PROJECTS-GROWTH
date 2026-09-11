import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://younes-projects-growth.vercel.app";
const whatsappUrl = "https://wa.me/212644344034";
const instagramUrl = "https://www.instagram.com/younes.digital7/";
const linkedinUrl = "https://www.linkedin.com/in/younes-harti-4b20231b6/";

export const metadata: Metadata = {
  title: "تواصل معي | Younes | مشاريع ونمو",
  description:
    "تواصل مع Younes عبر WhatsApp أو Instagram أو LinkedIn. الموقع الرسمي: Younes | مشاريع ونمو — Casablanca, Aïn Sebaâ.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: "/contact",
    title: "تواصل معي | Younes | مشاريع ونمو",
    description: "WhatsApp، Instagram، LinkedIn والموقع الرسمي — Casablanca, Aïn Sebaâ.",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${siteUrl}/contact#contact`,
  url: `${siteUrl}/contact`,
  name: "تواصل مع Younes",
  inLanguage: "ar-MA",
  mainEntity: {
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Younes",
    telephone: "+212644344034",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Aïn Sebaâ, Casablanca",
      addressCountry: "MA",
    },
    sameAs: [instagramUrl, linkedinUrl],
  },
};

const contacts = [
  {
    label: "WhatsApp",
    value: "+212 644 344 034",
    href: whatsappUrl,
    note: "للتواصل المباشر بخصوص المشاريع والخدمات",
  },
  {
    label: "Instagram",
    value: "@younes.digital7",
    href: instagramUrl,
    note: "المحتوى، المشاريع والتجارب اليومية",
  },
  {
    label: "LinkedIn",
    value: "Younes Harti",
    href: linkedinUrl,
    note: "الملف المهني والمشاريع الرقمية",
  },
  {
    label: "الموقع الرسمي",
    value: "younes-projects-growth.vercel.app",
    href: siteUrl,
    note: "المشاريع، Case Studies وPLAN B",
  },
];

export default function ContactPage() {
  return (
    <main className="project-detail-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageSchema).replace(/</g, "\\u003c"),
        }}
      />

      <header className="inner-header shell">
        <Link className="brand" href="/">
          <span className="brand-mark">Y</span>
          <span>Younes | مشاريع ونمو</span>
        </Link>
        <Link className="small-cta" href="/projects">
          المشاريع
        </Link>
      </header>

      <section className="shell project-detail-hero">
        <span className="eyebrow">تواصل مباشر</span>
        <h1>تواصل معي.</h1>
        <p>
          عندك فكرة مشروع، منصة، موقع أو بغيتي نهضرو على النمو والتنفيذ؟ هادي هي
          قنوات التواصل الرسمية ديالي.
        </p>
        <div className="card-actions">
          <a className="primary-button" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            راسلني على WhatsApp ↗
          </a>
          <Link className="text-link" href="/about">
            شكون أنا؟
          </Link>
        </div>
      </section>

      <section className="shell section" style={{ paddingTop: 20 }}>
        <div className="project-detail-grid">
          {contacts.map((contact) => (
            <article key={contact.label}>
              <span>{contact.label}</span>
              <p style={{ marginBottom: 8, direction: contact.label === "WhatsApp" ? "ltr" : undefined }}>
                <a href={contact.href} target="_blank" rel="noopener noreferrer">
                  <strong>{contact.value}</strong>
                </a>
              </p>
              <small style={{ color: "var(--muted)" }}>{contact.note}</small>
            </article>
          ))}
          <article>
            <span>الموقع</span>
            <p><strong>Aïn Sebaâ · Casablanca · Maroc</strong></p>
            <small style={{ color: "var(--muted)" }}>الموقع الجغرافي العام للتواصل واللقاءات</small>
          </article>
        </div>
      </section>

      <section className="shell project-note">
        <strong>Carte Visite رقمية</strong>
        <p>
          هاد الصفحة هي المرجع الرسمي للمعلومات اللي غادي نستعملوها فـCarte Visite:
          WhatsApp، Instagram، LinkedIn، الموقع والموقع الجغرافي.
        </p>
      </section>
    </main>
  );
}
