import './App.css';
import NavBar from  './components/NavBar/NavBar';
import React from "react";
import ItemListContainer from './container/ItemListContainer';


const App = () => {
  const persona = {nombre: "naty", descripcion: "este es mi primer proyecto con React"};
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos a Maca Joyas"/>
      <header className="App-header">
        <p>
        Soy {persona.nombre} y {persona.descripcion}
        </p>
        
      </header>
    </div>
  );
}

export default App;
