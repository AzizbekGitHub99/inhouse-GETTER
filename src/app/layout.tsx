import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import ChildrenType from "@/types/children";

import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/utils/headers";

const roboto = Roboto({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "InHouse | GETTER",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: ChildrenType) {

  return (
    <html lang="en">
      <body id="body" className={roboto.className}>
        <Header/>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
