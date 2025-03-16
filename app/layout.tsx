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
    <html lang="en">
      <body className={`pb-2`}>{children}</body>
    </html>
  );
}
