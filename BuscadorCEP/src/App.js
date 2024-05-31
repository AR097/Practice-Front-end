import { useState } from 'react';
import{FiSearch} from 'react-icons/fi';
import './styles.css';

import api from './services/api';

function App() {

  const[input, setInput]= useState('')
  const[cep, setCep] = useState({});

    async function handleSearch(){
      //01001000/json/

      if(input === ''){
        alert("Por favor, preencha o campo CEP.")
        return;
      }

      try{
        const response =  await api.get(`${input}/json`);
        setCep(response.data)
        setInput("");
      }catch{
        alert("Algo deu errado. Favor tentar novamente.");
        setInput("")
      }
    }

    return (
    <div className="container">
      <h1 className="title"> Buscador de CEP </h1>

      <div className="ContainerInput"> 
      <input
      type="text"
      placeholder="Digite seu CEP ..."
      value={input}
      onChange={(e) => setInput(e.target.value) }
      />

      <button className="buttonSearch" onClick={handleSearch}>
        <FiSearch size={25} color='FFF'/>
      </button>
      </div>

      {Object.keys(cep).length > 1 && (

        <main className='main'>
          <h2> CEP: {cep.cep}</h2>
          <span> Rua: {cep.logradouro}</span>
          <span> Complemento: {cep.complemento}</span>
          <span> Bairro: {cep.bairro}</span>
          <span> Cidade: {cep.localidade} - {cep.uf}</span>
        </main>
      )}
      {(() => {
        if (Object.keys(cep).length === 1) {
          return (
            <div>
              {alert("Ops! Erro ao buscar!")}
            </div>
          );
        }
      })()}

    </div>
  );
}
export default App;