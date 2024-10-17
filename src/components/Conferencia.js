import React from 'react';

const Conferencia = ({ bilhetes, bilhetePremiado }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Conferência dos Bilhetes</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Bilhete</th>
            <th className="py-2">Dezenas</th>
          </tr>
        </thead>
        <tbody>
          {bilhetes.map((bilhete, index) => (
            <tr key={index} className="bg-gray-100">
              <td className="border px-4 py-2">Bilhete {index + 1}</td>
              <td className="border px-4 py-2">
                {bilhete.map((numero) => (
                  <span
                    key={numero}
                    className={bilhetePremiado.includes(numero) ? 'font-bold text-green-600' : ''}
                  >
                    {numero}
                  </span>
                )).reduce((prev, curr) => [prev, ', ', curr])}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Conferencia;