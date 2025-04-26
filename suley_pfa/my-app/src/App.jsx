import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import AddProduct from './pages/AddProduct';
import Prediction from './pages/Prediction';
import ProductList from './pages/ProductList';
import AdminInfo from './pages/AdminInfo';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <Header setIsSidebarOpen={setIsSidebarOpen} />
          <div className="p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/add-product" element={<AddProduct />} />
              <Route path="/prediction" element={<Prediction />} />
              <Route path="/product-list" element={<ProductList />} />
              <Route path="/admin-info" element={<AdminInfo />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;