import { createClient } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';
import { validateDeleteRequest } from '@/utils/middlewares/validateDeleteRequest';
export async function DELETE(request) {
    try {
        const validation = await validateDeleteRequest(request);
        if(validation.error) return NextResponse.json({message: validation.error, status: validation.status}, { status: validation.status });
        const { id, ids } = validation.data;
        const supabase = await createClient();
        let response;
        if(id)  {
            const { data, error } = await supabase.from('products').delete().eq('id', id).select();
            if(error) return NextResponse.json({ message: error.message, status: 500 }, { status: 500 });
            if(!data || data.length === 0) return NextResponse.json({ message: 'No products found.', status: 404 }, { status: 404 });
            response = { message: 'Product deleted correctly', status: 200, product: data[0] }
        }   else if(ids)    {
            const { data, error } = await supabase.from('products').delete().in('id', ids).select();
            if(error) return NextResponse.json({ message: error.message, status: 500 }, { status: 500 });
            if(!data || data.length === 0) return NextResponse.json({ message: 'No products found.', status: 404 }, { status: 404 });
            response = { message: 'Products deleted correctly', status: 200, products: data }
        }
        return NextResponse.json(response);
    } catch (error) {
        return NextResponse.json(
            { message: error.message, status: 500 },
            { status: 500 }
        );
    }
}