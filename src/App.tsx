import React, { useState, ChangeEvent, useEffect } from 'react';

import './styles.css';

interface IRequest {
  localidade: string;
  uf: string;
}

function App() {
 
  const [data, setData] = useState<IRequest>();
  const [cod, setCod] = useState<number>();
  
  useEffect(() => {
    fetch(`https://viacep.com.br/ws/${cod}/json/`)
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
  }, [cod]);
  

  function handleInputCod(event: ChangeEvent<HTMLInputElement>) {
    const cod = event.target.value;

    setCod(Number(cod));
  }


  return (
    <div className="wrapper-container">
      <div className="content-container">
        <span>Código postal</span>
        <input type="text" placeholder="Ex: 62940000" onChange={handleInputCod} value={cod} />
           
        <div className="group">
          
          <label>Cidade
            <div className="content">
              {data?.localidade}
            </div>
          </label>
          
          <label>UF
            <div className="content">
              {data?.uf}
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
