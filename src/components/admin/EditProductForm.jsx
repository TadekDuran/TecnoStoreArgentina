import React, { useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
  SheetDescription
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast";
import apiUrl from "@/utils/apiUrl";
import { Trash2, CirclePlus } from "lucide-react";
import CreateProductConfirmAlert from "@/components/admin/CreateProductConfirmAlert";

const EditProductForm = ({ product, isSheetOpen, setIsSheetOpen }) => {
  const categoryList = ["Smartphone", "Tablet", "Notebook"];
  const makerList = ["Apple", "Samsung", "Xiaomi"];

  const [formData, setFormData] = useState({
    category: product.category,
    model: product.model,
    maker: product.maker,
    price: product.price,
    specs: product.specs,
    featured: product.featured,
    used: product.used,
    stock: product.stock,
    colors: product.colors,
  });

  const [tempSpec, setTempSpec] = useState({ name: "", value: "" });
  const [tempColor, setTempColor] = useState({ name: "", images: [] });
  const [tempImage, setTempImage] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const { toast } = useToast();

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: field === "price" ? parseInt(value) : value,
    }));
  };

  const addSpec = () => {
    if (tempSpec.name && tempSpec.value) {
      setFormData((prev) => ({
        ...prev,
        specs: [...prev.specs, { [tempSpec.name]: tempSpec.value }],
      }));
      setTempSpec({ name: "", value: "" });
    }
  };
  const removeSpec = (index) => {
    setFormData((prev) => ({
      ...prev,
      specs: prev.specs.filter((_, i) => i !== index),
    }));
  };

  const addColor = () => {
    if (tempColor.name && tempImage) {
      const newImages = tempImage
        .split(",")
        .map((link) => link.trim())
        .filter((link) => link.length > 0);
      setFormData((prev) => {
        const colorIndex = prev.colors.findIndex(
          (color) => Object.keys(color)[0] === tempColor.name,
        );
        if (colorIndex !== -1) {
          const updatedColors = [...prev.colors];
          const existingImages = updatedColors[colorIndex][tempColor.name];
          const uniqueNewImages = newImages.filter(
            (link) => !existingImages.includes(link),
          );
          updatedColors[colorIndex][tempColor.name] = [
            ...existingImages,
            ...uniqueNewImages,
          ];
          return {
            ...prev,
            colors: updatedColors,
          };
        } else {
          return {
            ...prev,
            colors: [...prev.colors, { [tempColor.name]: newImages }],
          };
        }
      });
      setTempColor({ name: "", images: [] });
      setTempImage("");
    }
  };
  const removeColor = (index) => {
    setFormData((prev) => ({
      ...prev,
      colors: prev.colors.filter((_, i) => i !== index),
    }));
  };

  const handleRequest = async () => {
    try {
      const response = await fetch(
        `${apiUrl}/api/products/updateOne?id=${product.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );
      if (!response.ok) {
        throw new Error(response.error);
      }
    } catch (error) {
      console.log(error);
    }
    document.getElementById("sheet-close-btn")?.click();
    toast({
      title: "Producto editado con éxito",
      description: "El producto se ha editado correctamente.",
    });
  };

  return (
    <div className="flex justify-between">
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent>
          <form>
            <SheetHeader>
              <SheetTitle>Editar producto</SheetTitle>
              <SheetDescription>Editar producto</SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-4 py-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="category">Categoría</Label>
                <Select
                  onValueChange={(value) => handleChange("category", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={formData.category} />
                  </SelectTrigger>
                  <SelectContent>
                    {categoryList.map((category, index) => (
                      <SelectItem key={index} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="model">Modelo</Label>
                <Input
                  id="model"
                  type="text"
                  value={formData.model}
                  onChange={(e) => handleChange("model", e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="price">Precio</Label>
                <Input
                  id="price"
                  type="number"
                  value={formData.price}
                  onChange={(e) => handleChange("price", e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="maker">Fabricante</Label>
                <Select onValueChange={(value) => handleChange("maker", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder={formData.maker} />
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

              <div className="flex flex-col gap-2">
                <Label>Especificaciones</Label>
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Nombre (Ej: RAM)"
                    value={tempSpec.name}
                    onChange={(e) =>
                      setTempSpec({ ...tempSpec, name: e.target.value })
                    }
                  />
                  <Input
                    type="text"
                    placeholder="Valor (Ej: 8GB)"
                    value={tempSpec.value}
                    onChange={(e) =>
                      setTempSpec({ ...tempSpec, value: e.target.value })
                    }
                  />
                  <Button type="button" onClick={addSpec}>
                    <CirclePlus />
                  </Button>
                </div>
                {/* Lista de especificaciones con scroll interno si crece demasiado */}
                <div className="max-h-20 overflow-y-auto rounded border p-2">
                  {formData.specs.map((spec, index) => {
                    const key = Object.keys(spec)[0];
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-between rounded px-2"
                      >
                        <span>
                          {key}: {spec[key]}
                        </span>
                        <Button
                          type="button"
                          variant="ghost"
                          onClick={() => removeSpec(index)}
                        >
                          <Trash2 />
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label>Colores</Label>
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Nombre (Ej: Blanco)"
                    value={tempColor.name}
                    onChange={(e) =>
                      setTempColor({ ...tempColor, name: e.target.value })
                    }
                  />
                  <Input
                    type="text"
                    placeholder="Enlaces a las imágenes (separados por comas)"
                    value={tempImage}
                    onChange={(e) => setTempImage(e.target.value)}
                  />
                  <Button type="button" onClick={addColor}>
                    <CirclePlus />
                  </Button>
                </div>
                {/* Lista de colores con scroll interno si crece demasiado */}
                <div className="max-h-20 overflow-y-auto rounded border p-2">
                  {formData.colors.map((color, index) => {
                    const key = Object.keys(color)[0];
                    const images = color[key];
                    return (
                      <div
                        key={index}
                        className="flex flex-col gap-1 rounded px-2"
                      >
                        <div className="flex items-center justify-between">
                          <span>{key}:</span>
                          <Button
                            type="button"
                            size="sm"
                            variant="ghost"
                            onClick={() => removeColor(index)}
                          >
                            <Trash2/>
                          </Button>
                        </div>
                        <div className="flex flex-col gap-1">
                          {Array.isArray(images) && (
                            images.map((image, imgIndex) => (
                              <span key={imgIndex} className="text-sm">
                                - {image}
                              </span>
                            ))
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex gap-2">
                <Label>Opciones</Label>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="used"
                    checked={formData.used}
                    onCheckedChange={(value) => handleChange("used", value)}
                  />
                  <Label htmlFor="used">Usado</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="featured"
                    checked={formData.featured}
                    onCheckedChange={(value) => handleChange("featured", value)}
                  />
                  <Label htmlFor="featured">Destacado</Label>
                </div>
              </div>
            </div>
            <SheetFooter>
              <Button type="button" onClick={() => setShowConfirm(true)}>
                Confirmar edición
              </Button>
              <SheetClose>
                <Button
                  id="sheet-close-btn"
                  onClick={() => setIsSheetOpen(false)}
                  asChild
                >
                  Cancelar
                </Button>
              </SheetClose>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>
      {showConfirm && (
        <CreateProductConfirmAlert
          onConfirm={handleRequest}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </div>
  );
};

export default EditProductForm;
