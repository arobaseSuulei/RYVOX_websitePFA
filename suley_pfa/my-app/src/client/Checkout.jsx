export default function Checkout({ setView }) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Détails de la commande</h2>
        <div className="space-y-4 mb-6">
          <div className="flex justify-between">
            <span>Ordinateur Portable</span>
            <span>1000 MAD</span>
          </div>
          <div className="flex justify-between">
            <span>Smartphone</span>
            <span>700 MAD</span>
          </div>
        </div>
  
        <div className="mb-6">
          <input
            type="text"
            placeholder="Adresse de livraison"
            className="w-full p-2 border rounded mb-4"
          />
          <input
            type="text"
            placeholder="Numéro de téléphone"
            className="w-full p-2 border rounded"
          />
        </div>
  
        <div className="flex justify-between items-center">
          <button
            onClick={() => alert("Commande validée !")}
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
          >
            Valider la commande
          </button>
          <button
            onClick={() => setView("cart")}
            className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
          >
            Retour au panier
          </button>
        </div>
      </div>
    );
  }
  