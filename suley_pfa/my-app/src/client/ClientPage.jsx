import { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import Checkout from "./Checkout";
import OrderConfirmation from "./OrderConfirmation";
import Account from "./Account";

export default function ClientPage() {
  const [cart, setCart] = useState([]);
  const [currentView, setCurrentView] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setCurrentView("details");
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]); // Ajoute le produit avec la quantité choisie
  };

  // Exemple de données produits, tu peux les récupérer depuis une API ou un fichier JSON
  const products = [
    {
      id: 1,
      name: "Produit 1",
      price: "49.99",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Produit 2",
      price: "29.99",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Produit 3",
      price: "99.99",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar setView={setCurrentView} />
      <main className="flex-1 container mx-auto p-6">
        {currentView === "home" && <Home products={products} addToCart={addToCart} />}
        {currentView === "details" && selectedProduct && (
          <ProductDetails product={selectedProduct} setView={setCurrentView} />
        )}
        {currentView === "cart" && <Cart setView={setCurrentView} cart={cart} />}
        {currentView === "checkout" && <Checkout setView={setCurrentView} />}
        {currentView === "order" && <OrderConfirmation />}
        {currentView === "account" && <Account />}
      </main>
    </div>
  );
}
