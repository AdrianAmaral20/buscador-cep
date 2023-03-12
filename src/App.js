import { FiSearch } from 'react-icons/fi';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input type="text" placeholder="Digite seu CEP..." />
        <button className="buttonSearch">
          <FiSearch size={25} color="#fff" />
        </button>
      </div>

      <main className="main">
        <h2>CEP: </h2>
        <span>Rua </span>
        <span>Complemento: alugmgasjd</span>
        <span>Vila Rosa</span>
        <span>Campo grande - ms</span>
      </main>
    </div>
  );
}

export default App;
