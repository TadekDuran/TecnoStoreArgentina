"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useDebounce } from "@/hooks/useDebounce";
import CategoryFilter from "@/components/catalog/CategoryFilter";

const ProductsFilter = ({ queries, setQueries, brandList }) => {
  const [localFilters, setLocalFilters] = useState(queries);
  const debouncedFilters = useDebounce(localFilters, 1000);

  useEffect(() => {
    setQueries(debouncedFilters);
  }, [debouncedFilters]);

  const handleFilterChange = (filterName, value) => {
    setLocalFilters((prev) => ({
      ...prev,
      page: 1,
      [filterName]: value,
      featured: false,
    }));
  };

  const clearFilters = () => {
    setLocalFilters((prev) => {
      return {
        category: prev.category,
        featured: false,
        page: 1,
        limit: 8,
        sortBy: "price",
        order: "desc",
      };
    });
  };

  return (
    <div className="flex w-full flex-col gap-4 rounded-lg bg-secondary-background p-4 shadow-md">
      <CategoryFilter
        handleFilterChange={handleFilterChange}
        localFilters={localFilters}
      />

      {!localFilters.category && (
        <p className="rounded-md bg-emphasy-background p-3 text-center text-sm font-bold text-primary-text">
          🔒 Selecciona una categoría para desbloquear más filtros.
        </p>
      )}

      {localFilters.category && (
        <>
          <div className="flex flex-col gap-3">
            <Label htmlFor="brand" className="font-medium text-primary-text">
              Marca
            </Label>
            <Select
              value={localFilters.brand || ""}
              onValueChange={(value) => handleFilterChange("brand", value)}
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

          <div className="flex flex-col gap-3">
            <Label htmlFor="model" className="font-medium text-primary-text">
              Modelo
            </Label>
            <Input
              type="text"
              id="model"
              value={localFilters.model || ""}
              placeholder="Filtrar por modelo"
              onChange={(e) => handleFilterChange("model", e.target.value)}
              className="h-10 rounded-md bg-tertiary-background px-3 text-base text-primary-text placeholder-gray-400"
            />
          </div>

          <div className="flex flex-col gap-3">
            <Label className="font-medium text-primary-text">
              Rango de Precio
            </Label>
            <div className="flex items-center gap-3">
              <Input
                type="number"
                id="minPrice"
                value={localFilters.minPrice || ""}
                placeholder="Mínimo"
                onChange={(e) => handleFilterChange("minPrice", e.target.value)}
                className="h-10 w-1/2 rounded-md bg-tertiary-background px-3 text-base text-primary-text placeholder-gray-400"
              />
              <Input
                type="number"
                id="maxPrice"
                value={localFilters.maxPrice || ""}
                placeholder="Máximo"
                onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
                className="h-10 w-1/2 rounded-md bg-tertiary-background px-3 text-base text-primary-text placeholder-gray-400"
              />
            </div>
          </div>
        </>
      )}

      <Button
        variant="destructive"
        onClick={clearFilters}
        className="w-full rounded-md bg-red-600 py-2 text-lg font-semibold text-primary-text hover:bg-red-700"
      >
        Limpiar Filtros
      </Button>
    </div>
  );
};

export default ProductsFilter;
