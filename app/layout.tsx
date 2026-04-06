import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

export const metadata: Metadata = {
  metadataBase: new URL("https://liveaction-studio.pages.dev"),
  title: {
    default: "Live Action Studio",
    template: "%s | Live Action Studio"
  },
  description:
    "A cinematic live action showcase built for bold visual storytelling, campaign launches, and production-led brand presence.",
  openGraph: {
    title: "Live Action Studio",
    description:
      "A cinematic live action showcase built for bold visual storytelling, campaign launches, and production-led brand presence.",
    url: "https://liveaction-studio.pages.dev",
    siteName: "Live Action Studio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Action Studio",
    description:
      "A cinematic live action showcase built for bold visual storytelling, campaign launches, and production-led brand presence."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-fog antialiased">
        <div className="min-h-screen bg-hero-radial">
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
