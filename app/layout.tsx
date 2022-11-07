import "./globals.css";
import { Cabin } from "@next/font/google";
import Navbar from "../components/navbar";

const cabin = Cabin({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cabin.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-gray-800 text-white">
        <Navbar />
        <div id="page-top-spacer" className="h-12"></div>
        {children}
      </body>
    </html>
  );
}
