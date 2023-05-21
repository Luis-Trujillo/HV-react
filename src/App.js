//==========IMPORTACIONES NECESARIAS PARA EL FUNCIONAMIENTO===========
import './App.css';
//Se importan componetes
import { Header } from './components/header';
//Se importan estilos
import './components/header/styles/header.css';

function App() {
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
