import React, { useState, useEffect } from "react";
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

const ProductsFilter = ({ queries, setQueries }) => {
  const brandList = [
    "Apple",
    "Samsung",
    "Xiaomi",
    "Motorola",
    "Realme",
    "SONOS",
    "Sony",
    "Nintendo",
    "Lenovo",
    "ASUS",
    "HP",
    "Nikon",
    "Sigma",
    "DJI",
    "Infinix",
    "TECNO",
  ];
  const [localFilters, setLocalFilters] = useState(queries);
  const debouncedFilters = useDebounce(localFilters, 1000);

  useEffect(() => {
    setQueries(debouncedFilters);
  }, [debouncedFilters, setQueries]);

  const handleChange = (field, value) => {
    {
      setLocalFilters((prev) => {
        let updatedFilters = { ...prev, [field]: value };

        if (field === "category") {
          delete updatedFilters.featured;
          updatedFilters.limit = 10;
        }

        return updatedFilters;
      });
    }
  };

  const clearFilters = () => {
    setLocalFilters((prev) => {
      return prev.category
        ? {
            category: prev.category,
            featured: false,
            page: 1,
            limit: 10,
            sortBy: "price",
            order: "asc",
          }
        : { featured: true, page: 1, limit: 5, sortBy: "price", order: "asc" };
    });
  };

  return (
    <div className="flex w-full flex-col gap-4 rounded-lg bg-secondary-background p-4 shadow-md">
      <CategoryFilter handleChange={handleChange} localFilters={localFilters} />

      {!localFilters.category && (
        <p className="text-primary-text rounded-md bg-emphasy-background p-3 text-center text-sm font-bold">
          🔒 Selecciona una categoría para desbloquear más filtros.
        </p>
      )}

      {localFilters.category && (
        <>
          <div className="flex flex-col gap-3">
            <Label htmlFor="model" className="font-medium text-primary-text">
              Modelo
            </Label>
            <Input
              type="text"
              id="model"
              value={localFilters.model || ""}
              placeholder="Filtrar por modelo"
              onChange={(e) => handleChange("model", e.target.value)}
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
                onChange={(e) => handleChange("minPrice", e.target.value)}
                className="h-10 w-1/2 rounded-md bg-tertiary-background px-3 text-base text-primary-text placeholder-gray-400"
              />
              <Input
                type="number"
                id="maxPrice"
                value={localFilters.maxPrice || ""}
                placeholder="Máximo"
                onChange={(e) => handleChange("maxPrice", e.target.value)}
                className="h-10 w-1/2 rounded-md bg-tertiary-background px-3 text-base text-primary-text placeholder-gray-400"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Label htmlFor="brand" className="font-medium text-primary-text">
              Marca
            </Label>
            <Select
              value={localFilters.brand || ""}
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

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <Checkbox
                id="used"
                checked={localFilters.used || false}
                onCheckedChange={(value) => handleChange("used", value)}
                className="h-5 w-5"
              />
              <Label htmlFor="used" className="text-primary-text">
                Usado
              </Label>
            </div>

            <div className="flex items-center gap-3">
              <Checkbox
                id="featured"
                checked={localFilters.featured || false}
                onCheckedChange={(value) => handleChange("featured", value)}
                className="h-5 w-5"
              />
              <Label htmlFor="featured" className="text-primary-text">
                Destacado
              </Label>
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
