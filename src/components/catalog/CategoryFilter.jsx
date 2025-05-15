import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const CategoryFilter = ({ handleFilterChange, localFilters }) => {
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

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="category" className="font-medium text-primary-text">
        Categoría
      </Label>
      <Select
        value={localFilters.category || ""}
        onValueChange={(value) => handleFilterChange("category", value)}
      >
        <SelectTrigger className="h-10 rounded-md bg-tertiary-background px-3 text-primary-text hover:bg-tertiary-background-hover">
          <SelectValue placeholder="Selecciona una categoría" />
        </SelectTrigger>
        <SelectContent className=" text-primary-text">
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
  );
};

export default CategoryFilter;
