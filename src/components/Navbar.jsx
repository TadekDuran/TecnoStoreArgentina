import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-4 p-4">
        <NavigationMenuItem>
          <Button asChild variant="ghost">
            <Link href="/">TecnoStore Argentina</Link>
          </Button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button asChild variant="ghost">
            <Link href="/catalog">Catálogo</Link>
          </Button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button asChild variant="ghost">
            <Link href="/">Preguntas Frecuentes</Link>
          </Button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button asChild variant="ghost">
            <Link href="/">Contacto</Link>
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
