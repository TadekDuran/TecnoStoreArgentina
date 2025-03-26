import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="relative flex w-screen items-center justify-between bg-secondary-background p-4 text-primary-text">
        {/* Contenedor izquierdo */}
        <div className="flex gap-4">
          <NavigationMenuItem>
            <Button
              asChild
              className="text-button-text hover:bg-tertiary-background-hover bg-tertiary-background"
            >
              <Link href="/">FUTURO LOGO</Link>
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button
              asChild
              className="text-button-text hover:bg-tertiary-background-hover bg-tertiary-background"
            >
              <Link href="/catalog">Catálogo</Link>
            </Button>
          </NavigationMenuItem>
        </div>

        {/* Título centrado */}
        <h1 className="absolute left-1/2 -translate-x-1/2 text-lg font-bold text-primary-text">
          TecnoStore Argentina
        </h1>

        {/* Contenedor derecho */}
        <div className="flex gap-4 pr-4">
          <NavigationMenuItem>
            <Button
              asChild
              className="text-button-text hover:bg-tertiary-background-hover bg-tertiary-background"
            >
              <Link href="/">Preguntas Frecuentes</Link>
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button
              asChild
              className="text-button-text hover:bg-tertiary-background-hover bg-tertiary-background"
            >
              <Link href="/">Contacto</Link>
            </Button>
          </NavigationMenuItem>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
