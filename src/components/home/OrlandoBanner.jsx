import React from "react";
import orlando_logo from "@/assets/Orlando-Logotipo.webp";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const OrlandoBanner = () => {
  return (
    <section className="flex h-56 items-center justify-center bg-[linear-gradient(to_right,#09090b_5%,#374151_10%,#374151_90%,#09090b_95%)] lg:bg-[linear-gradient(to_right,#09090b_10%,#374151_20%,#374151_80%,#09090b_90%)]">
      {/* Este div interior solo centra el contenido sobre la parte sólida del gradiente */}
      <div className="flex flex-col items-center gap-2 lg:gap-4">
        <h1 className="w-4/5 text-center font-bold text-slate-200 lg:w-full lg:text-2xl lg:font-medium">
          ¡Conocé nuestra tienda de indumentaria y productos importados de
          EE.UU.!
        </h1>
        <img src={orlando_logo.src} alt="Orlando Logo" />
        <Link href="https://orlando-market.com/" target="_blank">
          <Button className="h-8 border border-slate-300 bg-slate-600 text-xl text-slate-200 hover:bg-slate-400">
            Ingresá a Orlando <ExternalLink />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default OrlandoBanner;
