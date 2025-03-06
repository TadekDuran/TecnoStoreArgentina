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
      setData(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, getProducts };
}
