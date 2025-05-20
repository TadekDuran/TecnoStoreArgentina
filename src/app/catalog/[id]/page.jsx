import { cache } from "react"
import { headers } from "next/headers";
import ProductClient from "@/components/product_page/ProductClient";

async function getProduct(id) {
  try {
    const headersList = await headers()
    const host = headersList.get("host")
    const protocol = host?.includes("localhost") ? "http" : "https"

    const res = await fetch(`${protocol}://${host}/api/products/getOne?id=${id}`, {
      cache: "no-store",
    })

    const data = await res.json()
    return data[0]
  } catch (error) {
    console.error("Error fetching product:", error)
    return null
  }
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params
  const product = await getProduct(resolvedParams.id)

  if (!product) {
    return {
      title: "Producto no encontrado - TecnoStore Argentina",
    }
  }

  return {
    title: `${product.model} - TecnoStore Argentina`,
    description: `Conocé el ${product.model} en TecnoStore. ¡Aprovechá nuestras promociones!`,
  }
}

export default async function ProductPage({ params }) {
  const resolvedParams = await params
  const product = await getProduct(resolvedParams.id)

  if (!product) {
    return <p className="p-8 text-center text-lg">Producto no encontrado.</p>;
  }

  return <ProductClient product={product} />;
}
