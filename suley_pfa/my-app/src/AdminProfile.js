import React from 'react';

function AdminProfile({ admin, closeInfo }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Informations de l'Admin</h2>
        <p className="mb-2">
          <strong>Nom :</strong> {admin.name}
        </p>
        <p className="mb-2">
          <strong>Email :</strong> {admin.email}
        </p>
        <p className="mb-4">
          <strong>Mot de passe :</strong> {admin.password}
        </p>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={closeInfo}
        >
          Fermer
        </button>
      </div>
    </div>
  );
}

export default AdminProfile;