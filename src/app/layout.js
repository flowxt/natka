import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Natka - La clef du bien-être",
  description:
    "Votre source pour une santé et un bien-être optimal à travers la réflexologie et d'autres thérapies naturelles.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
