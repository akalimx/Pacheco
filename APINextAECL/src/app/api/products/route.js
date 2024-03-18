import { NextResponse } from "next/server";

export const GET = async () => {
  const res = await fetch(process.env.API_URL, {
    headers: {
      "Content-type": "application/json",
    },
  });
  const products = await res.json();
  return NextResponse.json({ data: products });
};

export const POST = async (req) => {
  const product = await req.json();
  const res = await fetch(process.env.API_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(product),
  });
  const newProduct = await res.json();
  return NextResponse.json({ data: newProduct });
};
