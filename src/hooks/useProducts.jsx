"use client";
import { useState } from "react";

export default function useProducts() {
  const API_URL =
    process.env.NODE_ENV === "production"
      ? "https://api.production.com"
      : "http://localhost:3000";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_URL}/api/products`);
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
