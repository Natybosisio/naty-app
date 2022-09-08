import './App.css';
import NavBar from  './components/NavBar/NavBar';
import React from "react";
import ItemListContainer from './container/ItemListContainer';
import ItemList from './container/ItemList';
import ItemDetailContainer from './container/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
 
  return (
    
    <div className="App ">
    
    <BrowserRouter>
    <NavBar/>
    <div className='listaCategory'>
    <ItemListContainer greeting={"Categorias - productos"} />
    </div>
      <Routes>
        <Route path='/' element={<ItemList/>}/>
        <Route path='/producto' element={<ItemDetailContainer/>}/>
        
        
     
            
    </Routes>
    </BrowserRouter>
    
  </div>
  );
}

export default App;

