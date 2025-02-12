export async function getProducts() {
    try {
        const res = await fetch(
            "http://localhost:3000/api/products"
        )
        return res.json();
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
}