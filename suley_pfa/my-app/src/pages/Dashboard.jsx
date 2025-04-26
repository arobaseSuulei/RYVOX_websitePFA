import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from('products').select('*');
      if (error) console.error(error);
      else setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Produits</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img
              src={`https://<supabase-url>/storage/v1/object/public/images/${product.imageName}`}
              alt={product.nom}
              className="w-full h-40 object-cover mb-4"
            />
            <h3 className="text-lg font-bold">{product.nom}</h3>
            <p>Prix: {product.prix} €</p>
            <p>Quantité: {product.quantite}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;