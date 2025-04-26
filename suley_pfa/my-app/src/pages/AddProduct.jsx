import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

function AddProduct() {
  const [formData, setFormData] = useState({
    nom: '',
    prix: '',
    quantite: '',
    imageFile: null, // Fichier image sélectionné
  });
  const [loading, setLoading] = useState(false);

  // Gestion des champs texte
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Gestion du fichier image
  const handleFileChange = (e) => {
    setFormData({ ...formData, imageFile: e.target.files[0] });
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation des champs obligatoires
    if (!formData.nom || !formData.prix || !formData.quantite) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    setLoading(true);

    try {
      // Upload de l'image dans Supabase Storage (si une image est sélectionnée)
      if (formData.imageFile) {
        const uniqueFileName = `${Date.now()}-${formData.imageFile.name}`;
        const { error: uploadError } = await supabase.storage
          .from('images') // Assurez-vous d'avoir un bucket "images" dans Supabase
          .upload(uniqueFileName, formData.imageFile);

        if (uploadError) {
          console.error('Erreur lors de l\'upload de l\'image :', uploadError);
          alert('Erreur lors de l\'upload de l\'image.');
          return;
        }
      }

      // Insérer les données du produit dans la table "products" (sans l'image)
      const { error } = await supabase.from('products').insert([
        {
          nom: formData.nom,
          prix: formData.prix,
          quantite: formData.quantite,
        },
      ]);

      if (error) {
        console.error('Erreur lors de l\'ajout du produit :', error);
        alert('Erreur lors de l\'ajout du produit.');
      } else {
        alert('Produit ajouté avec succès !');
        setFormData({
          nom: '',
          prix: '',
          quantite: '',
          imageFile: null,
        });
      }
    } catch (err) {
      console.error('Erreur inattendue :', err);
      alert('Une erreur inattendue s\'est produite.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h2 className="text-2xl font-bold mb-4">Ajouter un Produit</h2>
      <input
        type="text"
        name="nom"
        placeholder="Nom du produit"
        value={formData.nom}
        onChange={handleChange}
        className="border p-2 rounded mb-4 w-full"
      />
      <input
        type="number"
        name="prix"
        placeholder="Prix"
        value={formData.prix}
        onChange={handleChange}
        className="border p-2 rounded mb-4 w-full"
      />
      <input
        type="number"
        name="quantite"
        placeholder="Quantité"
        value={formData.quantite}
        onChange={handleChange}
        className="border p-2 rounded mb-4 w-full"
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="border p-2 rounded mb-4 w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? 'Ajout en cours...' : 'Ajouter'}
      </button>
    </form>
  );
}

export default AddProduct;