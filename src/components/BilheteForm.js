import React, { useState } from 'react';
import api from '../services/api';

const BilheteForm = ({ onGenerate }) => {
  const [quantidadeBilhetes, setQuantidadeBilhetes] = useState(1);
  const [quantidadeDezenas, setQuantidadeDezenas] = useState(6);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/?route=bilhete', {
        quantidadeBilhetes,
        quantidadeDezenas,
      });
      onGenerate(response.data.bilhetes);
    } catch (error) {
      console.error('Erro ao gerar bilhetes:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="mb-4">
        <label className="block text-gray-700">Quantidade de Bilhetes:</label>
        <input
          type="number"
          value={quantidadeBilhetes}
          onChange={(e) => setQuantidadeBilhetes(e.target.value)}
          min="1"
          max="50"
          className="border rounded w-full py-2 px-3"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Quantidade de Dezenas:</label>
        <input
          type="number"
          value={quantidadeDezenas}
          onChange={(e) => setQuantidadeDezenas(e.target.value)}
          min="6"
          max="10"
          className="border rounded w-full py-2 px-3"
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Gerar Bilhetes
      </button>
    </form>
  );
};

export default BilheteForm;