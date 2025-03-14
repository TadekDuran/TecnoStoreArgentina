"use client";
import React, { useState, useEffect } from "react";
import apiUrl from "@/utils/apiUrl";
import { useParams } from "next/navigation";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

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
            setProduct(data[0]);
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
      <div>
        <p>{product.model}</p>
        <p>{product.price}</p>
      </div>
    );
  }
  return (
    <div>
      <p>Buscando producto...</p>
    </div>
  )
};

export default ProductPage;
