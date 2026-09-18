import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { settings } from "@/lib/settings";

const THEME_INIT_SCRIPT = `
  try {
    var t = localStorage.getItem('fw-theme');
    if (t === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
  } catch (e) {}
`;

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fixworldglobal.com"),
  title: {
    default: `${settings.companyName} — Engineering, Technology & Solutions`,
    template: `%s — ${settings.companyName}`,
  },
  description:
    "Fixworld Global Limited designs, builds and delivers smart home, solar, security and engineering solutions. We don't just install solutions — we engineer them.",
  openGraph: {
    title: `${settings.companyName} — Engineering, Technology & Solutions`,
    description:
      "We don't just install solutions. We engineer them. Explore Fixworld's projects, products and engineering capability.",
    siteName: settings.companyName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${settings.companyName} — Engineering, Technology & Solutions`,
    description: "We don't just install solutions. We engineer them.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-paper">
        <Script id="theme-init" strategy="beforeInteractive">
          {THEME_INIT_SCRIPT}
        </Script>
        {children}
      </body>
    </html>
  );
}
