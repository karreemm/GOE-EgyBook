import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { AuthProvider } from "./_context/AuthContext";
import Nav from "./_components/Navbar/Nav";
import Footer from "./_components/Footer";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "GOE EgyBook",
  description: "Tell us where you want to stay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} bg-theme-black text-white`}>
        <AuthProvider>
          <div className="flex flex-col min-h-screen">
            <Nav />
            <main className="mt-24">
              {children}
            </main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}