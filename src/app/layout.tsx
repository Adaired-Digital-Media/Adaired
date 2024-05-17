import type { Metadata } from "next";
import { Nunito_Sans, DM_Serif_Display, Oooh_Baby } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar/Navbar";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { ReCaptchaProvider } from "next-recaptcha-v3";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito",
});
const dm = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm",
});
const baby = Oooh_Baby({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-baby",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adaired.com"),
  title: "Digital Marketing Agency for Online Growth | Adaired Digital",
  description:
    "Adaired Digital Media is your all-in-one digital marketing agency. Transform your business into a brand with - SEO, PPC, social media, web design services, etc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta
          name="google-site-verification"
          content="IbErkjWfX4xDEzZjtgtMruxBWkCYRs6n19e55PaEtLw"
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5ZWYZ5BF47"
        />
        <Script id="google-analytics">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-5ZWYZ5BF47');
  `}
        </Script>
      </head>
      <body
        id="root"
        className={cn(
          "relative h-full antialiased",
          dm.variable,
          nunito.variable,
          baby.variable
        )}
      >
        <ReCaptchaProvider reCaptchaKey="6Ldc49cpAAAAAPihLfrXDvYhtRKnwZAiKihVICxf">
          <main>
            <Navbar />
            {children}
            <Footer />
          </main>
        </ReCaptchaProvider>
        <Toaster />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
