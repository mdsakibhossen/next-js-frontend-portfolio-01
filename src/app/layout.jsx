import { Ubuntu } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const ubuntu = Ubuntu({ subsets: ["latin"],weight:["300","400","500","700"] });

export const metadata = {
  title: "Home | SinanTokmak",
  description: "It is a Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntu.className} suppressHydrationWarning>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
