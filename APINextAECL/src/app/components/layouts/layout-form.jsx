export default function LayoutForm({ onSubmit, method }) {

    return (
        <>
            <div className="flex min-h-full flex-col justify-center bg-white rounded-md px-6 py-12 lg:px-8 shadow-lg">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Registrar producto</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-4" onSubmit={onSubmit} method={method}>
                        <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900">Nombre</label>
                            <div className="mt-2">
                                <input name="title" type="text" className="block w-full outline-blue-300 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900">Precio</label>
                            <div className="mt-2">
                                <input name="price" type="number" step="any" className="block w-full outline-blue-300 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900">Descripción</label>
                            <div className="mt-2">
                                <input name="description" type="text" step="any" className="block w-full outline-blue-300 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center w-80 justify-between">
                                <label className="block text-sm font-medium leading-6 text-gray-900">Categoria</label>
                            </div>
                            <div className="my-2">
                                <input name="category" type="text" className="outline-blue-300 p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center w-80 justify-between">
                                <label className="block text-sm font-medium leading-6 text-gray-900">Imagen</label>
                            </div>
                            <div className="my-2">
                                <input name="image" type="url" placeholder="url" className="outline-blue-300 p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center w-80 justify-between">
                                <label className="block text-sm font-medium leading-6 text-gray-900">Evaluación</label>
                            </div>
                            <div className="my-2">
                                <input name="rate" type="number"  step="any" placeholder="3.9" className="outline-blue-300 p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center w-80 justify-between">
                                <label className="block text-sm font-medium leading-6 text-gray-900">Cantidad</label>
                            </div>
                            <div className="my-2">
                                <input name="count" type="number" step="1" placeholder="120" className="outline-blue-300 p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Registrar</button>
                        </div>
                    </form>

                </div>
            </div>

        </>
    )
}