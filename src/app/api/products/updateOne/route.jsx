import { createClient } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';

export async function PUT(request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        if (!id) return NextResponse.json({ status: 400, message: "Missing ID parameter." }, { status: 400 });
        const updateData = {};
        const allowedFields = ["category", "model", "maker", "price", "specs", "highlight", "used", "stock", "colors"];
        allowedFields.forEach((field) => {
            if (searchParams.has(field)) {
                updateData[field] = searchParams.get(field);
            }
        });
        const supabase = await createClient();
        const { data, error } = await supabase.from("products").update(updateData).eq("id", id).select().single();
        if (error) {
            return NextResponse.json(
                { status: 500, message: error.message },
                { status: 500 }
            );
        }
        return NextResponse.json(
            { message: "Product updated correctly", status: 200, product: data },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { status: 500, message: error.message },
            { status: 500 }
        );
    }
}