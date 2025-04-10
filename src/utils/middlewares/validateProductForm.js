import { z } from "zod";

export async function validateProductForm(formData) {
  const formSchema = z.object({
    category: z.string().min(1, "La categoría es obligatoria."),
    model: z.string().min(1, "El modelo es obligatorio."),
    brand: z.string().min(1, "La marca es obligatoria."),
    price: z.coerce.number().positive("El precio debe ser un número positivo"),
    specs: z
      .array(
        z.record(
          z
            .string()
            .min(1, "La especificación debe tener un nombre y un valor."),
        ),
      )
      .nonempty("Debe haber al menos una especificación"),
    featured: z.boolean(),
    used: z.boolean(),
    stock: z.boolean(),
    colors: z
    .array(
      z.record(
        z.array(z.string().min(1, "Cada enlace de imagen debe ser una cadena no vacía.")),
      ),
    )
    .nonempty("Debe haber al menos un color.")
    .refine(
      (colors) =>
        colors.every((color) => {
          const key = Object.keys(color)[0];
          return color[key].length > 0;
        }),
      "Cada color debe tener al menos un enlace de imagen.",
    ),
  });
  try {
    formSchema.parse(formData);
    return { success: true, errors: {} };
  } catch (error) {
    return { success: false, errors: error.flatten().fieldErrors };
  }
}
