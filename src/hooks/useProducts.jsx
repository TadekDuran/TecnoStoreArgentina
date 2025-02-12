"use client";
import { useState } from "react";

export default function useProducts() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("http://localhost:3000/api/products");
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
