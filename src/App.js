import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import api from './services/api';



// import api from './services/api';

import './style.css';




function App() {
const [input, setInput] = useState('')
const [respCep, setCep] = useState({})

async function handleSearch(){
  if(input === ''){
    alert('Preencha algum CEP!')
    return
  }

  try {
    const resp = await api.get(`${input}/json`)
    setCep(resp.data)
    setInput('')
  } 
  catch (error) {
    alert('Ops, erro ao buscar, tente novamente!')
    setInput('')
  }


  
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
      {Object.keys(respCep).length > 0 &&(
        <main className="main">
          <h2>{respCep.cep}</h2>
          <span>{respCep.logradouro}</span>
          <span>{respCep.complemento}</span>
          <span>{respCep.bairro}</span>
          <span>{respCep.localidade} {respCep.uf}</span>
        </main>
      )}
    </div>
  );
}

export default App;
