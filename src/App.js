import React, { useState } from 'react';
import Header from './components/Header';
import BilheteForm from './components/BilheteForm';
import Sorteio from './components/Sorteio';
import Conferencia from './components/Conferencia';

function App() {
  const [bilhetes, setBilhetes] = useState([]);
  const [bilhetePremiado, setBilhetePremiado] = useState([]);

  return (
    <div className="App">
      <Header />
      <BilheteForm onGenerate={(bilhetesGerados) => {
        setBilhetes(bilhetesGerados);
        setBilhetePremiado([]); // Limpa o bilhete premiado ao gerar novos bilhetes
      }} />
      {bilhetes.length > 0 && (
        <div className="p-4">
          <h2 className="text-xl mb-4">Bilhetes Gerados</h2>
          <ul>
            {bilhetes.map((bilhete, index) => (
              <li key={index} className="mb-2">
                Bilhete {index + 1}: {bilhete.join(', ')}
              </li>
            ))}
          </ul>
        </div>
      )}
      <Sorteio onSorteio={(premiado) => setBilhetePremiado(premiado)} />
      {bilhetePremiado.length > 0 && (
        <div className="p-4">
          <h2 className="text-xl mb-4">Bilhete Premiado</h2>
          <ul>
            <li className="mb-2">{bilhetePremiado.join(', ')}</li>
          </ul>
        </div>
      )}
      {bilhetes.length > 0 && bilhetePremiado.length > 0 && (
        <Conferencia bilhetes={bilhetes} bilhetePremiado={bilhetePremiado} />
      )}
    </div>
  );
}

export default App;