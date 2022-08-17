import logo from './logo.svg';
import './App.css';
import NavBar from  './components/NavBar';

const App = () => {
  const persona = {nombre: "naty", descripcion: "este es mi primer proyecto con React"};
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Soy {persona.nombre} y {persona.descripcion}
        </p>
        <a className="App-link"    href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
