"use client";
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import EditProductForm from "@/components/admin/EditProductForm";
import DeleteProductConfirmAlert from "@/components/admin/DeleteProductConfirmAlert";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function ProductsTable({ columns, data, rowSelection, setRowSelection, handleDelete, setQueries }) {
  const [confirmId, setConfirmId] = useState(null);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: { rowSelection },
    onRowSelectionChange: setRowSelection,
    enableRowSelection: true,
  });

  return (
    <>
      {/* Mobile View: compact cards */}
      <div className="flex flex-col gap-2 sm:hidden">
        {table.getRowModel().rows.length ? (
          table.getRowModel().rows.map((row) => {
            const product = row.original;
            return (
              <div key={row.id} className="rounded-md border p-4 bg-secondary-background shadow-sm">
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                  <span className="font-medium text-secondary-text">Categoría:</span>
                  <span>{product.category}</span>
                  <span className="font-medium text-secondary-text">Modelo:</span>
                  <span>{product.model}</span>
                  <span className="font-medium text-secondary-text">Precio:</span>
                  <span>${product.price}</span>
                  <span className="font-medium text-secondary-text">Marca:</span>
                  <span>{product.brand}</span>
                </div>

                <div className="mt-3 flex space-x-2">
                  <EditProductForm product={product} setQueries={setQueries} />
                  <Button
                    variant="destructive"
                    size="sm"
                    className="flex-1"
                    onClick={() => setConfirmId(product.id)}
                  >
                    Eliminar
                  </Button>
                </div>

                {confirmId === product.id && (
                  <DeleteProductConfirmAlert
                    onConfirm={() => {
                      handleDelete(product.id);
                      setConfirmId(null);
                    }}
                    onCancel={() => setConfirmId(null)}
                  />
                )}
              </div>
            );
          })
        ) : (
          <p className="text-center text-sm text-secondary-text">Cargando productos...</p>
        )}
      </div>

      {/* Desktop Table View */}
      <div className="rounded-md border hidden sm:block">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="text-center px-4">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="px-8 text-nowrap text-center"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  Cargando productos
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
