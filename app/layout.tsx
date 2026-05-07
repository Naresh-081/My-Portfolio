import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Naresh Vemula | Data Engineer",
  description: "Data Engineer specializing in ETL/ELT pipelines, real-time streaming, AWS, Snowflake, and AI/LLM integration.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} antialiased bg-[#020617] text-slate-200`}>
        {children}
      </body>
    </html>
  );
}
