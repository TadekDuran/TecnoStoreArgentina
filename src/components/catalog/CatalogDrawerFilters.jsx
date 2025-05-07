import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription
} from "@/components/ui/drawer";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import ProductsFilter from "@/components/catalog/ProductsFilter";

const CatalogDrawerFilters = ({
  handleSortChange,
  selectValue,
  queries,
  setQueries,
  brandList
}) => {
  return (
    <div className="mb-6 w-full md:hidden">
      <Drawer>
        <DrawerTrigger asChild>
          <button className="w-full rounded-md bg-secondary-background p-3 text-center font-semibold text-primary-text shadow">
            Filtrar y ordenar
          </button>
        </DrawerTrigger>

        <DrawerContent className="bg-secondary-background p-6">
          <DrawerHeader className="hidden">
            <DrawerTitle>Filtro de productos</DrawerTitle>
            <DrawerDescription>Menú para aplicar filtros a los productos</DrawerDescription>
          </DrawerHeader>
          <div className="mb-4 text-primary-text">
            <label className="mr-2" htmlFor="sort">
              Ordenar por:
            </label>
            <Select onValueChange={handleSortChange} value={selectValue}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecciona orden" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="priceAsc">Precio: Menor a mayor</SelectItem>
                <SelectItem value="priceDesc">Precio: Mayor a menor</SelectItem>
                <SelectItem value="featured">Destacados</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <ProductsFilter queries={queries} setQueries={setQueries} brandList={brandList} />

          <DrawerClose asChild>
            <button className="mt-6 w-full rounded-md bg-red-600 p-2 font-semibold text-primary-text hover:bg-red-700">
              Cerrar
            </button>
          </DrawerClose>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default CatalogDrawerFilters;
