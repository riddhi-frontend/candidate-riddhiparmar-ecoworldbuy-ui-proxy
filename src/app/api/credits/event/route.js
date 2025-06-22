export async function POST(req) {
  const body = await req.json();
  console.log("Credits event received:", body);
  return Response.json({ success: true });
}
