import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pais De Pet",
  description: "Petshop em Candeias",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-pt-18 scroll-smooth" lang="pt-BR">
      <body className={``}>{children}</body>
    </html>
  );
}
