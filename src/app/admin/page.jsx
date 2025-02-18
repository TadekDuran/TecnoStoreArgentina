'use client'
import React, { useEffect } from "react";
import { columns } from "./product/columns"
import { DataTable } from "./product/data-table";
import { useProducts } from "@/hooks";

const Admin = () => {
  const { data, loading, error, getProducts } = useProducts();
  useEffect(() => {
    getProducts();
  }, []);
  
  return (
  <div suppressHydrationWarning > 
    {loading && <p>Cargando productos...</p>}
    {error && <p>Error al obtener productos: {error.message}</p>}
    <DataTable columns={columns} data={data} />
  </div>
  );
}

export default Admin;
