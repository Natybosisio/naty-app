import './App.css';
import NavBar from './components/NavBar/NavBar';
import React from "react";
import ItemListContainer from './container/ItemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InicioSesion from './components/inicioSesion';
import Registrate from './components/registrate';
import Footer from './components/footer';
import CartContext from './context/CartContex';
import { CarritoProviader } from './context/CartContex'

const App = () => {

  return (

    <div className="App ">

      <BrowserRouter>

        <CartContext.Provider value={[]}>
        <CarritoProviader>
          <NavBar />

          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/producto/' element={<ItemDetailContainer />} />
            <Route path='/producto/:itemId' element={<ItemDetailContainer />} />
            <Route path='/category/:category_ID' element={<ItemListContainer />} />
            <Route path='/category/:category_ID/producto/:itemId' element={<ItemDetailContainer />}/>
            <Route path='inicioSesion/' element={<InicioSesion />} />
            <Route path='registrate/' element={<Registrate />} />
          </Routes>
          </CarritoProviader>
        </CartContext.Provider>


        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

