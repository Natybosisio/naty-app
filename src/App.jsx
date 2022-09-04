import './App.css';
import NavBar from  './components/NavBar/NavBar';
import React from "react";
import ItemListContainer from './container/ItemListContainer';
import ItemList from './container/ItemList';
import ItemDetailContainer from './container/ItemDetailContainer';


const App = () => {
 
  return (
    <div className="App">
      <NavBar/>
      <ItemDetailContainer/>
      <ItemListContainer greeting={"Tenemos estas ofertas para vos"}/>
      <header className="App-header">
      <ItemList/>
      
      
      
      </header>
    </div>
  );
}

export default App;


// const ListCardComponent = ({productos, setCarrito, carrito}) => {
//   return (
//       <>
//           {productos.map((producto, index) => {
//               return (
//                   <div key={index}>
//                       <h3>{producto.title}</h3>
//                       <img src={producto.thumbnail} alt="" />
//                       <div>
//                           <button onClick={() => {
//                               setCarrito([...carrito, producto]);
//                           }}>
//                               Agregar al carrito
//                           </button>
//                       </div>
//                   </div>
//               )
//           })}
//       </>
//   )
// }
