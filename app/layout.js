import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { site } from "@/data/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

const description =
  "Trims & Tones is a premium saloon and spa in Batha Town, Karachi. Royal haircuts, beard grooming, hydra and derma facials, manicure and pedicure, massage and Silver Membership.";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Trims & Tones | Premium Saloon & Spa in Karachi",
    template: "%s | Trims & Tones",
  },
  description,
  applicationName: site.name,
  keywords: [
    "salon in Karachi",
    "saloon Karachi",
    "men's haircut Karachi",
    "beard grooming Karachi",
    "hydra facial Karachi",
    "spa Karachi",
    "Batha Town salon",
    "Trims & Tones",
    "premium saloon and spa",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "/",
    siteName: site.name,
    title: "Trims & Tones | Premium Saloon & Spa in Karachi",
    description,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Trims & Tones Premium Saloon & Spa" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trims & Tones | Premium Saloon & Spa in Karachi",
    description,
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  icons: { icon: "/icon.png", apple: "/icon.png" },
  formatDetection: { telephone: true },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["HairSalon", "BeautySalon", "LocalBusiness"],
  name: site.name,
  description,
  url: site.url,
  image: `${site.url}/og.jpg`,
  logo: `${site.url}/logo.png`,
  telephone: "+923346663792",
  email: site.email,
  priceRange: "Rs. 540 - Rs. 14,999",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: "Sindh",
    addressCountry: "PK",
  },
  areaServed: "Karachi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <noscript><style>{"[data-reveal],[data-stagger]>*{opacity:1!important}"}</style></noscript>
        <ScrollReveal />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
