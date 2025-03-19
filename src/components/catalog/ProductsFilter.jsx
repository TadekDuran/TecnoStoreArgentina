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
  const makerList = ["Apple", "Samsung", "Xiaomi"];
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
        }

        return updatedFilters;
      });
    }
  };

  const clearFilters = () => {
    setLocalFilters((prev) => {
      return prev.category ? { category: prev.category } : {};
    });
  };

  return (
    <div className="flex w-full flex-col gap-4 rounded-lg bg-[#1a1a1a] p-4 shadow-md">
      <CategoryFilter handleChange={handleChange} />

      {!localFilters.category && (
        <p className="rounded-md bg-[#252525] p-3 text-center text-sm text-gray-400">
          🔒 Selecciona una categoría para desbloquear más filtros.
        </p>
      )}

      {localFilters.category && (
        <>
          <div className="flex flex-col gap-3">
            <Label htmlFor="model" className="font-medium text-white">
              Modelo
            </Label>
            <Input
              type="text"
              id="model"
              value={localFilters.model || ""}
              placeholder="Filtrar por modelo"
              onChange={(e) => handleChange("model", e.target.value)}
              className="h-10 rounded-md bg-[#252525] px-3 text-base text-white placeholder-gray-400"
            />
          </div>

          <div className="flex flex-col gap-3">
            <Label className="font-medium text-white">Rango de Precio</Label>
            <div className="flex items-center gap-3">
              <Input
                type="number"
                id="minPrice"
                value={localFilters.minPrice || ""}
                placeholder="Mínimo"
                onChange={(e) => handleChange("minPrice", e.target.value)}
                className="h-10 w-1/2 rounded-md bg-[#252525] px-3 text-base text-white placeholder-gray-400"
              />
              <Input
                type="number"
                id="maxPrice"
                value={localFilters.maxPrice || ""}
                placeholder="Máximo"
                onChange={(e) => handleChange("maxPrice", e.target.value)}
                className="h-10 w-1/2 rounded-md bg-[#252525] px-3 text-base text-white placeholder-gray-400"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Label htmlFor="maker" className="font-medium text-white">
              Fabricante
            </Label>
            <Select
              value={localFilters.maker || ""}
              onValueChange={(value) => handleChange("maker", value)}
            >
              <SelectTrigger className="h-10 rounded-md bg-[#252525] px-3 text-white">
                <SelectValue placeholder="Selecciona un fabricante" />
              </SelectTrigger>
              <SelectContent className="bg-[#252525] text-white">
                {makerList.map((maker, index) => (
                  <SelectItem
                    key={index}
                    value={maker}
                    className="hover:bg-[#333]"
                  >
                    {maker}
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
              <Label htmlFor="used" className="text-white">
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
              <Label htmlFor="featured" className="text-white">
                Destacado
              </Label>
            </div>
          </div>
        </>
      )}

      <Button
        variant="destructive"
        onClick={clearFilters}
        className="w-full rounded-md bg-red-600 py-2 text-lg font-semibold text-white hover:bg-red-700"
      >
        Limpiar Filtros
      </Button>
    </div>
  );
};

export default ProductsFilter;
