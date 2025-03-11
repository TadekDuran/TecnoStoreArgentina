import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from '@/components/ui/input'
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
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
    };
  };

  const clearFilters = () => {
    setLocalFilters((prev) => {
      return prev.category ? { category: prev.category } : {};
    });
  }

  return (
    <div className='w-1/5 flex flex-col gap-4'>
      <CategoryFilter handleChange={handleChange} />

      {localFilters.category && (
        <>
          <div className="flex flex-col gap-2">
            <Label htmlFor="model">Modelo</Label>
            <Input
              type="text"
              id="model"
              value={localFilters.model || ""}
              placeholder="Filtrar por modelo"
              onChange={(e) => handleChange("model", e.target.value)}
            />
          </div>

          <div className="flex gap-2">
            <Label htmlFor="minPrice">Precio Mínimo</Label>
            <Input
              type="number"
              id="minPrice"
              value={localFilters.minPrice || ""}
              placeholder="0"
              onChange={(e) => handleChange("minPrice", e.target.value)}
            />
            <Label htmlFor="maxPrice">Precio Máximo</Label>
            <Input
              type="number"
              id="maxPrice"
              value={localFilters.maxPrice || ""}
              placeholder="10000"
              onChange={(e) => handleChange("maxPrice", e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="maker">Fabricante</Label>
            <Select
              value={localFilters.maker || ""}
              onValueChange={(value) => handleChange("maker", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecciona un fabricante" />
              </SelectTrigger>
              <SelectContent>
                {makerList.map((maker, index) => (
                  <SelectItem key={index} value={maker}>
                    {maker}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox
              id="used"
              checked={localFilters.used || false}
              onCheckedChange={(value) => handleChange("used", value)}
            />
            <Label htmlFor="used">Usado</Label>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox
              id="featured"
              checked={localFilters.featured || false}
              onCheckedChange={(value) => handleChange("featured", value)}
            />
            <Label htmlFor="featured">Destacado</Label>
          </div>
        </>
      )}

      <Button variant="destructive" onClick={clearFilters}>Limpiar Filtros</Button>
    </div>
  )
}

export default ProductsFilter