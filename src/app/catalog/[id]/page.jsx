"use client";
import React, { useState, useEffect, useCallback } from "react";
import apiUrl from "@/utils/apiUrl";
import { useParams } from "next/navigation";
import ThumbnailCarousel from "@/components/product_page/ThumbnailCarousel";
import MainCarousel from "@/components/product_page/MainCarousel";
import useDolarBlue from "@/hooks/useDolarBlue";

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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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

          <div className="flex flex-col space-y-4">
            <h1 className="text-3xl font-semibold">{product.model}</h1>
            <p className="text-xl font-bold text-gray-700">
              {product.price} USD
            </p>
            <p className="text-xl font-bold text-gray-700">
              Valor dolar blue: {dolarBlue}
            </p>

            <h3 className="font-medium">Colores disponibles:</h3>
            <div className="flex gap-4">
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  className={`rounded px-4 py-2 ${
                    selectedColor === Object.keys(color)[0]
                      ? "bg-blue-500 text-white"
                      : "bg-slate-600 text-white"
                  }`}
                  onClick={() => handleColorChange(Object.keys(color)[0])}
                >
                  {Object.keys(color)[0]}
                </button>
              ))}
            </div>
          </div>
        </div>
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
