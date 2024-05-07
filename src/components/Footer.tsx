import { createClient } from "@/prismicio";
import { PrismicLink } from "@prismicio/react";
import Link from "next/link";
import Logo from "@/components/Logo";
import Bounded from "./Bounded";

export default async function Footer(){
    const client = createClient();

    const setting = await client.getSingle("setting");
    return (
      <Bounded as="footer">
        <div className="flex sm:flex-row flex-col justify-between items-center gap-6">

        <Link href={"/"}>
          <Logo />
          </Link>
        <p className="text-xs">
          @{new Date().getFullYear()} {setting.data.meta_description}
        </p>
        <ul className="flex">
          {setting.data.navigation.map(({ link, label }) => (
            <li key={label}>
              <PrismicLink field={link} className="p-3">{label} </PrismicLink>
            </li>
          ))}
        </ul>
          </div>
      </Bounded>
    );
}