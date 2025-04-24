"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import DeleteProductConfirmAlert from "@/components/admin/DeleteProductConfirmAlert";
import EditProductForm from "@/components/admin/EditProductForm";

export const columns = (handleDelete, setQueries) => [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllRowsSelected()}
        indeterminate={table.getIsSomeRowsSelected() ? true : undefined}
        onCheckedChange={(value) => table.toggleAllRowsSelected(!!value)}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
      />
    ),
  },
  {
    accessorKey: "category",
    header: "Categoría",
  },
  {
    accessorKey: "model",
    header: "Modelo",
  },
  {
    accessorKey: "price",
    header: "Precio",
  },
  {
    accessorKey: "brand",
    header: "Marca",
  },
  {
    id: "actions",
    header: "Acciones",
    cell: ({ row }) => {
      const [showConfirm, setShowConfirm] = useState(false);
      const product = row.original;

      return (
        <div className="flex gap-1">
          <EditProductForm product={product} setQueries={setQueries} />
          <Button
            variant="destructive"
            size="sm"
            onClick={() => setShowConfirm(true)}
            className="w-fit"
          >
            Eliminar Producto
          </Button>
          {showConfirm && (
            <DeleteProductConfirmAlert
              onConfirm={() => handleDelete(product.id)}
              onCancel={() => setShowConfirm(false)}
            />
          )}
        </div>
      );
    },
  },
];
