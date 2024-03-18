"use client";
import axios from "axios";
import LayoutForm from "./components/layouts/layout-form";
export default function Home() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = {
      title: e.target.title.value,
      price: e.target.price.value,
      description: e.target.description.value,
      category: e.target.category.value,
      image: e.target.image.value,
      rating: {
        rate: e.target.rate.value,
        count: e.target.rate.value,
      },
    };
    await setProduct(form);
  };

  const setProduct = (data) => {
    return axios
      .post("/api/products", data)
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="p-2 mb-3 text-2xl">
        <a href="/productos">Ver productos</a>
      </div>
      <LayoutForm onSubmit={handleSubmit} method="post"></LayoutForm>
    </main>
  );
}
