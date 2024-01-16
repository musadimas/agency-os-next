import Link from "next/link";
import React from "react";
import Logo from "../logo";
import { Navigation, NavigationItem } from "@/types";
import MenuItem from "./menu-item";
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { getNavItemUrl } from "@/utils";

export default function Header(props: { data?: Navigation }) {
  if (!props.data) return null;
  return (
    <Navbar classNames={{ base: "!px-[140px]", wrapper: "!p-0 md:!gap-20 !gap-10", brand: "!max-w-fit" }} maxWidth='full' height={"87px"}>
      <NavbarBrand>
        <Logo caption='Petani Milenial' classNames={{ caption: "max-w-[80px] leading-tight font-semibold" }} />
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex gap-4 !grow !justify-evenly'>
        {(props.data.items as NavigationItem[])?.map((item) => {
          const url = getNavItemUrl(item);
          if (!url) return;
          return (
            <NavbarItem key={item.id}>
              <Link color='foreground' href={url}>
                {item.title}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify='end' className='!max-w-fit'>
        <NavbarItem className='hidden lg:flex gap-5'>
          <Button as={Link} href='/login' color='success'>
            Login
          </Button>
          <Button as={Link} href='/daftar' color='primary'>
            Daftar
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
