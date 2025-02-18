import { createClient } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';

export async function DELETE(request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        if (!id) return NextResponse.json({ status: 400, message: "Missing ID parameter." }, { status: 400 });
        const supabase = await createClient();
        const { data, error } = await supabase.from("products").delete().eq("id", id).select();
        if(error) return NextResponse.json({ status: 500, message: error.message }, { status: 500 });
        if(data.length === 0) return NextResponse.json({ status: 404, message: "Product not found." }, { status: 404 });
        return NextResponse.json({ message: "Product deleted correctly", status: 200, product: data[0]});
    } catch (error) {
        return NextResponse.json(
            { status: 500, message: error.message },
            { status: 500 }
        );
    }
}