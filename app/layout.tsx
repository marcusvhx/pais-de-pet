import type { Metadata } from "next";
import "./globals.css";
import { CookiesProvider } from "next-client-cookies/server";

export const metadata: Metadata = {
  title: "Pais De Pet",
  description: "Petshop em Candeias",
  icons: "/favicon/logo-pais-de-pet.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CookiesProvider>
      <html className="scroll-pt-16 scroll-smooth scroll-hidden" lang="pt-BR">
        <body className={``}>{children}</body>
      </html>
    </CookiesProvider>
  );
}
