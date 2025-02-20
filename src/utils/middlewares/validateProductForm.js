import { z } from "zod";

export async function validateProductForm(formData) {
  const formSchema = z.object({
    category: z.string().min(1, "La categoría es obligatoria."),
    model: z.string().min(1, "El modelo es obligatorio."),
    maker: z.string().min(1, "El fabricante es obligatorio."),
    price: z.coerce.number().positive("El precio debe ser un número positivo"),
    specs: z
      .array(
        z.object({
          name: z.string().min(1, "La especificación debe tener un nombre."),
          value: z.string().min(1, "La especificación debe tener un valor."),
        }),
      )
      .nonempty("Debe haber al menos una especificación"),
    featured: z.boolean(),
    used: z.boolean(),
    stock: z.boolean(),
    colors: z
      .array(
        z.object({
          name: z.string().min(1, "El color debe tener un nombre."),
          value: z.string().min(1, "El color debe tener un enlace."),
        }),
      )
      .nonempty("Debe haber al menos un color."),
  });
  try {
    formSchema.parse(formData);
    return { success: true, errors: {} };
  } catch (error) {
    return { success: false, errors: error.flatten().fieldErrors };
  }
}
