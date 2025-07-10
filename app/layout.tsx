import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Gomes | Front-end",
  description: "Desenvolvedor React com foco em mobile first",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body >
        {children}
      </body>
    </html>
  );
}
