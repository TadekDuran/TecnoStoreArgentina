"use client";
import React, { useEffect, useState } from "react";
import { ProductsTable } from "@/components/admin/ProductsTable";
import { columns } from "@/components/admin/columns";
import CreateProductForm from "@/components/admin/CreateProductForm";
import { useProducts } from "@/hooks";
import { useDebounce } from "@/hooks/useDebounce";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import DeleteProductConfirmAlert from "@/components/admin/DeleteProductConfirmAlert";
import ProductPagination from "@/components/ProductPagination";
import { deleteProductAction } from "@/app/admin/actions/admin-actions";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Admin = () => {
  const { data, error, getProducts, totalPages } = useProducts();
  const [queries, setQueries] = useState({
    page: 1,
    limit: 10,
    sortBy: "price",
    order: "asc",
    model: "",
  });
  const debouncedFilters = useDebounce(queries, 1000);
  const [rowSelection, setRowSelection] = useState({});
  const [showConfirm, setShowConfirm] = useState(false);
  const { toast } = useToast();

  const selectedIds = Object.keys(rowSelection).map(
    (rowIndex) => data[rowIndex]?.id,
  );

  useEffect(() => {
    getProducts(debouncedFilters);
  }, [debouncedFilters]);

  const handleChange = (field, value) => {
    setQueries((prev) => ({ ...prev, [field]: value, page: 1 }));
  };

  const handleDelete = async (idOrIds) => {
    const isSingleDelete = !Array.isArray(idOrIds);
    try {
      const payload = isSingleDelete ? { id: idOrIds } : { ids: idOrIds };
      const { message } = await deleteProductAction(payload);
      toast({
        title: isSingleDelete ? "Producto Eliminado" : "Productos Eliminados",
        description: message,
      });
      if (!isSingleDelete) setRowSelection({});
      getProducts();
    } catch (error) {
      toast({
        title: "ERROR",
        description: error.message || "Ocurrió un error al eliminar.",
        variant: "destructive",
      });
      console.error("Error al eliminar producto(s):", error);
    }
  };

  return (
    <div className="m-2 flex flex-col gap-2">
      <h1>Panel Administrador</h1>
      <CreateProductForm />
      <Button
        variant="destructive"
        size="icon"
        disabled={selectedIds.length === 0}
        onClick={() => setShowConfirm(true)}
      >
        <Trash2 />
      </Button>
      <div className="flex flex-col gap-3 w-1/4">
        <Label htmlFor="model" className="text-xl text-primary-text">
          Filtrar por modelo
        </Label>
        <Input
          type="text"
          id="model"
          value={queries.model || ""}
          placeholder="Filtrar por modelo"
          onChange={(e) => handleChange("model", e.target.value)}
          className="h-10 rounded-md bg-tertiary-background px-3 text-base text-primary-text placeholder-gray-400"
        />
      </div>
      {error && <p>Error al obtener productos: {error.message}</p>}
      <ProductsTable
        columns={columns(handleDelete)}
        data={data}
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
      />
      {showConfirm && (
        <DeleteProductConfirmAlert
          onConfirm={() => handleDelete(selectedIds)}
          onCancel={() => setShowConfirm(false)}
        />
      )}
      <ProductPagination
        queries={queries}
        setQueries={setQueries}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Admin;
