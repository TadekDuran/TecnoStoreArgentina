import { createClient } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';

export async function DELETE(request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        if (!id) return NextResponse.json({ status: 400, message: "Null ID." }, { status: 400 });
        const supabase = await createClient();
        const response = await supabase.from("products").delete().eq("id", id);
        return NextResponse.json(response);
    } catch (error) {
        return NextResponse.json(
            { status: 500, message: error.message },
            { status: 500 }
        );
    }
}