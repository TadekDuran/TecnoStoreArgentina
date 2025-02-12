import { createClient } from '@/utils/supabase/server';

export async function GET(request) {
    try {
        const supabase = await createClient();
        const { data } = await supabase.from("products").select();
        return new Response(JSON.stringify(data));
    } catch (error) {
        return new Response(JSON.stringify({ message: "Internal Server Error" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}