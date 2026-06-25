import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { Providers } from './providers';
import { ThemeProvider } from './components/ThemeProvider';
import ThemeToggle from './components/ThemeToggle';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NFT VOID — Art Born Between Human And Machine",
  description: "NFT VOID is a premium cyberpunk NFT gallery and digital art universe. Unique artworks inspired by animated characters and animals, created with AI by Mohammad Hossein Lamizadeh.",
  keywords: [
    "NFT", "NFT gallery", "cyberpunk NFT", "digital art", "crypto art",
    "AI art", "NFT collection", "blockchain art", "Mohammad Hossein Lamizadeh",
    "NFT VOID", "cyberpunk art", "animated NFT", "animal NFT"
  ],
  authors: [{ name: "Mohammad Hossein Lamizadeh" }],
  creator: "Mohammad Hossein Lamizadeh",
  publisher: "NFT VOID",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "NFT VOID — Art Born Between Human And Machine",
    description: "A premium cyberpunk NFT gallery. Unique digital artworks created with AI.",
    url: "https://nft-void.vercel.app",
    siteName: "NFT VOID",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "NFT VOID — Art Born Between Human And Machine",
    description: "A premium cyberpunk NFT gallery. Unique digital artworks created with AI.",
    creator: "@Mamad_12345",
  },
  alternates: {
    canonical: "https://nft-void.vercel.app",
  },
  verification: {
    google: "sLljAdYYX7mmUC-sa1RbZOAwLGU45eCjUfrtosiunXk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml"/>
        <meta name="theme-color" content="#3b0764"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
        <Providers>
          <ThemeProvider>
            {children}
            <ThemeToggle />
          </ThemeProvider>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}