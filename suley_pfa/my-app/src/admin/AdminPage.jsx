import { useState } from "react";
import Sidebar from "./sidebar";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
import PredictionView from "./PredictionView";
import AdminInfo from "./AdminInfo";

export default function AdminPage() {
  const [currentView, setCurrentView] = useState("list");
  const [products, setProducts] = useState([]);
  const [showAdmin, setShowAdmin] = useState(false);

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
    setCurrentView("list");
  };

  return (
    <div className="flex h-screen">
      <Sidebar 
        onAdminClick={() => { setShowAdmin(true); setCurrentView(null); }}
        setView={(view) => { setCurrentView(view); setShowAdmin(false); }}
      />
      <div className="flex-1 flex flex-col">
        {/* Titre en haut */}
        <div className="bg-cyan-900 p-4 text-teal-50 font-bold shadow">
          Interface Admin
        </div>

        {/* Le contenu */}
        <div className="flex-1 overflow-y-auto">
          {showAdmin && <AdminInfo />}
          {!showAdmin && currentView === "list" && <ProductList products={products} />}
          {!showAdmin && currentView === "add" && <AddProduct onAdd={handleAddProduct} />}
          {!showAdmin && currentView === "prediction" && <PredictionView />}
        </div>
      </div>
    </div>
  );
}
