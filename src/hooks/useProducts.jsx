"use client";
import { useState } from "react";
import apiUrl from "@/utils/apiUrl";

export function useProducts() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getProducts = async (queries) => {
    setLoading(true);
    setError(null);
    try {
      const queryString = new URLSearchParams(queries).toString();
      const res = await fetch(`${apiUrl}/api/products?${queryString}`);
      const data = await res.json();
      if (data.length === 0) throw new Error("Lo sentimos, no hay productos que correspondan con tu búsqueda.");
      setData(data);
    } catch (err) {
      setError(err);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, getProducts };
}
