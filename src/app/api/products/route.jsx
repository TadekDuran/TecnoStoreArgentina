import { createClient } from '@/utils/supabase/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const filters = {
    category: searchParams.get("category") || null,
    model: searchParams.get("model") || null,
    maker: searchParams.get("maker") || null,
    minPrice: searchParams.get("minPrice") ? Number(searchParams.get("minPrice")) : null,
    maxPrice: searchParams.get("maxPrice") ? Number(searchParams.get("maxPrice")) : null,
    specs: searchParams.get("specs") ?? [],
    featured: searchParams.get("featured") === "true",
    used: searchParams.get("used") === "true",
    stock: searchParams.get("stock") === "true",
  };
  const formattedSpecs = Array.isArray(filters.specs) && filters.specs.length > 0
  ? filters.specs.map(spec => {
      const [key, value] = spec.split(":");
      return { [key]: value };
    })
  : [];
  try {
    const supabase = await createClient();
    let query = supabase.from("products").select();
    if (filters.category) query = query.eq("category", filters.category);
    if (filters.model) query = query.ilike("model", `%${filters.model}%`); // Búsqueda flexible
    if (filters.maker) query = query.eq("maker", filters.maker);
    if (filters.minPrice !== null) query = query.gte("price", filters.minPrice);
    if (filters.maxPrice !== null) query = query.lte("price", filters.maxPrice);
    if (formattedSpecs.length > 0) query = query.contains("specs", formattedSpecs);
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