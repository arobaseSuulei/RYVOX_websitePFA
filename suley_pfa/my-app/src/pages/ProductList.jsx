import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importer le hook pour la navigation

function ProductList() {
  const navigate = useNavigate(); // Initialiser la navigation

  // Exemple de données statiques pour les produits
  const [products, setProducts] = useState([
    { id: 1, nom: 'Produit 1', prix: 10, quantite: 5 },
    { id: 2, nom: 'Produit 2', prix: 20, quantite: 3 },
    { id: 3, nom: 'Produit 3', prix: 15, quantite: 8 },
  ]);

  // Fonction pour supprimer un produit
  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Voulez-vous vraiment supprimer ce produit ?');
    if (confirmDelete) {
      setProducts(products.filter((product) => product.id !== id));
    }
  };

  // Fonction pour modifier un produit (placeholder)
  const handleEdit = (id) => {
    alert(`Modifier le produit avec l'ID : ${id}`);
  };

  return (
    <div className="p-6">
      {/* Icône pour accéder aux informations de l'admin */}
      <div className="flex justify-end mb-4">
        <button onClick={() => navigate('/admin-info')} className="text-blue-500">
          <img
            src="/images/iconepersonne.png" // Chemin relatif vers l'image
            alt="Icône Admin"
            className="w-10 h-10 rounded-full" // Styles pour l'image
          />
        </button>
      </div>

      <h2 className="text-2xl font-bold mb-4">Liste des Produits</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <h3 className="text-lg font-bold">{product.nom}</h3>
            <p>Prix : {product.prix} €</p>
            <p>Quantité : {product.quantite}</p>
            <div className="flex justify-between mt-4">
              <button
                className="bg-yellow-500 text-white px-2 py-1 rounded"
                onClick={() => handleEdit(product.id)}
              >
                Modifier
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => handleDelete(product.id)}
              >
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;