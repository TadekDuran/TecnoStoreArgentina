import { createClient } from '@/utils/supabase/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const filters = {
    category: searchParams.get("category") || null,
    model: searchParams.get("model") || null,
    maker: searchParams.get("maker") || null,
    minPrice: searchParams.get("minPrice") ? Number(searchParams.get("minPrice")) : null,
    maxPrice: searchParams.get("maxPrice") ? Number(searchParams.get("maxPrice")) : null,
    featured: searchParams.get("featured") === "true",
    used: searchParams.get("used") === "true",
    stock: searchParams.get("stock") === "true",
  };
  try {
    const supabase = await createClient();
    let query = supabase.from("products").select();
    if (filters.category) query = query.eq("category", filters.category);
    if (filters.model) query = query.ilike("model", `%${filters.model}%`);
    if (filters.maker) query = query.eq("maker", filters.maker);
    if (filters.minPrice !== null) query = query.gte("price", filters.minPrice);
    if (filters.maxPrice !== null) query = query.lte("price", filters.maxPrice);
    if (filters.featured) query = query.eq("featured", true);
    if (filters.used) query = query.eq("used", true);
    if (filters.stock) query = query.eq("stock", true);
    const { data, error } = await query;
    if (error) {
      throw new Error(`Error al consultar la base de datos: ${error.message}`);
    }
    return new Response(JSON.stringify(data));
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}