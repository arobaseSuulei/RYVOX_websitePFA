import React from 'react';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';

function Navbar({ setView }) {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <div className="text-xl font-bold">RYVOX</div>
      <div className="flex space-x-6">
        <button onClick={() => setView('home')}>Accueil</button>
        <button onClick={() => setView('cart')}>
          <FaShoppingCart size={24} />
        </button>
        <button onClick={() => setView('account')}>
          <FaUserCircle size={24} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
