"use client";
import React, { useEffect, useState } from "react";
import { ProductsTable } from "@/components/product/ProductsTable";
import { columns } from "@/components/product/columns";
import ProductForm from "@/components/product/ProductForm"
import { useProducts } from "@/hooks";
import { Button } from "@/components/ui/button";
import { Trash2 } from 'lucide-react';
import apiUrl from "@/utils/apiUrl";
import { useToast } from "@/hooks/use-toast";
import DeleteProductConfirmAlert from "@/components/product/DeleteProductConfirmAlert";

const Admin = () => {
  const { data, error, getProducts } = useProducts();
  const [rowSelection, setRowSelection] = useState({});
  const [showConfirm, setShowConfirm] = useState(false);
  const { toast } = useToast()

  const selectedIds = Object.keys(rowSelection).map((rowIndex) => data[rowIndex]?.id);

  useEffect(() => {
    getProducts();
  }, []);

  const handleDelete = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/products/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ids: selectedIds }),
      });
      if (response.ok) {
        toast({
          title: "Productos Eliminados",
          description: "Productos eliminados correctamente.",
        });
        setRowSelection({});
      } else {
        toast({
          title: "ERROR",
          description: "Error al eliminar productos.",
        });
      }
    } catch (error) {
      console.error("Error en la petición:", error);
    }
  }

  return (
    <div suppressHydrationWarning className="m-2 flex flex-col gap-2">
      <h1>Panel Administrador</h1>
      <ProductForm />
      <Button variant="destructive" size="icon" disabled={selectedIds.length === 0} onClick={() => setShowConfirm(true)}><Trash2 /></Button>
      {error && <p>Error al obtener productos: {error.message}</p>}
      <ProductsTable columns={columns} data={data} rowSelection={rowSelection} setRowSelection={setRowSelection} />
      {showConfirm && <DeleteProductConfirmAlert onConfirm={handleDelete} onCancel={() => setShowConfirm(false)} />}
    </div>
  );
};

export default Admin;