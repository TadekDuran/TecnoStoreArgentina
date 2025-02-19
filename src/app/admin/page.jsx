"use client";
import React, { useEffect } from "react";
import { ProductsTable } from "@/components/product/ProductsTable";
import { columns } from "@/components/product/columns";
import ProductForm from "@/components/product/ProductForm"
import { useProducts } from "@/hooks";

const Admin = () => {
  const { data, error, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div suppressHydrationWarning className="m-2 flex flex-col gap-2">
      <h1>Panel Administrador</h1>
      <ProductForm />
      {error && <p>Error al obtener productos: {error.message}</p>}
      <ProductsTable columns={columns} data={data} />
    </div>
  );
};

export default Admin;
