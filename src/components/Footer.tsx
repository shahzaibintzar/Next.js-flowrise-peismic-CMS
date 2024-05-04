import { createClient } from "@/prismicio";
import { PrismicLink } from "@prismicio/react";
import Link from "next/link";


export default async function Footer(){
    const client = createClient();

    const setting = await client.getSingle("setting");
    return (
      <footer>
        <Link href={"/"}>{setting.data.meta_description}</Link>
        <p>
          @{new Date().getFullYear()} {setting.data.meta_description}
        </p>
        <ul>
          {setting.data.navigation.map(({ link, label }) => (
            <li key={label}>
              <PrismicLink field={link}>{label} </PrismicLink>
            </li>
          ))}
        </ul>
      </footer>
    );
}