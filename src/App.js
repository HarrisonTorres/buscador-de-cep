import {AiOutlineSearch} from "react-icons/ai";
import './style.css'
import api from "./apis/api";
import { useState } from "react";


//https://viacep.com.br/ws/06233053/json/


function App() {

  const [input, setInput] = useState('')

  const [cep, setCep] = useState({})

  async function Search(){
    if(input === ''){
      alert("Nada foi digitado")
      return;
    }
    try{
      const response = await api.get(input+'/json');

      setCep(response.data)
      setInput('')
    }catch{
      alert("CEP invalido: tente novamente");
      setInput('')
    }
  }

  document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
    
        var btn = document.querySelector("#submit");
      
      btn.click();
    }
  });
  return (
    <div className="container"> 
        <h1 className="title">Buscador de CEP</h1>
        <div className="container-input">
          <input 
          className="input" 
          placeholder="Digite numero de CEP..." 
          value={input}
          onChange={(evento) => setInput(evento.target.value)}>
          </input>
          <button className="button-cep" id="submit" onClick={Search}><AiOutlineSearch className="icon"></AiOutlineSearch></button>
        </div>

      <main className="container-info">
        <h2>CEP: {cep.cep}</h2>        
        <span>Rua: {cep.logradouro}</span>
        <span>bairro: {cep.bairro}</span>
        <span>Cidde: {cep.localidade}</span>
        <span>UF: {cep.uf}</span>
      </main>
      <div className="footer">
        <h4>Criado por <a href="https://www.instagram.com/dev_harris_web/">@dev_harris_dev</a></h4>
      </div>
    </div>
  );
}

export default App;
