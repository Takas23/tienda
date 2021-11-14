import { Fragment, useState } from 'react';
import './App.css';
import Changuito from './components/Changuito';
import Header from './components/Header';
import Producto from './components/Producto'


function App() {

  const [productos, guardarProductos] = useState ([
    {id:1, articulo:"Nordica", precio: 2000, imagen:"https://http2.mlstatic.com/D_NQ_NP_873236-MLA46022399709_052021-O.webp"},
    {id:2, articulo:"Carpeta Beige", precio: 5000, imagen:"https://http2.mlstatic.com/D_NQ_NP_720867-MLA47385396261_092021-O.webp"},
    {id:3, articulo:"Cesped", precio: 1000, imagen:"https://http2.mlstatic.com/D_NQ_NP_772943-MLA45615511805_042021-O.webp"},
    {id:4, articulo:"Persa", precio: 9000, imagen:"https://http2.mlstatic.com/D_NQ_NP_830798-MLA43947686337_102020-O.webp"},
    {id:5, articulo:"Magica", precio: 0.99, imagen:"https://http2.mlstatic.com/D_NQ_NP_921589-MLA46850013236_072021-O.webp"},
  ]);

  const [changuitoProd, agregarChanguito] = useState([]); 
 

  return (
    <Fragment>
      <Header/>

      <div className="pt-5 mt-5" >
          {productos.map(p => 
            (
              <Producto 
                key = {p.id}
                producto = {p}
                productos = {productos}
                agregarChanguito = {agregarChanguito}
                changuitoProd = {changuitoProd}
                imagen = {p.imagen}
              />
            )
          )}
      </div>

    <Changuito
      changuitoProd = {changuitoProd}
      agregarChanguito = {agregarChanguito}
    />

    </Fragment>
  );
}

export default App;
