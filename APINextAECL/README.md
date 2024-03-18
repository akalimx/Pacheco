This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
## How work 
Dentro del archivo .env.local se agrego el API_URI para poder trabajar con datos ya existentes, como es una api pública solo permite obtener los datos y como tal no se eliminan, ni se actualizan dentro de la API como tal asi que en el sistema para que pueda trabajar con los demás datos como POST,PUT,DELETE simplemente se tuvo en cuenta que se trabajara con los datos y se actualizara con useState para poder ver la funcionalidad de estos.
Despúes en la carpeta de api se creo los metodos para que pudiera hacer pruebas en POSTMAN y ver la funcionalidad de estos y en route se hizo uso de este sin embargo no se uso axios en esos archivos pero en los demás si.

despues cree la página de productos y dentro de esta page.js para que se puedan visualizar todos los datos y como tal se pudieran eliminar pasandole como parametro el id y en actualizar se paso igual este dato para que lo rediriga y le muestre el formulario para actualizar los datos, primero muestra los input con los datos que ya se tiene y se utilizo usestate al igual de onchange para que permitiera cambiar los datos, de ahí así como en el otro archivo se definieron los campos para poder obtener y actualizar los cambios, una ves hecho esto se pudiera mostrar los cambios que se hicieron.
Se uso tambien componentes pero solo lo use una vez para el formulario.
Al correr el proyecto lo primero que te muestra es el formulario para agregar un registro y para ver los datos agregue las rutas para poder visualizar el contenido.