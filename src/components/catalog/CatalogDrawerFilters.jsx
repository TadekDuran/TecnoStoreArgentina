import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
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
  brandList,
}) => {
  return (
    <div className="mb-6 w-4/5 md:hidden">
      <Drawer>
        <DrawerTrigger asChild>
          <button className="w-full rounded-md bg-secondary-background p-3 text-center font-semibold text-primary-text shadow">
            Filtrar y ordenar
          </button>
        </DrawerTrigger>

        <DrawerContent className="flex max-h-dvh flex-col bg-secondary-background px-4 pb-20">
          <DrawerHeader className="hidden">
            <DrawerTitle>Filtro de productos</DrawerTitle>
            <DrawerDescription>
              Menú para aplicar filtros a los productos
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col gap-2 text-primary-text">
            <label htmlFor="sort">Ordenar por:</label>
            <Select onValueChange={handleSortChange} value={selectValue}>
              <SelectTrigger>
                <SelectValue placeholder="Selecciona orden" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="priceAsc">Precio: Menor a mayor</SelectItem>
                <SelectItem value="priceDesc">Precio: Mayor a menor</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <ProductsFilter
            queries={queries}
            setQueries={setQueries}
            brandList={brandList}
          />

          <DrawerClose asChild>
            <button className="mb-2 w-4/5 place-self-center rounded-md bg-tertiary-background p-2 font-semibold text-primary-text">
              Aplicar Filtros
            </button>
          </DrawerClose>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default CatalogDrawerFilters;
