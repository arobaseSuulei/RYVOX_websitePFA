import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export default function ProductDetails({ product, setView }) {
  const [reviewText, setReviewText] = useState('');
  const [reviews, setReviews] = useState([
    { id: 1, text: 'Super produit !', rating: 5 },
    { id: 2, text: 'Bien mais peut mieux faire', rating: 4 },
  ]);

  const handleAddReview = () => {
    if (reviewText.trim() === '') return; // Evite d'ajouter un avis vide
    const newReview = {
      id: reviews.length + 1,
      text: reviewText,
      rating: 5, // Tu peux rendre le rating dynamique (via des étoiles, par exemple)
    };
    setReviews([...reviews, newReview]);
    setReviewText('');
  };

  return (
    <div className="container mx-auto p-6">
      <button
        className="text-blue-500"
        onClick={() => setView('home')}
      >
        Retour à l'accueil
      </button>

      <div className="flex flex-col md:flex-row items-center mt-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-auto object-cover"
        />
        <div className="md:ml-8 mt-4 md:mt-0">
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="text-xl mt-2">{product.price} MAD</p>
          <p className="text-gray-600 mt-4">{product.description}</p>

          <div className="mt-4">
            <h3 className="text-xl font-semibold">Avis :</h3>
            <div>
              {reviews.length > 0 ? (
                reviews.map((review) => (
                  <div key={review.id} className="border-b py-2">
                    <div className="flex items-center">
                      {[...Array(review.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-500" />
                      ))}
                    </div>
                    <p>{review.text}</p>
                  </div>
                ))
              ) : (
                <p>Aucun avis pour ce produit pour l'instant.</p>
              )}
            </div>

            <div className="mt-6">
              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Ajouter un avis..."
                className="w-full p-2 border border-gray-300 rounded-lg"
                rows="4"
              />
              <button
                onClick={handleAddReview}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Ajouter un avis
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
