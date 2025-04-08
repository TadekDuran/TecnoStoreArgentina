export function validateDeletePayload(body) {
  if (!body.id && !body.ids) return { error: "Missing ID or IDs in body" };
  if (body.id && body.ids)
    return { error: "There must be ID or IDs, not both" };
  if (body.ids && !Array.isArray(body.ids))
    return { error: "IDs must be an array" };
  return { data: body };
}
