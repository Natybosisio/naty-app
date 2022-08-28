import './App.css';
import NavBar from  './components/NavBar/NavBar';
import React from "react";
import ItemListContainer from './container/ItemListContainer';
import ItemCount from './container/ItemCount';

const App = () => {
 
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a Maca Joyas"}/>
      <header className="App-header">
      <ItemCount stock="5" initial="1" />
      
      </header>
    </div>
  );
}

export default App;
