import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";

const siteUrl = "https://younes-projects-growth.vercel.app";
const siteName = "Younes | مشاريع ونمو";
const siteDescription =
  "أنا يونس. كنوثق بناء مشاريع رقمية حقيقية باستعمال AI، وكنشارك تجارب النمو، التعلم والتطبيق: شنو خدم، شنو ما خدمش، وكيفاش كنعاود نبني.";
const instagramUrl = "https://www.instagram.com/younes.digital7/";
const linkedinUrl = "https://www.linkedin.com/in/younes-harti-4b20231b6/";
const whatsappUrl = "https://wa.me/212644344034";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteName,
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: "Younes", url: siteUrl }],
  creator: "Younes",
  publisher: "Younes",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_MA",
    url: "/",
    siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: "/assets/hero-ai.jpeg",
        alt: "Younes | مشاريع ونمو — مشاريع رقمية وAI وتجارب عملية",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/assets/hero-ai.jpeg"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07111f",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Younes",
      alternateName: siteName,
      url: siteUrl,
      telephone: "+212644344034",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Aïn Sebaâ, Casablanca",
        addressCountry: "MA",
      },
      sameAs: [instagramUrl, linkedinUrl],
      description: siteDescription,
      knowsAbout: [
        "بناء المشاريع الرقمية",
        "ريادة الأعمال",
        "الذكاء الاصطناعي للمشاريع",
        "النمو",
        "التعلم والتطبيق وتوثيق التجارب",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: siteDescription,
      inLanguage: "ar-MA",
      publisher: { "@id": `${siteUrl}/#person` },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar-MA" dir="rtl">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <div
          style={{
            position: "fixed",
            left: 18,
            bottom: 18,
            zIndex: 80,
            display: "flex",
            gap: 10,
            alignItems: "center",
          }}
        >
          <Link
            href="/contact"
            aria-label="صفحة التواصل"
            style={{
              padding: "10px 14px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,.18)",
              background: "rgba(7,17,31,.92)",
              color: "#f8fbff",
              fontWeight: 900,
              boxShadow: "0 12px 32px rgba(0,0,0,.3)",
              backdropFilter: "blur(12px)",
            }}
          >
            تواصل معي
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp +212 644 344 034"
            style={{
              display: "grid",
              placeItems: "center",
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: "#25D366",
              color: "#07111f",
              fontWeight: 900,
              boxShadow: "0 12px 32px rgba(0,0,0,.3)",
            }}
          >
            WA
          </a>
        </div>
      </body>
    </html>
  );
}
