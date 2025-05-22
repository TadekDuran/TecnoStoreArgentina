import { createClient } from "@/utils/supabase/client";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;
  const limit = searchParams.get("limit")
    ? Number(searchParams.get("limit"))
    : 5;
  const sortBy = searchParams.get("sortBy") || "price";
  const order = searchParams.get("order") || "asc";

  const filters = {
    category: searchParams.get("category") || null,
    model: searchParams.get("model") || null,
    brand: searchParams.get("brand") || null,
    minPrice: searchParams.get("minPrice")
      ? Number(searchParams.get("minPrice"))
      : null,
    maxPrice: searchParams.get("maxPrice")
      ? Number(searchParams.get("maxPrice"))
      : null,
    featured: searchParams.get("featured") === "true",
    used: searchParams.get("used") === "true",
    stock: searchParams.get("stock") === "true",
  };

  try {
    const supabase = await createClient();

    let countQuery = supabase
      .from("products")
      .select("*", { count: "exact", head: true });

    if (filters.category)
      countQuery = countQuery.eq("category", filters.category);
    if (filters.model)
      countQuery = countQuery.ilike("model", `%${filters.model}%`);
    if (filters.brand) countQuery = countQuery.eq("brand", filters.brand);
    if (filters.minPrice !== null)
      countQuery = countQuery.gte("price", filters.minPrice);
    if (filters.maxPrice !== null)
      countQuery = countQuery.lte("price", filters.maxPrice);
    if (filters.featured) countQuery = countQuery.eq("featured", true);
    if (filters.used) countQuery = countQuery.eq("used", true);
    if (filters.stock) countQuery = countQuery.eq("stock", true);

    const { count: totalProducts, error: countError } = await countQuery;
    if (countError) {
      throw new Error(`Error al contar productos: ${countError.message}`);
    }

    const start = (page - 1) * limit;
    const end = page * limit - 1;

    let query = supabase.from("products").select();
    if (filters.category) query = query.eq("category", filters.category);
    if (filters.model) query = query.ilike("model", `%${filters.model}%`);
    if (filters.brand) query = query.eq("brand", filters.brand);
    if (filters.minPrice !== null) query = query.gte("price", filters.minPrice);
    if (filters.maxPrice !== null) query = query.lte("price", filters.maxPrice);
    if (filters.featured) query = query.eq("featured", true);
    if (filters.used) query = query.eq("used", true);
    if (filters.stock) query = query.eq("stock", true);

    query = query.order(sortBy, { ascending: order === "asc" }).order('id', { ascending: true});

    query = query.range(start, end);

    const { data, error } = await query;
    if (error) {
      throw new Error(`Error al consultar la base de datos: ${error.message}`);
    }

    const totalPages = Math.ceil(totalProducts / limit);

    let uniqueBrands = [];
    if (filters.category) {
      const { data: brandsData, error: brandsError } = await supabase
        .from("products")
        .select("brand", { distinct: true })
        .eq("category", filters.category);
      if (brandsError) {
        throw new Error(`Error al obtener marcas únicas: ${brandsError.message}`);
      }
      uniqueBrands = [...new Set(brandsData.map((item) => item.brand).filter(Boolean))];
    }

    const responseBody = {
      totalProducts,
      totalPages,
      currentPage: page,
      data,
      brandList: uniqueBrands
    };

    return new Response(JSON.stringify(responseBody), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
