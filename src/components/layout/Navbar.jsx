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
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <NavigationMenu className="sticky top-0 z-50 border-b border-white/10">
      {/* Desktop */}
      <NavigationMenuList className="mx-auto hidden w-screen items-center justify-center gap-x-8 bg-secondary-background px-8 py-4 text-primary-text md:flex">
        <NavigationMenuItem>
          <Button
            asChild
            className="bg-tertiary-background px-8 py-6 text-lg text-button-text hover:bg-tertiary-background-hover"
          >
            <Link href="/">Inicio</Link>
          </Button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button
            asChild
            className="bg-tertiary-background px-8 py-6 text-lg text-button-text hover:bg-tertiary-background-hover"
          >
            <Link href="/catalog">Catálogo</Link>
          </Button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button
            asChild
            className="bg-tertiary-background px-8 py-6 text-lg text-button-text hover:bg-tertiary-background-hover"
          >
            <Link href="/faq">Preguntas Frecuentes</Link>
          </Button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button
            asChild
            className="bg-tertiary-background px-8 py-6 text-lg text-button-text hover:bg-tertiary-background-hover"
          >
            <Link href="/contact">Contacto</Link>
          </Button>
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
                const labels = ["Inicio", "Catálogo", "Preguntas Frecuentes", "Contacto"];
                return (
                  <Button
                    key={i}
                    asChild
                    className="w-full text-lg bg-tertiary-background py-6 text-button-text hover:bg-tertiary-background-hover"
                  >
                    <SheetClose asChild>
                      <Link href={href}>{labels[i]}</Link>
                    </SheetClose>
                  </Button>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>
        <div className="h-8 w-8" />
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
