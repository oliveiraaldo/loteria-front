import React from 'react';
import api from '../services/api';

const Sorteio = ({ onSorteio }) => {
  const handleSorteio = async () => {
    try {
      const response = await api.get('/?route=sorteio');
      onSorteio(response.data.bilhetePremiado);
    } catch (error) {
      console.error('Erro ao realizar sorteio:', error);
    }
  };

  return (
    <div className="p-4">
      <button onClick={handleSorteio} className="bg-green-600 text-white px-4 py-2 rounded">
        Realizar Sorteio
      </button>
    </div>
  );
};

export default Sorteio;