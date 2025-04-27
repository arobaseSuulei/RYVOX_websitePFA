import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Produit 1', price: 49.99, image: '/images/product1.jpg', quantity: 2 },
    { id: 2, name: 'Produit 2', price: 69.99, image: '/images/product2.jpg', quantity: 1 },
  ]);

  const updateQuantity = (id, delta) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + delta } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Mon Panier</h2>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center border-b pb-4">
            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover mr-4" />
            <div className="flex-1">
              <p>{item.name}</p>
              <p>{item.price} MAD</p>
              <p>Quantité: {item.quantity}</p>
            </div>
            <div className="flex space-x-2">
              <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              <button onClick={() => updateQuantity(item.id, -1)}>-</button>
              <FaTrash className="cursor-pointer" onClick={() => removeItem(item.id)} />
            </div>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="mt-4 flex justify-between items-center">
        <p className="text-lg font-semibold">Total: {totalPrice} MAD</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Passer Commande</button>
      </div>
    </div>
  );
}

export default Cart;
