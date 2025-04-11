import { z } from "zod";

export async function validateProductForm(formData) {
  const formSchema = z.object({
    category: z.string().min(1, "La categoría es obligatoria."),
    model: z.string().min(1, "El modelo es obligatorio."),
    brand: z.string().min(1, "La marca es obligatoria."),
    price: z.coerce.number().positive("El precio debe ser un número positivo"),
    specs: z.array(
        z.record(
          z
            .string()
            .min(1, "La especificación debe tener un nombre y un valor."),
        ),
      )
      .nonempty("Debe haber al menos una especificación"),
    available_colors: z.array(z.string().min(1, "Cada color debe tener un nombre válido"))
      .min(1, "Debe haber al menos un color disponible"),
    image_list: z.array(
        z
          .string()
          .url("Debe ser una URL válida")
          .min(1, "La URL no puede estar vacía"),
      )
      .min(1, "Debe haber al menos una imagen"),
    used: z.boolean(),
    featured: z.boolean(),
  });
  try {
    formSchema.parse(formData);
    return { success: true, errors: {} };
  } catch (error) {
    return { success: false, errors: error.flatten().fieldErrors };
  }
}
