"use server";

import { createClient } from "@/utils/supabase/server";
import { validateDeletePayload } from "@/utils/middlewares/validateDeletePayload";
import { validateAdmin } from "@/utils/middlewares/validateAuth";

export async function createProductAction(formData) {
  await validateAdmin();

  const supabase = await createClient();

  const { error } = await supabase.from("products").insert([formData]).single();

  if (error) throw new Error(error.message);

  return { message: "Producto agregado correctamente" };
}

export async function updateProductAction(id, formData) {
  await validateAdmin();

  if (!id) {
    throw new Error("Missing ID parameter.");
  }

  const updateData = {};
  const allowedFields = [
    "category",
    "model",
    "brand",
    "price",
    "specs",
    "featured",
    "used",
    "stock",
    "colors",
  ];

  allowedFields.forEach((field) => {
    if (formData[field] !== undefined) {
      updateData[field] = formData[field];
    }
  });

  const supabase = await createClient();
  const { error } = await supabase
    .from("products")
    .update(updateData)
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);
  return { message: "Producto editado correctamente." };
}

export async function deleteProductAction(payload) {
  await validateAdmin();

  const validation = validateDeletePayload(payload);
  if (validation.error) {
    throw new Error(validation.error);
  }

  const { id, ids } = validation.data;
  const supabase = await createClient();

  if (id) {
    const { data, error } = await supabase
      .from("products")
      .delete()
      .eq("id", id)
      .select();
    if (error) throw new Error(error.message);
    if (!data || data.length === 0) throw new Error("No products found.");
    return { message: "Producto eliminado correctamente" };
  }

  if (ids) {
    const { data, error } = await supabase
      .from("products")
      .delete()
      .in("id", ids)
      .select();
    if (error) throw new Error(error.message);
    if (!data || data.length === 0) throw new Error("No products found.");
    return { message: "Productos eliminados correctamente" };
  }
}
