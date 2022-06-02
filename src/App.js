import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';



// import api from './services/api';

import './style.css';




function App() {
const [input, setInput] = useState('')

async function handleSearch(){
  if(input === ''){
    alert('Preencha algum CEP!')
    return
  }

  // try {
  //   const response = await api.get(`${input}/json`)
  //   console.log(response)
  // } catch{
  //   alert('Ops, erro ao buscar!!')
  // }
}

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
      <div className="containerIpt">
        <input type="text" placeholder="Digite o CEP..." value={input} onChange={(e) => setInput(e.target.value) }></input>
        <button className="btnSearch" onClick={handleSearch}>
          <FiSearch size={30} color="#FFF"/>
        </button>
      </div>
        <main className="main">
          <h2>CEP: 79010400</h2>
          <span>Avenida Monte Castelo</span>
          <span>Complemento Alguma Coisa</span>
          <span>Bairro Monte Castelo</span>
          <span>Campo Grande - MS</span>
        </main>
    </div>
  );
}

export default App;
