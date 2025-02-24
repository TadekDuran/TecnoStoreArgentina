import React, { useState } from 'react'
import { validateProductForm } from '@/utils/middlewares/validateProductForm';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
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
import ConfirmAlert from '@/components/product/ConfirmAlert';
import { useToast } from "@/hooks/use-toast";
import apiUrl from "@/utils/apiUrl";

const ProductForm = () => {

  const categoryList = ["Smartphone", "Tablet", "Notebook"];
  const makerList = ["Apple", "Samsung", "Xiaomi"];

  const [formData, setFormData] = useState({
    category: "",
    model: "",
    maker: "",
    price: "",
    specs: [],
    featured: false,
    used: false,
    stock: true,
    colors: [],
  });
  const [tempSpec, setTempSpec] = useState({ name: "", value: "" });
  const [tempColor, setTempColor] = useState({ name: "", value: "" });
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState({});
  const { toast } = useToast()

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: field === "price" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async () => {
    const result = await validateProductForm(formData);
    if (!result.success) {
      setErrors(result.errors);
      return;
    }
    setErrors({});
    setShowConfirm(true);
  };

  const handleRequest = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/products/createOne`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        throw new Error("Error en la petición");
      }
    } catch (error) {
      console.log(error);
    }
    document.getElementById("sheet-close-btn")?.click();
    toast({
      title: "Producto subido con éxito",
      description: "El producto se ha agregado correctamente.",
    });
  }

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
    if (tempColor.name && tempColor.value) {
      setFormData((prev) => ({
        ...prev,
        colors: [...prev.colors, { [tempColor.name]: tempColor.value }],
      }));
      setTempColor({ name: "", value: "" });
    }
  };
  const removeColor = (index) => {
    setFormData((prev) => ({
      ...prev,
      colors: prev.colors.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="flex justify-between">
      <Sheet>
        <SheetTrigger>
          <Button type="button">Agregar producto</Button>
        </SheetTrigger>
        <SheetContent className="max-h-screen overflow-y-auto">
          <form>
            <SheetHeader>
              <SheetTitle>Agregar producto</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 py-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="category">Category</Label>
                <Select onValueChange={(value) => handleChange("category", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categoryList.map((category, index) => (
                      <SelectItem key={index} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.category && <p className="text-red-500 text-sm">{errors.category[0]}</p>}
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="model">Model</Label>
                <Input id="model" type="text" value={formData.model} onChange={(e) => handleChange("model", e.target.value)} />
                {errors.model && <p className="text-red-500 text-sm">{errors.model[0]}</p>}
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="price">Price</Label>
                <Input id="price" type="number" value={formData.price} onChange={(e) => handleChange("price", e.target.value)} />
                {errors.price && <p className="text-red-500 text-sm">{errors.price[0]}</p>}
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="maker">Maker</Label>
                <Select onValueChange={(value) => handleChange("maker", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a maker" />
                  </SelectTrigger>
                  <SelectContent>
                    {makerList.map((maker, index) => (
                      <SelectItem key={index} value={maker}>
                        {maker}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.maker && <p className="text-red-500 text-sm">{errors.maker[0]}</p>}
              </div>
              <div className="flex flex-col gap-2">
                <Label>Specifications</Label>
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Nombre (Ej: RAM)"
                    value={tempSpec.name}
                    onChange={(e) => setTempSpec({ ...tempSpec, name: e.target.value })}
                  />
                  <Input
                    type="text"
                    placeholder="Valor (Ej: 8GB)"
                    value={tempSpec.value}
                    onChange={(e) => setTempSpec({ ...tempSpec, value: e.target.value })}
                  />
                  <Button type="button" onClick={addSpec}>Agregar</Button>
                </div>
                {errors.specs && <p className="text-red-500 text-sm">{errors.specs[0]}</p>}
                {/* Lista de especificaciones con scroll interno si crece demasiado */}
                <div className="max-h-20 overflow-y-auto border rounded p-2">
                  {formData.specs.map((spec, index) => {
                    const key = Object.keys(spec)[0];
                    return (
                      <div key={index} className="flex justify-between items-center px-2 rounded">
                        <span>{key}: {spec[key]}</span>
                        <Button type="button" size="sm" variant="ghost" onClick={() => removeSpec(index)}>Quitar</Button>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label>Colors</Label>
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Nombre (Ej: Blanco)"
                    value={tempColor.name}
                    onChange={(e) => setTempColor({ ...tempColor, name: e.target.value })}
                  />
                  <Input
                    type="text"
                    placeholder="Enlace a la imagen"
                    value={tempColor.value}
                    onChange={(e) => setTempColor({ ...tempColor, value: e.target.value })}
                  />
                  <Button type="button" onClick={addColor}>Agregar</Button>
                </div>
                {errors.colors && <p className="text-red-500 text-sm">{errors.colors[0]}</p>}
                {/* Lista de colores con scroll interno si crece demasiado */}
                <div className="max-h-20 overflow-y-auto border rounded p-2">
                  {formData.colors.map((color, index) => {
                    const key = Object.keys(color)[0];
                    return (
                      <div key={index} className="flex justify-between items-center px-2 rounded">
                        <span>{key}: {color[key]}</span>
                        <Button type="button" size="sm" variant="ghost" onClick={() => removeColor(index)}>Quitar</Button>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex gap-2">
                <Label>Options</Label>
                <div className="flex items-center gap-2">
                  <Checkbox id="used" checked={formData.used} onCheckedChange={(value) => handleChange("used", value)} />
                  <Label htmlFor="used">Used</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="featured" checked={formData.featured} onCheckedChange={(value) => handleChange("featured", value)} />
                  <Label htmlFor="featured">Featured</Label>
                </div>
              </div>
            </div>
            <SheetFooter className="p-4 shadow-md">
              <Button type="button" onClick={handleSubmit}>
                Subir producto
              </Button>
              <Button id="sheet-close-btn" className="hidden" asChild>
                <SheetClose />
              </Button>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>
      {showConfirm && <ConfirmAlert onConfirm={handleRequest} onCancel={() => setShowConfirm(false)} />}
    </div>
  )
}

export default ProductForm