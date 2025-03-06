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
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";

const Navbar = () => {
  const categoryList = [
    { title: "Smartphones", category: "Smartphone" },
    { title: "Tablets", category: "Tablet" },
    { title: "Notebooks", category: "Notebook" },
    { title: "Consolas", category: "Consola" },
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-4 p-4">
        <NavigationMenuItem>
          <Link href="/">Inicio</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Catálogo</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col gap-2 bg-white dark:bg-gray-900 rounded-lg shadow-md p-2 w-35">
              {categoryList.map((element) => (
                <li key={element.title}>
                  <NavigationMenuLink asChild>
                    <Link href={`/catalog?category=${element.category}`} className="block w-full px-4 py-2 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"> 
                      {element.title}
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
