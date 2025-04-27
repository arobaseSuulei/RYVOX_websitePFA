import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Produit 1",
    price: 49.99,
    stock: 5,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Produit 2",
    price: 99.99,
    stock: 3,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Produit 3",
    price: 169.99,
    stock: 0,
    image: "https://via.placeholder.com/150",
  },
];

const Home = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (product.stock <= 0) return; // Ne pas ajouter si en rupture de stock

    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, change) => {
    setCart(cart.map((item) =>
      item.id === productId
        ? { ...item, quantity: Math.max(item.quantity + change, 1) }
        : item
    ));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2" />
            <h3 className="font-semibold">{product.name}</h3>
            <p>{product.price} MAD</p>
            <div className="flex justify-between items-center mt-2">
              {product.stock > 0 ? (
                <button
                  className="flex items-center text-blue-500"
                  onClick={() => addToCart(product)}
                >
                  <FaShoppingCart className="mr-2" />
                  
                </button>
              ) : (
                <span className="text-red-500">Rupture de stock</span>
              )}
              <div className="flex items-center">
                <button
                  onClick={() => updateQuantity(product.id, 1)}
                  className="px-2 py-1 bg-gray-300 rounded-full mr-2"
                >
                  +
                </button>
                <button
                  onClick={() => updateQuantity(product.id, -1)}
                  className="px-2 py-1 bg-gray-300 rounded-full"
                >
                  -
                </button>
              </div>
            </div>
          </div>
        ))}
      
      </div>
    </div>
  );
};

export default Home;
