import React, { useState } from 'react';

function AddProduct() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Produit ajouté:', { productName, productPrice, productQuantity });
    setProductName('');
    setProductPrice('');
    setProductQuantity('');
  };

  return (
    <form className="max-w-lg mx-auto bg-white p-6 rounded shadow" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">Ajouter un Produit</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Nom du Produit</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Prix</label>
        <input
          type="number"
          className="w-full p-2 border rounded"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Quantité</label>
        <input
          type="number"
          className="w-full p-2 border rounded"
          value={productQuantity}
          onChange={(e) => setProductQuantity(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Ajouter
      </button>
    </form>
  );
}

export default AddProduct;