import { Geist, Inter, Playfair_Display, } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import WhatsAppButton from "@/components/packagess/WhatsAppButton";
import ClientLayout from "./ClintLayout";

export const metadata = {
  metadataBase: new URL("https://everestyatra.com"),

  title: {
    default: "Everest Yatra  | Luxury Trekking & Tours in Nepal",
    template: "%s | Everestyatra Nepal",
  },

  description:
    "Everest Yatra offers luxury trekking, curated Himalayan journeys, and authentic travel experiences across Nepal with local experts.",
     icon: "/Flag.svg",   

  keywords: [
    "Nepal trekking Packages",
    "Everest Base Camp Trek",
    "Luxury Nepal tours",
    "Annapurna trekking",
    "travel to Nepal",
  ],

  authors: [{ name: "Everestyatra Nepal" }],
  creator: "Everestyatra Nepal",
  publisher: "Everestyatra Nepal",

  openGraph: {
    title: "EverestYatra  | Luxury Himalayan Journeys",
    description:
      "Discover trekking, luxury tours & Himalayan adventures in Nepal with trusted local experts.",
    url: "https://www.everestyatra.com",
    siteName: "Everest Yatra",
    images: [
      {
        url: "/og/home.png",
        width: 1200,
        height: 630,
        alt: "Everest yatra Himalayan Adventure",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Everestyatra  | Luxury Himalayan Trekking & Tours",
    description:
      "Luxury Himalayan treks and curated journeys across Nepal.",
    images: ["/og/home.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};


const geist = Geist({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});



const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}
        className={`${geist.className} ${inter.variable} ${playfair.variable} bg-black text-white overflow-x-hidden`}
      >
        <ClientLayout>
          <Navbar />
          {children}
          <Footer />
          <WhatsAppButton />
        </ClientLayout>
      </body>
    </html>
  );
}
