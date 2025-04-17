"use client";
import React, { useState, useEffect, useCallback } from "react";
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

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await fetch(
            `/api/products/getOne?id=${id}`,
          );
          if (!response.ok) {
            throw new Error("Error al obtener el producto");
          }
          const data = await response.json();

          if (Array.isArray(data) && data.length > 0) {
            const productData = data[0];
            setProduct(productData);
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
      <div className="container mx-auto bg-primary-background px-4 py-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          <div className="md:col-span-7 flex flex-col items-center">
            <div className="w-full max-w-[500px]">
              <MainCarousel product={product} setEmblaMain={setEmblaMain} />
              <ThumbnailCarousel
                images={product.image_list || []}
                emblaMain={emblaMain}
                setEmblaThumbs={setEmblaThumbs}
                selectedIndex={selectedIndex}
              />
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center col-span-1">
            <Separator orientation="vertical" className="h-full" />
          </div>

          <div className="md:col-span-4 flex flex-col items-center space-y-4 md:items-start">
            <h1 className="text-2xl font-semibold text-secondary-text">
              {product.model}
            </h1>
            <p className="text-3xl font-bold text-primary-text">
              U$D {product.price}
            </p>
            <p className="text-2xl font-bold text-emerald-300">
              Valor dolar blue: {dolarBlue}
            </p>

            <PaymentMethodList />

            <h3 className="font-medium text-primary-text">
              Colores disponibles:
            </h3>
            <div className="flex flex-wrap gap-4">
              {product.available_colors.map((color, index) => (
                <p
                  key={index}
                  className="bg-tertiary-background px-3 py-1 rounded text-primary-text"
                >
                  {color}
                </p>
              ))}
            </div>

            <ContactButtons />
          </div>
        </div>

        <Separator className="w-full my-8" />
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
