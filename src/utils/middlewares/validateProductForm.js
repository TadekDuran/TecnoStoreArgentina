import { z } from "zod";

export async function validateProductForm(formData) {
    const formSchema = z.object({
        category: z.string(),
        model: z.string(),
        maker: z.string(),
        price: z.number(),
        specs: z.array(
            z.object({
                name: z.string(),
                value: z.string()
            })
        ),
        featured: z.boolean(),
        used: z.boolean(),
        stock: z.boolean(),
        colors: z.array(
            z.object({
                name: z.string(),
                value: z.string()
            })
        ),
    });
}