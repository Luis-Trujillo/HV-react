//==========IMPORTACIONES NECESARIAS PARA EL FUNCIONAMIENTO===========
import './App.css';
//Se importan componetes
import { Header } from './components/header';
import { Main } from './components/main';
import { Footer } from './components/footer';
//Se importan estilos
import './components/header/styles/header.css';
import './components/main/styles/main.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
