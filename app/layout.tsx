import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Younes | مشاريع ونمو",
  description: "رحلة يونس ومنصة PLAN B: استشارة عملية، تقرير شخصي ومسارات لبناء المشاريع والنمو.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl"><body>{children}</body></html>;
}
