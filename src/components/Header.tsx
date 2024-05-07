import { createClient } from "@/prismicio";
import { PrismicLink } from "@prismicio/react";
import Link from "next/link";
import Bounded from "@/components/Bounded";
import Logo from "@/components/Logo"

export default async function Header() {
    const client = createClient();

    const setting = await client.getSingle("setting");

  return (
  <Bounded as="header" className="py-4 md:py-6 lg:py-8">
    <div className="flex gap-4 items-center justify-between sm:flex-row flex-col">

    <Link href={"/"}>
    <Logo />
    </Link>
  <nav>
    <ul className="flex">
        {setting.data.navigation.map(({link,label}) =>(
          <li key={label}>
            <PrismicLink field={link} className="p-3">{label}</PrismicLink>
            </li>
        ))}
    </ul>
  </nav>
    </div>
  </Bounded>
  )
}
