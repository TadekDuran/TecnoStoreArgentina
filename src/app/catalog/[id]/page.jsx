"use client";
import React, { useState, useEffect, useCallback } from "react";
import apiUrl from "@/utils/apiUrl";
import { useParams } from "next/navigation";
import ContactButtons from "@/components/product_page/ContactButtons";
import MainCarousel from "@/components/product_page/MainCarousel";
import PaymentMethodList from "@/components/product_page/PaymentMethodList";
import SpecsTable from "@/components/product_page/SpecsTable";
import ThumbnailCarousel from "@/components/product_page/ThumbnailCarousel";
import useDolarBlue from "@/hooks/useDolarBlue";
import { Separator } from "@/components/ui/separator";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [emblaMain, setEmblaMain] = useState(null);
  const [emblaThumbs, setEmblaThumbs] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const dolarBlue = useDolarBlue();

  const onSelect = useCallback(() => {
    if (!emblaMain) return;
    const index = emblaMain.selectedScrollSnap();
    setSelectedIndex(index);
    if (emblaThumbs) {
      const visibleIndexes = emblaThumbs.slidesInView();
      if (!visibleIndexes.includes(index)) {
        emblaThumbs.scrollTo(index, true);
      }
    }
  }, [emblaMain, emblaThumbs]);

  useEffect(() => {
    if (!emblaMain) return;
    onSelect();
    emblaMain.on("select", onSelect);
    return () => emblaMain.off("select", onSelect);
  }, [emblaMain, onSelect]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
    emblaMain.scrollTo(0);
  };

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await fetch(
            `${apiUrl}/api/products/getOne?id=${id}`,
          );
          if (!response.ok) {
            throw new Error("Error al obtener el producto");
          }
          const data = await response.json();

          if (Array.isArray(data) && data.length > 0) {
            const productData = data[0];
            setProduct(productData);
            const firstColorKey = Object.keys(productData.colors[0])[0];
            setSelectedColor(firstColorKey);
          } else {
            console.warn("Producto no encontrado");
            setProduct(null);
          }
        } catch (error) {
          console.error("Error:", error);
          setProduct(null);
        }
      };
      fetchProduct();
    }
  }, [id]);

  if (product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 place-items-center gap-4 pb-4 md:grid-cols-[1fr_auto_1fr] md:place-items-start">
          <div>
            <MainCarousel
              selectedColor={selectedColor}
              product={product}
              setEmblaMain={setEmblaMain}
            />
            <ThumbnailCarousel
              images={
                product.colors.find(
                  (color) => Object.keys(color)[0] === selectedColor,
                )[selectedColor]
              }
              emblaMain={emblaMain}
              setEmblaThumbs={setEmblaThumbs}
              selectedIndex={selectedIndex}
            />
          </div>

          <Separator orientation="horizontal" className="my-4 md:hidden" />
          <Separator orientation="vertical" className="mx-4 hidden md:block" />

          <div className="flex flex-col items-center space-y-4 md:items-start">
            <h1 className="text-2xl text-slate-300">{product.model}</h1>
            <p className="text-3xl font-semibold text-slate-200">
              U$D {product.price}
            </p>
            <p className="text-2xl font-bold text-emerald-300">
              Valor dolar blue: {dolarBlue}
            </p>

            <PaymentMethodList />

            <h3 className="font-medium">Colores disponibles:</h3>
            <div className="flex gap-4">
              {product.colors.map((color, index) => {
                const colorName = Object.keys(color)[0];

                return (
                  <button
                    key={index}
                    className={`rounded border-2 px-4 py-2 transition-all duration-200 ${
                      selectedColor === colorName
                        ? "border-slate-800 bg-slate-800 text-white"
                        : "border-slate-600 bg-slate-400 text-slate-800 hover:bg-slate-600"
                    }`}
                    onClick={() => handleColorChange(colorName)}
                  >
                    {colorName}
                  </button>
                );
              })}
            </div>

            <ContactButtons />
          </div>
        </div>
        <Separator className="w-full" />
        <SpecsTable specs={product.specs} />
      </div>
    );
  }
  return (
    <div>
      <p>Buscando producto...</p>
    </div>
  );
};

export default ProductPage;
