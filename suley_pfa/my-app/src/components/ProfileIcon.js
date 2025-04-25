import React from 'react';

function ProfileIcon({ onClick }) {
  return (
    <button
      className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300 hover:border-blue-500 focus:outline-none"
      onClick={onClick}
    >
      
    </button>
  );
}

export default ProfileIcon;