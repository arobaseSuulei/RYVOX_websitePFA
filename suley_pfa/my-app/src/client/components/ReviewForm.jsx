import React, { useState } from 'react';

function ReviewForm({ productId }) {
  const [review, setReview] = useState('');

  const handleSubmit = () => {
    // Ici tu peux intégrer un appel API pour soumettre l'avis
    alert(`Avis soumis pour le produit ${productId}: ${review}`);
  };

  return (
    <div className="space-y-4">
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        className="w-full p-2 border rounded-lg"
        placeholder="Laissez un avis..."
      />
      <button onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-4 rounded">Soumettre l'avis</button>
    </div>
  );
}

export default ReviewForm;
