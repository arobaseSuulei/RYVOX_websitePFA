import { FaUserCircle } from "react-icons/fa";

export default function Sidebar({ onAdminClick, setView }) {
  return (
    <div className="w-48 h-screen bg-cyan-700 flex flex-col items-center py-6 space-y-6">
      <button onClick={onAdminClick} className="text-white">
        <FaUserCircle size={40} className="mb-4" />
      </button>

      <button onClick={() => setView("add")} className="text-cyan-200 hover:text-teal-100 text-sm">
        Ajouter Produit
      </button>

      <button onClick={() => setView("list")} className="text-cyan-200 hover:text-teal-100 text-sm">
        Affichage Produits
      </button>

      <button onClick={() => setView("prediction")} className="text-cyan-200 hover:text-teal-100 text-sm">
        Voir Prédiction
      </button>
    </div>
  );
}
