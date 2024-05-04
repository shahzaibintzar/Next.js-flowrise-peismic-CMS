// import Image from "next/image";

// export default function Home() {
//   return (
//     <main className="">
//      <h1 className="font-body text-5xl">Hello world!!</h1>
//     </main>
//   );
// }
import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
// import { components } from "@/slices";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("homepage");



  return <div className="text-red-800">HomePage !</div>

  // return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
