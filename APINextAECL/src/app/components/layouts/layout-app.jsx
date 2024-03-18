import React from 'react';

export default function LayoutApp({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <nav className="bg-gray-800 text-white p-4 w-full text-center text-2xl">APIPRODUCTS</nav>
      <main className="flex-1 p-4 bg-white">{children}</main>
    </div>
  );
}
