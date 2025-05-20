"use client";
import React, { useEffect, useState, useCallback } from "react";
import ContactButtons from "@/components/product_page/ContactButtons";
import MainCarousel from "@/components/product_page/MainCarousel";
import PaymentMethodList from "@/components/product_page/PaymentMethodList";
import SpecsTable from "@/components/product_page/SpecsTable";
import ThumbnailCarousel from "@/components/product_page/ThumbnailCarousel";
import useDolarBlue from "@/hooks/useDolarBlue";
import { Separator } from "@/components/ui/separator";
import { TriangleAlert } from "lucide-react";

const ProductClient = ({ product }) => {
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

  return (
    <div className="container mx-auto bg-primary-background px-4 py-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        <div className="flex flex-col items-center md:col-span-7">
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

        <div className="col-span-1 hidden items-center justify-center md:flex">
          <Separator orientation="vertical" className="h-full" />
        </div>

        <div className="flex flex-col items-center space-y-4 md:col-span-4 md:items-start">
          <h1 className="text-lg font-semibold text-secondary-text md:text-2xl">
            {product.model}
          </h1>
          <p className="text-xl font-bold text-primary-text md:text-3xl">
            U$D {product.price}
          </p>
          <p className="text-lg font-bold text-emerald-300 md:text-2xl">
            Valor dolar blue: {dolarBlue}
          </p>

          <PaymentMethodList />

          <h3 className="font-medium text-primary-text lg:text-xl">
            Colores disponibles:
          </h3>
          <div className="flex flex-wrap justify-center gap-4 pb-2 lg:justify-normal">
            {product.available_colors.map((color, index) => (
              <p
                key={index}
                className="rounded bg-tertiary-background px-1 py-1 text-sm font-semibold text-primary-text lg:px-4 lg:py-2 lg:text-base"
              >
                {color}
              </p>
            ))}
          </div>

          {product.available_colors.length > 1 && (
            <div className="mt-2 flex w-4/5 items-center gap-2 rounded-md bg-tertiary-background px-2 py-2 text-primary-text sm:px-4">
              <TriangleAlert className="h-5 w-5 flex-shrink-0 text-red-500" />
              <p className="flex-1 text-center text-sm font-medium md:text-base">
                COLORES SUJETOS A DISPONIBILIDAD
                <br />
                CONSULTAR STOCK POR PRIVADO
              </p>
              <TriangleAlert className="h-5 w-5 flex-shrink-0 text-red-500" />
            </div>
          )}

          <ContactButtons />
        </div>
      </div>

      <Separator className="my-8 w-full" />
      <SpecsTable specs={product.specs} />
    </div>
  );
};

export default ProductClient;
