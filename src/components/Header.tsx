import { createClient } from "@/prismicio";
import { PrismicLink } from "@prismicio/react";
import Link from "next/link";

export default async function Header() {
    const client = createClient();

    const setting = await client.getSingle("setting");

  return <header>
    <Link href={"/"}>
    {setting.data.meta_description}
    </Link>
  <nav>
    <ul>
        {setting.data.navigation.map(({link,label}) =>(
            <li key={label}>
            <PrismicLink field={link}>{label}</PrismicLink>
            </li>
        ))}
    </ul>
  </nav>
  </header>;
}
