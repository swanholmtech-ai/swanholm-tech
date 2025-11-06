import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavigationBar } from "@/components/view/NavigationBar";
import { DrawerBookDemo } from "@/components/view/book-a-demo/DrawerBookDemo";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { AuthProvider } from "@/components/AuthProvider";
// import Footer from "@/components/view/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Swanholm Technology",
  description: "Swanholm Technology Vest",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <AuthProvider>
        <NextIntlClientProvider>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <NavigationBar />
            <DrawerBookDemo />
            {children}
            {/* <Footer /> */}
          </body>
        </NextIntlClientProvider>
      </AuthProvider>
    </html>
  );
}
