import React from 'react';

function AdminInfo({ admin }) {
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
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
    </div>
  );
}

export default AdminInfo;