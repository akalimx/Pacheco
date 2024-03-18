"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import LayoutApp from "../components/layouts/layout-app";
export default function Producto() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("/api/products");
        const dato = res.data.data
        setProductos(dato);
        console.log(dato)
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchProducts();
  }, []);

  const borrar = async (id) => {
    try {
      await axios.delete(`/api/products/${id}`).then( (res) =>{
        setProductos(productos.filter(product => product.id !== id));
        console.log(`Dato eliminado exitosamente con id: ${id}`)
      })
      
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <main className="">
      <LayoutApp>
        <div>
          <a href="/">Volver</a>
        </div>
        <div className="grid md:grid-cols-4 gap-6 sm:grid-cols-2k">
          {productos.length > 0 &&
            productos.map((product, index) => (
              <div
                key={index}
                className="shadow-lg p-4 flex flex-col items-center"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-32 h-32 object-cover mb-4"
                />
                <h3 className="text-lg font-bold mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-2">Precio: {product.price}</p>
                <p className="text-gray-600 mb-2">
                  Descripción: {product.description}
                </p>
                <p className="text-gray-600 mb-2">
                  Categoría: {product.category}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    className="bg-red-400 p-2"
                    onClick={() => borrar(product.id)}
                  >
                    Eliminar
                  </button>
                  <a
                    className="bg-blue-400 p-2"
                    href={`/productos/${product.id}`}
                  >
                    Actualizar
                  </a>
                </div>
              </div>
            ))}
        </div>
      </LayoutApp>
    </main>
  );
}
