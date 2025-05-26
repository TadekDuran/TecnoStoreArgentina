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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Admin = () => {
  const categoryList = [
    "Smartphone",
    "Tablet",
    "Notebook",
    "Laptop",
    "Consola",
    "Auriculares",
    "Smartwatch",
    "Cámara",
    "Lente",
    "Drone",
    "Audio",
    "Accesorio",
  ];
  const { data, error, getProducts, totalPages, brandList } = useProducts();
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
      setQueries((prev) => ({
        ...prev,
        page: prev.page,
        forceRefresh: Date.now(),
      }));
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
    <div className="min-h-screen bg-primary-background p-6">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-primary-text">
            Panel Administrador
          </h1>
          <div className="mt-4 w-full border-b border-secondary-background"></div>
        </header>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Sección izquierda - Filtros y acciones */}
          <div className="space-y-6">
            <div className="rounded-lg bg-secondary-background p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold text-primary-text">
                Acciones
              </h2>
              <div className="flex items-center space-x-4">
                <CreateProductForm setQueries={setQueries} />
                <Button
                  variant="destructive"
                  size="icon"
                  disabled={selectedIds.length === 0}
                  onClick={() => setShowConfirm(true)}
                  aria-label="Eliminar productos seleccionados"
                  className="hover:bg-destructive/90 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <Trash2 />
                </Button>
              </div>
            </div>

            <div className="rounded-lg bg-secondary-background p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold text-primary-text">
                Filtros
              </h2>
              <div className="space-y-3">
                <Label
                  htmlFor="model"
                  className="text-base font-medium text-primary-text"
                >
                  Filtrar por modelo
                </Label>
                <Input
                  type="text"
                  id="model"
                  value={queries.model || ""}
                  placeholder="Ej: iPhone 12"
                  onChange={(e) => handleChange("model", e.target.value)}
                  className="h-10 rounded-md border-secondary-background bg-tertiary-background text-primary-text placeholder-gray-400 focus:border-accent focus:ring-accent"
                  aria-describedby="modelHelp"
                />
                <p id="modelHelp" className="text-sm text-secondary-text">
                  Escribe el nombre del modelo que deseas buscar
                </p>
              </div>

              <div className="flex flex-col gap-3 mt-4">
                <Label
                  htmlFor="category"
                  className="font-medium text-primary-text"
                >
                  Categoría
                </Label>
                <Select
                  value={queries.category || ""}
                  onValueChange={(value) => handleChange("category", value)}
                >
                  <SelectTrigger className="h-10 rounded-md bg-tertiary-background px-3 text-primary-text hover:bg-tertiary-background-hover">
                    <SelectValue placeholder="Selecciona una categoría" />
                  </SelectTrigger>
                  <SelectContent className="text-primary-text">
                    {categoryList.map((category, index) => (
                      <SelectItem
                        key={index}
                        value={category}
                        className="hover:bg-tertiary-background-hover"
                      >
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="mt-4 flex flex-col gap-3">
                <Label
                  htmlFor="brand"
                  className="font-medium text-primary-text"
                >
                  Filtrar por marca
                </Label>
                <Select
                  value={queries.brand || ""}
                  onValueChange={(value) => handleChange("brand", value)}
                >
                  <SelectTrigger className="h-10 rounded-md bg-tertiary-background px-3 text-primary-text hover:bg-tertiary-background-hover">
                    <SelectValue placeholder="Selecciona una marca" />
                  </SelectTrigger>
                  <SelectContent className="text-primary-text">
                    {brandList.map((brand, index) => (
                      <SelectItem
                        key={index}
                        value={brand}
                        className="hover:bg-tertiary-background-hover"
                      >
                        {brand}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="w-full flex lg:col-span-2">
            <div className="w-full rounded-lg bg-secondary-background p-3 md:p-6 shadow-sm">
              {error && (
                <div className="mb-4 rounded-md bg-destructive/10 p-4 text-destructive-foreground">
                  <p>Error al obtener productos: {error.message}</p>
                </div>
              )}

              <ProductsTable
                columns={columns(handleDelete, setQueries)}
                data={data}
                rowSelection={rowSelection}
                setRowSelection={setRowSelection}
                handleDelete={handleDelete}
                setQueries={setQueries}
              />

              <ProductPagination
                queries={queries}
                setQueries={setQueries}
                totalPages={totalPages}
              />
            </div>
          </div>
        </div>
      </div>

      {showConfirm && (
        <DeleteProductConfirmAlert
          onConfirm={() => handleDelete(selectedIds)}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </div>
  );
};

export default Admin;
