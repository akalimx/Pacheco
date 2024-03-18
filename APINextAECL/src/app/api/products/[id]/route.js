import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const id = params.id;

  const res = await fetch(`${process.env.API_URL}/${id}`, {
    headers: {
      "Content-type": "application/json",
    },
  });
  const product = await res.json();
  return NextResponse.json({ data: product });
};

export const DELETE = async (request, { params }) => {
  const id = params.id;

  const res = await fetch(`${process.env.API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  });
  const product = await res.json();
  return NextResponse.json({ data: `Producto ${id} eliminado` });
};

export const PUT = async (request, { params }) => {
  const id = params.id;
  const product = await request.json();

  const res = await fetch(`${process.env.API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(product),
  });
  const updateProduct = await res.json();
  return NextResponse.json({ data: product });
};
