import React from 'react';

function Header({ setIsSidebarOpen }) {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <button
        className="text-2xl"
        onClick={() => setIsSidebarOpen((prev) => !prev)}
      >
        ☰
      </button>
      <h1 className="text-xl font-bold">Interface Admin</h1>
      <div className="flex items-center">
        
        <img
          src="./images/iconepersonne.jpg"
          alt="Admin Icon"
          className="rounded-full"
        />
      </div>
    </header>
  );
}

export default Header;