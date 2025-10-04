import clientPromise from "@/lib/mongodb";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("mydb");
  const users = await db.collection("users").find().toArray();

  return new Response(JSON.stringify(users), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request) {
  const client = await clientPromise;
  const db = client.db("mydb");
  const body = await request.json();

  const result = await db.collection("users").insertOne(body);

  return new Response(JSON.stringify(result), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
