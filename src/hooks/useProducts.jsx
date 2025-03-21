import { useState } from "react";

export const useProducts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  const getProducts = async ({ page, limit, sortBy, order, ...filters }) => {
    setLoading(true);
    setError(null);
    try {
      const query = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        sortBy: sortBy || "price",
        order: order || "asc",
        ...filters,
      });
      const response = await fetch(`/api/products?${query.toString()}`);
      const result = await response.json();
      if (result.data.length === 0) throw new Error("Lo sentimos, no hay productos que correspondan con tu búsqueda.");
      setData(result.data);
      setTotalPages(result.totalPages);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, getProducts, totalPages };
};