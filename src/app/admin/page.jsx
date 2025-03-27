"use client";
import React, { useEffect, useState } from "react";
import { ProductsTable } from "@/components/admin/ProductsTable";
import ProductsFilter from "@/components/catalog/ProductsFilter";
import { columns } from "@/components/admin/columns";
import CreateProductForm from "@/components/admin/CreateProductForm"
import { useProducts } from "@/hooks";
import { Button } from "@/components/ui/button";
import { Trash2 } from 'lucide-react';
import apiUrl from "@/utils/apiUrl";
import { useToast } from "@/hooks/use-toast";
import DeleteProductConfirmAlert from "@/components/admin/DeleteProductConfirmAlert";

const Admin = () => {
  const { data, loading, error, getProducts, totalPages } = useProducts();
  const [queries, setQueries] = useState({
    page: 1,
    limit: 5,
    sortBy: "price",
    order: "asc",
  });
  const [rowSelection, setRowSelection] = useState({});
  const [showConfirm, setShowConfirm] = useState(false);
  const { toast } = useToast()

  const selectedIds = Object.keys(rowSelection).map((rowIndex) => data[rowIndex]?.id);

  useEffect(() => {
    getProducts(queries);
  }, [queries]);

  const handleDelete = async (idOrIds) => {
    const isSingleDelete = !Array.isArray(idOrIds);

    try {
      const response = await fetch(`${apiUrl}/api/products/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(isSingleDelete ? { id: idOrIds } : { ids: idOrIds }),
      });

      if (response.ok) {
        toast({
          title: isSingleDelete ? "Producto Eliminado" : "Productos Eliminados",
          description: isSingleDelete
            ? "Producto eliminado correctamente."
            : "Productos eliminados correctamente.",
        });

        if (!isSingleDelete) setRowSelection({});
        getProducts();
      } else {
        toast({
          title: "ERROR",
          description: isSingleDelete
            ? "Error al eliminar producto."
            : "Error al eliminar productos.",
        });
      }
    } catch (error) {
      console.error("Error en la petición:", error);
    }
  };

  return (
    <div suppressHydrationWarning className="m-2 flex flex-col gap-2">
      <h1>Panel Administrador</h1>
      <CreateProductForm />
      <ProductsFilter queries={queries} setQueries={setQueries}/>
      <Button variant="destructive" size="icon" disabled={selectedIds.length === 0} onClick={() => setShowConfirm(true)}><Trash2 /></Button>
      {error && <p>Error al obtener productos: {error.message}</p>}
      <ProductsTable
        columns={columns(handleDelete)}
        data={data}
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
      />
      {showConfirm && <DeleteProductConfirmAlert
        onConfirm={() => handleDelete(selectedIds)}
        onCancel={() => setShowConfirm(false)}
      />}
    </div>
  );
};

export default Admin;