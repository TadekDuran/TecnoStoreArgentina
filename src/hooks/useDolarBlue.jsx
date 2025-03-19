// hooks/useDolarBlue.js
import { useState, useEffect } from "react";

const fetchDollarBlue = async () => {
  try {
    const response = await fetch("https://api.bluelytics.com.ar/v2/latest");
    if (!response.ok) {
      throw new Error("Error al obtener el valor del dólar blue");
    }
    const data = await response.json();
    return data.blue.value_sell;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

const useDolarBlue = () => {
  const [dollarBlue, setDollarBlue] = useState(null);

  useEffect(() => {
    const getDollarBlue = async () => {
      const value = await fetchDollarBlue();
      setDollarBlue(value);
    };

    getDollarBlue();
  }, []);

  return dollarBlue;
};

export default useDolarBlue;
