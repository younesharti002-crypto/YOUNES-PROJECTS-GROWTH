import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://younes-projects-growth.vercel.app";
const siteName = "Younes | مشاريع ونمو";
const siteDescription =
  "أنا يونس. كنوثق بناء مشاريع رقمية حقيقية باستعمال AI، وكنشارك تجارب النمو، التعلم والتطبيق: شنو خدم، شنو ما خدمش، وكيفاش كنعاود نبني.";

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
      </body>
    </html>
  );
}
