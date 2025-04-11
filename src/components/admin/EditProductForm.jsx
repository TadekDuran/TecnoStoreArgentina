import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Trash2, CirclePlus } from "lucide-react";
import CreateProductConfirmAlert from "@/components/admin/CreateProductConfirmAlert";
import { updateProductAction } from "@/app/admin/actions/admin-actions";

const EditProductForm = ({ product, isSheetOpen, setIsSheetOpen }) => {
  const categoryList = ["Smartphone", "Tablet", "Notebook"];
  const brandList = ["Apple", "Samsung", "Xiaomi"];
  const [formData, setFormData] = useState({
    category: product.category,
    model: product.model,
    brand: product.brand,
    price: product.price,
    specs: product.specs,
    featured: product.featured,
    used: product.used,
    stock: product.stock,
    image_list: product.image_list,
    available_colors: product.available_colors,
  });
  const [tempSpec, setTempSpec] = useState({ name: "", value: "" });
  const [tempColor, setTempColor] = useState("");
  const [tempImage, setTempImage] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const { toast } = useToast();

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: field === "price" ? parseInt(value) : value,
    }));
  };

  const handleArrayUpdate = (action, field, value, index) => {
    setFormData((prev) => {
      switch (action) {
        case "add":
          return {
            ...prev,
            [field]: [...prev[field], value],
          };
        case "remove":
          return {
            ...prev,
            [field]: prev[field].filter((_, i) => i !== index),
          };
        default:
          return prev;
      }
    });
  };

  const handleRequest = async () => {
    try {
      const { message } = await updateProductAction(product.id, formData);
      toast({
        title: "Producto editado con éxito",
        description: message,
      });
      document.getElementById("sheet-close-btn")?.click();
    } catch (error) {
      toast({
        title: "Error al editar el producto",
        description: error.message,
        variant: "destructive",
      });
      console.log(error);
    }
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
                <Label htmlFor="brand">Marca</Label>
                <Select onValueChange={(value) => handleChange("brand", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder={formData.brand} />
                  </SelectTrigger>
                  <SelectContent>
                    {brandList.map((brand, index) => (
                      <SelectItem key={index} value={brand}>
                        {brand}
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
                  <Button
                    type="button"
                    onClick={() => {
                      handleArrayUpdate("add", "specs", {
                        [tempSpec.name]: tempSpec.value,
                      });
                      setTempSpec({ name: "", value: "" });
                    }}
                    disabled={!tempSpec.name || !tempSpec.value}
                  >
                    <CirclePlus />
                  </Button>
                </div>
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
                          onClick={() =>
                            handleArrayUpdate("remove", "specs", null, index)
                          }
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
                    onChange={(e) => setTempColor(e.target.value)}
                  />
                  <Button
                    type="button"
                    onClick={() => {
                      handleArrayUpdate(
                        "add",
                        "available_colors",
                        tempColor,
                        null,
                      );
                      setTempColor("");
                    }}
                    disabled={!tempColor}
                  >
                    <CirclePlus />
                  </Button>
                </div>
                <div className="max-h-20 overflow-y-auto rounded border p-2">
                  {formData.available_colors.map((color, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col gap-1 rounded px-2"
                      >
                        <div className="flex items-center justify-between">
                          <span>{color}</span>
                          <Button
                            type="button"
                            size="sm"
                            variant="ghost"
                            onClick={() =>
                              handleArrayUpdate(
                                "remove",
                                "available_colors",
                                null,
                                index,
                              )
                            }
                          >
                            <Trash2 />
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label>Imágenes</Label>
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Enlace a la imagen"
                    value={tempImage}
                    onChange={(e) => setTempImage(e.target.value)}
                  />
                  <Button
                    type="button"
                    onClick={() => {
                      handleArrayUpdate("add", "image_list", tempImage, null);
                      setTempImage("");
                    }}
                    disabled={!tempImage}
                  >
                    <CirclePlus />
                  </Button>
                </div>
                <div className="max-h-20 overflow-y-auto rounded border p-2">
                  {formData.image_list.map((image, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col gap-1 rounded px-2"
                      >
                        <div className="flex items-center justify-between">
                          <span>{image}</span>
                          <Button
                            type="button"
                            size="sm"
                            variant="ghost"
                            onClick={() =>
                              handleArrayUpdate(
                                "remove",
                                "image_list",
                                null,
                                index,
                              )
                            }
                          >
                            <Trash2 />
                          </Button>
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
