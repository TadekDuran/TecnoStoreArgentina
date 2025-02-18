export async function validateDeleteRequest(request) {
    try {
        const body = await request.json();
        if (!body.id && !body.ids) return {error: 'Missing ID or IDs in body', status: 400};
        if (body.id && body.ids) return {error: 'There must be ID or IDs, not both', status: 400};
        if (body.ids && !Array.isArray(body.ids)) return {error: 'IDs must be an array', status: 400};
        return {data: body}
    } catch (error) {
        return {error: 'Invalid JSON format', status: 400}
    }
}