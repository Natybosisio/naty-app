import './App.css';
import NavBar from  './components/NavBar/NavBar';
import React from "react";
import ItemListContainer from './container/ItemListContainer';
import ItemCount from './container/ItemCount';
import ItemList from './container/ItemList';


const App = () => {
 
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Tenemos estas ofertas para vos"}/>
      <header className="App-header">
      <ItemList/>
      <ItemCount stock="5" initial="1" />
      
      </header>
    </div>
  );
}

export default App;
