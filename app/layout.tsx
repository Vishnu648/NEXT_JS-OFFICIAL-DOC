import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import styles from "./style.module.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: // phone
{
  children: React.ReactNode;
  // phone: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className={styles.container}>{children}</div>
        {/* {phone} */}
      </body>
    </html>
  );
}
