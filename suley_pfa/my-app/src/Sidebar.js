import React from 'react';

function Sidebar({ setCurrentPage, closeSidebar }) {
  return (
    <div className="w-64 bg-gray-900 text-white h-full flex flex-col">
      <div className="p-4 text-lg font-bold">Admin Menu</div>
      <button
        className="p-4 hover:bg-gray-700"
        onClick={() => {
          setCurrentPage('addProduct');
          closeSidebar();
        }}
      >
        Ajouter Produit
      </button>
      <button
        className="p-4 hover:bg-gray-700"
        onClick={() => {
          setCurrentPage('products');
          closeSidebar();
        }}
      >
        Afficher Produits
      </button>
      <button
        className="p-4 hover:bg-gray-700"
        onClick={() => {
          setCurrentPage('prediction');
          closeSidebar();
        }}
      >
        Prediction
      </button>
    </div>
  );
}

export default Sidebar;