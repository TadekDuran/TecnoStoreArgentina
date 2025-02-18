"use client";
import React, { useEffect, useRef } from "react";
import { ProductsTable } from "@/components/product/ProductsTable";
import { columns } from "@/components/product/columns";
import { useProducts } from "@/hooks";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Admin = () => {
  const { data, error, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  const nameRef = useRef();
  const priceRef = useRef();

  const handleSubmit = () => {
    const name = nameRef.current?.value;
    const price = priceRef.current?.value;

    alert(`Nombre: ${name}\nPrecio: ${price}`);
  };

  return (
    <div suppressHydrationWarning className="m-2 flex flex-col gap-2">
      <div className="flex justify-between">
        <h1>Panel Administrador</h1>
        <Sheet>
          <SheetTrigger>
            <Button>Agregar producto</Button>
          </SheetTrigger>
          <SheetContent>
            <form>
              <SheetHeader>
                <SheetTitle>Agregar producto</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 py-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" ref={nameRef} />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="price">Price</Label>
                  <Input id="price" type="number" ref={priceRef} />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit" onClick={handleSubmit}>
                    Subir producto
                  </Button>
                </SheetClose>
              </SheetFooter>
            </form>
          </SheetContent>
        </Sheet>
      </div>
      {error && <p>Error al obtener productos: {error.message}</p>}
      <ProductsTable columns={columns} data={data} />
    </div>
  );
};

export default Admin;
