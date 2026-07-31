import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { seoKeywords } from "@/lib/seo-keywords";
import { siteEmail, linkedInUrl, facebookUrl, sitePhoneE164 } from "@/lib/contact-info";
import { getSiteUrl } from "@/lib/site-url";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const siteUrl = getSiteUrl();

const defaultTitle =
  "Meta Tronix | Product Engineering & Digital Transformation";
const defaultDescription =
  "Meta Tronix is a Nepal-based product engineering company. We build scalable web and mobile products, SaaS platforms, CRM systems, and cloud-native solutions.";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Meta Tronix",
  },
  description: defaultDescription,
  keywords: seoKeywords,
  icons: {
    icon: [{ url: "/metatronixlogo.png", type: "image/png" }],
    apple: [{ url: "/metatronixlogo.png", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Meta Tronix",
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredDataJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${siteUrl}/#organization`,
      name: "Meta Tronix",
      url: siteUrl,
      logo: `${siteUrl}/metatronixlogo.png`,
      email: siteEmail,
      telephone: sitePhoneE164,
      sameAs: [linkedInUrl, facebookUrl],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kathmandu",
        addressRegion: "Bagmati Province",
        addressCountry: "NP",
      },
      areaServed: [
        { "@type": "Country", name: "Nepal" },
        { "@type": "Place", name: "Worldwide (remote delivery)" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Meta Tronix",
      url: siteUrl,
      inLanguage: "en-US",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${plusJakarta.variable} font-sans min-h-screen flex flex-col bg-white text-brand-body`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredDataJsonLd),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
