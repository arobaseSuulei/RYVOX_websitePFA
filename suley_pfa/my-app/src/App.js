import React, { useState } from 'react';
import Sidebar from './Sidebar';
import AddProduct from './AddProduct';
import ProductList from './ProductList';
import AdminInfo from './AdminInfo'; // Import de la page AdminInfo
import ProfileIcon from './components/ProfileIcon';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('products'); // Default page

  const adminData = {
    name: 'Admin Nom',
    email: 'admin@example.com',
    password: '********', // Masquez le mot de passe pour des raisons de sécurité
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      {isSidebarOpen && (
        <Sidebar
          setCurrentPage={setCurrentPage}
          closeSidebar={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
          <div className="flex items-center">
            <button
              className="text-2xl mr-4"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              ☰
            </button>
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
          </div>
          <ProfileIcon onClick={() => setCurrentPage('adminInfo')} />
        </header>

        {/* Page Content */}
        <main className="p-4">
          {currentPage === 'addProduct' && <AddProduct />}
          {currentPage === 'products' && (
            <ProductList
              products={[
                {
                  id: 1,
                  name: 'Produit 1',
                  price: 100,
                  quantity: 10,
                  image: 'https://via.placeholder.com/150',
                  dateDernierAchat: '25/04/2025',
                  predictionRupture: 'Non calculée',
                },
                {
                  id: 2,
                  name: 'Produit 2',
                  price: 200,
                  quantity: 5,
                  image: null,
                  dateDernierAchat: '24/04/2025',
                  predictionRupture: 'Non calculée',
                },
              ]}
            />
          )}
          {currentPage === 'prediction' && (
            <div className="text-center text-gray-600">
              <h2 className="text-2xl">Prediction de Produit</h2>
              <p>Cette fonctionnalité sera bientôt disponible.</p>
            </div>
          )}
          {currentPage === 'adminInfo' && <AdminInfo admin={adminData} />}
        </main>
      </div>
    </div>
  );
}

export default App;