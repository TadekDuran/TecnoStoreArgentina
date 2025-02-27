"use client";
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"
import DeleteProductConfirmAlert from "@/components/product/DeleteProductConfirmAlert";

export const columns = (handleDelete) => [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllRowsSelected()}
        indeterminate={table.getIsSomeRowsSelected()}
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
    accessorKey: "model",
    header: "Model",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const [showConfirm, setShowConfirm] = useState(false);
      const product = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>
              <span>Acciones</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Editar Producto</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setShowConfirm(true)}>Eliminar Producto</DropdownMenuItem>
          </DropdownMenuContent>
          {showConfirm && (
            <DeleteProductConfirmAlert
              onConfirm={() => handleDelete(product.id)}
              onCancel={() => setShowConfirm(false)}
            />
          )}
        </DropdownMenu>
      )
    }
  }
];
