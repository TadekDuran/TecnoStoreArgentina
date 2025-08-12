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
import orlando_logo from "@/assets/Orlando-Logotipo.webp";
import { Button } from "@/components/ui/button";
import { Menu, ExternalLink } from "lucide-react";

const Navbar = () => {
  return (
    <NavigationMenu className="sticky top-0 z-50 border-b border-white/10">
      {/* Desktop */}
      <NavigationMenuList className="mx-auto hidden w-screen items-center justify-center gap-x-8 bg-secondary-background px-8 py-4 text-primary-text md:flex">
        <NavigationMenuItem>
          <Link href="/">
            <h1 className="px-4 py-2 text-2xl font-medium text-button-text hover:underline">
              Home
            </h1>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/catalog">
            <h1 className="px-4 py-2 text-2xl font-medium text-button-text hover:underline">
              Catálogo
            </h1>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/faq">
            <h1 className="px-4 py-2 text-2xl font-medium text-button-text hover:underline">
              Preguntas Frecuentes
            </h1>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact">
            <h1 className="px-4 py-2 text-2xl font-medium text-button-text hover:underline">
              Contacto
            </h1>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href="https://orlando-market.com/"
            target="_blank"
            className="flex items-center gap-2 rounded-sm border border-slate-400 bg-gray-600 px-2 py-1 duration-150 hover:bg-slate-400"
          >
            <img src={orlando_logo.src} alt="Orlando Logotipo" />{" "}
            <ExternalLink className="text-gray-300" />
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>

      {/* Mobile */}
      <NavigationMenuList className="flex w-screen items-center justify-between bg-secondary-background px-4 py-4 md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Menu
              size={36}
              className="ml-2 rounded-lg border-2 border-tertiary-background-hover"
            />
          </SheetTrigger>
          <SheetContent side="left" className="p-6">
            <SheetHeader>
              <SheetTitle>Menú</SheetTitle>
            </SheetHeader>
            <div className="mt-6 flex flex-col gap-6">
              {["/", "/catalog", "/faq", "/contact"].map((href, i) => {
                const labels = [
                  "Inicio",
                  "Catálogo",
                  "Preguntas Frecuentes",
                  "Contacto",
                ];
                return (
                  <Button
                    key={i}
                    asChild
                    className="w-full bg-tertiary-background py-6 text-lg text-button-text hover:bg-tertiary-background-hover"
                  >
                    <SheetClose asChild>
                      <Link href={href}>{labels[i]}</Link>
                    </SheetClose>
                  </Button>
                );
              })}
              <Link
                href="https://orlando-market.com/"
                target="_blank"
                className="flex items-center gap-2 rounded-sm border border-slate-400 bg-gray-600 py-3 duration-150 hover:bg-slate-400"
              >
                <img src={orlando_logo.src} alt="Orlando Logotipo" />
              </Link>
            </div>
          </SheetContent>
        </Sheet>
        <div className="h-8 w-8" />
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
