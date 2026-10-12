import type { Metadata, Viewport } from "next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#4f378a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "NetSol Services · High-Performance Web Hosting, VPS, Cloud & RDP Servers",
  description: "Scalable enterprise web hosting, ultra-fast NVMe VPS, dedicated Windows RDP, cloud servers and business email hosting with 24/7 expert support.",
  icons: {
    icon: "/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                darkMode: "class",
                theme: {
                  extend: {
                    colors: {
                      "primary": "#4f378a",
                      "primary-container": "#6750a4",
                      "on-primary": "#ffffff",
                      "on-primary-container": "#e0d2ff",
                      "primary-fixed": "#e9ddff",
                      "primary-fixed-dim": "#cfbcff",
                      "on-primary-fixed": "#22005d",
                      "on-primary-fixed-variant": "#4f378a",
                      "inverse-primary": "#cfbcff",
                      "secondary": "#63597c",
                      "secondary-container": "#e1d4fd",
                      "on-secondary": "#ffffff",
                      "on-secondary-container": "#645a7d",
                      "secondary-fixed": "#e9ddff",
                      "secondary-fixed-dim": "#cdc0e9",
                      "on-secondary-fixed": "#1f1635",
                      "on-secondary-fixed-variant": "#4b4263",
                      "tertiary": "#765b00",
                      "tertiary-container": "#c9a74d",
                      "on-tertiary": "#ffffff",
                      "on-tertiary-container": "#503d00",
                      "tertiary-fixed": "#ffdf93",
                      "tertiary-fixed-dim": "#e7c365",
                      "on-tertiary-fixed": "#241a00",
                      "on-tertiary-fixed-variant": "#594400",
                      "surface": "#fdf7ff",
                      "on-surface": "#1d1b20",
                      "surface-variant": "#e6e0e9",
                      "on-surface-variant": "#494551",
                      "surface-container-lowest": "#ffffff",
                      "surface-container-low": "#f8f2fa",
                      "surface-container": "#f2ecf4",
                      "surface-container-high": "#ece6ee",
                      "surface-container-highest": "#e6e0e9",
                      "surface-dim": "#ded8e0",
                      "surface-bright": "#fdf7ff",
                      "surface-tint": "#6750a4",
                      "inverse-surface": "#322f35",
                      "inverse-on-surface": "#f5eff7",
                      "background": "#fdf7ff",
                      "on-background": "#1d1b20",
                      "outline": "#7a7582",
                      "outline-variant": "#cbc4d2",
                      "error": "#ba1a1a",
                      "error-container": "#ffdad6",
                      "on-error": "#ffffff",
                      "on-error-container": "#93000a"
                    },
                    borderRadius: {
                      "DEFAULT": "0.125rem",
                      "lg": "0.25rem",
                      "xl": "0.5rem",
                      "full": "0.75rem"
                    },
                    fontFamily: {
                      "headline": ["'Public Sans'", "sans-serif"],
                      "display": ["'Public Sans'", "sans-serif"],
                      "body": ["'Public Sans'", "sans-serif"],
                      "label": ["'Public Sans'", "sans-serif"]
                    }
                  }
                }
              };
            `,
          }}
        />
      </head>
      <body className="bg-surface text-on-surface font-body min-h-screen flex flex-col selection:bg-primary selection:text-white">
        <Navbar />
        <div className="flex-1 w-full pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
