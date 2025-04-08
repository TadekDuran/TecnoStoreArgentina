import { createClient } from '@/utils/supabase/client';
import { NextResponse } from 'next/server';

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        if (!id) return NextResponse.json({ status: 400, message: "Null ID." }, { status: 400 });
        const supabase = await createClient();
        const { data, error } = await supabase.from("products").select().eq("id", id);
        if (error) {
            return NextResponse.json(
                { status: 500, message: error.message },
                { status: 500 }
            );
        }
        return data.length > 0
            ? NextResponse.json(data, { status: 200 })
            : NextResponse.json(
                {
                    status: 404,
                    message: `Product with ID ${id} not found.`,
                },
                { status: 404 }
            );
    } catch (error) {
        return NextResponse.json(
            { status: 500, message: error.message },
            { status: 500 }
        );
    }
}