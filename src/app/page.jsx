"use client";
import React from "react";
import { useProducts } from "@/hooks";

export default function Home() {
  const { data, loading, error, getProducts } = useProducts();

  return (
    <div>
      <button className="w-full bg-blue-600 px-3 py-5" onClick={getProducts}>
        GET PRODUCTS
      </button>

      {loading && <p>Cargando productos...</p>}
      {error && <p>Error al obtener productos: {error.message}</p>}

      <div>
        {data.map((product) => (
          <div key={product.id} className="p-10">
            <h2>
              {product.maker} {product.model}
            </h2>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
