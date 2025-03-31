import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Resume Builder",
  description: "A modern resume builder application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </head>
      <body className={`${inter.variable} font-sans antialiased min-h-screen bg-gradient-to-b from-slate-50 to-slate-100/80`}>
        <div className="flex flex-col min-h-screen pb-16 lg:pb-0">
          <NavBar />
          <main className="container mx-auto px-4 py-6 md:py-8 flex-grow">
            {children}
          </main>
          <footer className="hidden lg:block py-4 bg-slate-900 text-slate-400 text-sm text-center">
            <div className="container mx-auto">
              <p>© {new Date().getFullYear()} Resume Builder — Built with Next.js and TailwindCSS</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
