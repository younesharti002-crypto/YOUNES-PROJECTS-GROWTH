import type { Metadata } from "next";
import PlatformExperience from "./platform-experience";

const title = "التجربة المجانية | PLAN B";
const description =
  "مسار PLAN B عملي لترتيب فكرة مشروعك: جرد المهارات والتجارب، اختيار مشكل واضح، بناء عرض صغير، ثم اختبار الفكرة بخطوات قابلة للتطبيق.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/platform" },
  openGraph: {
    type: "website",
    url: "/platform",
    title,
    description,
    images: [
      {
        url: "/assets/hero-ai.jpeg",
        alt: "PLAN B — تجربة عملية لبداية مشروع رقمي",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/hero-ai.jpeg"],
  },
};

export default function PlatformPage() {
  return <PlatformExperience />;
}
