export default function OrderConfirmation() {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Confirmation de la commande</h2>
        <p className="mb-4">Merci pour votre achat !</p>
        <h3 className="text-xl font-semibold mb-4">Facture</h3>
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
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>1700 MAD</span>
        </div>
  
        <div className="mt-6">
          <button
            onClick={() => alert("Commande terminée. Merci !")}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }
  