import React, { useState } from 'react';
import { FaCartPlus, FaMinusCircle, FaPlusCircle } from 'react-icons/fa'; // Icônes d'ajout au panier et gestion des quantités

function ProductCard({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < product.stock) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="w-72 h-96 bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition duration-300">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="text-lg text-gray-700">{product.price} MAD</p>
        <p className="text-sm text-gray-500">Stock: {product.stock}</p>

        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center">
            <FaMinusCircle className="cursor-pointer" onClick={decrement} />
            <span className="mx-2">{quantity}</span>
            <FaPlusCircle className="cursor-pointer" onClick={increment} />
          </div>
          {product.stock > 0 ? (
            <button onClick={() => addToCart(product)} className="bg-blue-500 text-white py-2 px-4 rounded-full flex items-center">
              <FaCartPlus className="mr-2" /> Ajouter au Panier
            </button>
          ) : (
            <p className="text-red-500">Rupture de stock</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
