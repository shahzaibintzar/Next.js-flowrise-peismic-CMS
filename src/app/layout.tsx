import type { Metadata } from "next";
import { Nunito,Nunito_Sans } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import { createClient } from "@/prismicio";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

const setting = await client.getSingle("setting");

  return {
    title: setting.data.site_title || "Flowries fallback",
    description: setting.data.meta_description || "Flowries is the relaxing app for ypu.",
    openGraph: {
      images: [setting.data.image.url || ""],
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
       <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
