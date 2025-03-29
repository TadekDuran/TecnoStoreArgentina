import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  return (
    <NavigationMenu className="sticky top-0 z-50">
      <NavigationMenuList className="relative hidden w-screen items-center justify-between bg-secondary-background p-4 text-primary-text md:flex">
        <div className="flex gap-4">
          <NavigationMenuItem>
            <Button
              asChild
              className="bg-tertiary-background text-button-text hover:bg-tertiary-background-hover"
            >
              <Link href="/">FUTURO LOGO</Link>
            </Button>
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

        <h1 className="absolute left-1/2 -translate-x-1/2 text-lg font-bold text-primary-text">
          TecnoStore Argentina
        </h1>

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
            </SheetHeader>
            <div className="mt-4 flex flex-col gap-4">
              <Button
                asChild
                className="w-full bg-tertiary-background text-button-text hover:bg-tertiary-background-hover"
              >
                <Link href="/catalog">Catálogo</Link>
              </Button>
              <Button
                asChild
                className="w-full bg-tertiary-background text-button-text hover:bg-tertiary-background-hover"
              >
                <Link href="/faq">Preguntas Frecuentes</Link>
              </Button>
              <Button
                asChild
                className="w-full bg-tertiary-background text-button-text hover:bg-tertiary-background-hover"
              >
                <Link href="/contact">Contacto</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
        <Button
          asChild
          className="absolute left-1/2 -translate-x-1/2 bg-tertiary-background text-button-text hover:bg-tertiary-background-hover"
        >
          <Link href="/">
            <p className="h-8 w-auto">FUTURO TS LOGO</p>
          </Link>
        </Button>
        <div className="h-8 w-8" />
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
