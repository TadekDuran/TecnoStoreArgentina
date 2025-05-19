import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import headerLogo from "@/assets/header_logo.png";
import logoWide from "@/assets/logo_wide.png";

const Navbar = () => {
  return (
    <NavigationMenu className="sticky top-0 z-50 border-b border-white/10">
      <NavigationMenuList className="relative hidden w-screen items-center justify-between bg-secondary-background px-8 py-4 text-primary-text md:flex">
        <div className="ml-4 flex items-center gap-8">
          <NavigationMenuItem>
            <Link href="/">
              <Image src={headerLogo} alt="Logo TS Header" />
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button
              asChild
              className="bg-tertiary-background text-button-text hover:bg-tertiary-background-hover"
            >
              <Link href="/catalog">Catálogo</Link>
            </Button>
          </NavigationMenuItem>
        </div>

        <NavigationMenuItem className="absolute left-1/2 -translate-x-1/2">
          <Link href="/">
            <Image src={logoWide} alt="Logo TS Middle" />
          </Link>
        </NavigationMenuItem>

        <div className="flex gap-4 pr-4">
          <NavigationMenuItem>
            <Button
              asChild
              className="bg-tertiary-background text-button-text hover:bg-tertiary-background-hover"
            >
              <Link href="/faq">Preguntas Frecuentes</Link>
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button
              asChild
              className="bg-tertiary-background text-button-text hover:bg-tertiary-background-hover"
            >
              <Link href="/contact">Contacto</Link>
            </Button>
          </NavigationMenuItem>
        </div>
      </NavigationMenuList>
      <NavigationMenuList className="relative flex h-16 w-screen max-w-[100vw] items-center justify-between bg-secondary-background px-4 md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Menu
              size={38}
              className="ml-2 rounded-lg border-2 border-tertiary-background-hover"
            />
          </SheetTrigger>
          <SheetContent side="left" className="p-6">
            <SheetHeader>
              <SheetTitle>Menú</SheetTitle>
              <SheetDescription className="hidden">
                Menú de navegación del sitio
              </SheetDescription>
            </SheetHeader>
            <div className="mt-4 flex flex-col gap-4">
              <Button
                asChild
                className="w-full bg-tertiary-background text-button-text hover:bg-tertiary-background-hover"
              >
                <SheetClose asChild>
                  <Link href="/catalog">Catálogo</Link>
                </SheetClose>
              </Button>
              <Button
                asChild
                className="w-full bg-tertiary-background text-button-text hover:bg-tertiary-background-hover"
              >
                <SheetClose asChild>
                  <Link href="/faq">Preguntas Frecuentes</Link>
                </SheetClose>
              </Button>
              <Button
                asChild
                className="w-full bg-tertiary-background text-button-text hover:bg-tertiary-background-hover"
              >
                <SheetClose asChild>
                  <Link href="/contact">Contacto</Link>
                </SheetClose>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
        <NavigationMenuItem className="absolute left-1/2 -translate-x-1/2">
          <Link href="/">
            <Image src={logoWide} alt="Logo TS Header" height={60} />
          </Link>
        </NavigationMenuItem>
        <div className="h-8 w-8" />
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
