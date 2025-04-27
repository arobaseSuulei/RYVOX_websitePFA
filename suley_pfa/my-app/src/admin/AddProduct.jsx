import { useState } from "react";

export default function AddProduct({ onAdd }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && price && quantity && image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onAdd({ name, price, quantity, image: reader.result, lastPurchase: "N/A" });
      };
      reader.readAsDataURL(image);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
      <input type="text" placeholder="Nom du produit" value={name} onChange={(e) => setName(e.target.value)} className="border p-2 rounded" />
      <input type="number" placeholder="Prix" value={price} onChange={(e) => setPrice(e.target.value)} className="border p-2 rounded" />
      <input type="number" placeholder="Quantité" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="border p-2 rounded" />
      <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} className="border  p-2 rounded" />
      <button type="submit" className="bg-cyan-800 text-teal-100 px-4 py-2 text-sm rounded hover:bg-sky-500 w-32">Ajouter</button>
    </form>
  );
}
