import { mockProducts } from "../_mockFeed";

export async function GET() {
  return Response.json(mockProducts);
}
