import React from 'react';

function ProductList({ products }) {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Liste des Produits</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded shadow p-4">
            <img
              src={product.image || 'https://via.placeholder.com/150'}
              alt={product.name}
              className="w-full h-32 object-cover mb-4"
            />
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p>Prix : {product.price} €</p>
            <p>Quantité : {product.quantity}</p>
            <p>Date Dernier Achat : {product.dateDernierAchat}</p>
            <p>Prédiction Rupture : {product.predictionRupture}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;