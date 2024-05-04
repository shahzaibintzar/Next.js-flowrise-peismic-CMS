import type { Metadata } from "next";
import { Nunito,Nunito_Sans } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import { createClient } from "@/prismicio";

const nunito = Nunito({ 
  subsets: ["latin"] ,
  variable: '--font-nunito',
  display: 'swap'

});
const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  display: "swap",
});

 
export async function generateMetadata(): Promise<Metadata> {
const client = createClient();

const page = await client.getSingle("setting");

  return {
    title: page.data.site_title || "Flowries fallback",
    description: page.data.meta_description || "Flowries is the relaxing app for ypu.",
    openGraph: {
      images: [page.data.image.url || ""],
    },
  };
}
 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(nunito.variable , nunitoSans.variable)}>
      <body>
        <header>Header!</header>
        {children}
        <footer>Footer!</footer>
        </body>
    </html>
  );
}
