import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata = {
  title:
    "Natka - La clef du bien-être à Eteaux | Réflexologie près de La Roche sur Foron",
  description:
    "Centre de bien-être à Eteaux, proche de La Roche sur Foron, Bonneville, Saint-Pierre-en-Faucigny et Thorens-Glières. Soins personnalisés: réflexologie plantaire, magnétisme, Chi Nei Tsang et drainage lymphatique pour votre équilibre et santé.",
  keywords:
    "réflexologie, magnétisme, bien-être, Chi Nei Tsang, drainage lymphatique, Eteaux, La Roche sur Foron, Bonneville, Saint-Pierre-en-Faucigny, Thorens-Glières, Cruseilles, Reignier, Annecy, Haute-Savoie",
  robots: "index, follow",
  canonical: "https://www.natkalaclefdubienetre.fr",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.natkalaclefdubienetre.fr",
    title:
      "Natka - La clef du bien-être à Eteaux | Centre de réflexologie en Haute-Savoie",
    description:
      "Découvrez nos soins de bien-être personnalisés à Eteaux: réflexologie plantaire, magnétisme, Chi Nei Tsang et drainage lymphatique. Desservant La Roche sur Foron, Bonneville, Saint-Pierre-en-Faucigny et toute la Haute-Savoie.",
    images: [
      {
        url: "/image/background-natka2.jpg",
        width: 1200,
        height: 630,
        alt: "Natka - La clef du bien-être",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Natka - La clef du bien-être à Eteaux",
    description:
      "Centre de bien-être et réflexologie près de La Roche sur Foron, Bonneville et Saint-Pierre-en-Faucigny. Soins personnalisés pour votre équilibre et santé.",
    images: ["/image/background-natka2.jpg"],
  },
  alternates: {
    canonical: "https://www.natkalaclefdubienetre.fr",
  },
  verification: {
    google: "à-remplir-si-disponible",
  },
  metadataBase: new URL("https://www.natkalaclefdubienetre.fr"),
  icons: {
    icon: [
      {
        url: "/favicon-natka/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-natka/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut: "/favicon-natka/favicon.ico",
    apple: "/favicon-natka/apple-touch-icon.png",
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/favicon-natka/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/favicon-natka/android-chrome-512x512.png",
      },
      {
        rel: "manifest",
        url: "/favicon-natka/site.webmanifest",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta name="geo.region" content="FR-74" />
        <meta name="geo.placename" content="Eteaux" />
        <meta name="geo.position" content="46.108;6.325" />
        <meta name="ICBM" content="46.108, 6.325" />
      </head>
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
