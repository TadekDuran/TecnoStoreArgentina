import { createClient } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';

export async function POST(request) {
    const { category, model, maker, price, specs, highlight, used, stock, colors } = await request.json();
    try {
        const supabase = await createClient();
        const { data, error } = await supabase
            .from("products")
            .insert([{ category, model, maker, price, specs, highlight, used, stock, colors }])
            .single();
        if(error) throw error;
        return NextResponse.json({message: "Product created correctly", status: 201})
    } catch (error) {
        return NextResponse.json(
            { status: 500, message: error.message },
            { status: 500 }
        );
    }
}