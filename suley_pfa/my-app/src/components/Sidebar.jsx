import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ isOpen, setIsOpen }) {
  return (
    <div
      className={`${
        isOpen ? 'w-64' : 'w-0'
      } bg-gray-800 text-white h-full transition-all duration-300 overflow-hidden`}
    >
      <div className="p-4">
        <h1 className="text-xl font-bold">Admin Panel</h1>
      </div>
      <nav className="flex flex-col p-4">
        <Link to="/" className="py-2 hover:bg-gray-700 rounded" onClick={() => setIsOpen(false)}>
          Afficher Produits
        </Link>
        <Link to="/add-product" className="py-2 hover:bg-gray-700 rounded" onClick={() => setIsOpen(false)}>
          Ajouter Produit
        </Link>
        <Link to="/prediction" className="py-2 hover:bg-gray-700 rounded" onClick={() => setIsOpen(false)}>
          Prédiction Produit
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;