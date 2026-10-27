import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://muhammad-wahyu-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Muhammad Wahyu Anggana | Web Developer & Application Support",
    template: "%s | Muhammad Wahyu Anggana",
  },
  description:
    "Portfolio resmi Muhammad Wahyu Anggana, Web Developer & Application Support dari Semarang. Berpengalaman dengan Next.js, Supabase, pengembangan sistem web, pengelolaan data digital, dan IT support.",
  applicationName: "Portfolio Muhammad Wahyu Anggana",
  authors: [{ name: "Muhammad Wahyu Anggana", url: siteUrl }],
  creator: "Muhammad Wahyu Anggana",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Muhammad Wahyu Anggana | Web Developer & Application Support",
    description:
      "Portfolio resmi Muhammad Wahyu Anggana — Web Developer & Application Support dari Semarang, Indonesia.",
    url: siteUrl,
    siteName: "Muhammad Wahyu Anggana",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Muhammad Wahyu Anggana | Web Developer & Application Support",
    description:
      "Portfolio resmi Muhammad Wahyu Anggana — Web Developer & Application Support dari Semarang, Indonesia.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: siteUrl,
  name: "Muhammad Wahyu Anggana — Portfolio",
  mainEntity: {
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Muhammad Wahyu Anggana",
    url: siteUrl,
    image: `${siteUrl}/images/profile.png`,
    jobTitle: "Web Developer & Application Support",
    description:
      "Fresh graduate S1 Informatika dengan pengalaman pengembangan website, sistem informasi, application support, pengelolaan data digital, dan IT support.",
    homeLocation: {
      "@type": "Place",
      name: "Semarang, Jawa Tengah, Indonesia",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universitas Muhammadiyah Semarang",
    },
    sameAs: [
      "https://github.com/MuhammadWahyuAnggana",
      "https://www.linkedin.com/in/muhammad-wahyu-anggana-3b8120337/",
      "https://www.instagram.com/wahyuangganaaa/",
    ],
    knowsAbout: [
      "Web Development",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Supabase",
      "Application Support",
      "IT Support",
      "Network Monitoring",
      "Zabbix",
      "Grafana",
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
