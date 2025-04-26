import React from 'react';

function AdminInfo() {
  const adminData = {
    nom: 'Admin Nom',
    email: 'admin@example.com',
    motdepasse: '********', // Vous pouvez masquer le mot de passe
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Informations de l'Admin</h2>
      <div className="border p-4 rounded shadow">
        <p><strong>Nom :</strong> {adminData.nom}</p>
        <p><strong>Email :</strong> {adminData.email}</p>
        <p><strong>Mot de passe :</strong> {adminData.motdepasse}</p>
      </div>
    </div>
  );
}

export default AdminInfo;