import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

// Client Supabase à mettre dans un fichier à part si réutilisé
const supabase = createClient(
    "https://qghfqtwxswaxuzlypcel.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnaGZxdHd4c3dheHV6bHlwY2VsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1Nzk3MDcsImV4cCI6MjA2MTE1NTcwN30.ynKu61Ic8FlvVv3vmXYeWGvLfx3F0SX6UtZ7pm5xJ0Q"
);

export default function Cards() {
    const [produits, setProduits] = useState([]);

    useEffect(() => {
        getProduits();
    }, []);

    async function getProduits() {
        try {
            const { data, error } = await supabase.from("produit").select("*");
            if (error) {
                console.error("Erreur de récupération :", error);
            } else {
                setProduits(data);
                console.log("Produits récupérés :", data);
            }
        } catch (err) {
            console.error("Erreur inattendue :", err);
        }
    }

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
            {produits.length === 0 ? (
                <p className="text-center col-span-full text-gray-500">Aucun produit trouvé</p>
            ) : (
                produits.map((produit) => (
                    <div
                        key={produit.id}
                        className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-200"
                    >
                        <img
                            src={produit.imageUrl}
                            alt={produit.nom}
                            className="w-full h-36 object-cover rounded-t-xl"
                        />
                        <div className="p-3">
                            <h2 className="text-sm font-medium text-gray-800 truncate">{produit.nom}</h2>
                            <p className="text-xs text-gray-500 line-clamp-2 mb-2">{produit.description}</p>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-semibold text-green-600">{produit.prix} €</span>
                                <button className="text-xs text-blue-600 hover:underline">Ajouter</button>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>

    );
}
