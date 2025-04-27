import React from 'react';

function Account() {
  const user = { name: 'Client1', email: 'Client1@123.com', address: '123 Rue ABC, Casablanca' };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Mon Compte</h2>
      <div className="space-y-4">
        <p><strong>Nom:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Adresse:</strong> {user.address}</p>
      </div>
    </div>
  );
}

export default Account;
