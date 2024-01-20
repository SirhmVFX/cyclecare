import { Outfit } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "CycleCare",
  description: "An all in one app for ladies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Head>
          <link rel="icon" href="/ico.png" />
        </Head>
        {children}
      </body>
    </html>
  );
}
