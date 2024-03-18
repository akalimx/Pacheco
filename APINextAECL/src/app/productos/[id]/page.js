"use client";
import axios from "axios";
import { useEffect, useState } from "react";
export default function idProduct({ params }) {
  const [producto, setProducto] = useState({});
  const [formValues, setFormValues] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rating: {
      rate: "",
      count: "",
    },
  });

  useEffect(() => {
    const getdata = async () => {
      try {
        const response = await axios.get(`/api/products/${params.id}`);
        const res = response.data.data;
        setProducto(res);
        setFormValues(res);
      } catch (error) {}
    };
    getdata();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
      rating:{
        ...prevState,
        [name]:value
      }
    }));
  };

  const putProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/api/products/${params.id}`, formValues);
      const data = response.data.data
      setProducto(data); 
      console.log("Producto actualizado correctamente:", data);
    } catch (error) {
      console.error("Error:", error);
    }
    console.log(params);
  };

  return (
    <main className="p-3">
      <div className="min-h-full justify-center bg-white rounded-md px-6 py-12 lg:px-8 shadow-lg">
      <div>
          <a href="/productos">Volver</a>
        </div>
        <div className="grid md:grid-cols-2 gap-5 p-4 sm:grid-cols-1">
          <div className="justify-center items-center flex flex-col">
            <img
              src={producto.image}
              alt={producto.title}
              className="w-40 h-40 object-cover mb-4"
            />
            <h3 className="text-lg font-bold mb-2">{producto.title}</h3>
            <p className="text-gray-600 mb-2">Precio: {producto.price}</p>
            <p className="text-gray-600 mb-2">
              Descripción: {producto.description}
            </p>
            <p className="text-gray-600 mb-2">Categoría: {producto.category}</p>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Actualizar producto
              </h2>
            </div>
            <form className="space-y-4" method="PUT" onSubmit={putProduct}>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Nombre
                </label>
                <div className="mt-2">
                  <input
                    name="title"
                    type="text"
                    onChange={handleInputChange}
                    value={formValues.title}
                    className="block w-full outline-blue-300 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Precio
                </label>
                <div className="mt-2">
                  <input
                    name="price"
                    type="number"
                    step="any"
                    onChange={handleInputChange}
                    value={formValues.price}
                    className="block w-full outline-blue-300 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Descripción
                </label>
                <div className="mt-2">
                  <input
                    name="description"
                    type="text"
                    step="any"
                    onChange={handleInputChange}
                    value={formValues.description}
                    className="block w-full outline-blue-300 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center w-80 justify-between">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Categoria
                  </label>
                </div>
                <div className="my-2">
                  <input
                    name="category"
                    type="text"
                    onChange={handleInputChange}
                    value={formValues.category}
                    className="outline-blue-300 p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center w-80 justify-between">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Imagen
                  </label>
                </div>
                <div className="my-2">
                  <input
                    name="image"
                    type="url"
                    placeholder="url"
                    onChange={handleInputChange}
                    value={formValues.image}
                    className="outline-blue-300 p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center w-80 justify-between">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Evaluación
                  </label>
                </div>
                <div className="my-2">
                  <input
                    name="rate"
                    type="number"
                    step="any"
                    onChange={handleInputChange}
                    value={formValues.rating ? formValues.rating.rate : ""}
                    placeholder="3.9"
                    className="outline-blue-300 p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center w-80 justify-between">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Cantidad
                  </label>
                </div>
                <div className="my-2">
                  <input
                    name="count"
                    type="number"
                    step="1"
                    placeholder="120"
                    onChange={handleInputChange}
                    value={formValues.rating ? formValues.rating.count : ""}
                    className="outline-blue-300 p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Actualizar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
