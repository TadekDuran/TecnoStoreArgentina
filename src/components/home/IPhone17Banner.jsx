import React from "react";
import iphone_17_pro_max_all from "@/assets/iPhone-17-Pro-Max-All.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const IPhone17Banner = () => {
  return (
    <section className="w-screen animate-fade-in bg-iphone-background pt-2">
      <div className="flex animate-fade-in-delayed justify-center opacity-0">
        <div className="flex flex-col gap-6 px-4 md:flex-row md:gap-4 md:px-0">
          <div className="flex flex-col justify-center gap-6 md:gap-8">
            <div className="">
              <h1 className="text-center text-xl font-bold text-gray-950 sm:text-2xl md:text-3xl">
                ¡Nuevos iPhone Air - 17 - 17 Pro y Pro Max a la venta!
              </h1>
              <h2 className="pt-4 text-center text-sm font-semibold text-gray-950 sm:text-base md:text-lg/6">
                Ya están a la venta los nuevos modelos de iPhone.{" "}
                <span className="hidden md:inline">
                  <br />
                </span>
                ¡Habilitamos la opción de trade-in por primera vez en nuestra
                historia!*{" "}<br />
								*Trade-in solo disponible para la compra de celulares iPhone Air, 17, 17 Pro y Pro Max
              </h2>
            </div>
            <div className="flex w-full flex-col gap-2 place-self-center md:w-4/5">
              <Link
                href="/faq/iphone-17-preventa"
                aria-label="Preventa iPhone 17"
              >
                <Button className="h-12 w-full rounded-xl hover:bg-primary/60 md:h-10">
                  <h2 className="text-base font-bold md:text-lg">
                    INFORMACIÓN TRADE-IN
                  </h2>
                </Button>
              </Link>
            </div>
          </div>
          <img
            className="mx-auto w-4/5 max-w-sm md:mx-0 md:w-auto md:max-w-none"
            src={iphone_17_pro_max_all.src}
            alt="iPhone 17 All"
          />
        </div>
      </div>
    </section>
  );
};

export default IPhone17Banner;
