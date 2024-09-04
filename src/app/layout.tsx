import { SpeedInsights } from "@vercel/speed-insights/next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { Metadata } from "next";
import "./globals.css";
import { Cairo } from "next/font/google";
import Navbar from "@/components/UI/navbar";
import Footer from "@/components/UI/footer";

const cairo = Cairo({
  subsets: ["arabic", "latin"], // Specify the subset
  weight: ["300", "400"], // Specify weights if needed
});

export const metadata: Metadata = {
  title: "Regista Football Quizzes",
  description:
    "Compete against friends, improve your understanding of football history, tactics, and players, and see how well you know the sport!",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="auto">
      <body className={`scroll-smooth ${cairo.className}`}>
        <SpeedInsights />
        <ToastContainer />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
