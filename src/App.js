import logo from './logo.svg';
import './App.css';
import { MiComponente } from './components/MiComponente';
import { PruebaCustom } from './components/PruebaCustom';
import { MiFormulario } from './components/MiFormulario';
import { MiUsuario } from './components/MiUsuario';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <MiComponente /
        <PruebaCustom /> */}
        {/* <MiFormulario /> */}
        <MiUsuario />
      </header>
    </div>
  );
}

export default App;
